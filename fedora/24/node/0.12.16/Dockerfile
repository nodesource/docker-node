FROM nodesource/fedora24-base
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN curl -sL -o ns.rpm https://rpm.nodesource.com/pub_0.12/fc/24/x86_64/nodejs-0.12.16-1nodesource.fc24.x86_64.rpm \
 && rpm -i --nosignature --force ns.rpm \
 && rm -f ns.rpm

RUN npm install -g pangyp\
 && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\
 && npm cache clear\
 && node-gyp configure || echo ""

ENV NODE_ENV production
WORKDIR /usr/src/app
CMD ["npm","start"]