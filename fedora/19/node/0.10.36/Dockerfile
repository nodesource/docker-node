FROM fedora:19
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN yum install -y \
      curl \
      git \
      perl \
      which \
 && yum clean all

RUN curl -sL -o ns.rpm https://rpm.nodesource.com/pub/fc/19/x86_64/nodejs-0.10.36-1nodesource.fc19.x86_64.rpm \
 && rpm -i --nosignature --force ns.rpm \
 && rm -f ns.rpm

RUN npm install -g pangyp\
 && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\
 && npm cache clear\
 && node-gyp configure || echo ""

ENV NODE_ENV production
WORKDIR /usr/src/app
CMD ["npm","start"]