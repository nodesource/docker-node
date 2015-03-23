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
var dists = require('./centos_dists.js')

var commonPkgs = [ 'curl',
                   'perl',
									 'which' ]

/**
 * Define string constants
 */
var HEADER  = 'FROM {{DIST}}:{{RELEASE}}\n'+
              'MAINTAINER William Blankenship <wblankenship@nodesource.com>'

var PKGS    = 'RUN yum install -y \\\n' +
              '{{PKGS}}' +
							' && yum clean all'

var EPEL		= 'RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9\-]+\.noarch\.rpm" | sed "s/^/http:\\/\\/dl.fedoraproject.org\\/pub\\/epel\\/5\\/x86_64\\//") \\\n' +
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
