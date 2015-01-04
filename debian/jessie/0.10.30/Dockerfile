FROM debian:jessie
MAINTAINER William Blankenship <wblankenship#nodesource.com>

RUN apt-get update \
 && apt-get install -y --force-yes \
      apt-transport-https \
      build-essential \
      curl \
      lsb-release \
      python-all \
      rlwrap \
 && rm -rf /var/lib/apt/lists/*;

RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.30-1nodesource1~jessie1_amd64.deb > node.deb \
 && dpkg -i node.deb \
 && rm node.deb

RUN npm install -g node-gyp \
 && npm cache clear 

RUN node-gyp configure || echo ""

ENV NODE_ENV production
VOLUME /usr/src/app
WORKDIR /usr/src/app
CMD ["npm","start"]