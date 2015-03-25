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
var path  = require('path')
var fs    = require('fs')
var dists = require('./dists.js')

/**
 * Define useful functions
 */
function replace(str,keys) {
  var regex = /\{\{.+?\}\}/g
  return str.replace(regex,function(match) {
    match = match.substr(2,match.length-4).toLowerCase()
    if(!keys[match]) return 'NULL'
    return keys[match]
  })
}

function generatePkgStr(pkgs) {
  return pkgs.reduce(function(str,v){return str+='      '+v+' \\\n'},'')
}

/**
 * Main logic:
 *  + Create directory `dist/release/version`
 *  + Create `Dockerfile` from template
 *  + Write `Dockerfile` to disk under newly created directory
 */
for(dist in dists) {
  for(release in dists[dist]) {
    for(project in dists[dist][release]) {
      for(version in dists[dist][release][project]) {
        //Scope variables
        (function scope(dist,release,project,version) {
          var dir = path.join(dist,release,project,version)
          var file = path.join(dir,'Dockerfile')
          mkdir(dir,function(e) {
            if(e) return console.error(e)
            var contents = ""
            if(dist === 'ubuntu' || dist === 'debian')
              contents = genDebianContents(dist,release,project,version)
            else if(dist === 'centos')
              contents = genCentosContents(dist,release,project,version)
            else if(dist === 'fedora')
              contents = genFedoraContents(dist,release,project,version)
            else return console.log("Unknown: "+dir)
            fs.writeFile(file,contents,function(e) {
              if(e) return console.error(e)
              console.log('Wrote: '+file)
            })
            fs.symlink('../../../../README.md',path.join(dir,'README.md'),function(e) {
            })
          })
        })(dist,release,project,version)
      }
    }
  }
}

function genDebianContents(dist,release,project,version) {
  var HEADER  = 'FROM {{DIST}}:{{RELEASE}}\n'+
                'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

  var PKGS    = 'RUN apt-get update \\\n'+
                ' && apt-get install -y --force-yes \\\n' +
                '{{PKGS}}' +
                ' && rm -rf /var/lib/apt/lists/*;'

  var NODE    = 'RUN curl {{URL}} > node.deb \\\n' +
                ' && dpkg -i node.deb \\\n' +
                ' && rm node.deb'

  var FOOTER  = 'RUN npm install -g pangyp\\\n' +
                ' && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\\\n' +
                ' && npm cache clear\\\n' +
                ' && node-gyp configure || echo ""\n\n' +
                'ENV NODE_ENV production\n' +
                'WORKDIR /usr/src/app\n' +
                'CMD ["npm","start"]'

  var commonPkgs = [  'apt-transport-https',
                      'build-essential',
                      'curl',
                      'lsb-release',
                      'python-all',
                      'rlwrap']

  var url = dists[dist][release][project][version].url || 'https://deb.nodesource.com/node/pool/main/n/nodejs/'
  var deb = dists[dist][release][project][version].deb || 'nodejs_'+version+'-1nodesource1~'+release+'1_amd64.deb'
  var contents =  replace(HEADER,{dist:dist,release:release}) + '\n\n' +
                  replace(PKGS,{pkgs:generatePkgStr(commonPkgs)}) + '\n\n' +
                  replace(NODE,{url:url+deb}) + '\n\n' +
                  FOOTER

  return contents;
}

function genCentosContents(dist,release,project,version) {
  var HEADER  = 'FROM {{DIST}}:{{RELEASE}}\n'+
                'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

  var PKGS    = 'RUN yum install -y \\\n' +
                '{{PKGS}}' +
                ' && yum clean all'

  var EPEL    = 'RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9\-]+\.noarch\.rpm" | sed "s/^/http:\\/\\/dl.fedoraproject.org\\/pub\\/epel\\/5\\/x86_64\\//") \\\n' +
                ' && yum install -y python26 \\\n' +
                ' && yum clean all'

  var PYTHON  = 'ENV PYTHON python2.6'

  var NODE    = 'RUN curl -sL -o ns.rpm {{URL}} \\\n' +
                ' && rpm -i --nosignature --force ns.rpm \\\n' +
                ' && rm -f ns.rpm'

  var FOOTER  = 'RUN npm install -g pangyp\\\n' +
                ' && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\\\n' +
                ' && npm cache clear\\\n' +
                ' && node-gyp configure || echo ""\n\n' +
                'ENV NODE_ENV production\n' +
                'WORKDIR /usr/src/app\n' +
                'CMD ["npm","start"]'

  var commonPkgs = [ 'curl',
                     'perl',
                     'which' ]

  var self = dists[dist][release][project][version]
  var url = self.url || 'https://rpm.nodesource.com/pub/el/'+release+'/x86_64/'
  var rpm = self.rpm ||
            (release === '6') ?
            'nodejs-'+version+'-1nodesource.el'+release+'.x86_64.rpm' :
            'nodejs-'+version+'-1nodesource.el'+release+'.'+dist+'.x86_64.rpm'
  var contents = replace(HEADER,{dist:dist,release:release}) + '\n\n'
  contents+= replace(PKGS,{pkgs:generatePkgStr(commonPkgs)}) + '\n\n'
  if(self.epel) {
    contents+= EPEL + '\n\n'
    contents+= PYTHON + '\n\n'
  }
  contents+= replace(NODE,{url:url+rpm}) + '\n\n'
  contents+= FOOTER
  return contents
}

function genFedoraContents(dist,release,project,version) {
  var HEADER  = 'FROM {{DIST}}:{{RELEASE}}\n'+
                'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

  var PKGS    = 'RUN yum install -y \\\n' +
                '{{PKGS}}' +
                ' && yum clean all'

  var EPEL    = 'RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9\-]+\.noarch\.rpm" | sed "s/^/http:\\/\\/dl.fedoraproject.org\\/pub\\/epel\\/5\\/x86_64\\//") \\\n' +
                ' && yum install -y python26 \\\n' +
                ' && yum clean all'

  var PYTHON  = 'ENV PYTHON python2.6'

  var NODE    = 'RUN curl -sL -o ns.rpm {{URL}} \\\n' +
                ' && rpm -i --nosignature --force ns.rpm \\\n' +
                ' && rm -f ns.rpm'

  var FOOTER  = 'RUN npm install -g pangyp\\\n' +
                ' && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\\\n' +
                ' && npm cache clear\\\n' +
                ' && node-gyp configure || echo ""\n\n' +
                'ENV NODE_ENV production\n' +
                'WORKDIR /usr/src/app\n' +
                'CMD ["npm","start"]'

  var commonPkgs = [ 'curl',
                     'perl',
                     'which' ]

  var self = dists[dist][release][project][version]
  var url = self.url || 'https://rpm.nodesource.com/pub/fc/'+release+'/x86_64/'
  var rpm = self.rpm || 'nodejs-'+version+'-1nodesource.fc'+release+'.x86_64.rpm'
  var contents = replace(HEADER,{dist:dist,release:release}) + '\n\n'
  contents+= replace(PKGS,{pkgs:generatePkgStr(commonPkgs)}) + '\n\n'
  if(self.epel) {
    contents+= EPEL + '\n\n'
    contents+= PYTHON + '\n\n'
  }
  contents+= replace(NODE,{url:url+rpm}) + '\n\n'
  contents+= FOOTER
  return contents
}
