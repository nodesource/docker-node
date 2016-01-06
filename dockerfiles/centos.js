var dists = require('./dists.js')
var funcs = require('./funcs.js')

module.exports = function (dist, release, project, version) {
  var self = dists[dist][release][project][version]
  var url = self.url || 'https://rpm.nodesource.com/pub/el/' + release + '/x86_64/'
  var rpm = self.rpm ||
    ((release === '6')
      ? 'nodejs-' + version + '-1nodesource.el' + release + '.x86_64.rpm'
      : 'nodejs-' + version + '-1nodesource.el' + release + '.' + dist + '.x86_64.rpm')
  var name = 'nodesource/centos' + release + '-base'
  var contents = funcs.replace(header, {name: name}) + '\n\n'
  contents += funcs.replace(node, {url: url + rpm}) + '\n\n'
  contents += footer
  return contents
}

var header = 'FROM {{NAME}}\n' +
  'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var node = 'RUN curl -sL -o ns.rpm {{URL}} \\\n' +
  ' && rpm -i --nosignature --force ns.rpm \\\n' +
  ' && rm -f ns.rpm'

var footer = 'RUN npm install -g pangyp\\\n' +
  ' && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\\\n' +
  ' && npm cache clear\\\n' +
  ' && node-gyp configure || echo ""\n\n' +
  'ENV NODE_ENV production\n' +
  'WORKDIR /usr/src/app\n' +
  'CMD ["npm","start"]'
