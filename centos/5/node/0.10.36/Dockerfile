FROM centos:5
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN yum install -y \
      curl \
      git \
      perl \
      which \
 && yum clean all

RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9-]+.noarch.rpm" | sed "s/^/http:\/\/dl.fedoraproject.org\/pub\/epel\/5\/x86_64\//") \
 && yum install -y python26 git\
 && yum clean all

ENV PYTHON python2.6

RUN curl -sL -o ns.rpm https://rpm.nodesource.com/pub/el/5/x86_64/nodejs-0.10.36-1nodesource.el5.centos.x86_64.rpm \
 && rpm -i --nosignature --force ns.rpm \
 && rm -f ns.rpm

RUN npm install -g pangyp\
 && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\
 && npm cache clear\
 && node-gyp configure || echo ""

ENV NODE_ENV production
WORKDIR /usr/src/app
CMD ["npm","start"]