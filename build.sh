#!/usr/bin/env bash

# Get Working Directory

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"


echo "Generating dists file..."
$DIR/dockerfiles/gen-dists.sh > $DIR/dockerfiles/dists.js

echo "Generating Dockerfiles..."
$DIR/generate.js

echo "Generating README.md..."
$DIR/gen_readme.js > README.md

echo "Running tests..."
dante
