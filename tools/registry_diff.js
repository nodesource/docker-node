#!/usr/bin/env node

var dists = require('../dockerfiles').dists
var request = require('request')
var url = "https://hub.docker.com/v2/repositories/nodesource/"
var url_tail = "/tags"
var async = require('async')
var columnify = require('columnify')
var colors = require('colors/safe')
var full_version = /^.*[0-9]*\.[0-9]\.[0-9]$/

var output = []

var count = 0
console.log(colors.green("ADD (missing on registry)")+"\n"+colors.red("REMOVE (missing locally)")+"\n")
for(dist in dists) {
  for(release in dists[dist]) {
    count++
    if( dist == 'centos' ||
      dist == 'fedora') patchedRelease = dist+release
    else patchedRelease = release
    ;(function scopeVars(dist,release) {
      getTags(patchedRelease, function doneGettingTags(e,tags) {
        if(e) return console.log(e)
        for(project in dists[dist][release]) {
          for(version in dists[dist][release][project]) {
            var tag = version
            if(project !== 'node') tag = project+'-'+tag
            var location = tags.indexOf(tag)
            if(location === -1) {
              output.push({
                Name: colors.green('master'),
                Dockerfile: colors.green('/'+dist+'/'+release+'/'+project+'/'+version),
                Tag: colors.green(tag)
              })
            } else {
              tags.splice(location,1)
            }
          } // end version
        } // end project
        for( tag in Object.keys(tags) ) {
          if(!tags[tag].match(full_version)) continue;
          output.push({
            Name: colors.red('master'),
            Dockerfile: colors.red('/'+dist+'/'+release+'/???'),
            Tag: colors.red(tags[tag])
          })
        }
        count--
        if(count===0) console.log(columnify(output))
      }) // end getTags
    })(dist,release)
  } // end release
} // end dist

function getTags(release,cb) {
  var tags = []
  var full_url = url + release + url_tail
  async.during(function getPartialTagList(cb) {
    return cb(null,full_url)
  },function doNothing(cb) {
    request(full_url,function(e,req,body) {
      if(e) return cb(e)
      try {
        body =JSON.parse(body)
        var new_tags = body.results.map(function getTagsFromResult(c) {
          return c.name
        })
        tags = tags.concat(new_tags)
        full_url = body.next
        return cb()
      } catch(e) {
        return cb(e)
      }
    })
  },function doneGettingTags(e) {
    return cb(e,tags)
  })
}
