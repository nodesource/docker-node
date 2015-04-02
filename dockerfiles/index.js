var dockerfiles = module.exports = []

dockerfiles['debian'] = require('./debian.js')
dockerfiles['centos'] = require('./centos.js')
dockerfiles['fedora'] = require('./fedora.js')
dockerfiles['dists'] = require('./dists')
