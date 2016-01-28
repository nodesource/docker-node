#!/usr/bin/env node

var dockerfiles = require('../dockerfiles')
var dists = dockerfiles.dists

String.prototype.cap = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

var str = '# NodeSource Docker Images\n\n' +

  "The NodeSource docker images deliver [NodeSource's deb and rpm](deb.nodesource.com) packages across all of our supported platforms! We offer version pinning, allowing your project to track major, minor, or patch versions of Node or iojs.\n\n" +

  '# Usage\n\n' +

  'Use any one of our images as a base for your image. We suggest caching your `package.json` and `npm install` in layers to reduce build time:\n\n' +

  '```Dockerfile\n' +

  'FROM nodesource/jessie:0.12.7\n\n' +

  '# cache package.json and node_modules to speed up builds\n' +
  'ADD package.json package.json\n' +
  'RUN npm install\n\n' +

  '# Add your source files\n' +
  'ADD . .\n' +
  'CMD ["npm","start"]\n' +
  '```\n\n' +

  '# Notes\n\n' +

  '* `NODE_ENV` is set to `production` on these images. If you are using these images for development work, add the line: `ENV NODE_ENV dev` to your `Dockerfile`.\n\n' +

  '# Images\n\n' +

  'We offer tags for tracking major and minor releases. These tags enable you to receive either security patches or new features, while avoiding breaking changes.\n\n' +

  'Note: some images may not have all tags, if a major/minor version is not supported on a particular release, these tags will not work.\n' +
  'For example, Ubuntu Precise does not have any iojs tags, and Ubuntu Vivid does not have any tags before iojs-1.8.1.\n\n' +

  '* `latest` points to the latest release of Node\n' +
  '* `LTS` points to the latest LTS release of Node\n' +
  '* `argon` points to the named LTS release of Node\n' +
  '* `X` points to the latest release of Node X\n' +
  '* `X.Y` points to the latest release of Node X.Y\n' +
  '* `iojs` points to the latest release of iojs\n' +
  '* `iojs-X` points to the latest minor release of iojs-X\n' +
  '* `iojs-X.Y` points to the latest patch release of iojs-X.Y\n'

for (var dist in dists) {
  str += '\n## ' + dist.cap() + '-based images\n\n'
  for (var release in dists[dist]) {
    str += '* [**' + dist.cap() + ' ' + release + '**](https://registry.hub.docker.com/u/nodesource/'
    if (dist === 'centos' || dist === 'fedora') str += dist
    str += release + '/) - `docker pull nodesource/'
    if (dist === 'centos' || dist === 'fedora') str += dist
    str += release + '`\n'
    for (var project in dists[dist][release]) {
      for (var version in dists[dist][release][project]) {
        str += '  * '
        if (project === 'node') str += project.cap()
        else str += project
        str += ' ' + version + ' - `docker pull nodesource/'
        if (dist === 'centos' || dist === 'fedora') str += dist
        str += release + ':'
        if (project !== 'node') str += project + '-'
        str += version + '`\n'
      }
    }
  }
}
console.log(str)
