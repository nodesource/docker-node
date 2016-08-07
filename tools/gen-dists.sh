#!/usr/bin/env bash

##################
# Get Script Dir #
##################

# Here we are going to get the directory this script lives in, allowing us to
# find other scripts in this directory that we depend on. This method is
# resiliant to softlinking.

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

# $DIR now contains the directory this script lives in

#########################
# Create Temp Directory #
#########################

# This will be used to cache lists generated from slow web requests
rm -rf "$DIR/gen_dists"
mkdir -p "$DIR/gen_dists"

#######################
# Setup File Contents #
#######################

echo "var dists = module.exports = []"

###################
# Generate Header #
###################

ALL_DISTS=(
  "debian"
  "ubuntu"
  "fedora"
  "centos"
)

# Check each URL for each distribution
for DIST in ${ALL_DISTS[@]}; do
  # Create a map for the distribution in our file
  echo "dists['$DIST'] = []"
  # Fetch the list of releases supported by both NodeSource and Docker
  RELEASES="$($DIR/get_releases.sh $DIST)"
  # Cache the list to avoid multiple http requests
  echo "$RELEASES" > "$DIR/gen_dists/${DIST}_release"
  # Iterate through each release and create a map for it in our file
  for RELEASE in $RELEASES; do
    # Discontinued releases
    if [[ "$RELEASE" == "lucid" || \
          "$RELEASE" == "saucy" || \
          "$RELEASE" == "utopic" ]]; then
      continue
    fi
    echo "dists['$DIST']['$RELEASE'] = []"
    echo "dists['$DIST']['$RELEASE'] = []"
    echo "dists['$DIST']['$RELEASE']['node'] = []"
    echo "dists['$DIST']['$RELEASE']['iojs'] = []"
  done
done

#########################
# Generate .deb Section #
#########################

DEB_DISTS=(
  "debian"
  "ubuntu"
)

# We take the URLs all the way to Node.js 9. So that the script auto-detects
# new repos for the immediate future. Since the numbers are sequential, we
# can eventually have this script compile the list of repos by sequentially
# checking numbers until it reaches a 404.
DEB_URLS=(
  "https://deb.nodesource.com/node/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/"
  "https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/"
  "https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/"
  "https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/"
  "https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_6.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_7.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_8.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_9.x/pool/main/n/nodejs/"
)

for URL in ${DEB_URLS[@]}; do
  # Grab all of the amd64 deb packages from the url
  DEBS=$(curl -L "$URL" 2>/dev/null \
          | grep "amd64.deb" \
          | grep -v "dbg" \
          | sed 's/<a href="//' \
          | sed 's/">.*$//')

  PLATFORM="node"
  if echo "$URL" | grep "iojs" 1>/dev/null; then
    PLATFORM="iojs"
  fi

  # Iterate through each of the releases and check for them in our list of debs
  for DIST in ${DEB_DISTS[@]}; do
    # Load in the cached list of releases
    RELEASES=$(cat "$DIR/gen_dists/${DIST}_release")
    for RELEASE in $RELEASES; do
      # Discontinued releases
      if [[ "$RELEASE" == "lucid" || \
            "$RELEASE" == "saucy" || \
            "$RELEASE" == "utopic" ]]; then
        continue
      fi
      # Check each deb to see if it belongs to this dist/release
      # So many nested loops...
      for DEB in $DEBS; do
        # Get the Node.js version and distribution release of the package
        VERSION=$(echo $DEB | cut -d "-" -f 1 - | cut -d "_" -f 2 -)
        DEB_RELEASE=$(echo $DEB | cut -d "~" -f 2 - | cut -d "1" -f 1 -)
        if [ "$RELEASE" != "$DEB_RELEASE" ]; then
          continue;
        fi
        echo "dists['$DIST']['$RELEASE']['$PLATFORM']['$VERSION'] = {url: '$URL', deb: '$DEB'}"
      done
    done
  done
done

#########################
# Generate .rpm Section #
#########################

EL_URLS=(
  "https://rpm.nodesource.com/pub"
  "https://rpm.nodesource.com/pub_0.12"
  "https://rpm.nodesource.com/pub_iojs_1.x"
  "https://rpm.nodesource.com/pub_iojs_2.x"
  "https://rpm.nodesource.com/pub_iojs_3.x"
  "https://rpm.nodesource.com/pub_4.x"
  "https://rpm.nodesource.com/pub_5.x"
  "https://rpm.nodesource.com/pub_6.x"
  "https://rpm.nodesource.com/pub_7.x"
  "https://rpm.nodesource.com/pub_8.x"
  "https://rpm.nodesource.com/pub_9.x"
)

EL_DISTS=(
  "fedora"
  "centos"
)

for DIST in ${EL_DISTS[@]}; do
  # We use codes to mark distributions in the repo (el and fc)
  DIST_CODE="el"
  if [ $DIST == "fedora" ]; then
    DIST_CODE="fc"
  fi
  # Load in the cached list of releases
  RELEASES=$(cat "$DIR/gen_dists/${DIST}_release")
  for RELEASE in $RELEASES; do
    # For each distribution and release, download it's list of .rpms
    for URL in ${EL_URLS[@]}; do
      # Generate the URL that the files should live in
      DIST_URL="$URL/$DIST_CODE/$RELEASE/x86_64/"

      PLATFORM="node"
      if echo "$URL" | grep "iojs" 1>/dev/null; then
        PLATFORM="iojs"
      fi

      # Query the list of RPMs
      RPMS=$(curl -L "$DIST_URL" 2>/dev/null \
              | grep "nodejs.*rpm\|iojs.*rpm" \
              | grep -v 'debuginfo\|devel\|docs' \
              | sed 's/<a href="//' \
              | sed 's/">.*$//')
      # Iterate over all of the RPMs returned above. If the url 404ed because
      # the folder doesn't exist, we assume it is an invalid release for the
      # Node.js version. In this case, the RPMS array will be empty.
      for RPM in $RPMS; do
        # There are a few files in the repos we need to filter out,less they
        # break our script
        if echo "$RPM" | grep "*-release-*" 1>/dev/null ; then
          continue
        fi

        # Get the Node.js version from the package name
        VERSION=$(echo $RPM | cut -d "-" -f 2)
        echo "dists['$DIST']['$RELEASE']['$PLATFORM']['$VERSION'] = {url: '$DIST_URL', rpm: '$RPM'}"
      done
    done
  done
done

# Cleanup the 
rm -rf "$DIR/gen_dists"
