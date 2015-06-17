# docker-node

Dockerfiles for building docker images with the [NodeSource Node.js](https://github.com/nodesource/distributions) binaries baked in.

# Structure

* `latest` on all images currently points to the latest 0.10 release of node
* `0.10` on all images currently points to the latest 0.10 release of node
* `0.12` on all images currently points to the latest 0.12 release of node
* `iojs` on all images currently points to the latest 1.X.Y release of iojs
* `iojs-1.3` on all images currently points to the latest 1.3.Y release of iojs
* `iojs-1.4` on all images currently points to the latest 1.4.Y release of iojs
* `iojs-1.5` on all images currently points to the latest 1.5.Y release of iojs
* `iojs-1.6` on all images currently points to the latest 1.6.Y release of iojs
* `iojs-1.7` on all images currently points to the latest 1.7.Y release of iojs
* `iojs-1.8` on all images currently points to the latest 1.8.Y release of iojs

## Debian-based images

* [**Debian wheezy**](https://registry.hub.docker.com/u/nodesource/wheezy/) - `docker pull nodesource/wheezy`
  * Node 0.10.30 - `docker pull nodesource/wheezy:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/wheezy:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/wheezy:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/wheezy:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/wheezy:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/wheezy:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/wheezy:0.10.36`
  * Node 0.10.37 - `docker pull nodesource/wheezy:0.10.37`
  * Node 0.10.38 - `docker pull nodesource/wheezy:0.10.38`
  * Node 0.12.0 - `docker pull nodesource/wheezy:0.12.0`
  * Node 0.12.2 - `docker pull nodesource/wheezy:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/wheezy:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/wheezy:0.12.4`
* [**Debian jessie**](https://registry.hub.docker.com/u/nodesource/jessie/) - `docker pull nodesource/jessie`
  * Node 0.10.30 - `docker pull nodesource/jessie:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/jessie:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/jessie:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/jessie:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/jessie:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/jessie:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/jessie:0.10.36`
  * Node 0.10.37 - `docker pull nodesource/jessie:0.10.37`
  * Node 0.10.38 - `docker pull nodesource/jessie:0.10.38`
  * Node 0.12.0 - `docker pull nodesource/jessie:0.12.0`
  * Node 0.12.2 - `docker pull nodesource/jessie:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/jessie:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/jessie:0.12.4`
  * iojs 1.3.0 - `docker pull nodesource/jessie:iojs-1.3.0`
  * iojs 1.4.1 - `docker pull nodesource/jessie:iojs-1.4.1`
  * iojs 1.4.2 - `docker pull nodesource/jessie:iojs-1.4.2`
  * iojs 1.4.3 - `docker pull nodesource/jessie:iojs-1.4.3`
  * iojs 1.5.0 - `docker pull nodesource/jessie:iojs-1.5.0`
  * iojs 1.5.1 - `docker pull nodesource/jessie:iojs-1.5.1`
  * iojs 1.6.1 - `docker pull nodesource/jessie:iojs-1.6.1`
  * iojs 1.6.2 - `docker pull nodesource/jessie:iojs-1.6.2`
  * iojs 1.6.3 - `docker pull nodesource/jessie:iojs-1.6.3`
  * iojs 1.6.4 - `docker pull nodesource/jessie:iojs-1.6.4`
  * iojs 1.7.1 - `docker pull nodesource/jessie:iojs-1.7.1`
  * iojs 1.8.1 - `docker pull nodesource/jessie:iojs-1.8.1`
* [**Debian sid**](https://registry.hub.docker.com/u/nodesource/sid/) - `docker pull nodesource/sid`
  * Node 0.10.30 - `docker pull nodesource/sid:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/sid:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/sid:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/sid:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/sid:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/sid:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/sid:0.10.36`
  * Node 0.10.37 - `docker pull nodesource/sid:0.10.37`
  * Node 0.10.38 - `docker pull nodesource/sid:0.10.38`
  * Node 0.12.0 - `docker pull nodesource/sid:0.12.0`
  * Node 0.12.2 - `docker pull nodesource/sid:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/sid:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/sid:0.12.4`
  * iojs 1.3.0 - `docker pull nodesource/sid:iojs-1.3.0`
  * iojs 1.4.1 - `docker pull nodesource/sid:iojs-1.4.1`
  * iojs 1.4.2 - `docker pull nodesource/sid:iojs-1.4.2`
  * iojs 1.4.3 - `docker pull nodesource/sid:iojs-1.4.3`
  * iojs 1.5.0 - `docker pull nodesource/sid:iojs-1.5.0`
  * iojs 1.5.1 - `docker pull nodesource/sid:iojs-1.5.1`
  * iojs 1.6.1 - `docker pull nodesource/sid:iojs-1.6.1`
  * iojs 1.6.2 - `docker pull nodesource/sid:iojs-1.6.2`
  * iojs 1.6.3 - `docker pull nodesource/sid:iojs-1.6.3`
  * iojs 1.6.4 - `docker pull nodesource/sid:iojs-1.6.4`
  * iojs 1.7.1 - `docker pull nodesource/sid:iojs-1.7.1`
  * iojs 1.8.1 - `docker pull nodesource/sid:iojs-1.8.1`

## Ubuntu-based images

* [**Ubuntu precise**](https://registry.hub.docker.com/u/nodesource/precise/) - `docker pull nodesource/precise`
  * Node 0.10.30 - `docker pull nodesource/precise:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/precise:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/precise:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/precise:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/precise:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/precise:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/precise:0.10.36`
  * Node 0.10.37 - `docker pull nodesource/precise:0.10.37`
  * Node 0.10.38 - `docker pull nodesource/precise:0.10.38`
  * Node 0.12.0 - `docker pull nodesource/precise:0.12.0`
  * Node 0.12.2 - `docker pull nodesource/precise:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/precise:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/precise:0.12.4`
* [**Ubuntu trusty**](https://registry.hub.docker.com/u/nodesource/trusty/) - `docker pull nodesource/trusty`
  * Node 0.10.30 - `docker pull nodesource/trusty:0.10.30`
  * Node 0.10.31 - `docker pull nodesource/trusty:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/trusty:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/trusty:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/trusty:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/trusty:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/trusty:0.10.36`
  * Node 0.10.37 - `docker pull nodesource/trusty:0.10.37`
  * Node 0.10.38 - `docker pull nodesource/trusty:0.10.38`
  * Node 0.12.0 - `docker pull nodesource/trusty:0.12.0`
  * Node 0.12.2 - `docker pull nodesource/trusty:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/trusty:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/trusty:0.12.4`
  * iojs 1.3.0 - `docker pull nodesource/trusty:iojs-1.3.0`
  * iojs 1.4.1 - `docker pull nodesource/trusty:iojs-1.4.1`
  * iojs 1.4.2 - `docker pull nodesource/trusty:iojs-1.4.2`
  * iojs 1.4.3 - `docker pull nodesource/trusty:iojs-1.4.3`
  * iojs 1.5.0 - `docker pull nodesource/trusty:iojs-1.5.0`
  * iojs 1.5.1 - `docker pull nodesource/trusty:iojs-1.5.1`
  * iojs 1.6.1 - `docker pull nodesource/trusty:iojs-1.6.1`
  * iojs 1.6.2 - `docker pull nodesource/trusty:iojs-1.6.2`
  * iojs 1.6.3 - `docker pull nodesource/trusty:iojs-1.6.3`
  * iojs 1.6.4 - `docker pull nodesource/trusty:iojs-1.6.4`
  * iojs 1.7.1 - `docker pull nodesource/trusty:iojs-1.7.1`
  * iojs 1.8.1 - `docker pull nodesource/trusty:iojs-1.8.1`
* [**Ubuntu utopic**](https://registry.hub.docker.com/u/nodesource/utopic/) - `docker pull nodesource/utopic`
  * Node 0.10.32 - `docker pull nodesource/utopic:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/utopic:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/utopic:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/utopic:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/utopic:0.10.36`
  * Node 0.10.37 - `docker pull nodesource/utopic:0.10.37`
  * Node 0.10.38 - `docker pull nodesource/utopic:0.10.38`
  * Node 0.12.0 - `docker pull nodesource/utopic:0.12.0`
  * Node 0.12.2 - `docker pull nodesource/utopic:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/utopic:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/utopic:0.12.4`
  * iojs 1.3.0 - `docker pull nodesource/utopic:iojs-1.3.0`
  * iojs 1.4.1 - `docker pull nodesource/utopic:iojs-1.4.1`
  * iojs 1.4.2 - `docker pull nodesource/utopic:iojs-1.4.2`
  * iojs 1.4.3 - `docker pull nodesource/utopic:iojs-1.4.3`
  * iojs 1.5.0 - `docker pull nodesource/utopic:iojs-1.5.0`
  * iojs 1.5.1 - `docker pull nodesource/utopic:iojs-1.5.1`
  * iojs 1.6.1 - `docker pull nodesource/utopic:iojs-1.6.1`
  * iojs 1.6.2 - `docker pull nodesource/utopic:iojs-1.6.2`
  * iojs 1.6.3 - `docker pull nodesource/utopic:iojs-1.6.3`
  * iojs 1.6.4 - `docker pull nodesource/utopic:iojs-1.6.4`
  * iojs 1.7.1 - `docker pull nodesource/utopic:iojs-1.7.1`
  * iojs 1.8.1 - `docker pull nodesource/utopic:iojs-1.8.1`
* [**Ubuntu vivid**](https://registry.hub.docker.com/u/nodesource/vivid/) - `docker pull nodesource/vivid`
  * Node 0.10.38 - `docker pull nodesource/vivid:0.10.38`
  * Node 0.12.2 - `docker pull nodesource/vivid:0.12.2`
  * Node 0.12.3 - `docker pull nodesource/vivid:0.12.3`
  * Node 0.12.4 - `docker pull nodesource/vivid:0.12.4`
  * iojs 1.8.1 - `docker pull nodesource/vivid:iojs-1.8.1`

## Centos-based images

* [**Centos 5**](https://registry.hub.docker.com/u/nodesource/centos5/) - `docker pull nodesource/centos5`
  * Node 0.10.31 - `docker pull nodesource/centos5:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/centos5:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/centos5:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/centos5:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/centos5:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/centos5:0.10.36`
* [**Centos 6**](https://registry.hub.docker.com/u/nodesource/centos6/) - `docker pull nodesource/centos6`
  * Node 0.10.31 - `docker pull nodesource/centos6:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/centos6:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/centos6:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/centos6:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/centos6:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/centos6:0.10.36`
* [**Centos 7**](https://registry.hub.docker.com/u/nodesource/centos7/) - `docker pull nodesource/centos7`
  * Node 0.10.31 - `docker pull nodesource/centos7:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/centos7:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/centos7:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/centos7:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/centos7:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/centos7:0.10.36`

## Fedora-based images

* [**Fedora 20**](https://registry.hub.docker.com/u/nodesource/fedora20/) - `docker pull nodesource/fedora20`
  * Node 0.10.31 - `docker pull nodesource/fedora20:0.10.31`
  * Node 0.10.32 - `docker pull nodesource/fedora20:0.10.32`
  * Node 0.10.33 - `docker pull nodesource/fedora20:0.10.33`
  * Node 0.10.34 - `docker pull nodesource/fedora20:0.10.34`
  * Node 0.10.35 - `docker pull nodesource/fedora20:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/fedora20:0.10.36`
* [**Fedora 21**](https://registry.hub.docker.com/u/nodesource/fedora21/) - `docker pull nodesource/fedora21`
  * Node 0.10.35 - `docker pull nodesource/fedora21:0.10.35`
  * Node 0.10.36 - `docker pull nodesource/fedora21:0.10.36`

