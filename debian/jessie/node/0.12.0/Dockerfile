FROM debian:jessie
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN apt-get update \
 && apt-get install -y --force-yes \
      apt-transport-https \
      build-essential \
      curl \
      lsb-release \
      python-all \
      rlwrap \
 && rm -rf /var/lib/apt/lists/*;

RUN curl https://deb.nodesource.com/node012/pool/main/n/nodejs/nodejs_0.12.0-1nodesource1~jessie1_amd64.deb > node.deb \
 && dpkg -i node.deb \
 && rm node.deb

RUN npm install -g pangyp\
 && npm cache clear\
 && pangyp configure || echo ""

ENV NODE_ENV production
WORKDIR /usr/src/app
CMD ["npm","start"]