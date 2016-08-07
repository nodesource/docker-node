#!/usr/bin/env nodejs

/*****************
 * Bring in deps *
 *****************/

var request = require('request')
var async = require('async')

/***************************
 * Define Helper Functions *
 ***************************/

function error(msg) {
  console.error(msg)
  help()
  process.exit(1)
}

function help() {
  var msg = `USAGE: ./get_docker_releases.js DIST

  This script gathers supported tags from the Docker image specified by DIST.

  DIST corresponds to a valid, NodeSource supported, Linux Distribution and
  can be one of the following:
    - fedora
    - centos
    - debian
    - ubuntu
  `
  console.error(msg)
}

/**********************
 * Main Program Logic *
 **********************/

if(process.argv.length !== 3) {
  error("Incorrect number of arguments")
}

// Cache arg to avoid array lookup everywhere
var dist = process.argv[2]

// Ensure dist is a valid string
switch(dist) {
  case 'fedora':
  case 'centos':
  case 'debian':
  case 'ubuntu':
    break
  default:
    // Everything that wasn't defined in the cases above is invalid. The switch
    // may seem unnatural here, but it was a lot cleaner than an if statement
    error('Invalid distribution')
    break
}


// Continue asking for more tags until the Docker Hub tells us we have them all
// next acts as our async do-while termination condition, when there are no
// more tags, next will be set to null and the loop will terminate.
var next = `https://registry.hub.docker.com/v2/repositories/library/${dist}/tags`
var tags = []

async.whilst(
  function check () {
    return next != null
  },
  function getTags (cb) {
    request(next, function fetchedTags (e, resp, body) {
      // If the request failed, we have nothing left to do. Eventually this
      // could be made to be more resiliant to network hiccups
      if(e) {
        exit(e.message)
      }

      // Attempt to make sense of the response, if we can't convert it to JSON
      // or the response doesn't include the values we were expecting, then
      // we will exit the application
      try {
        body = JSON.parse(body)
      }  catch(e) {
        exit(e.message)
      }
      // The next URL we need to grab will be given to us by Docker Hub
      next = body.next
      // Append the names of the images that were returned by Docker Hub to the
      // tags array. This may be confusing without understanding how the Docker
      // Hub returns information. Try taking the URL above and plugging it into
      // a webbrowser to explore the format
      tags = tags.concat(body.results.map( (v) => v.name))
      cb()
    })
  },
  function gotTags () {
    // Once we reache here, we have finished compiling our list of tags.
    // Note: there is no chance of encountering an error since we never call
    // the callback with an error condition. When an error was encountered
    // above, the application would log it and exit.
    console.log(tags.join('\n'))
  }
)
