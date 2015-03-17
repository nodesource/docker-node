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
var dists = require('./debian_dists.js')

// Packages that all images will need
var commonPkgs = [  'apt-transport-https',
                    'build-essential',
                    'curl',
                    'lsb-release',
                    'python-all',
                    'rlwrap']

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

var FOOTER  = 'RUN npm install -g pangyp\\\n' +
              ' && npm cache clear\\\n' +
              ' && pangyp configure || echo ""\n\n' +
              'ENV NODE_ENV production\n' +
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
    for(project in dists[dist][release]) {
      for(version in dists[dist][release][project]) {
        //Scope variables
        (function scope(dist,release,project,version) {
          var dir = path.join(dist,release,project,version)
          var file = path.join(dir,'Dockerfile')
          mkdir(dir,function(e) {
            if(e) return console.error(e)
            var url = dists[dist][release][project][version].url || 'https://deb.nodesource.com/node/pool/main/n/nodejs/'
            var deb = dists[dist][release][project][version].deb || 'nodejs_'+version+'-1nodesource1~'+release+'1_amd64.deb'
            var contents =  replace(HEADER,{dist:dist,release:release}) + '\n\n' +
                            replace(PKGS,{pkgs:generatePkgStr(commonPkgs)}) + '\n\n' +
                            replace(NODE,{url:url+deb}) + '\n\n' +
                            FOOTER
            fs.writeFile(file,contents,function(e) {
              if(e) return console.error(e)
              console.log('Wrote: '+file)
            })
            fs.symlink('../../../../README.md',path.join(dir,'README.md'),function(e) {
            })
          })
        })(dist,release,project,version)
      }
    }
  }
}
