#!/usr/bin/env node

var dists = require('../dockerfiles').dists
var request = require('request')
var url = "https://hub.docker.com/v2/repositories/nodesource/"
var url_tail = "/build"
var async = require('async')
var columnify = require('columnify')
var colors = require('colors/safe')
var full_version = /^.*[0-9]*\.[0-9]\.[0-9]$/


console.log(colors.green("ADD (missing on registry)"))
console.log(colors.red("REMOVE (missing locally)"))
console.log(colors.yellow("MODIFY (incorrect entry)"))
console.log()

// count keeps track of how many images we are going to process so that we
// know when to print our report
var count = 0

// output holds all of the table data for our final report, so we can pass
// to columnify for pretty output
var output = []

// Alias jessie => node
dists["alias"] = {"node":dists["debian"]["jessie"]}

for(dist in dists) {

  for(release in dists[dist]) {

    count++

    // Patched release fixes the release name to match the Docker hub tag
    var patchedRelease = ""
    if( dist == 'centos' || dist == 'fedora') {
      patchedRelease = dist+release
    } else {
      patchedRelease = release
    }

    // Scope the variables dist and release so they survive yielding
    // to the event loop.
    ;(function scopeVars(dist,release) {

      getTags(patchedRelease, function doneGettingTags(e,tags) {
        if(e) return console.log(e.stack)

        var patchedRelease = ""
        if( dist == 'centos' || dist == 'fedora') {
          patchedRelease = dist+release
        } else {
          patchedRelease = release
        }

        for(project in dists[dist][release]) {

          var versions = Object.keys(dists[dist][release][project])

          // No need to process projects with no tags, simplifies logic later
          if(versions.length === 0) continue;

          // Get a hash of all tags that should exist
          var localTags = generateTags(dist,release,project,versions)

          // Ensure local tags exist externally
          verifyTags(localTags,tags,output)
        }

        // Any tags which haven't been found locally are broken
        for( tag in Object.keys(tags) ) {
          output.push({
            Repo: colors.red(patchedRelease),
            Name: colors.red(tags[tag].branch),
            Dockerfile: colors.red(tags[tag].path),
            Tag: colors.red(tags[tag].tag)
          })
        }

        // Finished processing a release
        count--

        // If we are finished processing all releases, print report.
        if(count===0) {
          console.log(columnify(output.sort(function compare(a,b) {
            a = a.Repo.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"")
            b = b.Repo.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"")
            if( a < b ) return 1
            if( a === b ) return 0
            return -1
          })))
        }

      }) // end getTags

    })(dist,release)

  } // end release

} // end dist

/* Compute all tags, including aliases */
function generateTags(dist,release,project,versions) {
  // Versions holds an array of arrays. Each index of the subarray
  // correpsonds to the major, minor, and patch respectively. This
  // simplifies the logic later.
  var versions = Object.keys(dists[dist][release][project])
    .sort()
    .map(function(v) {
      return v.split(".")
    })

  // Get the prefix for a tag if necessary
  var tagPrefix = (project === "node") ? "" : project + "-"
  var patchedDist = dist
  var patchedRelease = release
  if( dist === "alias" ) {
    // Properly handle node
    patchedDist = "debian"
    patchedRelease = "jessie"
  }

  var majors = versions.reduce(function(p,c) {
    if(c[0]==="0") return p
    p[tagPrefix+c[0]] = {
      dist: dist,
      release: release,
      project: project,
      version: c.join('.'),
      path: '/'+patchedDist+'/'+patchedRelease+'/'+project+'/'+c.join('.')
    }
    return p
  },[])

  var minors = versions.reduce(function(p,c) {
    p[tagPrefix+c[0]+"."+c[1]] = {
      dist: dist,
      release: release,
      project: project,
      version: c.join('.'),
      path: '/'+patchedDist+'/'+patchedRelease+'/'+project+'/'+c.join('.')
    }
    return p
  },[])

  var patches = versions.reduce(function(p,c) {
    p[tagPrefix+c.join('.')] = {
      dist: dist,
      release: release,
      project: project,
      version: c.join('.'),
      path: '/'+patchedDist+'/'+patchedRelease+'/'+project+'/'+c.join('.')
    }
    return p
  },[])

  var latest = []
  var latestVersion = versions.pop().join(".")

  if(project === "node") {
    latest["latest"] = {
      dist: dist,
      release: release,
      project: project,
      version: latestVersion,
      path: '/'+patchedDist+'/'+patchedRelease+'/'+project+'/'+latestVersion
    }
  } else {
    latest[project] = {
      dist: dist,
      release: release,
      project: project,
      version: latestVersion,
      path: '/'+patchedDist+'/'+patchedRelease+'/'+project+'/'+latestVersion
    }
  }

  versions = objectConcat(majors, minors, patches, latest)

  // Handle specific tag aliases
  if( project === "node" && majors["4"]) {
    versions["LTS"] = majors["4"]
    versions["argon"] = majors["4"]
  }

  return versions
}

function verifyTags(versions, tags, output) {
  for( version in versions ) {
    var location = tags.map(function(v) {
      return v.tag
    }).indexOf(version)
    if(location === -1) {
      var release = (versions[version].dist === "centos" || versions[version].dist === "fedora") ?
        versions[version].dist + versions[version].release : versions[version].release
      output.push({
        Repo: colors.green(release),
        Name: colors.green('master'),
        Dockerfile: colors.green(versions[version].path),
        Tag: colors.green(version)
      })
    }
    else {
      verifyEntry(versions[version],tags[location],output)
      tags.splice(location,1)
    }
  }
}

function verifyEntry(local,remote,output) {
  var release = (local.dist === "centos" || local.dist === "fedora") ?
    local.dist + local.release : local.release
  var obj = {
    Repo: colors.yellow(release),
    Name: colors.yellow('master'),
    Dockerfile: colors.yellow(remote.path),
    Tag: colors.yellow(remote.tag)
  }

  var log = false

  if(remote.branch !== 'master') {
    obj.Name = colors.yellow(remote.branch+" => master")
    log = true
  }
  if(remote.path !== local.path) {
    obj.Dockerfile = colors.yellow(remote.path+" => "+local.path)
    log = true
  }

  if(log) {
    output.push(obj)
  }
}

function getTags(release,cb) {
  var tags = []
  var full_url = url + release + url_tail

  request(full_url,function(e,req,body) {
    if(e) return cb(e)
    try {
      body =JSON.parse(body)
      var new_tags = body.build_tags.map(function getTagsFromResult(c) {
        return {
          "tag": c.name,
          "branch" : c.source_name,
          "path": c.dockerfile_location
        }
      })
      tags = tags.concat(new_tags)
      full_url = body.next
      return cb(null,tags)
    } catch(e) {
      return cb(e)
    }
  })
}

function objectConcat() {
  var ret = {};
  var len = arguments.length;
  for (var i=0; i<len; i++) {
    for (p in arguments[i]) {
      if (arguments[i].hasOwnProperty(p)) {
        ret[p] = arguments[i][p];
      }
    }
  }
  return ret;
}
