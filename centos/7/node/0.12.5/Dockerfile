FROM centos:7
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN yum install -y \
      curl \
      git \
      perl \
      which \
 && yum clean all

RUN curl -sL -o ns.rpm https://rpm.nodesource.com/pub_0.12/el/7/x86_64/nodejs-0.12.5-1nodesource.el7.centos.x86_64.rpm \
 && rpm -i --nosignature --force ns.rpm \
 && rm -f ns.rpm

RUN npm install -g pangyp\
 && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\
 && npm cache clear\
 && node-gyp configure || echo ""

ENV NODE_ENV production
WORKDIR /usr/src/app
CMD ["npm","start"]