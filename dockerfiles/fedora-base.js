var dists = require('./dists.js')
var funcs = require('./funcs.js')

module.exports = function(dist,release) {
  var contents = funcs.replace(header,{dist:dist,release:release}) + '\n\n'
  contents+= funcs.replace(pkgs,{pkgs:funcs.generatePkgStr(commonPkgs)}) + '\n\n'
  return contents
}

var header = 'FROM {{DIST}}:{{RELEASE}}\n'+
             'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var pkgs   = 'RUN yum install -y \\\n' +
             '{{PKGS}}' +
             ' && yum clean all'


/* Shouldn't be needed for Fedora
var epel   = 'RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9\-]+\.noarch\.rpm" | sed "s/^/http:\\/\\/dl.fedoraproject.org\\/pub\\/epel\\/5\\/x86_64\\//") \\\n' +
             ' && yum install -y python26 \\\n' +
             ' && yum clean all'
*/

var python = 'ENV PYTHON python2.6'

var commonPkgs = [ 'curl',
                   'git',
                   'perl',
                   'which' ]
