#!/usr/bin/env node

var path        = require('path')
var fs          = require('fs')
var dockerfiles = require('./dockerfiles')
var dists       = dockerfiles.dists

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

String.prototype.cap = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var str = '# NodeSource Docker Images\n\n'+

'The NodeSource docker images deliver [NodeSource\'s deb and rpm](deb.nodesource.com) packages across all of our support platforms! We offer version pinning, allowing your project to track major, minor, or patch versions of Node or iojs.\n\n'+

'# Usage\n\n'+

'Use any one of our images as a base for your image. We suggest caching your `package.json` and `npm install` in layers to reduce build time:\n\n'+

'```Dockerfile\n'+

'FROM nodesource/jessie:0.12.7\n\n'+

'# cache package.json and node_modules to speed up builds\n'+
'ADD package.json package.json\n'+
'RUN npm install\n\n'+

'# Add your source files\n'+
'ADD . .\n'+
'CMD ["npm","start"]\n'+
'```\n\n'+

'# Notes\n\n'+

'* `NODE_ENV` is set to `production` on these images. If you are using these images for development work, add the line: `ENV NODE_ENV dev` to your `Dockerfile`.\n\n'+

'# Images\n\n'+

'* `latest` on all images currently points to the latest 0.12 release of node\n'+
'* `0.10` on all images currently points to the latest 0.10 release of node\n'+
'* `0.12` on all images currently points to the latest 0.12 release of node\n'+
'* `iojs` on all images currently points to the latest 2.X.Y release of iojs\n'+
'* `iojs-1` on all images currently points to the latest 1.X.Y release of iojs\n'+
'* `iojs-1.3` on all images currently points to the latest 1.3.Y release of iojs\n'+
'* `iojs-1.4` on all images currently points to the latest 1.4.Y release of iojs\n'+
'* `iojs-1.5` on all images currently points to the latest 1.5.Y release of iojs\n'+
'* `iojs-1.6` on all images currently points to the latest 1.6.Y release of iojs\n'+
'* `iojs-1.7` on all images currently points to the latest 1.7.Y release of iojs\n'+
'* `iojs-1.8` on all images currently points to the latest 1.8.Y release of iojs\n'+
'* `iojs-2.` on all images currently points to the latest 2.X.Y release of iojs\n'+
'* `iojs-2.0` on all images currently points to the latest 2.0.Y release of iojs\n'+
'* `iojs-2.1` on all images currently points to the latest 2.1.Y release of iojs\n'+
'* `iojs-2.2` on all images currently points to the latest 2.2.Y release of iojs\n'+
'* `iojs-2.3` on all images currently points to the latest 2.3.Y release of iojs\n'+
'* `iojs-2.4` on all images currently points to the latest 2.4.Y release of iojs\n'+
'* `iojs-2.5` on all images currently points to the latest 2.5.Y release of iojs\n'


for(dist in dists) {
  str += '\n## '+dist.cap()+'-based images\n\n'
  for(release in dists[dist]) {
    str += '* [**'+dist.cap()+' '+release+'**](https://registry.hub.docker.com/u/nodesource/'
    if(dist==='centos'||dist==='fedora') str+=dist
    str+=release+'/) - `docker pull nodesource/'
    if(dist==='centos'||dist==='fedora') str+=dist
    str+=release+'`\n'
    for(project in dists[dist][release]) {
      for(version in dists[dist][release][project]) {
        str+='  * '
        if(project==='node') str+=project.cap()
        else str+=project
        str+=' '+version+' - `docker pull nodesource/'
        if(dist==='centos'||dist==='fedora') str+=dist
        str+=release+':'
        if(project!=='node') str+=project+'-'
        str+=version+'`\n'
      }
    }
  }
}
console.log(str)
