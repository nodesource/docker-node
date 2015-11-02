#!/usr/bin/env bash

# Get Working Directory

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

cd $DIR

echo "Generating dists file..."
$DIR/gen-dists.sh > $DIR/../dockerfiles/dists.js

echo "Generating base Dockerfiles..."
$DIR/base.js > /dev/null

echo "Running Dante on base Dockerfiles..."
cd $DIR/../base
dante -j 30 > output.md
cd $DIR

echo "Generating Dockerfiles..."
$DIR/generate.js > /dev/null

echo "Generating README.md..."
$DIR/gen_readme.js > $DIR/../README.md

echo "Running Dante"
cd $DIR/../
dante -j 30 > output.md
cd $DIR

echo "Computing necessary updates to registry..."
$DIR/registry_diff.js
