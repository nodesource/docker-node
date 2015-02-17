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

// Packages that all images will need
var commonPkgs = [  'apt-transport-https',
                    'build-essential',
                    'curl',
                    'lsb-release',
                    'python-all',
                    'rlwrap']

// Debian
dists['debian']['wheezy'] = []
dists['debian']['wheezy']['0.10.30']  = {}
dists['debian']['wheezy']['0.10.31']  = {deb:'.31-1chl1~wheezy1_amd64.deb'}
dists['debian']['wheezy']['0.10.32']  = {}
dists['debian']['wheezy']['0.10.33']  = {}
dists['debian']['wheezy']['0.10.34']  = {}
dists['debian']['wheezy']['0.10.35']  = {}
dists['debian']['wheezy']['0.10.36']  = {}
dists['debian']['wheezy']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

dists['debian']['jessie'] = []
dists['debian']['jessie']['0.10.30']  = {}
dists['debian']['jessie']['0.10.31']  = {deb:'nodejs_0.10.31-1chl1~jessie1_amd64.deb'}
dists['debian']['jessie']['0.10.32']  = {}
dists['debian']['jessie']['0.10.33']  = {}
dists['debian']['jessie']['0.10.34']  = {}
dists['debian']['jessie']['0.10.35']  = {}
dists['debian']['jessie']['0.10.36']  = {}
dists['debian']['jessie']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

dists['debian']['sid'] = []
dists['debian']['sid']['0.10.30']     = {}
dists['debian']['sid']['0.10.31']     = {deb:'nodejs_0.10.31-1chl1~sid1_amd64.deb'}
dists['debian']['sid']['0.10.32']     = {}
dists['debian']['sid']['0.10.33']     = {}
dists['debian']['sid']['0.10.34']     = {}
dists['debian']['sid']['0.10.35']     = {}
dists['debian']['sid']['0.10.36']     = {}
dists['debian']['sid']['0.12.0']      = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

// Debian aliases
dists['debian']['wheezy']
dists['debian']['jessie']
dists['debian']['sid']

// Ubuntu
dists['ubuntu']['precise']  = []
dists['ubuntu']['precise']['0.10.30'] = {}
dists['ubuntu']['precise']['0.10.31'] = {deb:'nodejs_0.10.31-1chl1~precise1_amd64.deb'}
dists['ubuntu']['precise']['0.10.32'] = {}
dists['ubuntu']['precise']['0.10.33'] = {}
dists['ubuntu']['precise']['0.10.34'] = {}
dists['ubuntu']['precise']['0.10.35'] = {}
dists['ubuntu']['precise']['0.10.36'] = {}
dists['ubuntu']['precise']['0.12.0']  = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

dists['ubuntu']['trusty']   = []
dists['ubuntu']['trusty']['0.10.30']  = {}
dists['ubuntu']['trusty']['0.10.31']  = {deb:'nodejs_0.10.31-1chl1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['0.10.32']  = {}
dists['ubuntu']['trusty']['0.10.33']  = {}
dists['ubuntu']['trusty']['0.10.34']  = {}
dists['ubuntu']['trusty']['0.10.35']  = {}
dists['ubuntu']['trusty']['0.10.36']  = {}
dists['ubuntu']['trusty']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

dists['ubuntu']['utopic']   = []
dists['ubuntu']['utopic']['0.10.32']  = {}
dists['ubuntu']['utopic']['0.10.33']  = {}
dists['ubuntu']['utopic']['0.10.34']  = {}
dists['ubuntu']['utopic']['0.10.35']  = {}
dists['ubuntu']['utopic']['0.10.36']  = {}
dists['ubuntu']['utopic']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

/**
 * Define string constants
 */
var HEADER  = 'FROM {{DIST}}:{{RELEASE}}\n'+
              'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var PKGS    = 'RUN apt-get update \\\n'+
              ' && apt-get install -y --force-yes \\\n' +
              '{{PKGS}}' +
              ' && rm -rf /var/lib/apt/lists/*;'

var NODE    = 'RUN curl {{URL}} > node.deb \\\n' +
              ' && dpkg -i node.deb \\\n' +
              ' && rm node.deb'

var FOOTER  = 'RUN npm install -g node-gyp \\\n' +
              ' && npm cache clear \n\n' +
              'RUN node-gyp configure || echo ""\n\n' +
              'ENV NODE_ENV production\n' +
              'VOLUME /usr/src/app\n' +
              'WORKDIR /usr/src/app\n' +
              'CMD ["npm","start"]'

/**
 * Define useful functions
 */
function replace(str,keys) {
  var regex = /\{\{.+?\}\}/g
  return str.replace(regex,function(match) {
    match = match.substr(2,match.length-4).toLowerCase()
    if(!keys[match]) return 'NULL'
    return keys[match]
  })
}

function generatePkgStr(pkgs) {
  return pkgs.reduce(function(str,v){return str+='      '+v+' \\\n'},'')
}

/**
 * Main logic:
 *  + Create directory `dist/release/version`
 *  + Create `Dockerfile` from template
 *  + Write `Dockerfile` to disk under newly created directory
 */
for(dist in dists) {
  for(release in dists[dist]) {
    for(version in dists[dist][release]) {
      //Scope variables
      (function scope(dist,release,version) {
        var dir = path.join(dist,release,version)
        var file = path.join(dir,'Dockerfile')
        mkdir(dir,function(e) {
          if(e) return console.error(e)
          var url = dists[dist][release][version].url || 'https://deb.nodesource.com/node/pool/main/n/nodejs/'
          var deb = dists[dist][release][version].deb || 'nodejs_'+version+'-1nodesource1~'+release+'1_amd64.deb'
          var contents =  replace(HEADER,{dist:dist,release:release}) + '\n\n' +
                          replace(PKGS,{pkgs:generatePkgStr(commonPkgs)}) + '\n\n' +
                          replace(NODE,{url:url+deb}) + '\n\n' +
                          FOOTER
          fs.writeFile(file,contents,function(e) {
            if(e) return console.error(e)
            console.log('Wrote: '+file)
          })
          fs.symlink('./README.md',path.join(dir,'README.md'))
        })
      })(dist,release,version)
    }
  }
}
