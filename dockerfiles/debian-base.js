var funcs = require('./funcs.js')

module.exports = function (dist, release) {
  var contents = funcs.replace(header, {dist: dist, release: release}) + '\n\n' +
    funcs.replace(pkgs, {pkgs: funcs.generatePkgStr(commonPkgs)})

  return contents
}

var header = 'FROM {{DIST}}:{{RELEASE}}\n' +
  'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var pkgs = 'RUN apt-get update \\\n' +
  ' && apt-get install -y --force-yes --no-install-recommends\\\n' +
  '{{PKGS}}' +
  ' && rm -rf /var/lib/apt/lists/*;'

var commonPkgs = [ 'apt-transport-https',
  'ssh-client',
  'build-essential',
  'curl',
  'ca-certificates',
  'git',
  'libicu-dev',
  '\'libicu5-*\'',
  'lsb-release',
  'python-all',
  'rlwrap']
