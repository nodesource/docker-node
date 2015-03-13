# docker-node

Dockerfiles for building docker images with the [NodeSource Node.js](https://github.com/nodesource/distributions) binaries baked in.

# Structure

* `latest` on all images currently points to the latest 0.10 release of node
* `0.10` on all images currently points to the latest 0.10 release of node
* `0.12` on all images currently points to the latest 0.12 release of node
* `1` on all images currently points to the latest 1.X release of iojs
* `node` on all images currently points to the latest 0.12 release of node
* `iojs` on all images currently points to the latest 1.X release of iojs
* All images alias `node-[version]` and `iojs-[version]` to `[version]` for tags

## Debian-based images

* [**Debian wheezy**](https://registry.hub.docker.com/u/nodesource/wheezy/) (wheezy) - `docker pull nodesource/wheezy`
  * Node 0.10.30 - `docker pull nodesource/wheezy:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/wheezy:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/wheezy:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/wheezy:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/wheezy:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/wheezy:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/wheezy:0.10.36`
  * Node 0.12.0  - `docker pull nodesource/wheezy:0.12.0`
* [**Debian jessie**](https://registry.hub.docker.com/u/nodesource/jessie/) (jessie) - `docker pull nodesource/jessie`
  * Node 0.10.30 - `docker pull nodesource/jessie:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/jessie:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/jessie:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/jessie:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/jessie:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/jessie:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/jessie:0.10.36`
  * Node 0.12.0  - `docker pull nodesource/jessie:0.12.0`
  * iojs 1.5.0   - `docker pull nodesource/jessie:1.5.0`
  * iojs 1.5.1   - `docker pull nodesource/jessie:1.5.1`
* [**Debian sid**](https://registry.hub.docker.com/u/nodesource/sid/) (sid) - `docker pull nodesource/sid`
  * Node 0.10.30 - `docker pull nodesource/sid:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/sid:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/sid:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/sid:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/sid:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/sid:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/sid:0.10.36`
  * Node 0.12.0  - `docker pull nodesource/sid:0.12.0`
  * iojs 1.5.0   - `docker pull nodesource/sid:1.5.0`
  * iojs 1.5.1   - `docker pull nodesource/sid:1.5.1`

## Ubuntu-based images

* [**Ubuntu 12.04 LTS**](https://registry.hub.docker.com/u/nodesource/precise/) (Precise Pangolin) - `docker pull nodesource/precise`
  * Node 0.10.30 - `docker pull nodesource/precise:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/precise:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/precise:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/precise:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/precise:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/precise:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/precise:0.10.36`
  * Node 0.12.0  - `docker pull nodesource/precise:0.12.0`
* [**Ubuntu 14.04 LTS**](https://registry.hub.docker.com/u/nodesource/trusty/) (Trusty Tahr) - `docker pull nodesource/trusty`
  * Node 0.10.30 - `docker pull nodesource/trusty:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/trusty:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/trusty:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/trusty:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/trusty:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/trusty:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/trusty:0.10.36`
  * Node 0.12.0  - `docker pull nodesource/trusty:0.12.0`
  * iojs 1.5.0   - `docker pull nodesource/trusty:1.5.0`
  * iojs 1.5.1   - `docker pull nodesource/trusty:1.5.1`
* [**Ubuntu 14.10**](https://registry.hub.docker.com/u/nodesource/utopic/)  (Utopic Unicorn) - `docker pull nodesource/utopic`
  * Node 0.10.32 - `docker pull nodesource/utopic:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/utopic:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/utopic:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/utopic:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/utopic:0.10.36`
  * Node 0.12.0  - `docker pull nodesource/utopic:0.12.0`
  * iojs 1.5.0   - `docker pull nodesource/utopic:1.5.0`
  * iojs 1.5.1   - `docker pull nodesource/utopic:1.5.1`
