#!/usr/bin/env node

var dists = require('../dockerfiles').dists
var path = require('path')
var fs = require('fs')

var inventory = 'images:'
for (var dist in dists) {
  for (var release in dists[dist]) {
    for (var project in dists[dist][release]) {
      var tags = generateTags(dist, release, project)
      tags = tags.reduce(function (prev, curr) {
        if (!prev[curr.version]) prev[curr.version] = []
        if (curr.version === curr.tag || 'iojs-' + curr.version === curr.tag) {
          return prev
        }
        prev[curr.version].push(curr.tag)
        return prev
      }, {})
      for (var tag in tags) {
        var inventory_dir = path.join(dist, release, project, tag)
        var patchedRelease = release
        if (dist === 'centos' || dist === 'fedora') {
          patchedRelease = dist + release
        }
        var name = 'nodesource/' + patchedRelease + ':' + tag
        if (project === 'iojs') {
          name = 'nodesource/' + patchedRelease + ':iojs-' + tag
        }
        var aliases = []
        for (var alias in tags[tag]) {
          aliases.push('nodesource/' + patchedRelease + ':' + tags[tag][alias])
        }
        if(release === 'jessie') {
          var alias_len = aliases.length
          for(var i = 0; i < alias_len; i++) {
            aliases.push(aliases[i].replace('jessie','node'))
          }
          aliases.push(name.replace('jessie','node'))
        }
        inventory += '\n  - name: "' + name + '"' +
          '\n    path: "./' + inventory_dir + '"' +
          '\n    test: ["./tests/node"]' +
          '\n    alias: ['
        for (var i in aliases) {
          if (i > 0) inventory += ','
          inventory += '"' + aliases[i] + '"'
        }
        inventory += ']'
      }
    }
  }
}

fs.writeFile(path.join(__dirname, '..', 'inventory.yml'), inventory, function (e) {
  if (e) return console.error('FAILED TO CREATE INVENOTRY FILE: ', e)
  else console.log('Wrote inventory.yml')
})

function generateTags (dist, release, project) {
  // Versions holds an array of arrays. Each index of the subarray
  // correpsonds to the major, minor, and patch respectively. This
  // simplifies the logic later.
  var versions = Object.keys(dists[dist][release][project])
    .sort()
    .map(function (v) {
      return v.split('.')
    })

  // Get the prefix for a tag if necessary
  var tagPrefix = (project === 'node') ? '' : project + '-'
  var patchedDist = dist
  var patchedRelease = release
  if (dist === 'alias') {
    // Properly handle node
    patchedDist = 'debian'
    patchedRelease = 'jessie'
  }

  var majors = versions.reduce(function (p, c) {
    if (c[0] === '0') return p
    p[tagPrefix + c[0]] = {
      dist: dist,
      release: release,
      project: project,
      version: c.join('.'),
      path: '/' + patchedDist + '/' + patchedRelease + '/' + project + '/' + c.join('.')
    }
    return p
  }, [])

  var minors = versions.reduce(function (p, c) {
    p[tagPrefix + c[0] + '.' + c[1]] = {
      dist: dist,
      release: release,
      project: project,
      version: c.join('.'),
      path: '/' + patchedDist + '/' + patchedRelease + '/' + project + '/' + c.join('.')
    }
    return p
  }, [])

  var patches = versions.reduce(function (p, c) {
    p[tagPrefix + c.join('.')] = {
      dist: dist,
      release: release,
      project: project,
      version: c.join('.'),
      path: '/' + patchedDist + '/' + patchedRelease + '/' + project + '/' + c.join('.')
    }
    return p
  }, [])

  if (versions.length > 0) {
    var latest = []
    var latestVersion = versions.pop().join('.')

    if (project === 'node') {
      latest['latest'] = {
        dist: dist,
        release: release,
        project: project,
        version: latestVersion,
        path: '/' + patchedDist + '/' + patchedRelease + '/' + project + '/' + latestVersion
      }
    } else {
      latest[project] = {
        dist: dist,
        release: release,
        project: project,
        version: latestVersion,
        path: '/' + patchedDist + '/' + patchedRelease + '/' + project + '/' + latestVersion
      }
    }
  }

  var misc = {}
  // Handle specific tag aliases
  if (project === 'node' && majors['4']) {
    misc['LTS'] = JSON.parse(JSON.stringify(majors['4']))
    misc['argon'] = JSON.parse(JSON.stringify(majors['4']))
  }

  versions = objectConcat(majors, minors, patches, latest, misc)

  return versions
}

function objectConcat () {
  var ret = []
  var len = arguments.length
  for (var i = 0; i < len; i++) {
    for (var p in arguments[i]) {
      if (arguments[i].hasOwnProperty(p)) {
        arguments[i][p].tag = p
        ret.push(arguments[i][p])
      }
    }
  }
  return ret
}
