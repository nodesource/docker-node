#!/usr/bin/env node
/**
 * debian.js
 *
 * Used to generate the debian flavor distribution Dockerfiles
 * Maintainer: William Blankenship <wblankenship@nodesource.com>
 */

/**
 * Dependencies
 */

/**
 * Define Globals
 */
var mkdir = require('mkdirp')
var path  = require('path')
var fs    = require('fs')

// Supported distributions
var dists       = []
dists['debian'] = []
dists['ubuntu'] = []
var nodejs      = [ '0.10.29',
                    '0.10.30',
                    '0.10.32',
                    '0.10.33',
                    '0.10.34',
                    '0.10.35']

// Packages that all images will need
var commonPkgs = [  'apt-transport-https',
                    'build-essential',
                    'curl',
                    'lsb-release',
                    'python-all',
                    'rlwrap']

// Debian
dists['debian']['wheezy'] = {}
dists['debian']['jessie'] = {}
dists['debian']['sid']    = {}

// Debian aliases
dists['debian']['stable']   = dists['debian']['wheezy']
dists['debian']['testing']  = dists['debian']['jessie']
dists['debian']['unstable'] = dists['debian']['sid']

// Ubuntu
dists['ubuntu']['precise']  = {}
dists['ubuntu']['trusty']   = {}
dists['ubuntu']['utopic']   = {}

/**
 * Define string constants
 */
var HEADER  = "FROM {{DIST}}:{{RELEASE}}\n"+
              "MAINTAINER William Blankenship <wblankenship#nodesource.com>"

var PKGS    = "RUN apt-get update \\\n"+
              " && apt-get install -y --force-yes \\\n" +
              "{{PKGS}}" +
              " && rm -rf /var/lib/apt/lists/*;"

var NODE    = "RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_{{VERSION}}-1nodesource1~{{RELEASE}}1_amd64.deb > node.deb \\\n" +
              " && dpkg -i node.deb \\\n" +
              " && rm node.deb"

var FOOTER  = "RUN npm install -g node-gyp \\\n" +
              " && npm cache clear \\\n\n" +
              "RUN node-gyp configure || echo \"\"\n\n" +
              "ENV NODE_ENV production\n" +
              "VOLUME /usr/src/app\n" +
              "WORKDIR /usr/src/app\n" +
              "CMD [\"npm\",\"start\"]"

/**
 * Define useful functions
 */
function replace(str,keys) {
  var regex = /\{\{.+?\}\}/g
  return str.replace(regex,function(match) {
    match = match.substr(2,match.length-4).toLowerCase()
    if(!keys[match]) return "NULL"
    return keys[match]
  })
}

function generatePkgStr(pkgs) {
  return pkgs.reduce(function(str,v){return str+="      "+v+" \\\n"},"")
}

/**
 * Main logic:
 *  + Create directory `dist/release/version`
 *  + Create `Dockerfile` from template
 *  + Write `Dockerfile` to disk under newly created directory
 */
for(dist in dists) {
  for(release in dists[dist]) {
    //Scope variables
    (function scope(dist,release) {
      nodejs.forEach(function(version) {
        var dir = path.join(dist,release,version)
        var file = path.join(dir,"Dockerfile")
        mkdir(dir,function(e) {
          if(e) return console.error(e)
          var contents =  replace(HEADER,{dist:dist,release:release}) + "\n\n" +
                          replace(PKGS,{pkgs:generatePkgStr(commonPkgs)}) + "\n\n" +
                          replace(NODE,{version:version,release:release}) + "\n\n" +
                          FOOTER
          fs.writeFile(file,contents,function(e) {
            if(e) return console.error(e)
            console.log("Wrote: "+file)
          })
        })
      })
    })(dist,release)
  }
}
