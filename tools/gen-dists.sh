#!/usr/bin/env bash


#######################
# Setup File Contents #
#######################

FILE="
// Define all supported Distributions, Releases, and Platforms\n
var dists = module.exports = []\n
dists['debian'] = []\n
dists['debian']['wheezy'] = []\n
dists['debian']['wheezy']['node'] = []\n
dists['debian']['wheezy']['iojs'] = []\n
dists['debian']['jessie'] = []\n
dists['debian']['jessie']['node'] = []\n
dists['debian']['jessie']['iojs'] = []\n
dists['debian']['sid'] = []\n
dists['debian']['sid']['node'] = []\n
dists['debian']['sid']['iojs'] = []\n
dists['ubuntu'] = []\n
dists['ubuntu']['precise']  = []\n
dists['ubuntu']['precise']['node']  = []\n
dists['ubuntu']['precise']['iojs']  = []\n
dists['ubuntu']['trusty']   = []\n
dists['ubuntu']['trusty']['node']   = []\n
dists['ubuntu']['trusty']['iojs']   = []\n
dists['ubuntu']['vivid']   = []\n
dists['ubuntu']['vivid']['node']   = []\n
dists['ubuntu']['vivid']['iojs']   = []\n
dists['centos'] = []\n
dists['centos']['5'] = []\n
dists['centos']['5']['node'] = []\n
dists['centos']['5']['iojs'] = []\n
dists['centos']['6'] = []\n
dists['centos']['6']['node'] = []\n
dists['centos']['6']['iojs'] = []\n
dists['centos']['7'] = []\n
dists['centos']['7']['node'] = []\n
dists['centos']['7']['iojs'] = []\n
dists['fedora'] = []\n
dists['fedora']['20'] = []\n
dists['fedora']['20']['node'] = []\n
dists['fedora']['20']['iojs'] = []\n
dists['fedora']['21'] = []\n
dists['fedora']['21']['node'] = []\n
dists['fedora']['21']['iojs'] = []"

###############
# HANDLE DEBS #
###############

URLS=(
  "https://deb.nodesource.com/node/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/"
  "https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/"
  "https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/"
  "https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/"
)

PLATFORM=(
  "node"
  "node"
  "node"
  "node"
  "iojs"
  "iojs"
  "iojs"
)

for i in "${!URLS[@]}"; do
  DEBS=$(curl -L ${URLS[$i]} 2>/dev/null | grep "amd64.deb" | grep -v "dbg" | sed 's/<a href="//' | sed 's/">.*$//')
  for deb in ${DEBS[@]}; do
    version=$(echo $deb | cut -d "-" -f 1 - | cut -d "_" -f 2 -)
    release=$(echo $deb | cut -d "~" -f 2 - | cut -d "1" -f 1 -)
    case $release in
      jessie | sid | wheezy)
        dist="debian"
        ;;
      vivid | trusty | precise)
        dist="ubuntu"
        ;;
      *)
        continue
    esac
    FILE="$FILE\n dists['$dist']['$release']['${PLATFORM[$i]}']['$version'] = {url: '${URLS[$i]}', deb: '$deb'}"
  done
done

###############
# HANDLE DEBS #
###############

URLS=(
  "https://rpm.nodesource.com/pub/el/5/x86_64/"
  "https://rpm.nodesource.com/pub/el/6/x86_64/"
  "https://rpm.nodesource.com/pub/el/7/x86_64/"
  "https://rpm.nodesource.com/pub/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub/fc/21/x86_64/"
  "https://rpm.nodesource.com/pub_0.12/el/5/x86_64/"
  "https://rpm.nodesource.com/pub_0.12/el/6/x86_64/"
  "https://rpm.nodesource.com/pub_0.12/el/7/x86_64/"
  "https://rpm.nodesource.com/pub_0.12/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub_0.12/fc/21/x86_64/"
  "https://rpm.nodesource.com/pub_4.x/el/5/x86_64/"
  "https://rpm.nodesource.com/pub_4.x/el/6/x86_64/"
  "https://rpm.nodesource.com/pub_4.x/el/7/x86_64/"
  "https://rpm.nodesource.com/pub_4.x/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub_4.x/fc/21/x86_64/"
  "https://rpm.nodesource.com/pub_5.x/el/5/x86_64/"
  "https://rpm.nodesource.com/pub_5.x/el/6/x86_64/"
  "https://rpm.nodesource.com/pub_5.x/el/7/x86_64/"
  "https://rpm.nodesource.com/pub_5.x/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub_5.x/fc/21/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_1.x/el/5/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_1.x/el/6/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_1.x/el/7/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_1.x/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_1.x/fc/21/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_2.x/el/5/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_2.x/el/6/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_2.x/el/7/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_2.x/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_2.x/fc/21/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_3.x/el/5/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_3.x/el/6/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_3.x/el/7/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_3.x/fc/20/x86_64/"
  "https://rpm.nodesource.com/pub_iojs_3.x/fc/21/x86_64/"
)

PLATFORM=(
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "node"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
  "iojs"
)

for i in "${!URLS[@]}"; do
  RPMS=$(curl -L ${URLS[$i]} 2>/dev/null | grep "nodejs.*rpm\|iojs.*rpm" | grep -v 'debuginfo\|devel\|docs' | sed 's/<a href="//' | sed 's/">.*$//')
  for rpm in ${RPMS[@]}; do
    version=$(echo $rpm | cut -d "-" -f 2)
    release=$(echo $rpm | cut -d "." -f 4)
    case $release in
      el*)
        dist="centos"
        ;;
      fc*)
        dist="fedora"
        ;;
      *)
        continue;
    esac
    release=$(echo $release | sed 's/fc//' | sed 's/el//')
    FILE="$FILE\n dists['$dist']['$release']['${PLATFORM[$i]}']['$version'] = {url: '${URLS[$i]}', rpm: '$rpm'}"
  done
done

echo -e $FILE
