FROM nodesource/wheezy-base
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.3.0-1nodesource1~wheezy1_amd64.deb > node.deb \
 && dpkg -i node.deb \
 && rm node.deb

RUN npm install -g pangyp\
 && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp\
 && npm cache clear\
 && node-gyp configure || echo ""

ENV NODE_ENV production
WORKDIR /usr/src/app
CMD ["npm","start"]

RUN apt-get update \
 && apt-get upgrade -y --force-yes \
 && rm -rf /var/lib/apt/lists/*;