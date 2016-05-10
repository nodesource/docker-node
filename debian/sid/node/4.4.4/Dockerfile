FROM nodesource/sid-base
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.4.4-1nodesource1~sid1_amd64.deb > node.deb \
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