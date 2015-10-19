#!/usr/bin/env node

var path        = require('path')
var fs          = require('fs')
var dockerfiles = require('../dockerfiles')
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

'The NodeSource docker images deliver [NodeSource\'s deb and rpm](deb.nodesource.com) packages across all of our supported platforms! We offer version pinning, allowing your project to track major, minor, or patch versions of Node or iojs.\n\n'+

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

'We offer tags for tracking major and minor releases. These tags enable you to receive either security patches or new features, while avoiding breaking changes.\n\n'+

'Note: some images may not have all tags, if a major/minor version is not supported on a particular release, these tags will not work.\n'+
'For example, Ubuntu Precise does not have any iojs tags, and Ubuntu Vivid does not have any tags before iojs-1.8.1.\n\n'+

'* `latest` points to the latest release of Node\n'+
'* `LTS` points to the latest LTS release of Node\n' +
'* `X` points to the latest release of Node X\n'+
'* `X.Y` points to the latest release of Node X.Y\n'+
'* `0.10` points to the latest 0.10 release of Node\n'+
'* `0.12` points to the latest 0.12 release of Node\n'+
'* `iojs` points to the latest release of iojs\n'+
'* `iojs-X` points to the latest minor release of iojs-X\n'+
'* `iojs-X.Y` points to the latest patch release of iojs-X.Y\n'+
'* `iojs-X.Y.Z` points to the specific release of iojs-X.Y.Z\n'

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
