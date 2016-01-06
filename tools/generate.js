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
var path = require('path')
var fs = require('fs')
var dockerfiles = require('../dockerfiles')
var dists = dockerfiles.dists
console.log(dists)

/**
 * Main logic:
 *  + Create directory `dist/release/version`
 *  + Create `Dockerfile` from template
 *  + Write `Dockerfile` to disk under newly created directory
 */
for (var dist in dists) {
  for (var release in dists[dist]) {
    for (var project in dists[dist][release]) {
      for (var version in dists[dist][release][project]) {
        // Scope variables
        (function scope (dist, release, project, version) {
          var dir = path.join(__dirname, '..', dist, release, project, version)
          var file = path.join(dir, 'Dockerfile')
          mkdir(dir, function (e) {
            if (e) return console.error(e)
            var contents = ''
            if (dist === 'ubuntu' || dist === 'debian') {
              contents = dockerfiles['debian'](dist, release, project, version)
            } else if (dist === 'centos') {
              contents = dockerfiles['centos'](dist, release, project, version)
            } else if (dist === 'fedora') {
              contents = dockerfiles['fedora'](dist, release, project, version)
            } else {
              return console.log('Unknown: ' + dir)
            }
            fs.writeFile(file, contents, function (e) {
              if (e) return console.error(e)
              console.log('Wrote: ' + file)
            })
            fs.symlink('../../../../README.md', path.join(dir, 'README.md'), function (e) {})
          })
        })(dist, release, project, version)
      }
    }
  }
}
