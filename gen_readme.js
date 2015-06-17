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

var str = '# docker-node\n\n'+

'Dockerfiles for building docker images with the [NodeSource Node.js](https://github.com/nodesource/distributions) binaries baked in.\n\n'+

'# Structure\n\n'+

'* `latest` on all images currently points to the latest 0.10 release of node\n'+
'* `0.10` on all images currently points to the latest 0.10 release of node\n'+
'* `0.12` on all images currently points to the latest 0.12 release of node\n'+
'* `iojs` on all images currently points to the latest 1.X.Y release of iojs\n'+
'* `iojs-1.3` on all images currently points to the latest 1.3.Y release of iojs\n'+
'* `iojs-1.4` on all images currently points to the latest 1.4.Y release of iojs\n'+
'* `iojs-1.5` on all images currently points to the latest 1.5.Y release of iojs\n'+
'* `iojs-1.6` on all images currently points to the latest 1.6.Y release of iojs\n'+
'* `iojs-1.7` on all images currently points to the latest 1.7.Y release of iojs\n'+
'* `iojs-1.8` on all images currently points to the latest 1.8.Y release of iojs\n'


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
