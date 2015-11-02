var dockerfiles = module.exports = []

dockerfiles['debian'] = require('./debian.js')
dockerfiles['debian-base'] = require('./debian-base.js')
dockerfiles['centos'] = require('./centos.js')
dockerfiles['centos-base'] = require('./centos-base.js')
dockerfiles['fedora'] = require('./fedora.js')
dockerfiles['fedora-base'] = require('./fedora-base.js')
dockerfiles['dists'] = require('./dists')
