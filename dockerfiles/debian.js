var dists = require('./dists.js')
var funcs = require('./funcs.js')

module.exports = function(dist,release,project,version) {
  var self = dists[dist][release][project][version]
  var url = self.url || 'https://deb.nodesource.com/node/pool/main/n/nodejs/'
  var deb = self.deb || 'nodejs_'+version+'-1nodesource1~'+release+'1_amd64.deb'
  var contents =  funcs.replace(header,{dist:dist,release:release}) + '\n\n' +
                  funcs.replace(pkgs,{pkgs:funcs.generatePkgStr(commonPkgs)}) + '\n\n' +
                  funcs.replace(node,{url:url+deb}) + '\n\n' +
                  footer

  return contents
}

var header = 'FROM {{DIST}}:{{RELEASE}}\n'+
             'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var pkgs   = 'RUN apt-get update \\\n'+
             ' && apt-get install -y --force-yes --no-install-recommends\\\n' +
             '{{PKGS}}' +
             ' && rm -rf /var/lib/apt/lists/*;'

var node   = 'RUN curl {{URL}} > node.deb \\\n' +
             ' && dpkg -i node.deb \\\n' +
             ' && rm node.deb'

var footer = 'RUN npm install -g pangyp\\\n' +
             ' && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\\\n' +
             ' && npm cache clear\\\n' +
             ' && node-gyp configure || echo ""\n\n' +
             'ENV NODE_ENV production\n' +
             'WORKDIR /usr/src/app\n' +
             'CMD ["npm","start"]'

var commonPkgs = [ 'apt-transport-https',
                   'build-essential',
                   'curl',
                   'ca-certificates',
                   'lsb-release',
                   'python-all',
                   'rlwrap']
