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
var mkdir       = require('mkdirp')
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

function generatePkgStr(pkgs) {
  return pkgs.reduce(function(str,v){return str+='      '+v+' \\\n'},'')
}

var inventory = "images:"

for(dist in dists) {
  for(release in dists[dist]) {
    //Scope variables
    (function scope(dist,release,project,version) {
      var inventory_dir = path.join(dist,release)
      var dir = path.join(__dirname,'..','base',dist,release)
      var file = path.join(dir,'Dockerfile')
      mkdir(dir,function(e) {
        if(e) return console.error(e)
        var contents = ""
        if(dist === 'ubuntu' || dist === 'debian')
          contents = dockerfiles['debian-base'](dist,release)
        else if(dist === 'centos')
          contents = dockerfiles['centos-base'](dist,release)
        else if(dist === 'fedora')
          contents = dockerfiles['fedora-base'](dist,release)
        else return console.log("Unknown: "+dir)
        fs.writeFile(file,contents,function(e) {
          if(e) return console.error(e)
          console.log('Wrote: '+file)
        })
      })
      var name = "nodesource/"+release+"-base"
      if(dist === "fedora" || dist === "centos")
        name = "nodesource/"+dist+release+"-base"
      inventory += "\n  - name: \""+name+"\"" +
                   "\n    path: \"./"+inventory_dir+"\""
    })(dist,release)
  }
}

var inventoryPath = path.join(__dirname,'..','base')
mkdir(inventoryPath,function(e) {
  if(e) return console.error("FAILED TO CREATE FOLDER FOR BASE IMAGES: ",e)
  fs.writeFile(path.join(inventoryPath,"inventory.yml"),inventory,function(e) {
    if(e) return console.error("FAILED TO CREATE INVENOTRY FILE: ",e)
    else console.log("Wrote inventory.yml")
  })
})
