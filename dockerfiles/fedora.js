var dists = require('./dists.js')
var funcs = require('./funcs.js')

module.exports = function(dist,release,project,version) {
  var self = dists[dist][release][project][version]
  var url = self.url || 'https://rpm.nodesource.com/pub/fc/'+release+'/x86_64/'
  var rpm = self.rpm || 'nodejs-'+version+'-1nodesource.fc'+release+'.x86_64.rpm'
  var contents = funcs.replace(header,{dist:dist,release:release}) + '\n\n'
  contents+= funcs.replace(pkgs,{pkgs:funcs.generatePkgStr(commonPkgs)}) + '\n\n'
  if(self.epel) {
    contents+= epel + '\n\n'
    contents+= python + '\n\n'
  }
  contents+= funcs.replace(node,{url:url+rpm}) + '\n\n'
  contents+= footer
  return contents
}

var header = 'FROM {{DIST}}:{{RELEASE}}\n'+
             'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var pkgs   = 'RUN yum install -y \\\n' +
             '{{PKGS}}' +
             ' && yum clean all'

var epel   = 'RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9\-]+\.noarch\.rpm" | sed "s/^/http:\\/\\/dl.fedoraproject.org\\/pub\\/epel\\/5\\/x86_64\\//") \\\n' +
             ' && yum install -y python26 \\\n' +
             ' && yum clean all'

var python = 'ENV PYTHON python2.6'

var node   = 'RUN curl -sL -o ns.rpm {{URL}} \\\n' +
             ' && rpm -i --nosignature --force ns.rpm \\\n' +
             ' && rm -f ns.rpm'

var footer = 'RUN npm install -g pangyp\\\n' +
             ' && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\\\n' +
             ' && npm cache clear\\\n' +
             ' && node-gyp configure || echo ""\n\n' +
             'ENV NODE_ENV production\n' +
             'WORKDIR /usr/src/app\n' +
             'CMD ["npm","start"]'

var commonPkgs = [ 'curl',
                   'git',
                   'perl',
                   'which' ]
