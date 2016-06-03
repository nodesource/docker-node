#!/usr/bin/env bash

# When something returns an error code, abort the script
set -e

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

######################
# Define Global Vars #
######################

get_docker_tags="$DIR/get_releases/get_docker_releases.js"

###########################
# Define Helper Functions #
###########################

# error is used to print a message to stderr followed by instructions on how
# to use this script. It then exits the application with an error code
error () {
  echo "$1" 1>&2
  help
  exit 1
}

# help simply prints the instructions for using this script
help () {
  echo "USAGE: ./get_releases.sh DIST" 1>&2
  echo "" 1>&2
  echo "  This script gathers supported releases from the NodeSource" 1>&2
  echo "  Node.js binary distributions and cross references them against" 1>&2
  echo "  the image tags supported by Docker Hub." 1>&2
  echo "" 1>&2
  echo "  DIST determines which Linux OS Distribution we are gathering" 1>&2
  echo "  supported releases of, and can be one of the following:" 1>&2
  echo "    - fedora" 1>&2
  echo "    - centos" 1>&2
  echo "    - debian" 1>&2
  echo "    - ubuntu" 1>&2
  echo "" 1>&2
}

#########################################
# Define Logic Functions For NodeSource #
#########################################

# Note: for all of the following distributions, we leave out checking iojs.
# This is for two reasons:
#   1) It simplifies logic
#   2) The iojs repos didn't introduce any new releases

# NodeSource Debian Based Distributions
# Note: this lumps Ubuntu and Debian into the same group. This is safe because
# none of the release names overlap
get_ns_deb () {
  URLS=(
    "https://deb.nodesource.com/node/pool/main/n/nodejs/"
    "https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/"
    "https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/"
    "https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/"
    "https://deb.nodesource.com/node_6.x/pool/main/n/nodejs/"
  )

  DISTS=$(
  for url in ${URLS[@]}; do
    curl ${url} 2>/dev/null \
      | grep -o ">nodejs_.*1nodesource1~.*\.deb" \
      | sed 's/>nodejs_.*-1nodesource1~//' \
      | sed 's/1.*deb//'
  done
  )

  echo "$DISTS" | sort | uniq
}

# NodeSource Fedora Based Distributions
get_ns_fedora () {
  URLS=(
    "https://rpm.nodesource.com/pub/fc/"
    "https://rpm.nodesource.com/pub_0.12/fc/"
    "https://rpm.nodesource.com/pub_4.x/fc/"
    "https://rpm.nodesource.com/pub_5.x/fc/"
    "https://rpm.nodesource.com/pub_6.x/fc/"
  )

  DISTS=$(
  for url in "${URLS[@]}"; do
    curl ${url} 2>/dev/null \
      | grep -o '>[0-9][0-9]' \
      | sed 's/>//'
  done
  )

  echo "$DISTS" | sort | uniq
}

# NodeSource Centos Based Distributions
get_ns_centos () {
  URLS=(
    "https://rpm.nodesource.com/pub/el/"
    "https://rpm.nodesource.com/pub_0.12/el/"
    "https://rpm.nodesource.com/pub_4.x/el/"
    "https://rpm.nodesource.com/pub_5.x/el/"
    "https://rpm.nodesource.com/pub_6.x/el/"
  )

  DISTS=$(
  for url in "${URLS[@]}"; do
    curl ${url} 2>/dev/null \
      | grep -o '>[0-9]' \
      | sed 's/>//'
  done
  )

  echo "$DISTS" | sort | uniq
}

# Compare two lists to find common strings
comp () {
  COMMON=""
  for ns in $1; do
    for docker in $2; do
      if [ "$ns" == "$docker" ]; then
        COMMON="$COMMON $ns"
      fi
    done
  done

  # Remove the first space of the string and return the list
  echo "$COMMON" | sed 's/^ //'
}

############################
# Begin Main Program Logic #
############################

# Ensure we were passed 1 arguments
if [ "$#" -ne 1 ]; then
  error "Invalid number of arguments"
fi

# Determine which distribution we are being asked about
case "$1" in
  fedora)
    NS=$(get_ns_fedora)
    DOCKER=$($get_docker_tags fedora)
    TAGS=$(comp "$NS" "$DOCKER")
    echo $TAGS
    ;;
  centos)
    NS=$(get_ns_centos)
    DOCKER=$($get_docker_tags centos)
    TAGS=$(comp "$NS" "$DOCKER")
    echo $TAGS
    ;;
  debian)
    NS=$(get_ns_deb)
    DOCKER=$($get_docker_tags debian)
    TAGS=$(comp "$NS" "$DOCKER")
    echo $TAGS
    ;;
  ubuntu)
    NS=$(get_ns_deb)
    DOCKER=$($get_docker_tags ubuntu)
    TAGS=$(comp "$NS" "$DOCKER")
    echo $TAGS
    ;;
  *)
    error "Invalid distribution name"
esac

# Return success if we didn't encounter an error
exit 0

