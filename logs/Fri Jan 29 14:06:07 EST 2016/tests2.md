# Tested image `nodesource/jessie:0.12.8`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d8325dbc2ef3
 ---> d57d24caf564
Error removing intermediate container d8325dbc2ef3: rmdriverfs: Driver aufs failed to remove root filesystem d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b: rename /var/lib/docker/aufs/mnt/d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b /var/lib/docker/aufs/mnt/d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.8-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8fe87275957b
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100 7089k  100 7089k    0     0  55.8M      0 --:--:-- --:--:-- --:--:-- 57.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.8-1nodesource1~jessie1) ...
Setting up nodejs (0.12.8-1nodesource1~jessie1) ...
 ---> 5ffcfaf70091
Error removing intermediate container d8325dbc2ef3: nosuchcontainer: no such id: d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0acdaa067aa1
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.8 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.8/node-v0.12.8.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.8/node-v0.12.8.tar.gz
[0m[91mgyp http GET[0m[91m http://nodejs.org/dist/v0.12.8/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.8/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.8/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.8',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.8
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 1c29f2fefa82
Error removing intermediate container d8325dbc2ef3: nosuchcontainer: no such id: d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b
Step 5 : ENV NODE_ENV production
 ---> Running in 3fe07543765b
 ---> 5c3a4def0b26
Error removing intermediate container d8325dbc2ef3: nosuchcontainer: no such id: d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 974e073ddb37
 ---> c82b6b85f946
Removing intermediate container 0acdaa067aa1
Removing intermediate container 3fe07543765b
Removing intermediate container 974e073ddb37
Error removing intermediate container d8325dbc2ef3: nosuchcontainer: no such id: d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b
Step 7 : CMD npm start
 ---> Running in adbcac9180df
 ---> ad1ba2283c6b
Error removing intermediate container d8325dbc2ef3: nosuchcontainer: no such id: d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 929d0b1745ec
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 4s (2365 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> a395d540f937
Removing intermediate container adbcac9180df
Removing intermediate container 929d0b1745ec
Error removing intermediate container d8325dbc2ef3: nosuchcontainer: no such id: d8325dbc2ef35f728ce4257c9547221b2e21c1e38875a5d2eff786d2b4001c1b
Successfully built a395d540f937

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test29`

Contents of dockerfile `/root/docker-node/.~tmp.test29/Dockerfile`:

```
FROM nodesource/jessie:0.12.8
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.8-test1` from `/root/docker-node/.~tmp.test29`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.8
 ---> a395d540f937
Step 2 : ENV NODE_ENV test
 ---> Running in 3e5d4745136d
 ---> e459f760876d
Removing intermediate container 3e5d4745136d
Step 3 : RUN node -v
 ---> Running in ad3a15281e5b
v0.12.8
 ---> f63ced2e33f2
Removing intermediate container ad3a15281e5b
Step 4 : RUN node -p "process.versions"
 ---> Running in 86c0a8d5972c
{ http_parser: '2.3',
  node: '0.12.8',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1p' }
 ---> 6b8c54485390
Removing intermediate container 86c0a8d5972c
Step 5 : RUN npm --version
 ---> Running in 59594482fe7e
2.14.9
 ---> 8219d5305202
Removing intermediate container 59594482fe7e
Successfully built 8219d5305202

```

# Tested image `nodesource/jessie:0.12.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 966f2ba2d2cc
 ---> 861d5afad23e
Removing intermediate container 966f2ba2d2cc
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.5-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in c6b1fdc19110
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m[0m[91m1[0m[91m0[0m[91m0[0m[91m [0m[91m5[0m[91m2[0m[91m8[0m[91m1[0m[91mk[0m[91m [0m[91m [0m[91m1[0m[91m0[0m[91m0[0m[91m [0m[91m5[0m[91m2[0m[91m8[0m[91m1[0m[91mk[0m[91m [0m[91m [0m[91m [0m[91m [0m[91m0[0m[91m [0m[91m [0m[91m   0  21.7M      0 --:--:-- --:--:-- --:--:-- 21.8M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.5-1nodesource1~jessie1) ...
Setting up nodejs (0.12.5-1nodesource1~jessie1) ...
 ---> 2798624998d2
Removing intermediate container c6b1fdc19110
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in bc75afb11b67
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.5 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.5/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.5/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.5/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.5',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.5
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> feb022619a23
Removing intermediate container bc75afb11b67
Step 5 : ENV NODE_ENV production
 ---> Running in 5daceb8d89d8
 ---> 6725bc7cfdac
Removing intermediate container 5daceb8d89d8
Step 6 : WORKDIR /usr/src/app
 ---> Running in cd98a36d3288
 ---> 855d0475486e
Removing intermediate container cd98a36d3288
Step 7 : CMD npm start
 ---> Running in dd545b92d073
 ---> 1a4ca9145605
Error removing intermediate container dd545b92d073: rmdriverfs: Driver aufs failed to remove root filesystem dd545b92d073a6585d34e02a8c11bb489bdb1e35236c7f65a4d87ed71eed231c: rename /var/lib/docker/aufs/mnt/dd545b92d073a6585d34e02a8c11bb489bdb1e35236c7f65a4d87ed71eed231c /var/lib/docker/aufs/mnt/dd545b92d073a6585d34e02a8c11bb489bdb1e35236c7f65a4d87ed71eed231c-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 8621f4c93e00
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1798 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 16f51c031122
Error removing intermediate container dd545b92d073: nosuchcontainer: no such id: dd545b92d073a6585d34e02a8c11bb489bdb1e35236c7f65a4d87ed71eed231c
Successfully built 16f51c031122

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test26`

Contents of dockerfile `/root/docker-node/.~tmp.test26/Dockerfile`:

```
FROM nodesource/jessie:0.12.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.5-test1` from `/root/docker-node/.~tmp.test26`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.5
 ---> 16f51c031122
Step 2 : ENV NODE_ENV test
 ---> Running in 9cc3a26c1ee5
 ---> af04767c943f
Removing intermediate container 9cc3a26c1ee5
Step 3 : RUN node -v
 ---> Running in 9447724b4e89
v0.12.5
 ---> 7ab847078ebb
Removing intermediate container 9447724b4e89
Step 4 : RUN node -p "process.versions"
 ---> Running in c5d91d77a25e
{ http_parser: '2.3',
  node: '0.12.5',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> d219da196da1
Error removing intermediate container c5d91d77a25e: rmdriverfs: Driver aufs failed to remove root filesystem c5d91d77a25e7c6eed0bcfd83d8ccf278a92504a1a14da307109829def5a5d27: rename /var/lib/docker/aufs/mnt/c5d91d77a25e7c6eed0bcfd83d8ccf278a92504a1a14da307109829def5a5d27 /var/lib/docker/aufs/mnt/c5d91d77a25e7c6eed0bcfd83d8ccf278a92504a1a14da307109829def5a5d27-removing: device or resource busy
Step 5 : RUN npm --version
 ---> Running in 55e008fb7eb6
2.11.2
 ---> 273bb94097c5
Error removing intermediate container c5d91d77a25e: nosuchcontainer: no such id: c5d91d77a25e7c6eed0bcfd83d8ccf278a92504a1a14da307109829def5a5d27
Successfully built 273bb94097c5

```

# Tested image `nodesource/jessie:0.12.9`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7f02ab1dc5dc
 ---> 13e6d00e0ab8
Removing intermediate container 7f02ab1dc5dc
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.9-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6d80747429f5
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6935k  100 6935k    0    [0m[91m 0  26.1M      0 --:--:-- --:--:-- --:--:-- 26.2M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.9-1nodesource1~jessie1) ...
Setting up nodejs (0.12.9-1nodesource1~jessie1) ...
 ---> b18cc7b422f9
Removing intermediate container 6d80747429f5
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 8e6804dcc5fe
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.9 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.9/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.9/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp[0m[91m info[0m[91m spawn args   'make',
gyp info spawn args   '-I',
gyp[0m[91m info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info[0m[91m spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.9/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.9',
gyp info[0m[91m spawn args   '-Druntime=node',
[0m[91mgyp info [0m[91mspawn args[0m[91m   '-Dmodule_root_dir=/',
gyp [0m[91minfo spawn args   '--depth=.',
gyp [0m[91minfo spawn args   '--no-parallel',
gyp info [0m[91mspawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR![0m[91m stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp [0m[91mERR! stack[0m[91m     at ChildProcess.emit (events.js:110:17)
gyp ERR! [0m[91mstack     at Process.ChildProcess._handle.onexit (child_process.js:1075:12)
[0m[91mgyp [0m[91mERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.9
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> c74760886018
Removing intermediate container 8e6804dcc5fe
Step 5 : ENV NODE_ENV production
 ---> Running in 8da21d513fff
 ---> 413963d7e753
Removing intermediate container 8da21d513fff
Step 6 : WORKDIR /usr/src/app
 ---> Running in ecb5e46dd351
 ---> c4cfdfef15f8
Removing intermediate container ecb5e46dd351
Step 7 : CMD npm start
 ---> Running in 44f9e95b7f39
 ---> 1b893e8fa354
Error removing intermediate container 44f9e95b7f39: rmdriverfs: Driver aufs failed to remove root filesystem 44f9e95b7f39a22c7ea3e8a62230840a8e71f4b3d948dc14fce120cee4be9704: rename /var/lib/docker/aufs/mnt/44f9e95b7f39a22c7ea3e8a62230840a8e71f4b3d948dc14fce120cee4be9704 /var/lib/docker/aufs/mnt/44f9e95b7f39a22c7ea3e8a62230840a8e71f4b3d948dc14fce120cee4be9704-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 53ad0f4d18e3
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1581 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 6ea103e420a1
Error removing intermediate container 44f9e95b7f39: nosuchcontainer: no such id: 44f9e95b7f39a22c7ea3e8a62230840a8e71f4b3d948dc14fce120cee4be9704
Successfully built 6ea103e420a1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test3`

Contents of dockerfile `/root/docker-node/.~tmp.test3/Dockerfile`:

```
FROM nodesource/jessie:0.12.9
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.9-test1` from `/root/docker-node/.~tmp.test3`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.9
 ---> 6ea103e420a1
Step 2 : ENV NODE_ENV test
 ---> Running in 80f8f3b9532c
 ---> 6c06b1fa9f12
Removing intermediate container 80f8f3b9532c
Step 3 : RUN node -v
 ---> Running in 4edef1d19aad
v0.12.9
 ---> 77a8f94af7ba
Error removing intermediate container 4edef1d19aad: rmdriverfs: Driver aufs failed to remove root filesystem 4edef1d19aad923837248154cc3d5c083e1bc1cc2d7852785eb23250b6daf81b: rename /var/lib/docker/aufs/mnt/4edef1d19aad923837248154cc3d5c083e1bc1cc2d7852785eb23250b6daf81b /var/lib/docker/aufs/mnt/4edef1d19aad923837248154cc3d5c083e1bc1cc2d7852785eb23250b6daf81b-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 086047d1e950
{ http_parser: '2.3',
  node: '0.12.9',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1q' }
 ---> fbff70e3670f
Error removing intermediate container 4edef1d19aad: nosuchcontainer: no such id: 4edef1d19aad923837248154cc3d5c083e1bc1cc2d7852785eb23250b6daf81b
Step 5 : RUN npm --version
 ---> Running in 8e12c99148b9
2.14.9
 ---> 4fc99fc96ece
Error removing intermediate container 4edef1d19aad: nosuchcontainer: no such id: 4edef1d19aad923837248154cc3d5c083e1bc1cc2d7852785eb23250b6daf81b
Successfully built 4fc99fc96ece

```

# Tested image `nodesource/jessie:0.10.34`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 22a8b8447256
 ---> 4a39d2a91c69
Removing intermediate container 22a8b8447256
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.34-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 73c3e2579215
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 3955k  100 3955k    0     0  18.7M      0 --:--:-- --:--:-- --:--:-- 18.8M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.34-1nodesource1~jessie1) ...
Setting up nodejs (0.10.34-1nodesource1~jessie1) ...
 ---> 3cbc59695166
Removing intermediate container 73c3e2579215
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 534fb8fe3e7e
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo [0m[91mit worked if it ends with ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@0.10.34 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.34/node-v0.10.34.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.34/node-v0.10.34.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v0.10.34/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.34/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn[0m[91m python
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-f',
[0m[91mgyp [0m[91minfo[0m[91m spawn args   'make',
[0m[91mgyp[0m[91m info[0m[91m spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args[0m[91m   '-I',
gyp info[0m[91m spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.34/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.34',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info[0m[91m [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp [0m[91mERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp[0m[91m ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.34
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 693c2ca4308c
Removing intermediate container 534fb8fe3e7e
Step 5 : ENV NODE_ENV production
 ---> Running in 108590206e1a
 ---> 3d8df8867e12
Removing intermediate container 108590206e1a
Step 6 : WORKDIR /usr/src/app
 ---> Running in bbe21c41a4d0
 ---> 6cc92ff301a8
Removing intermediate container bbe21c41a4d0
Step 7 : CMD npm start
 ---> Running in 9375a8caccb8
 ---> 0ca71e5fc805
Removing intermediate container 9375a8caccb8
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 3736a70f310f
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1570 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 1851019fab8a
Removing intermediate container 3736a70f310f
Successfully built 1851019fab8a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test15`

Contents of dockerfile `/root/docker-node/.~tmp.test15/Dockerfile`:

```
FROM nodesource/jessie:0.10.34
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.34-test1` from `/root/docker-node/.~tmp.test15`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.34
 ---> 1851019fab8a
Step 2 : ENV NODE_ENV test
 ---> Running in f1c9dd55b0fa
 ---> 9634c8ac94ee
Removing intermediate container f1c9dd55b0fa
Step 3 : RUN node -v
 ---> Running in 41d11101cf01
v0.10.34
 ---> b9da7d6fa785
Removing intermediate container 41d11101cf01
Step 4 : RUN node -p "process.versions"
 ---> Running in fb79c664b943
{ http_parser: '1.0',
  node: '0.10.34',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1j' }
 ---> d816ba86a5df
Removing intermediate container fb79c664b943
Step 5 : RUN npm --version
 ---> Running in 831f9162f3e3
1.4.28
 ---> 2fcce714bc63
Removing intermediate container 831f9162f3e3
Successfully built 2fcce714bc63

```

# Tested image `nodesource/jessie:5.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2dd4e7e56f6d
 ---> 04dbb1bff0ca
Removing intermediate container 2dd4e7e56f6d
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.0.0-3nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in f1e0a362fbd2
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6949k  100 6949k    0     0  23.2M      0 --:--:-- --:--:-- --:--:--[0m[91m 23.3M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.0.0-3nodesource1~jessie1) ...
Setting up nodejs (5.0.0-3nodesource1~jessie1) ...
 ---> bed873689f09
Removing intermediate container f1e0a362fbd2
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 54df5db61186
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@5.0.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.0.0/node-v5.0.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.0.0/node-v5.0.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.0.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http [0m[91m200 http://nodejs.org/dist/v5.0.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
[0m[91mgyp info spawn args   '-Dvisibility=default',
gyp[0m[91m info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.0.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR![0m[91m node -v v5.0.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! [0m[91mnot ok 
[0m
 ---> 3ceb456eb071
Removing intermediate container 54df5db61186
Step 5 : ENV NODE_ENV production
 ---> Running in 6cb8568b4e38
 ---> 11f91d0e12d2
Removing intermediate container 6cb8568b4e38
Step 6 : WORKDIR /usr/src/app
 ---> Running in 7edde43ca4b3
 ---> 91677f4c3233
Removing intermediate container 7edde43ca4b3
Step 7 : CMD npm start
 ---> Running in 7eb4f0dacbff
 ---> 8d3e16c08c3e
Error removing intermediate container 7eb4f0dacbff: rmdriverfs: Driver aufs failed to remove root filesystem 7eb4f0dacbff587f609a5196824771451a5a1b96b84a2740a98ea0f613db1f16: rename /var/lib/docker/aufs/mnt/7eb4f0dacbff587f609a5196824771451a5a1b96b84a2740a98ea0f613db1f16 /var/lib/docker/aufs/mnt/7eb4f0dacbff587f609a5196824771451a5a1b96b84a2740a98ea0f613db1f16-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 15077996f4e3
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1622 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 02f925c23c5f
Removing intermediate container 15077996f4e3
Error removing intermediate container 7eb4f0dacbff: nosuchcontainer: no such id: 7eb4f0dacbff587f609a5196824771451a5a1b96b84a2740a98ea0f613db1f16
Successfully built 02f925c23c5f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test6`

Contents of dockerfile `/root/docker-node/.~tmp.test6/Dockerfile`:

```
FROM nodesource/jessie:5.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.0.0-test1` from `/root/docker-node/.~tmp.test6`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.0.0
 ---> 02f925c23c5f
Step 2 : ENV NODE_ENV test
 ---> Running in aa88a9dfe57a
 ---> 5b5ba16eeca9
Removing intermediate container aa88a9dfe57a
Step 3 : RUN node -v
 ---> Running in 55c9d97b0d7e
v5.0.0
 ---> 25e335f149ba
Error removing intermediate container 55c9d97b0d7e: rmdriverfs: Driver aufs failed to remove root filesystem 55c9d97b0d7e8b124d442bf7e3ab6c779f93e57648a08467066f56e87d3ed021: rename /var/lib/docker/aufs/mnt/55c9d97b0d7e8b124d442bf7e3ab6c779f93e57648a08467066f56e87d3ed021 /var/lib/docker/aufs/mnt/55c9d97b0d7e8b124d442bf7e3ab6c779f93e57648a08467066f56e87d3ed021-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 8106923562f6
{ http_parser: '2.5.0',
  node: '5.0.0',
  v8: '4.6.85.28',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '52.1',
  modules: '47',
  openssl: '1.0.2d' }
 ---> fed4d988518f
Error removing intermediate container 55c9d97b0d7e: nosuchcontainer: no such id: 55c9d97b0d7e8b124d442bf7e3ab6c779f93e57648a08467066f56e87d3ed021
Step 5 : RUN npm --version
 ---> Running in a2121fcf0f30
3.3.6
 ---> 42f78b59822a
Removing intermediate container a2121fcf0f30
Error removing intermediate container 55c9d97b0d7e: nosuchcontainer: no such id: 55c9d97b0d7e8b124d442bf7e3ab6c779f93e57648a08467066f56e87d3ed021
Successfully built 42f78b59822a

```

# Tested image `nodesource/jessie:0.10.35`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 21880b37859d
 ---> bb79db34baa5
Removing intermediate container 21880b37859d
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.35-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6d75e1aadde7
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 84 3959k  [0m[91m 84 3327k    0     0  13.4M      0 --:--:-- --:--:-- --:--:-- 13.4M100 3959k  100 3959k    0     0  15.0M      0 --:--:-- --:--:-- --:--:-- 15.0M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.35-1nodesource1~jessie1) ...
Setting up nodejs (0.10.35-1nodesource1~jessie1) ...
 ---> 8d86fb9686ef
Removing intermediate container 6d75e1aadde7
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b10f3f0726b1
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@0.10.35 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v0.10.35/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.35/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info[0m[91m spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.35/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info [0m[91mspawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.35',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.35
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 748f2aca374e
Removing intermediate container b10f3f0726b1
Step 5 : ENV NODE_ENV production
 ---> Running in cdf1abccf8ee
 ---> 054b5dc30103
Removing intermediate container cdf1abccf8ee
Step 6 : WORKDIR /usr/src/app
 ---> Running in 86a1c210f98e
 ---> a0ba63a74e0a
Removing intermediate container 86a1c210f98e
Step 7 : CMD npm start
 ---> Running in 2846dd782eb0
 ---> 755fbca2b952
Error removing intermediate container 2846dd782eb0: rmdriverfs: Driver aufs failed to remove root filesystem 2846dd782eb09725f14c66b7c8331832176673afaf22e73cab46d3549c58a14e: rename /var/lib/docker/aufs/mnt/2846dd782eb09725f14c66b7c8331832176673afaf22e73cab46d3549c58a14e /var/lib/docker/aufs/mnt/2846dd782eb09725f14c66b7c8331832176673afaf22e73cab46d3549c58a14e-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 22917983e65c
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1763 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> e57e16aae0cf
Error removing intermediate container 2846dd782eb0: nosuchcontainer: no such id: 2846dd782eb09725f14c66b7c8331832176673afaf22e73cab46d3549c58a14e
Successfully built e57e16aae0cf

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test16`

Contents of dockerfile `/root/docker-node/.~tmp.test16/Dockerfile`:

```
FROM nodesource/jessie:0.10.35
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.35-test1` from `/root/docker-node/.~tmp.test16`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.35
 ---> e57e16aae0cf
Step 2 : ENV NODE_ENV test
 ---> Running in 39dbf79446f3
 ---> b310e050a134
Removing intermediate container 39dbf79446f3
Step 3 : RUN node -v
 ---> Running in 0e4675be1ee1
v0.10.35
 ---> 99b4ccd8b4d1
Removing intermediate container 0e4675be1ee1
Step 4 : RUN node -p "process.versions"
 ---> Running in 5290c13f4432
{ http_parser: '1.0',
  node: '0.10.35',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1j' }
 ---> 518adffcec6d
Removing intermediate container 5290c13f4432
Step 5 : RUN npm --version
 ---> Running in 015171d434df
1.4.28
 ---> 0f570483eea4
Removing intermediate container 015171d434df
Successfully built 0f570483eea4

```

# Tested image `nodesource/jessie:5.1.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 64c4552dc3ce
 ---> 5f8fed1c0b5f
Removing intermediate container 64c4552dc3ce
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.1.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ae63b5d28969
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8333k  100 8333k    0     0  42.2M      0 --:--:-- --:--:-- --:--:-- 42.3M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.1.1-1nodesource1~jessie1) ...
Setting up nodejs (5.1.1-1nodesource1~jessie1) ...
 ---> b3e3537f0150
Removing intermediate container ae63b5d28969
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c398e0b4a4dd
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@5.1.1 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.1.1/node-v5.1.1.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.1.1/node-v5.1.1.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v5.1.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.1.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.1.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.1.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
[0m[91mgyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.1.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 90cbc0c2ec35
Removing intermediate container c398e0b4a4dd
Step 5 : ENV NODE_ENV production
 ---> Running in db0f4a207104
 ---> 19f003db33fc
Removing intermediate container db0f4a207104
Step 6 : WORKDIR /usr/src/app
 ---> Running in bf6c8573d1a4
 ---> 3e90ae174bad
Removing intermediate container bf6c8573d1a4
Step 7 : CMD npm start
 ---> Running in 4247962a0f3a
 ---> bb96dac79c94
Removing intermediate container 4247962a0f3a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 593e7de954e6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 4s (2020 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 52453fa5e900
Removing intermediate container 593e7de954e6
Successfully built 52453fa5e900

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test7`

Contents of dockerfile `/root/docker-node/.~tmp.test7/Dockerfile`:

```
FROM nodesource/jessie:5.1.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.1.1-test1` from `/root/docker-node/.~tmp.test7`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.1.1
 ---> 52453fa5e900
Step 2 : ENV NODE_ENV test
 ---> Running in 8007cc46172a
 ---> d11d0112d8fb
Removing intermediate container 8007cc46172a
Step 3 : RUN node -v
 ---> Running in 9ea3062349ec
v5.1.1
 ---> 60efb115a509
Error removing intermediate container 9ea3062349ec: rmdriverfs: Driver aufs failed to remove root filesystem 9ea3062349ec8505c9d02d4e90d8d87b13fd6ae2b418d556e1dc2b677da3736e: rename /var/lib/docker/aufs/diff/9ea3062349ec8505c9d02d4e90d8d87b13fd6ae2b418d556e1dc2b677da3736e /var/lib/docker/aufs/diff/9ea3062349ec8505c9d02d4e90d8d87b13fd6ae2b418d556e1dc2b677da3736e-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 1fde60ef4f01
{ http_parser: '2.6.0',
  node: '5.1.1',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 857594f49758
Error removing intermediate container 9ea3062349ec: nosuchcontainer: no such id: 9ea3062349ec8505c9d02d4e90d8d87b13fd6ae2b418d556e1dc2b677da3736e
Step 5 : RUN npm --version
 ---> Running in f43f2d7d2476
3.3.12
 ---> c3f6c617413f
Error removing intermediate container 9ea3062349ec: nosuchcontainer: no such id: 9ea3062349ec8505c9d02d4e90d8d87b13fd6ae2b418d556e1dc2b677da3736e
Successfully built c3f6c617413f

```

# Tested image `nodesource/jessie:5.4.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 1a2264a0a094
 ---> 6320e5889dfb
Removing intermediate container 1a2264a0a094
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.4.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 75c21dfa5819
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8528k  100 852[0m[91m8k    0     0  19.4M      0 --:--:-- --:--:-- --:--:-- 19.4M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.4.1-1nodesource1~jessie1) ...
Setting up nodejs (5.4.1-1nodesource1~jessie1) ...
 ---> 97d180b6a909
Removing intermediate container 75c21dfa5819
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 847727a14a8f
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m info using node@5.4.1 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.4.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.4.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.4.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.4.1',
[0m[91mgyp[0m[91m info spawn args   '-Druntime=node',
gyp [0m[91minfo[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp[0m[91m info spawn args[0m[91m   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info[0m[91m [0m[91mspawn args   '--generator-output',
gyp[0m[91m info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.4.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 8a7d62995aa4
Removing intermediate container 847727a14a8f
Step 5 : ENV NODE_ENV production
 ---> Running in 5373a8069007
 ---> 224716c3bded
Removing intermediate container 5373a8069007
Step 6 : WORKDIR /usr/src/app
 ---> Running in c49b613d3189
 ---> 44db08a43f6b
Removing intermediate container c49b613d3189
Step 7 : CMD npm start
 ---> Running in 195f3aab9a90
 ---> 54896080d052
Removing intermediate container 195f3aab9a90
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 1e0f0c1c1c24
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1476 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b513313cda13
Removing intermediate container 1e0f0c1c1c24
Successfully built b513313cda13

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test10`

Contents of dockerfile `/root/docker-node/.~tmp.test10/Dockerfile`:

```
FROM nodesource/jessie:5.4.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.4.1-test1` from `/root/docker-node/.~tmp.test10`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.4.1
 ---> b513313cda13
Step 2 : ENV NODE_ENV test
 ---> Running in f63545582835
 ---> 668e21d9a02e
Removing intermediate container f63545582835
Step 3 : RUN node -v
 ---> Running in 00677aae6b93
v5.4.1
 ---> eb6b6bba1149
Removing intermediate container 00677aae6b93
Step 4 : RUN node -p "process.versions"
 ---> Running in 0505b1e052e7
{ http_parser: '2.6.0',
  node: '5.4.1',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> b78e8aa49053
Removing intermediate container 0505b1e052e7
Step 5 : RUN npm --version
 ---> Running in c4b5a53f4138
3.3.12
 ---> 6ea58fa5b9f1
Error removing intermediate container c4b5a53f4138: rmdriverfs: Driver aufs failed to remove root filesystem c4b5a53f41383a18ea0c8678751d4b7d68b6400ccc117c6eb6f1c8b324ee8d7a: rename /var/lib/docker/aufs/mnt/c4b5a53f41383a18ea0c8678751d4b7d68b6400ccc117c6eb6f1c8b324ee8d7a /var/lib/docker/aufs/mnt/c4b5a53f41383a18ea0c8678751d4b7d68b6400ccc117c6eb6f1c8b324ee8d7a-removing: device or resource busy
Successfully built 6ea58fa5b9f1

```

# Tested image `nodesource/jessie:4.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ad3a0962d4f0
 ---> 778c7afbd317
Removing intermediate container ad3a0962d4f0
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.0.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in c0878c1fad25
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m[0m[91m100 6450k  100 6450k    0     0  20.9M      0 --:--:-- --:--:-- --:--:-- 20.9M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.0.0-1nodesource1~jessie1) ...
Setting up nodejs (4.0.0-1nodesource1~jessie1) ...
 ---> 9c171b961761
Removing intermediate container c0878c1fad25
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d938d1094231
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.0.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v4.0.0/node-v4.0.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.0.0/node-v4.0.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.0.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.0.0/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
[0m[91mgyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m info spawn args[0m[91m   'binding.gyp',
[0m[91mgyp info[0m[91m spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/4.0.0',
gyp [0m[91minfo spawn args   '-Druntime=node',
gyp info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp info spawn args[0m[91m   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo spawn args   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.0.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 431470e37e4d
Removing intermediate container d938d1094231
Step 5 : ENV NODE_ENV production
 ---> Running in 548a3deb40a6
 ---> 5dbf191cf3cf
Removing intermediate container 548a3deb40a6
Step 6 : WORKDIR /usr/src/app
 ---> Running in 3efbeb3eaa9e
 ---> e0b7ae06c2d3
Removing intermediate container 3efbeb3eaa9e
Step 7 : CMD npm start
 ---> Running in 709760fad2fa
 ---> 68e71e32f490
Removing intermediate container 709760fad2fa
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 66ac8de9a466
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 7s (1306 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 546c39bd066e
Removing intermediate container 66ac8de9a466
Successfully built 546c39bd066e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test4`

Contents of dockerfile `/root/docker-node/.~tmp.test4/Dockerfile`:

```
FROM nodesource/jessie:4.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.0.0-test1` from `/root/docker-node/.~tmp.test4`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.0.0
 ---> 546c39bd066e
Step 2 : ENV NODE_ENV test
 ---> Running in 664616c8597b
 ---> 7b974399208d
Removing intermediate container 664616c8597b
Step 3 : RUN node -v
 ---> Running in 0d849b396758
v4.0.0
 ---> e5ee106fb19d
Removing intermediate container 0d849b396758
Step 4 : RUN node -p "process.versions"
 ---> Running in 9f861a3904eb
{ http_parser: '2.5.0',
  node: '4.0.0',
  v8: '4.5.103.30',
  uv: '1.7.3',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 406576cd1422
Removing intermediate container 9f861a3904eb
Step 5 : RUN npm --version
 ---> Running in 2406d07d33f2
2.14.2
 ---> 3b6ba78d22ff
Removing intermediate container 2406d07d33f2
Successfully built 3b6ba78d22ff

```

# Tested image `nodesource/jessie:0.12.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2434e5febc3e
 ---> fd08accc5db0
Removing intermediate container 2434e5febc3e
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b5993a0aaf8b
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5178k  100 5178k    0     0  36.3M      0 --:--:-- --:--:-- --:--:-- 36.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.3-1nodesource1~jessie1) ...
Setting up nodejs (0.12.3-1nodesource1~jessie1) ...
 ---> 79469c70dda5
Removing intermediate container b5993a0aaf8b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in a5578d60cd6e
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info[0m[91m using pangyp@2.3.3
[0m[91mgyp info using node@0.12.3 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.3/SHASUMS256.txt
[0m[91mgyp[0m[91m http[0m[91m 200[0m[91m http://nodejs.org/dist/v0.12.3/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.3',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp[0m[91m info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0209f375c705
Removing intermediate container a5578d60cd6e
Step 5 : ENV NODE_ENV production
 ---> Running in 1bedcfadfb46
 ---> 2236fd3b2b94
Removing intermediate container 1bedcfadfb46
Step 6 : WORKDIR /usr/src/app
 ---> Running in b439c37c889c
 ---> 75e2bafdfa31
Removing intermediate container b439c37c889c
Step 7 : CMD npm start
 ---> Running in 41fad0a264cc
 ---> 6643261b2223
Removing intermediate container 41fad0a264cc
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6c3c255ed199
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 8s (1096 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 304dc662fd47
Removing intermediate container 6c3c255ed199
Successfully built 304dc662fd47

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test24`

Contents of dockerfile `/root/docker-node/.~tmp.test24/Dockerfile`:

```
FROM nodesource/jessie:0.12.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.3-test1` from `/root/docker-node/.~tmp.test24`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.3
 ---> 304dc662fd47
Step 2 : ENV NODE_ENV test
 ---> Running in cfde531aa9c7
 ---> 8ac76fa7702e
Error removing intermediate container cfde531aa9c7: rmdriverfs: Driver aufs failed to remove root filesystem cfde531aa9c73f0ec6b64e3984cbb174e4889db1dd3de96c839325bbc6e54f1c: rename /var/lib/docker/aufs/mnt/cfde531aa9c73f0ec6b64e3984cbb174e4889db1dd3de96c839325bbc6e54f1c /var/lib/docker/aufs/mnt/cfde531aa9c73f0ec6b64e3984cbb174e4889db1dd3de96c839325bbc6e54f1c-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in 029cbb5b63f3
v0.12.3
 ---> bbf1eb8775a2
Error removing intermediate container cfde531aa9c7: nosuchcontainer: no such id: cfde531aa9c73f0ec6b64e3984cbb174e4889db1dd3de96c839325bbc6e54f1c
Step 4 : RUN node -p "process.versions"
 ---> Running in d380dcecbadf
{ http_parser: '2.3',
  node: '0.12.3',
  v8: '3.28.71.19',
  uv: '1.5.0',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> 8e57c872b7fe
Error removing intermediate container cfde531aa9c7: nosuchcontainer: no such id: cfde531aa9c73f0ec6b64e3984cbb174e4889db1dd3de96c839325bbc6e54f1c
Step 5 : RUN npm --version
 ---> Running in af0fb1466071
2.9.1
 ---> e6ad1aa3c79a
Removing intermediate container 029cbb5b63f3
Removing intermediate container d380dcecbadf
Removing intermediate container af0fb1466071
Error removing intermediate container cfde531aa9c7: nosuchcontainer: no such id: cfde531aa9c73f0ec6b64e3984cbb174e4889db1dd3de96c839325bbc6e54f1c
Successfully built e6ad1aa3c79a

```

# Tested image `nodesource/jessie:0.12.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in b78fdf92005f
 ---> eab83446537b
Removing intermediate container b78fdf92005f
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 50d45c14ab1f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 4998k  100 4998k    0     0  34.4M      0 --:--:-- --:--:-- --:--:-- 34.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.0-1nodesource1~jessie1) ...
Setting up nodejs (0.12.0-1nodesource1~jessie1) ...
 ---> 3f89deb1abb4
Removing intermediate container 50d45c14ab1f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 221599e7ab9b
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with ok
[0m[91mgyp info [0m[91musing pangyp@2.3.3
gyp [0m[91minfo using node@0.12.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp[0m[91m info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args[0m[91m   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1067:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 6186b056074c
Removing intermediate container 221599e7ab9b
Step 5 : ENV NODE_ENV production
 ---> Running in 224ece650d71
 ---> 7bad9d094347
Removing intermediate container 224ece650d71
Step 6 : WORKDIR /usr/src/app
 ---> Running in 2e675f9fd383
 ---> 92b5cb72ace1
Removing intermediate container 2e675f9fd383
Step 7 : CMD npm start
 ---> Running in d1a6a2426373
 ---> 450374435e52
Removing intermediate container d1a6a2426373
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in cf8b016d16ed
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 10s (963 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 469d185e7df1
Removing intermediate container cf8b016d16ed
Successfully built 469d185e7df1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test22`

Contents of dockerfile `/root/docker-node/.~tmp.test22/Dockerfile`:

```
FROM nodesource/jessie:0.12.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.0-test1` from `/root/docker-node/.~tmp.test22`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.0
 ---> 469d185e7df1
Step 2 : ENV NODE_ENV test
 ---> Running in c05e556e7c1b
 ---> 69f210c270e9
Removing intermediate container c05e556e7c1b
Step 3 : RUN node -v
 ---> Running in f97814ba9ca7
v0.12.0
 ---> 1e47f4f00f8c
Removing intermediate container f97814ba9ca7
Step 4 : RUN node -p "process.versions"
 ---> Running in a8e4deb54f86
{ http_parser: '2.3',
  node: '0.12.0',
  v8: '3.28.73',
  uv: '1.0.2',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1l' }
 ---> 832eb986b3f9
Removing intermediate container a8e4deb54f86
Step 5 : RUN npm --version
 ---> Running in 71e7e790e112
2.5.1
 ---> db6f9c1464cb
Removing intermediate container 71e7e790e112
Successfully built db6f9c1464cb

```

# Tested image `nodesource/jessie:0.10.33`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 93c516d842db
 ---> 7cd98edec39d
Error removing intermediate container 93c516d842db: rmdriverfs: Driver aufs failed to remove root filesystem 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618: rename /var/lib/docker/aufs/mnt/93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618 /var/lib/docker/aufs/mnt/93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.33-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d90928a254e2
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 4048k  100 4048k    0     0  34.3M      0 --:--:-- --:--:-- --:--:-- 34.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.33-2nodesource1~jessie1) ...
Setting up nodejs (0.10.33-2nodesource1~jessie1) ...
 ---> 56bf80818656
Error removing intermediate container 93c516d842db: nosuchcontainer: no such id: 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d1d94684909a
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.33 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.33/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.33/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.33/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.33',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m
[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.33
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> ebb97f280c46
Error removing intermediate container 93c516d842db: nosuchcontainer: no such id: 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618
Step 5 : ENV NODE_ENV production
 ---> Running in 0fc0ee5e4989
 ---> 8efac2bee5ba
Removing intermediate container d90928a254e2
Removing intermediate container d1d94684909a
Removing intermediate container 0fc0ee5e4989
Error removing intermediate container 93c516d842db: nosuchcontainer: no such id: 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618
Step 6 : WORKDIR /usr/src/app
 ---> Running in faf95b6e59d7
 ---> 39f932ad9873
Error removing intermediate container 93c516d842db: nosuchcontainer: no such id: 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618
Step 7 : CMD npm start
 ---> Running in 7c1a57b3f6cd
 ---> e5be31ed53e1
Error removing intermediate container 93c516d842db: nosuchcontainer: no such id: 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 59573e09c7e3
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 13s (709 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> aba07c5e9c8a
Removing intermediate container 59573e09c7e3
Error removing intermediate container 93c516d842db: nosuchcontainer: no such id: 93c516d842dbb703a3a20bca7877683cabce8386a79f9c244f6d4c0202412618
Successfully built aba07c5e9c8a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test14`

Contents of dockerfile `/root/docker-node/.~tmp.test14/Dockerfile`:

```
FROM nodesource/jessie:0.10.33
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.33-test1` from `/root/docker-node/.~tmp.test14`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.33
 ---> aba07c5e9c8a
Step 2 : ENV NODE_ENV test
 ---> Running in 5c00c1b53f6d
 ---> 0d40647d72d9
Removing intermediate container 5c00c1b53f6d
Step 3 : RUN node -v
 ---> Running in c3a25ba626ea
v0.10.33
 ---> 9ccd173aeec7
Removing intermediate container c3a25ba626ea
Step 4 : RUN node -p "process.versions"
 ---> Running in d91db96f0925
{ http_parser: '1.0',
  node: '0.10.33',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.29',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1j' }
 ---> befc3ed4b01f
Error removing intermediate container d91db96f0925: rmdriverfs: Driver aufs failed to remove root filesystem d91db96f0925191ae7a72fd6555c5158f1e76aabb446d5295c8afccd2b7a7a3b: rename /var/lib/docker/aufs/mnt/d91db96f0925191ae7a72fd6555c5158f1e76aabb446d5295c8afccd2b7a7a3b /var/lib/docker/aufs/mnt/d91db96f0925191ae7a72fd6555c5158f1e76aabb446d5295c8afccd2b7a7a3b-removing: device or resource busy
Step 5 : RUN npm --version
 ---> Running in 1f2a8f4a2661
1.4.28
 ---> e2f90266fb84
Error removing intermediate container d91db96f0925: nosuchcontainer: no such id: d91db96f0925191ae7a72fd6555c5158f1e76aabb446d5295c8afccd2b7a7a3b
Successfully built e2f90266fb84

```

# Tested image `nodesource/jessie:5.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 455f732e5fe3
 ---> 69c1e16b38c0
Removing intermediate container 455f732e5fe3
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7cca2bfd0a6f
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8491k  100 8491k    0     0  30.3M      0 --:--:-- --:--:-- --:--:-- 30.3M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.3.0-1nodesource1~jessie1) ...
Setting up nodejs (5.3.0-1nodesource1~jessie1) ...
 ---> 6ecf4635f8ec
Removing intermediate container 7cca2bfd0a6f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 0a8148a64cd3
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@5.3.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
gyp http 200 http://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200[0m[91m http://nodejs.org/dist/v5.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.3.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m [0m[91mERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> dd9eadb4b4ab
Removing intermediate container 0a8148a64cd3
Step 5 : ENV NODE_ENV production
 ---> Running in a7c76f624369
 ---> b16e72b8ecea
Removing intermediate container a7c76f624369
Step 6 : WORKDIR /usr/src/app
 ---> Running in 726e931cd5f3
 ---> 1124ed86345d
Removing intermediate container 726e931cd5f3
Step 7 : CMD npm start
 ---> Running in fb659a2af9c9
 ---> 4cd30e7dce03
Removing intermediate container fb659a2af9c9
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 2827772218c6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 13s (707 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> d3de37ef6a71
Removing intermediate container 2827772218c6
Successfully built d3de37ef6a71

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test9`

Contents of dockerfile `/root/docker-node/.~tmp.test9/Dockerfile`:

```
FROM nodesource/jessie:5.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.3.0-test1` from `/root/docker-node/.~tmp.test9`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.3.0
 ---> d3de37ef6a71
Step 2 : ENV NODE_ENV test
 ---> Running in dccab309b56a
 ---> aea4986a1a59
Removing intermediate container dccab309b56a
Step 3 : RUN node -v
 ---> Running in 7965af428dd1
v5.3.0
 ---> ed6ede44596b
Error removing intermediate container 7965af428dd1: rmdriverfs: Driver aufs failed to remove root filesystem 7965af428dd12a2c5e9a5b4b22a9932a468ea531830ecc5c9ce6ccb9ef8de672: rename /var/lib/docker/aufs/mnt/7965af428dd12a2c5e9a5b4b22a9932a468ea531830ecc5c9ce6ccb9ef8de672 /var/lib/docker/aufs/mnt/7965af428dd12a2c5e9a5b4b22a9932a468ea531830ecc5c9ce6ccb9ef8de672-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 96cb38b88b4a
{ http_parser: '2.6.0',
  node: '5.3.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> c8f61e9d5169
Error removing intermediate container 7965af428dd1: nosuchcontainer: no such id: 7965af428dd12a2c5e9a5b4b22a9932a468ea531830ecc5c9ce6ccb9ef8de672
Step 5 : RUN npm --version
 ---> Running in ee9edc6432a1
3.3.12
 ---> bdba9f7d36fb
Error removing intermediate container 7965af428dd1: nosuchcontainer: no such id: 7965af428dd12a2c5e9a5b4b22a9932a468ea531830ecc5c9ce6ccb9ef8de672
Successfully built bdba9f7d36fb

```

# Tested image `nodesource/jessie:0.10.39`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 60bbb2f3d9f8
 ---> 366180e598db
Error removing intermediate container 60bbb2f3d9f8: rmdriverfs: Driver aufs failed to remove root filesystem 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550: rename /var/lib/docker/aufs/diff/60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550 /var/lib/docker/aufs/diff/60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.39-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 0098985c86b0
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m[0mSelecting previously unselected package nodejs.
[91m100 3964k  100 3964k    0     0  20.5M      0 --:--:-- --:--:-- --:--:-- 20.7M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.39-1nodesource1~jessie1) ...
Setting up nodejs (0.10.39-1nodesource1~jessie1) ...
 ---> 436ab99760f6
Error removing intermediate container 60bbb2f3d9f8: nosuchcontainer: no such id: 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 7894ce2e53f1
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.39 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.39/node-v0.10.39.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.39/node-v0.10.39.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.39/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.39/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.39/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.39',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m
[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.39
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> a2c801c634e4
Error removing intermediate container 60bbb2f3d9f8: nosuchcontainer: no such id: 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550
Step 5 : ENV NODE_ENV production
 ---> Running in 02f54ab4218a
 ---> 22ffe25c9c9f
Error removing intermediate container 60bbb2f3d9f8: nosuchcontainer: no such id: 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550
Step 6 : WORKDIR /usr/src/app
 ---> Running in fbbca271f037
 ---> c9135f1183d5
Removing intermediate container fbbca271f037
Error removing intermediate container 60bbb2f3d9f8: nosuchcontainer: no such id: 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550
Step 7 : CMD npm start
 ---> Running in 016b804d4768
 ---> 45c29b2771f0
Removing intermediate container 016b804d4768
Error removing intermediate container 60bbb2f3d9f8: nosuchcontainer: no such id: 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f266eda5e2f1
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 11s (818 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0cc411c7ccc8
Removing intermediate container 7894ce2e53f1
Removing intermediate container 02f54ab4218a
Removing intermediate container f266eda5e2f1
Error removing intermediate container 60bbb2f3d9f8: nosuchcontainer: no such id: 60bbb2f3d9f8ae0ace580aa837a71925cc7d82b4b1b9a46d2f519a180dd46550
Successfully built 0cc411c7ccc8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test20`

Contents of dockerfile `/root/docker-node/.~tmp.test20/Dockerfile`:

```
FROM nodesource/jessie:0.10.39
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.39-test1` from `/root/docker-node/.~tmp.test20`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.39
 ---> 0cc411c7ccc8
Step 2 : ENV NODE_ENV test
 ---> Running in 736940175b37
 ---> 1d7e855b4bb1
Removing intermediate container 736940175b37
Step 3 : RUN node -v
 ---> Running in 0efcd4215aa7
v0.10.39
 ---> ac04eee48e02
Error removing intermediate container 0efcd4215aa7: rmdriverfs: Driver aufs failed to remove root filesystem 0efcd4215aa765588f79bab6b81fbc33735c77f64b4482374ba1a04fb7ec3373: rename /var/lib/docker/aufs/mnt/0efcd4215aa765588f79bab6b81fbc33735c77f64b4482374ba1a04fb7ec3373 /var/lib/docker/aufs/mnt/0efcd4215aa765588f79bab6b81fbc33735c77f64b4482374ba1a04fb7ec3373-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in e684db65f768
{ http_parser: '1.0',
  node: '0.10.39',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1o' }
 ---> aeb4e288d00a
Error removing intermediate container 0efcd4215aa7: nosuchcontainer: no such id: 0efcd4215aa765588f79bab6b81fbc33735c77f64b4482374ba1a04fb7ec3373
Step 5 : RUN npm --version
 ---> Running in edff2c901b89
1.4.28
 ---> adee85868b33
Removing intermediate container edff2c901b89
Error removing intermediate container 0efcd4215aa7: nosuchcontainer: no such id: 0efcd4215aa765588f79bab6b81fbc33735c77f64b4482374ba1a04fb7ec3373
Successfully built adee85868b33

```

# Tested image `nodesource/jessie:5.5.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 46281e61e9d0
 ---> f31bd7d10c81
Removing intermediate container 46281e61e9d0
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.5.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 151787f2537b
[91m  % Tot[0m[91mal    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 64 8534k   64 5487k    0     0[0m[91m  19.0M      0 --:--:-- --:--:-- --:--:-- 19.0M100 8534k  100 8534k    0     0  11.4M      0 --:--:-- --:--:-- --:--:-- 11.4M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.5.0-1nodesource1~jessie1) ...
Setting up nodejs (5.5.0-1nodesource1~jessie1) ...
 ---> b4f63dbd5eca
Removing intermediate container 151787f2537b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 65803231f634
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@5.5.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.5.0/node-v5.5.0.tar.gz
[0m[91mgyp http 200[0m[91m http://nodejs.org/dist/v5.5.0/node-v5.5.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v5.5.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http [0m[91m200 http://nodejs.org/dist/v5.5.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info [0m[91mspawn args   '-I',
gyp info spawn args[0m[91m   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info [0m[91mspawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.5.0/common.gypi',
gyp info[0m[91m spawn args   '-Dlibrary=shared_library',
gyp info[0m[91m spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.5.0',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp[0m[91m info spawn args   'build',
gyp info[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:100:13)
gyp ERR! stack     at ChildProcess.emit (events.js:185:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.5.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 3d0dd6e5e6f6
Removing intermediate container 65803231f634
Step 5 : ENV NODE_ENV production
 ---> Running in 3cf9e48776ed
 ---> 1e8b7846b1db
Removing intermediate container 3cf9e48776ed
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6b8da031f5d3
 ---> 164a436f41ce
Removing intermediate container 6b8da031f5d3
Step 7 : CMD npm start
 ---> Running in ef6fe0a54b02
 ---> 3c72c4b92f57
Removing intermediate container ef6fe0a54b02
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a51919c47d1e
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 13s (726 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 9c93b36e981c
Removing intermediate container a51919c47d1e
Successfully built 9c93b36e981c

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test1`

Contents of dockerfile `/root/docker-node/.~tmp.test1/Dockerfile`:

```
FROM nodesource/jessie:5.5.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.5.0-test1` from `/root/docker-node/.~tmp.test1`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.5.0
 ---> 9c93b36e981c
Step 2 : ENV NODE_ENV test
 ---> Running in 60032bc6d962
 ---> b1143de727db
Removing intermediate container 60032bc6d962
Step 3 : RUN node -v
 ---> Running in 63c4046ceea5
v5.5.0
 ---> 495ad73cb3e9
Removing intermediate container 63c4046ceea5
Step 4 : RUN node -p "process.versions"
 ---> Running in 198295610f86
{ http_parser: '2.6.0',
  node: '5.5.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> abf0aee73b7d
Removing intermediate container 198295610f86
Step 5 : RUN npm --version
 ---> Running in 9ffaa5e37aa2
3.3.12
 ---> 14a7f5c2182c
Removing intermediate container 9ffaa5e37aa2
Successfully built 14a7f5c2182c

```

# Tested image `nodesource/jessie:0.12.7`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 19ad901242eb
 ---> 36e21ddf55b5
Error removing intermediate container 19ad901242eb: rmdriverfs: Driver aufs failed to remove root filesystem 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023: rename /var/lib/docker/aufs/mnt/19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023 /var/lib/docker/aufs/mnt/19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.7-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ac735b29cb3b
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0mSelecting previously unselected package nodejs.
[91m100 5285k  100 5285k    0     0  32.0M      0 --:--:-- --:--:-- --:--:-- 32.2M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.7-1nodesource1~jessie1) ...
Setting up nodejs (0.12.7-1nodesource1~jessie1) ...
 ---> cfc276745994
Error removing intermediate container 19ad901242eb: nosuchcontainer: no such id: 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in bc68e7ec386a
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.12.7 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.7/node-v0.12.7.tar.gz
[0m[91mgyp http [0m[91mGET http://nodejs.org/dist/v0.12.7/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.7/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.7/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.7',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.7
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7104078c07d3
Removing intermediate container bc68e7ec386a
Error removing intermediate container 19ad901242eb: nosuchcontainer: no such id: 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023
Step 5 : ENV NODE_ENV production
 ---> Running in 25ab576ccb84
 ---> ee2126b7ea92
Removing intermediate container 25ab576ccb84
Error removing intermediate container 19ad901242eb: nosuchcontainer: no such id: 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023
Step 6 : WORKDIR /usr/src/app
 ---> Running in 5c1eaa6d1934
 ---> 6e11ba881e69
Removing intermediate container ac735b29cb3b
Removing intermediate container 5c1eaa6d1934
Error removing intermediate container 19ad901242eb: nosuchcontainer: no such id: 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023
Step 7 : CMD npm start
 ---> Running in c627f057931e
 ---> da7d4a6ca404
Error removing intermediate container 19ad901242eb: nosuchcontainer: no such id: 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 09fd05493601
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 12s (789 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 42f3eb1b0fc1
Error removing intermediate container 19ad901242eb: nosuchcontainer: no such id: 19ad901242eb8e33a17a1fd9a08496778b8d5200402ddf5a26b0b039a0c9c023
Successfully built 42f3eb1b0fc1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test28`

Contents of dockerfile `/root/docker-node/.~tmp.test28/Dockerfile`:

```
FROM nodesource/jessie:0.12.7
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.7-test1` from `/root/docker-node/.~tmp.test28`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.7
 ---> 42f3eb1b0fc1
Step 2 : ENV NODE_ENV test
 ---> Running in 08373a71646c
 ---> 1e43557aa67d
Removing intermediate container 08373a71646c
Step 3 : RUN node -v
 ---> Running in 2c5429437130
v0.12.7
 ---> 8dd1dd794d8c
Error removing intermediate container 2c5429437130: rmdriverfs: Driver aufs failed to remove root filesystem 2c5429437130a056008dcf27de183a201626cc8382d6f64b6f5a8e4976296436: rename /var/lib/docker/aufs/mnt/2c5429437130a056008dcf27de183a201626cc8382d6f64b6f5a8e4976296436 /var/lib/docker/aufs/mnt/2c5429437130a056008dcf27de183a201626cc8382d6f64b6f5a8e4976296436-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in f68c80d78b7e
{ http_parser: '2.3',
  node: '0.12.7',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1p' }
 ---> c395b1172582
Error removing intermediate container 2c5429437130: nosuchcontainer: no such id: 2c5429437130a056008dcf27de183a201626cc8382d6f64b6f5a8e4976296436
Step 5 : RUN npm --version
 ---> Running in f831caffd73e
2.11.3
 ---> 816d52f66340
Error removing intermediate container 2c5429437130: nosuchcontainer: no such id: 2c5429437130a056008dcf27de183a201626cc8382d6f64b6f5a8e4976296436
Successfully built 816d52f66340

```

# Tested image `nodesource/jessie:0.10.40`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9878b117d4e1
 ---> 9e61d703964f
Removing intermediate container 9878b117d4e1
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.40-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 30166ad05c57
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 3964k [0m[91m 100 3964k    0     0  17.5M      0 --:--:-- --:--:-- --:--:-- 17.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.40-1nodesource1~jessie1) ...
Setting up nodejs (0.10.40-1nodesource1~jessie1) ...
 ---> 7d8c6c69efd0
Removing intermediate container 30166ad05c57
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in efb524924802
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.40 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz
[0m[91mgyp[0m[91m http [0m[91m200[0m[91m http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.40/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.40/SHASUMS256.txt
[0m[91mgyp info [0m[91mspawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp[0m[91m [0m[91minfo spawn args   'binding.gyp',
[0m[91mgyp[0m[91m info spawn args[0m[91m   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
[0m[91mgyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp[0m[91m info spawn args   '/root/.node-gyp/0.10.40/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.40',
gyp info[0m[91m [0m[91mspawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp [0m[91mERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.40
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 57d613fdaf2c
Removing intermediate container efb524924802
Step 5 : ENV NODE_ENV production
 ---> Running in 09d7039e6d5b
 ---> 87973881d4b5
Removing intermediate container 09d7039e6d5b
Step 6 : WORKDIR /usr/src/app
 ---> Running in c02ea4fcad41
 ---> 92194655ecbf
Removing intermediate container c02ea4fcad41
Step 7 : CMD npm start
 ---> Running in 36683b098643
 ---> 25eed98fdb8c
Removing intermediate container 36683b098643
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0db01a93be71
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 12s (763 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b6b7477afffc
Removing intermediate container 0db01a93be71
Successfully built b6b7477afffc

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test21`

Contents of dockerfile `/root/docker-node/.~tmp.test21/Dockerfile`:

```
FROM nodesource/jessie:0.10.40
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.40-test1` from `/root/docker-node/.~tmp.test21`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.40
 ---> b6b7477afffc
Step 2 : ENV NODE_ENV test
 ---> Running in f6ff5815723f
 ---> 699ab615c3be
Removing intermediate container f6ff5815723f
Step 3 : RUN node -v
 ---> Running in 44d5d6eb0a19
v0.10.40
 ---> 973b46d0f099
Removing intermediate container 44d5d6eb0a19
Step 4 : RUN node -p "process.versions"
 ---> Running in c5c2b7ce7454
{ http_parser: '1.0',
  node: '0.10.40',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1p' }
 ---> 4a945652ec47
Removing intermediate container c5c2b7ce7454
Step 5 : RUN npm --version
 ---> Running in 4b7b704838c2
1.4.28
 ---> 0a73da1158dc
Removing intermediate container 4b7b704838c2
Successfully built 0a73da1158dc

```

# Tested image `nodesource/jessie:0.10.31`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in fc576341259a
 ---> ce4dee6230ae
Error removing intermediate container fc576341259a: rmdriverfs: Driver aufs failed to remove root filesystem fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79: rename /var/lib/docker/aufs/mnt/fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79 /var/lib/docker/aufs/mnt/fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.31-1chl1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 3425908ea9a4
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 20 3993k  [0m[91m 20  815k    0     0  5625k      0 --:--:-- --:--:-- --:--:-- 5625k[0m[91m100 3993k  100 3993k    0     0  18.3M      0 --:--:-- --:--:-- --:--:-- 18.3M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.31-1chl1~jessie1) ...
Setting up nodejs (0.10.31-1chl1~jessie1) ...
 ---> 2d4fe9b5d99d
Error removing intermediate container fc576341259a: nosuchcontainer: no such id: fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 2372cff99b1e
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.31 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.31/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v0.10.31/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp[0m[91m info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   'binding.gyp',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-f',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   'make',
[0m[91mgyp [0m[91minfo [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info [0m[91mspawn args   '-I',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '/root/.node-gyp/0.10.31/common.gypi',
[0m[91mgyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.31',
gyp info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
[0m[91mgyp[0m[91m info [0m[91mspawn args   '--depth=.',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '--no-parallel',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '--generator-output',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp [0m[91minfo spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-71-generic
[0m[91mgyp[0m[91m ERR! command "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp ERR! cwd /
gyp ERR! node -v v0.10.31
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0cc82cb9660b
Removing intermediate container 3425908ea9a4
Removing intermediate container 2372cff99b1e
Error removing intermediate container fc576341259a: nosuchcontainer: no such id: fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79
Step 5 : ENV NODE_ENV production
 ---> Running in 71c2213f6540
 ---> 5dd7ba1aa11f
Error removing intermediate container fc576341259a: nosuchcontainer: no such id: fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79
Step 6 : WORKDIR /usr/src/app
 ---> Running in 71ad17c3eedb
 ---> 0422c1b1cdd4
Error removing intermediate container fc576341259a: nosuchcontainer: no such id: fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79
Step 7 : CMD npm start
 ---> Running in 8032d7f345a2
 ---> ff63dabb2a54
Removing intermediate container 71ad17c3eedb
Removing intermediate container 8032d7f345a2
Error removing intermediate container fc576341259a: nosuchcontainer: no such id: fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 7a5dff8ee8cb
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 13s (722 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> e43e0dc587c1
Error removing intermediate container fc576341259a: nosuchcontainer: no such id: fc576341259a9a08c7c605b62ba1dc15d7ceddb4c858d46def4383d075fa6e79
Successfully built e43e0dc587c1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test12`

Contents of dockerfile `/root/docker-node/.~tmp.test12/Dockerfile`:

```
FROM nodesource/jessie:0.10.31
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.31-test1` from `/root/docker-node/.~tmp.test12`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.31
 ---> e43e0dc587c1
Step 2 : ENV NODE_ENV test
 ---> Running in b4e75044e9ca
 ---> d9dec9f19d3c
Removing intermediate container b4e75044e9ca
Step 3 : RUN node -v
 ---> Running in 157ffb218a93
v0.10.31
 ---> d39d588f2d90
Error removing intermediate container 157ffb218a93: rmdriverfs: Driver aufs failed to remove root filesystem 157ffb218a931b7362df7d3d6303b7640d9ada91e53088599d3b996a87aed01c: rename /var/lib/docker/aufs/mnt/157ffb218a931b7362df7d3d6303b7640d9ada91e53088599d3b996a87aed01c /var/lib/docker/aufs/mnt/157ffb218a931b7362df7d3d6303b7640d9ada91e53088599d3b996a87aed01c-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in a09aabdfc5ca
{ http_parser: '1.0',
  node: '0.10.31',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1i' }
 ---> 6126eb560757
Error removing intermediate container 157ffb218a93: nosuchcontainer: no such id: 157ffb218a931b7362df7d3d6303b7640d9ada91e53088599d3b996a87aed01c
Step 5 : RUN npm --version
 ---> Running in 5efe2d794731
1.4.23
 ---> 8c6437b7b776
Error removing intermediate container 157ffb218a93: nosuchcontainer: no such id: 157ffb218a931b7362df7d3d6303b7640d9ada91e53088599d3b996a87aed01c
Successfully built 8c6437b7b776

```

# Tested image `nodesource/jessie:4.1.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 17482b7df51d
 ---> c67b989e47d7
Removing intermediate container 17482b7df51d
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in f60dfb2e5b5d
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6474k  10[0m[91m0 6474k    0     0  37.4M      0 --:--:-- --:--:-- --:--:-- 37.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.1.2-1nodesource1~jessie1) ...
Setting up nodejs (4.1.2-1nodesource1~jessie1) ...
 ---> fd784d12114c
Removing intermediate container f60dfb2e5b5d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6709917599cb
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.1.2 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.2/node-v4.1.2.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.2/node-v4.1.2.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.2/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.1.2/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.2',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.1.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> fc7a3f01116c
Removing intermediate container 6709917599cb
Step 5 : ENV NODE_ENV production
 ---> Running in 3b510dd91dda
 ---> a74f657450f9
Removing intermediate container 3b510dd91dda
Step 6 : WORKDIR /usr/src/app
 ---> Running in 87389f875ad9
 ---> 72002efc72a1
Removing intermediate container 87389f875ad9
Step 7 : CMD npm start
 ---> Running in 99de9b490dc7
 ---> b6e49d9c07bc
Removing intermediate container 99de9b490dc7
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 04a8b86bfcd2
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (603 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> a2ad495fa1ea
Removing intermediate container 04a8b86bfcd2
Successfully built a2ad495fa1ea

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test5`

Contents of dockerfile `/root/docker-node/.~tmp.test5/Dockerfile`:

```
FROM nodesource/jessie:4.1.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.1.2-test1` from `/root/docker-node/.~tmp.test5`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.1.2
 ---> a2ad495fa1ea
Step 2 : ENV NODE_ENV test
 ---> Running in 8a58269f7598
 ---> 97ef7f8f26ea
Removing intermediate container 8a58269f7598
Step 3 : RUN node -v
 ---> Running in 05e9f7225783
v4.1.2
 ---> 7699ac22fa4e
Error removing intermediate container 05e9f7225783: rmdriverfs: Driver aufs failed to remove root filesystem 05e9f7225783913c5eeda65d5441720833901978cbaec116b7e6db9be2251960: rename /var/lib/docker/aufs/mnt/05e9f7225783913c5eeda65d5441720833901978cbaec116b7e6db9be2251960 /var/lib/docker/aufs/mnt/05e9f7225783913c5eeda65d5441720833901978cbaec116b7e6db9be2251960-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 1933ea0edb0d
{ http_parser: '2.5.0',
  node: '4.1.2',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 827ac6e16e19
Error removing intermediate container 05e9f7225783: nosuchcontainer: no such id: 05e9f7225783913c5eeda65d5441720833901978cbaec116b7e6db9be2251960
Step 5 : RUN npm --version
 ---> Running in 94d1e06f4a6e
2.14.4
 ---> fef5b45cd61d
Error removing intermediate container 05e9f7225783: nosuchcontainer: no such id: 05e9f7225783913c5eeda65d5441720833901978cbaec116b7e6db9be2251960
Successfully built fef5b45cd61d

```

# Tested image `nodesource/jessie:0.12.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f4c01f01f21a
 ---> e21e9490e665
Removing intermediate container f4c01f01f21a
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5c56e1b7d58c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 78 5069k   78 3999k    0     [0m[91m0  21.7M      0 --:--:-- --:--:-- --:--:-- 21.6M[0m[91m100 5069k  100 5069k    0     0  25.2M      0 --:--:-- --:--:-- --[0m[91m:--:-- 25.2M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.2-1nodesource1~jessie1) ...
Setting up nodejs (0.12.2-1nodesource1~jessie1) ...
 ---> 8366b5928c55
Removing intermediate container 5c56e1b7d58c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in d75a6d3ac03e
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.2 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.2/node-v0.12.2.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.2/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.2/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.2',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args[0m[91m   'build',
[0m[91mgyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp [0m[91mERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! [0m[91mstack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp [0m[91mERR! [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:110:17)
gyp [0m[91mERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
[0m[91mgyp [0m[91mERR! System Linux 3.13.0-71-generic
[0m[91mgyp ERR![0m[91m command "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m ERR! [0m[91mcwd[0m[91m /
[0m[91mgyp [0m[91mERR! node -v v0.12.2
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp[0m[91m ERR! not ok 
[0m
 ---> 8e26862d75af
Removing intermediate container d75a6d3ac03e
Step 5 : ENV NODE_ENV production
 ---> Running in ca2a57418601
 ---> 6920dfac4728
Removing intermediate container ca2a57418601
Step 6 : WORKDIR /usr/src/app
 ---> Running in 5d13a790e8f6
 ---> 40543bbe6d8b
Removing intermediate container 5d13a790e8f6
Step 7 : CMD npm start
 ---> Running in 3d8ea04a74ac
 ---> fb80944c1c14
Error removing intermediate container 3d8ea04a74ac: rmdriverfs: Driver aufs failed to remove root filesystem 3d8ea04a74ac7939107d5818e8bccb7e20ace1a734da8523d3de873f7f5b0104: rename /var/lib/docker/aufs/mnt/3d8ea04a74ac7939107d5818e8bccb7e20ace1a734da8523d3de873f7f5b0104 /var/lib/docker/aufs/mnt/3d8ea04a74ac7939107d5818e8bccb7e20ace1a734da8523d3de873f7f5b0104-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ce578319a357
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (629 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 1ec9b1d053fb
Removing intermediate container ce578319a357
Error removing intermediate container 3d8ea04a74ac: nosuchcontainer: no such id: 3d8ea04a74ac7939107d5818e8bccb7e20ace1a734da8523d3de873f7f5b0104
Successfully built 1ec9b1d053fb

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test23`

Contents of dockerfile `/root/docker-node/.~tmp.test23/Dockerfile`:

```
FROM nodesource/jessie:0.12.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.2-test1` from `/root/docker-node/.~tmp.test23`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.2
 ---> 1ec9b1d053fb
Step 2 : ENV NODE_ENV test
 ---> Running in 2c8cd0e5ab7f
 ---> d926f3396a50
Removing intermediate container 2c8cd0e5ab7f
Step 3 : RUN node -v
 ---> Running in a0793e8043a5
v0.12.2
 ---> 258dac7ec782
Removing intermediate container a0793e8043a5
Step 4 : RUN node -p "process.versions"
 ---> Running in 89b11c46ca79
{ http_parser: '2.3',
  node: '0.12.2',
  v8: '3.28.73',
  uv: '1.4.2-node1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> bff06e512e52
Removing intermediate container 89b11c46ca79
Step 5 : RUN npm --version
 ---> Running in 6e9c80cc772e
2.7.4
 ---> dccab8836b60
Removing intermediate container 6e9c80cc772e
Successfully built dccab8836b60

```

# Tested image `nodesource/jessie:0.10.38`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in eea29e5deedb
 ---> 2caf327eae1c
Removing intermediate container eea29e5deedb
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.38-1chl1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 9ae1c5a39cd9
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 3962k  100 [0m[91m3962k    0     0  38.4M      0 --:--:-- --:--:-- --:--:-- 38.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.38-1chl1~jessie1) ...
Setting up nodejs (0.10.38-1chl1~jessie1) ...
 ---> c4bf5b21194f
Removing intermediate container 9ae1c5a39cd9
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ae5cb2255d66
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.38 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.38/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m http://nodejs.org/dist/v0.10.38/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.38/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.38',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args[0m[91m   '--no-parallel',
[0m[91mgyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error[0m[91m 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.38
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b183bfba7e97
Removing intermediate container ae5cb2255d66
Step 5 : ENV NODE_ENV production
 ---> Running in 31586fafc85d
 ---> aa699f323407
Removing intermediate container 31586fafc85d
Step 6 : WORKDIR /usr/src/app
 ---> Running in ee4c6689b334
 ---> 2aa09c6af703
Removing intermediate container ee4c6689b334
Step 7 : CMD npm start
 ---> Running in 3204e815e70b
 ---> 14c0ccfe4567
Removing intermediate container 3204e815e70b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 35c8b3a51acb
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 16s (576 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 68c97bdc6a66
Error removing intermediate container 35c8b3a51acb: rmdriverfs: Driver aufs failed to remove root filesystem 35c8b3a51acbdc242474f735d32f9146f6004cb95c3a696d35f0194629ca3d03: rename /var/lib/docker/aufs/diff/35c8b3a51acbdc242474f735d32f9146f6004cb95c3a696d35f0194629ca3d03 /var/lib/docker/aufs/diff/35c8b3a51acbdc242474f735d32f9146f6004cb95c3a696d35f0194629ca3d03-removing: device or resource busy
Successfully built 68c97bdc6a66

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test19`

Contents of dockerfile `/root/docker-node/.~tmp.test19/Dockerfile`:

```
FROM nodesource/jessie:0.10.38
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.38-test1` from `/root/docker-node/.~tmp.test19`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.38
 ---> 68c97bdc6a66
Step 2 : ENV NODE_ENV test
 ---> Running in d8ec813b0e77
 ---> d028d2953e6c
Removing intermediate container d8ec813b0e77
Step 3 : RUN node -v
 ---> Running in 5d352f086665
v0.10.38
 ---> c0295d5c57e1
Removing intermediate container 5d352f086665
Step 4 : RUN node -p "process.versions"
 ---> Running in 138b85db997c
{ http_parser: '1.0',
  node: '0.10.38',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1m' }
 ---> c16cde08848c
Removing intermediate container 138b85db997c
Step 5 : RUN npm --version
 ---> Running in 9958934c286c
1.4.28
 ---> 45b29703b799
Removing intermediate container 9958934c286c
Successfully built 45b29703b799

```

# Tested image `nodesource/jessie:0.10.36`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3c8924919304
 ---> c41728630562
Error removing intermediate container 3c8924919304: rmdriverfs: Driver aufs failed to remove root filesystem 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26: rename /var/lib/docker/aufs/mnt/3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26 /var/lib/docker/aufs/mnt/3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.36-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d9dda03dabb7
[91m  % Total    % Received % [0m[91mXferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 3960k  100 3960k    0     0  36.0M      0 --:--:-- --:--:-- --:--:-- 36.1M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.36-1nodesource1~jessie1) ...
Setting up nodejs (0.10.36-1nodesource1~jessie1) ...
 ---> 7dddef423436
Error removing intermediate container 3c8924919304: nosuchcontainer: no such id: 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 8d9d653dc120
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.36 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.36/node-v0.10.36.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.36/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.36/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.36',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp [0m[91mERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! [0m[91mSystem Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp[0m[91m ERR! cwd /
gyp ERR! node -v v0.10.36
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 2bb2f7ddd848
Removing intermediate container d9dda03dabb7
Removing intermediate container 8d9d653dc120
Error removing intermediate container 3c8924919304: nosuchcontainer: no such id: 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26
Step 5 : ENV NODE_ENV production
 ---> Running in 75d4593bd815
 ---> 42a557759be0
Error removing intermediate container 3c8924919304: nosuchcontainer: no such id: 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26
Step 6 : WORKDIR /usr/src/app
 ---> Running in 15c93d5e515a
 ---> 2f22fbb6a710
Error removing intermediate container 3c8924919304: nosuchcontainer: no such id: 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26
Step 7 : CMD npm start
 ---> Running in 0c4f8e57e9a2
 ---> 01aed7c8bb33
Removing intermediate container 15c93d5e515a
Removing intermediate container 0c4f8e57e9a2
Error removing intermediate container 3c8924919304: nosuchcontainer: no such id: 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 095304ce53fc
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (606 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f5b02eac3120
Error removing intermediate container 3c8924919304: nosuchcontainer: no such id: 3c89249193049b140a2f612d745ab32734d9956f6b623548790baad2abc82d26
Successfully built f5b02eac3120

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test17`

Contents of dockerfile `/root/docker-node/.~tmp.test17/Dockerfile`:

```
FROM nodesource/jessie:0.10.36
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.36-test1` from `/root/docker-node/.~tmp.test17`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.36
 ---> f5b02eac3120
Step 2 : ENV NODE_ENV test
 ---> Running in 20c3345b6aa8
 ---> 8646bab7aed6
Removing intermediate container 20c3345b6aa8
Step 3 : RUN node -v
 ---> Running in 1a4047045951
v0.10.36
 ---> 6c84e9a32a5b
Removing intermediate container 1a4047045951
Step 4 : RUN node -p "process.versions"
 ---> Running in 4b1a85ae6528
{ http_parser: '1.0',
  node: '0.10.36',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.30',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> 568727fa8434
Removing intermediate container 4b1a85ae6528
Step 5 : RUN npm --version
 ---> Running in 3e46724ae6a4
1.4.28
 ---> 5c33d2b86e84
Removing intermediate container 3e46724ae6a4
Successfully built 5c33d2b86e84

```

# Tested image `nodesource/jessie:0.12.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d5a63ec0648b
 ---> 683cf9401acc
Removing intermediate container d5a63ec0648b
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 431ee2f14f10
[91m  % Total    % Receive[0m[91md % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100 5193k  100 5193k    0     0  20.4M      0 --:--:-- --:--:-- --:--:-- 20.4M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.4-1nodesource1~jessie1) ...
Setting up nodejs (0.12.4-1nodesource1~jessie1) ...
 ---> 7b2e2b93c981
Removing intermediate container 431ee2f14f10
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1ac5f380d77a
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.4 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.4/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m http://nodejs.org/dist/v0.12.4/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.12.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.4',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> ce1c5c63ec89
Removing intermediate container 1ac5f380d77a
Step 5 : ENV NODE_ENV production
 ---> Running in 2d2bb9838cf8
 ---> 4cdfdd52a979
Removing intermediate container 2d2bb9838cf8
Step 6 : WORKDIR /usr/src/app
 ---> Running in 81667f331d92
 ---> 8928732448c3
Removing intermediate container 81667f331d92
Step 7 : CMD npm start
 ---> Running in 3c94b1ff5a97
 ---> 2cc172d8ef62
Removing intermediate container 3c94b1ff5a97
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in fc45d885d0af
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (634 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> c125e44f428b
Removing intermediate container fc45d885d0af
Successfully built c125e44f428b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test25`

Contents of dockerfile `/root/docker-node/.~tmp.test25/Dockerfile`:

```
FROM nodesource/jessie:0.12.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.4-test1` from `/root/docker-node/.~tmp.test25`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.4
 ---> c125e44f428b
Step 2 : ENV NODE_ENV test
 ---> Running in 65f459b364bd
 ---> 76633edbe6d9
Removing intermediate container 65f459b364bd
Step 3 : RUN node -v
 ---> Running in 39652a73d8d4
v0.12.4
 ---> 10211e15548b
Removing intermediate container 39652a73d8d4
Step 4 : RUN node -p "process.versions"
 ---> Running in 17c6f1522c83
{ http_parser: '2.3',
  node: '0.12.4',
  v8: '3.28.71.19',
  uv: '1.5.0',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1m' }
 ---> 8468f9b3a41c
Removing intermediate container 17c6f1522c83
Step 5 : RUN npm --version
 ---> Running in fcb81c69a35c
2.10.1
 ---> 0501f2322b5c
Removing intermediate container fcb81c69a35c
Successfully built 0501f2322b5c

```

# Tested image `nodesource/jessie:0.10.41`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d2894b28ad4f
 ---> 5cb57d913b25
Removing intermediate container d2894b28ad4f
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.41-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 686fecbff2fe
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 11 [0m[91m4281k   11  495k    0     0  2778k      0  0:00:01 --:--:--  0:00:01 2784k[0m[91m100 4281k[0mSelecting previously unselected package nodejs.
[91m  100 4281k    0     0  16.1M      0 --:--:-- --:--:-- --:--:-- 16.1M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.41-1nodesource1~jessie1) ...
Setting up nodejs (0.10.41-1nodesource1~jessie1) ...
 ---> 55f91eba81ca
Removing intermediate container 686fecbff2fe
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in e793f87d8eb0
[91mnpm[0m[91m WARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mnpm[0m[91m [0m[91mWARN deprecated This version of npm lacks support for important features,
npm WARN deprecated such as scoped packages, offered by the primary npm
npm WARN deprecated registry. Consider upgrading to at least npm@2, if not the
npm WARN deprecated latest stable version. To upgrade to npm@2, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest-2
npm WARN deprecated 
npm WARN deprecated To upgrade to the latest stable version, run:
npm WARN deprecated 
npm WARN deprecated   npm -g install npm@latest
npm WARN deprecated 
npm WARN deprecated (Depending on how Node.js was installed on your system, you
npm WARN deprecated may need to prefix the preceding commands with `sudo`, or if
npm WARN deprecated on Windows, run them from an Administrator prompt.)
npm WARN deprecated 
npm WARN deprecated If you're running the version of npm bundled with
npm WARN deprecated Node.js 0.10 LTS, be aware that the next version of 0.10 LTS
npm WARN deprecated will be bundled with a version of npm@2, which has some small
npm WARN deprecated backwards-incompatible changes made to `npm run-script` and
npm WARN deprecated semver behavior.
[0m[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@0.10.41 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.41/node-v0.10.41.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.41/node-v0.10.41.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.41/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v0.10.41/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m spawn[0m[91m python
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m info [0m[91mspawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info [0m[91mspawn args   'make',
[0m[91mgyp info[0m[91m spawn args[0m[91m   '-I',
gyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args   '/build/config.gypi',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   '-I',
gyp info[0m[91m spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info[0m[91m spawn args   '-I',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m spawn args   '/root/.node-gyp/0.10.41/common.gypi',
[0m[91mgyp info[0m[91m spawn args[0m[91m   '-Dlibrary=shared_library',
[0m[91mgyp info spawn args[0m[91m   '-Dvisibility=default',
gyp[0m[91m [0m[91minfo[0m[91m spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.41',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
[0m[91mgyp[0m[91m info [0m[91mspawn args   '-Dmodule_root_dir=/',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '--depth=.',
[0m[91mgyp [0m[91minfo [0m[91mspawn args[0m[91m   '--no-parallel',
[0m[91mgyp info [0m[91mspawn args   '--generator-output',
gyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp[0m[91m [0m[91mERR! cwd /
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m node -v[0m[91m v0.10.41
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mpangyp -v[0m[91m v2.3.3
[0m[91mgyp[0m[91m ERR! [0m[91mnot ok[0m[91m 
[0m
 ---> dcf1b06b18e8
Removing intermediate container e793f87d8eb0
Step 5 : ENV NODE_ENV production
 ---> Running in 1e2058b8b427
 ---> 287f50264e51
Removing intermediate container 1e2058b8b427
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6660e02de334
 ---> 372bb1b4b57a
Removing intermediate container 6660e02de334
Step 7 : CMD npm start
 ---> Running in c91d3d4c4c2d
 ---> a748882f71fc
Removing intermediate container c91d3d4c4c2d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 98a369d1ad33
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 13s (705 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 23c34c67f85c
Removing intermediate container 98a369d1ad33
Successfully built 23c34c67f85c

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test2`

Contents of dockerfile `/root/docker-node/.~tmp.test2/Dockerfile`:

```
FROM nodesource/jessie:0.10.41
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.41-test1` from `/root/docker-node/.~tmp.test2`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.41
 ---> 23c34c67f85c
Step 2 : ENV NODE_ENV test
 ---> Running in d16cfb3351d8
 ---> 560e81a49d52
Error removing intermediate container d16cfb3351d8: rmdriverfs: Driver aufs failed to remove root filesystem d16cfb3351d862625d67be10a4804c2561471325f2d7b70f4b61dd1d909c6304: rename /var/lib/docker/aufs/mnt/d16cfb3351d862625d67be10a4804c2561471325f2d7b70f4b61dd1d909c6304 /var/lib/docker/aufs/mnt/d16cfb3351d862625d67be10a4804c2561471325f2d7b70f4b61dd1d909c6304-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in eb9c55439ded
v0.10.41
 ---> 7e47c36d83e1
Error removing intermediate container eb9c55439ded: rmdriverfs: Driver aufs failed to remove root filesystem eb9c55439dede930ab02b893e54e9025c1b48eb5ebd42f18b3245037fa217d2f: rename /var/lib/docker/aufs/mnt/eb9c55439dede930ab02b893e54e9025c1b48eb5ebd42f18b3245037fa217d2f /var/lib/docker/aufs/mnt/eb9c55439dede930ab02b893e54e9025c1b48eb5ebd42f18b3245037fa217d2f-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 185f6381f295
{ http_parser: '1.0',
  node: '0.10.41',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1q' }
 ---> 8c3287119b74
Removing intermediate container 185f6381f295
Error removing intermediate container d16cfb3351d8: nosuchcontainer: no such id: d16cfb3351d862625d67be10a4804c2561471325f2d7b70f4b61dd1d909c6304
Step 5 : RUN npm --version
 ---> Running in 236ecf0c1cdc
1.4.29
 ---> 4f6a44c28ddc
Error removing intermediate container d16cfb3351d8: nosuchcontainer: no such id: d16cfb3351d862625d67be10a4804c2561471325f2d7b70f4b61dd1d909c6304
Successfully built 4f6a44c28ddc

```

# Tested image `nodesource/jessie:0.10.37`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 23602295018b
 ---> 1b059106ebdd
Error removing intermediate container 23602295018b: rmdriverfs: Driver aufs failed to remove root filesystem 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a: rename /var/lib/docker/aufs/mnt/23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a /var/lib/docker/aufs/mnt/23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.37-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6ace6462f02d
[91m  % Total    % Rec[0m[91meived % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 3960k  100 3960k    0     0  24.0M      0 --:--:-- --:--:-- --:--:-- 24.1M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.37-1nodesource1~jessie1) ...
Setting up nodejs (0.10.37-1nodesource1~jessie1) ...
 ---> 733b8c3082d3
Error removing intermediate container 23602295018b: nosuchcontainer: no such id: 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 9277b128d29b
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@0.10.37 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.37/node-v0.10.37.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.37/node-v0.10.37.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET http://nodejs.org/dist/v0.10.37/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.37/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m spawn[0m[91m python
[0m[91mgyp[0m[91m info [0m[91mspawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m info [0m[91mspawn args   'binding.gyp',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '-f',
[0m[91mgyp[0m[91m info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.37/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.37',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:820:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.37
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> a88ec2b6b20d
Error removing intermediate container 23602295018b: nosuchcontainer: no such id: 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a
Step 5 : ENV NODE_ENV production
 ---> Running in b5e69c795046
 ---> fb981b6b3048
Error removing intermediate container 23602295018b: nosuchcontainer: no such id: 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8f8ea11786d1
 ---> 722826031f12
Error removing intermediate container 23602295018b: nosuchcontainer: no such id: 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a
Step 7 : CMD npm start
 ---> Running in df72bef8b153
 ---> 8a0ae0447f24
Removing intermediate container 6ace6462f02d
Removing intermediate container 9277b128d29b
Removing intermediate container b5e69c795046
Removing intermediate container 8f8ea11786d1
Removing intermediate container df72bef8b153
Error removing intermediate container 23602295018b: nosuchcontainer: no such id: 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 93811fc0b199
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (613 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 2fd0f18bedbd
Error removing intermediate container 23602295018b: nosuchcontainer: no such id: 23602295018bba1ab318426c6f0d7f264a281f5b29add86ac070474d11d7215a
Successfully built 2fd0f18bedbd

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test18`

Contents of dockerfile `/root/docker-node/.~tmp.test18/Dockerfile`:

```
FROM nodesource/jessie:0.10.37
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.37-test1` from `/root/docker-node/.~tmp.test18`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.37
 ---> 2fd0f18bedbd
Step 2 : ENV NODE_ENV test
 ---> Running in a2206011abe8
 ---> ec9deba2ad36
Removing intermediate container a2206011abe8
Step 3 : RUN node -v
 ---> Running in 54bf51d7d983
v0.10.37
 ---> cc6271c3450a
Error removing intermediate container 54bf51d7d983: rmdriverfs: Driver aufs failed to remove root filesystem 54bf51d7d9835b52f9fa18c194d17a3e19b4fc847bf53710beeabf2c339d7070: rename /var/lib/docker/aufs/mnt/54bf51d7d9835b52f9fa18c194d17a3e19b4fc847bf53710beeabf2c339d7070 /var/lib/docker/aufs/mnt/54bf51d7d9835b52f9fa18c194d17a3e19b4fc847bf53710beeabf2c339d7070-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in c7ebbcb807e2
{ http_parser: '1.0',
  node: '0.10.37',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.36',
  zlib: '1.2.8',
  modules: '11',
  openssl: '1.0.1l' }
 ---> 218261ec4ba0
Error removing intermediate container 54bf51d7d983: nosuchcontainer: no such id: 54bf51d7d9835b52f9fa18c194d17a3e19b4fc847bf53710beeabf2c339d7070
Step 5 : RUN npm --version
 ---> Running in 4c59147f4134
1.4.28
 ---> 5c738ea151fd
Error removing intermediate container 4c59147f4134: rmdriverfs: Driver aufs failed to remove root filesystem 4c59147f41342a1a57fa4cbbb9f9b05a305b947c06b6b421e963f153cce72206: rename /var/lib/docker/aufs/mnt/4c59147f41342a1a57fa4cbbb9f9b05a305b947c06b6b421e963f153cce72206 /var/lib/docker/aufs/mnt/4c59147f41342a1a57fa4cbbb9f9b05a305b947c06b6b421e963f153cce72206-removing: device or resource busy
Successfully built 5c738ea151fd

```

# Tested image `nodesource/jessie:0.10.32`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in be39175d0346
 ---> e37d8d679830
Error removing intermediate container be39175d0346: rmdriverfs: Driver aufs failed to remove root filesystem be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150: rename /var/lib/docker/aufs/diff/be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150 /var/lib/docker/aufs/diff/be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.32-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in ced855dde6e3
[91m  % Total    % [0m[91mReceived % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m[0m[91m100 4040k  100 4040k    0     0  20.7M      0 --:--:-- --:--:-- --:--:-- 20.8M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.32-1nodesource1~jessie1) ...
Setting up nodejs (0.10.32-1nodesource1~jessie1) ...
 ---> ec11ca9cd43b
Error removing intermediate container be39175d0346: nosuchcontainer: no such id: be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 10ad23ba1e73
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.10.32 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.32/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v0.10.32/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.32/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.32',
gyp info spawn args   '-Druntime=node',
[0m[91mgyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.32
gyp ERR! [0m[91mpangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 63169596ff8c
Error removing intermediate container be39175d0346: nosuchcontainer: no such id: be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150
Step 5 : ENV NODE_ENV production
 ---> Running in 0b490a19143b
 ---> a1e594fd6789
Error removing intermediate container be39175d0346: nosuchcontainer: no such id: be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4c65e4f39069
 ---> 321876d6769f
Removing intermediate container 10ad23ba1e73
Removing intermediate container 0b490a19143b
Removing intermediate container 4c65e4f39069
Error removing intermediate container be39175d0346: nosuchcontainer: no such id: be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150
Step 7 : CMD npm start
 ---> Running in 4a848c99e0e3
 ---> 64fadaec5feb
Removing intermediate container 4a848c99e0e3
Error removing intermediate container be39175d0346: nosuchcontainer: no such id: be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ddb536acbdc8
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 14s (648 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 4b7a535d089a
Removing intermediate container ddb536acbdc8
Error removing intermediate container be39175d0346: nosuchcontainer: no such id: be39175d0346d20891530b1e083a2611486287017f572f53692bd9102870a150
Successfully built 4b7a535d089a

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test13`

Contents of dockerfile `/root/docker-node/.~tmp.test13/Dockerfile`:

```
FROM nodesource/jessie:0.10.32
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.32-test1` from `/root/docker-node/.~tmp.test13`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.32
 ---> 4b7a535d089a
Step 2 : ENV NODE_ENV test
 ---> Running in 535a5ed845d5
 ---> 86221352e323
Removing intermediate container 535a5ed845d5
Step 3 : RUN node -v
 ---> Running in 76cb3672d43f
v0.10.32
 ---> a784a265edd2
Error removing intermediate container 76cb3672d43f: rmdriverfs: Driver aufs failed to remove root filesystem 76cb3672d43f4b5b6f8d932acdfd904f91320eb85e08d55f55dbfa240c15bb52: rename /var/lib/docker/aufs/mnt/76cb3672d43f4b5b6f8d932acdfd904f91320eb85e08d55f55dbfa240c15bb52 /var/lib/docker/aufs/mnt/76cb3672d43f4b5b6f8d932acdfd904f91320eb85e08d55f55dbfa240c15bb52-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 95e1e57a845f
{ http_parser: '1.0',
  node: '0.10.32',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1i' }
 ---> 6300942f264d
Error removing intermediate container 76cb3672d43f: nosuchcontainer: no such id: 76cb3672d43f4b5b6f8d932acdfd904f91320eb85e08d55f55dbfa240c15bb52
Step 5 : RUN npm --version
 ---> Running in 538d48a088bc
1.4.28
 ---> 9b056a600f7c
Removing intermediate container 538d48a088bc
Error removing intermediate container 76cb3672d43f: nosuchcontainer: no such id: 76cb3672d43f4b5b6f8d932acdfd904f91320eb85e08d55f55dbfa240c15bb52
Successfully built 9b056a600f7c

```

# Tested image `nodesource/jessie:4.2.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a2c1027a4cd6
 ---> 73dd37eaee0e
Removing intermediate container a2c1027a4cd6
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.6-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 001a7123dd15
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8390k  100 8390k    0     0   9.8M      0 --:--:-- --[0m[91m:--:-- --:--:--  9.8M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.6-1nodesource1~jessie1) ...
Setting up nodejs (4.2.6-1nodesource1~jessie1) ...
 ---> 5f7dabc95af2
Removing intermediate container 001a7123dd15
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 07b11e6e8b1f
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp [0m[91minfo it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.2.6 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.6/node-v4.2.6.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.6/node-v4.2.6.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.6/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.2.6/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.6/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.6',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.6
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7e8ce318d4ab
Removing intermediate container 07b11e6e8b1f
Step 5 : ENV NODE_ENV production
 ---> Running in 3ab916ab8d7b
 ---> 3f2106b0b06c
Removing intermediate container 3ab916ab8d7b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8b71a07ca0c7
 ---> f014b7bc3beb
Removing intermediate container 8b71a07ca0c7
Step 7 : CMD npm start
 ---> Running in 7e96ea2d1f45
 ---> 769a3096cef1
Error removing intermediate container 7e96ea2d1f45: rmdriverfs: Driver aufs failed to remove root filesystem 7e96ea2d1f45742c8020cd2442e7a8174313a8b53de86801bb040ea29be5462c: rename /var/lib/docker/aufs/mnt/7e96ea2d1f45742c8020cd2442e7a8174313a8b53de86801bb040ea29be5462c /var/lib/docker/aufs/mnt/7e96ea2d1f45742c8020cd2442e7a8174313a8b53de86801bb040ea29be5462c-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6d072be3d02d
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 16s (590 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7fd73729d676
Error removing intermediate container 7e96ea2d1f45: nosuchcontainer: no such id: 7e96ea2d1f45742c8020cd2442e7a8174313a8b53de86801bb040ea29be5462c
Successfully built 7fd73729d676

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test0`

Contents of dockerfile `/root/docker-node/.~tmp.test0/Dockerfile`:

```
FROM nodesource/jessie:4.2.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.6-test1` from `/root/docker-node/.~tmp.test0`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.6
 ---> 7fd73729d676
Step 2 : ENV NODE_ENV test
 ---> Running in a4d05949e3dd
 ---> 5c4ccb56cd6f
Error removing intermediate container a4d05949e3dd: rmdriverfs: Driver aufs failed to remove root filesystem a4d05949e3dd2c21e31d605a97e5f3585bfb9bcee1ab475c4aea208e4e98cf42: rename /var/lib/docker/aufs/mnt/a4d05949e3dd2c21e31d605a97e5f3585bfb9bcee1ab475c4aea208e4e98cf42 /var/lib/docker/aufs/mnt/a4d05949e3dd2c21e31d605a97e5f3585bfb9bcee1ab475c4aea208e4e98cf42-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in 868429af652f
v4.2.6
 ---> 729af17d8628
Error removing intermediate container a4d05949e3dd: nosuchcontainer: no such id: a4d05949e3dd2c21e31d605a97e5f3585bfb9bcee1ab475c4aea208e4e98cf42
Step 4 : RUN node -p "process.versions"
 ---> Running in 7fdb51c0658e
{ http_parser: '2.5.0',
  node: '4.2.6',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> 51909d241309
Error removing intermediate container a4d05949e3dd: nosuchcontainer: no such id: a4d05949e3dd2c21e31d605a97e5f3585bfb9bcee1ab475c4aea208e4e98cf42
Step 5 : RUN npm --version
 ---> Running in 786bd0963999
2.14.12
 ---> c800363bd7f4
Error removing intermediate container a4d05949e3dd: nosuchcontainer: no such id: a4d05949e3dd2c21e31d605a97e5f3585bfb9bcee1ab475c4aea208e4e98cf42
Successfully built c800363bd7f4

```

# Tested image `nodesource/jessie:5.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in b19cef4966e9
 ---> fe0530fc2e36
Removing intermediate container b19cef4966e9
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.2.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e5e5b1c0d147
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8481k  100 8481k    0     0  34.0M      0 --:--:-- --:--:-- --:--:-- 34.2M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.2.0-1nodesource1~jessie1) ...
Setting up nodejs (5.2.0-1nodesource1~jessie1) ...
 ---> 1bd8ce89effd
Removing intermediate container e5e5b1c0d147
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 267b9648d42c
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo it worked if it ends with[0m[91m ok
[0m[91mgyp [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@5.2.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.2.0/node-v5.2.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.2.0/node-v5.2.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.2.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.2.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/5.2.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.2.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:88:13)
gyp ERR! stack     at ChildProcess.emit (events.js:173:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:201:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> f29368447728
Removing intermediate container 267b9648d42c
Step 5 : ENV NODE_ENV production
 ---> Running in 4634f2fdba06
 ---> 7f81e90970b5
Error removing intermediate container 4634f2fdba06: rmdriverfs: Driver aufs failed to remove root filesystem 4634f2fdba06041e5bd5a971a2257e7b53b4492ec5574866b30a7b3cc29cc56e: rename /var/lib/docker/aufs/mnt/4634f2fdba06041e5bd5a971a2257e7b53b4492ec5574866b30a7b3cc29cc56e /var/lib/docker/aufs/mnt/4634f2fdba06041e5bd5a971a2257e7b53b4492ec5574866b30a7b3cc29cc56e-removing: device or resource busy
Step 6 : WORKDIR /usr/src/app
 ---> Running in cd33498993ca
 ---> 6690606462ac
Error removing intermediate container 4634f2fdba06: nosuchcontainer: no such id: 4634f2fdba06041e5bd5a971a2257e7b53b4492ec5574866b30a7b3cc29cc56e
Step 7 : CMD npm start
 ---> Running in 334c4aef5382
 ---> ad91f03173d7
Error removing intermediate container 4634f2fdba06: nosuchcontainer: no such id: 4634f2fdba06041e5bd5a971a2257e7b53b4492ec5574866b30a7b3cc29cc56e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 4450027c7b7b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 13s (735 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> fdc83a429c3d
Error removing intermediate container 4634f2fdba06: nosuchcontainer: no such id: 4634f2fdba06041e5bd5a971a2257e7b53b4492ec5574866b30a7b3cc29cc56e
Successfully built fdc83a429c3d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test8`

Contents of dockerfile `/root/docker-node/.~tmp.test8/Dockerfile`:

```
FROM nodesource/jessie:5.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.2.0-test1` from `/root/docker-node/.~tmp.test8`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.2.0
 ---> fdc83a429c3d
Step 2 : ENV NODE_ENV test
 ---> Running in e8665d7da875
 ---> 8b5884ae9d4a
Removing intermediate container e8665d7da875
Step 3 : RUN node -v
 ---> Running in f12a64df2ec1
v5.2.0
 ---> 9dd12dd9931a
Removing intermediate container f12a64df2ec1
Step 4 : RUN node -p "process.versions"
 ---> Running in df6ca6e711dd
{ http_parser: '2.6.0',
  node: '5.2.0',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> 9ec3de47a428
Removing intermediate container df6ca6e711dd
Step 5 : RUN npm --version
 ---> Running in ad59fb7b0214
3.3.12
 ---> b8804a5ed073
Removing intermediate container ad59fb7b0214
Successfully built b8804a5ed073

```

# Tested image `nodesource/jessie:0.12.6`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in fcce383fb2fa
 ---> bfc7776e0aa1
Removing intermediate container fcce383fb2fa
Step 3 : RUN curl https://deb.nodesource.com/node_0.12/pool/main/n/nodejs/nodejs_0.12.6-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8022a61854a6
[91m  % Total    % [0m[91mReceived % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5281k  100 5281k    0     0  15.5M      0 --:--:-- --:--:-- --:--:-- 15.5M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.12.6-1nodesource1~jessie1) ...
Setting up nodejs (0.12.6-1nodesource1~jessie1) ...
 ---> 78c379bddd39
Removing intermediate container 8022a61854a6
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 944420c60231
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@0.12.6 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp http[0m[91m 200 http://nodejs.org/dist/v0.12.6/node-v0.12.6.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v0.12.6/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp [0m[91minfo spawn args   'binding.gyp',
[0m[91mgyp info spawn args[0m[91m   '-f',
gyp[0m[91m info[0m[91m spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp [0m[91minfo spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
gyp[0m[91m info spawn args   '/root/.node-gyp/0.12.6/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
[0m[91mgyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.12.6',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
[0m[91mgyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.12.6
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0454150077fd
Removing intermediate container 944420c60231
Step 5 : ENV NODE_ENV production
 ---> Running in 3093f3be82eb
 ---> b64770079d94
Removing intermediate container 3093f3be82eb
Step 6 : WORKDIR /usr/src/app
 ---> Running in d5cbb39a5cc5
 ---> 587bfbd201eb
Removing intermediate container d5cbb39a5cc5
Step 7 : CMD npm start
 ---> Running in 06802bbddd83
 ---> b87b53b73714
Removing intermediate container 06802bbddd83
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 785da6e4d3bd
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (623 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> e676a0e82b6c
Removing intermediate container 785da6e4d3bd
Successfully built e676a0e82b6c

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test27`

Contents of dockerfile `/root/docker-node/.~tmp.test27/Dockerfile`:

```
FROM nodesource/jessie:0.12.6
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.12.6-test1` from `/root/docker-node/.~tmp.test27`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.12.6
 ---> e676a0e82b6c
Step 2 : ENV NODE_ENV test
 ---> Running in abbf4ef92bdf
 ---> b0c2818e0488
Removing intermediate container abbf4ef92bdf
Step 3 : RUN node -v
 ---> Running in 4c0c25eaf9ce
v0.12.6
 ---> 5f122a26ad7b
Removing intermediate container 4c0c25eaf9ce
Step 4 : RUN node -p "process.versions"
 ---> Running in 0e0deff75e1c
{ http_parser: '2.3',
  node: '0.12.6',
  v8: '3.28.71.19',
  uv: '1.6.1',
  zlib: '1.2.8',
  modules: '14',
  openssl: '1.0.1o' }
 ---> df407ffd8718
Removing intermediate container 0e0deff75e1c
Step 5 : RUN npm --version
 ---> Running in e110194485a9
2.11.2
 ---> 032aacbaeb3e
Removing intermediate container e110194485a9
Successfully built 032aacbaeb3e

```

# Tested image `nodesource/jessie:0.10.30`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 3189956dcc23
 ---> da9061c6978e
Removing intermediate container 3189956dcc23
Step 3 : RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.30-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 38668339f6d5
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 3989k  [0m[91m100 3989k    0     0  33.4M      0 --:--:-- --:--:-- --:--:-- 33.5M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (0.10.30-1nodesource1~jessie1) ...
Setting up nodejs (0.10.30-1nodesource1~jessie1) ...
 ---> 0ebf2c688542
Removing intermediate container 38668339f6d5
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1598c38d2805
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@0.10.30 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v0.10.30/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v0.10.30/SHASUMS256.txt
[0m[91mgyp info spawn[0m[91m python
gyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/0.10.30/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/0.10.30',
gyp info[0m[91m spawn args   '-Druntime=node',
gyp [0m[91minfo spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at ChildProcess.emit (events.js:98:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:810:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v0.10.30
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> a669a4c01fb7
Removing intermediate container 1598c38d2805
Step 5 : ENV NODE_ENV production
 ---> Running in 4424c9254dca
 ---> 33be52e5d325
Removing intermediate container 4424c9254dca
Step 6 : WORKDIR /usr/src/app
 ---> Running in b15cfc490bf5
 ---> 6deab98c82cc
Error removing intermediate container b15cfc490bf5: rmdriverfs: Driver aufs failed to remove root filesystem b15cfc490bf58f6593c09197b2d883648248ea3fb0396942321cfe716a2f9e07: rename /var/lib/docker/aufs/mnt/b15cfc490bf58f6593c09197b2d883648248ea3fb0396942321cfe716a2f9e07 /var/lib/docker/aufs/mnt/b15cfc490bf58f6593c09197b2d883648248ea3fb0396942321cfe716a2f9e07-removing: device or resource busy
Step 7 : CMD npm start
 ---> Running in 63884c7975c8
 ---> a9adbc03d622
Error removing intermediate container b15cfc490bf5: nosuchcontainer: no such id: b15cfc490bf58f6593c09197b2d883648248ea3fb0396942321cfe716a2f9e07
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 599e9a7372a0
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 15s (620 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f3d2d2292e9f
Removing intermediate container 63884c7975c8
Removing intermediate container 599e9a7372a0
Error removing intermediate container b15cfc490bf5: nosuchcontainer: no such id: b15cfc490bf58f6593c09197b2d883648248ea3fb0396942321cfe716a2f9e07
Successfully built f3d2d2292e9f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test11`

Contents of dockerfile `/root/docker-node/.~tmp.test11/Dockerfile`:

```
FROM nodesource/jessie:0.10.30
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:0.10.30-test1` from `/root/docker-node/.~tmp.test11`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:0.10.30
 ---> f3d2d2292e9f
Step 2 : ENV NODE_ENV test
 ---> Running in 41272249c7da
 ---> 4d0ce475f04a
Removing intermediate container 41272249c7da
Step 3 : RUN node -v
 ---> Running in 7a0580334bbc
v0.10.30
 ---> e7fb33d1f71f
Removing intermediate container 7a0580334bbc
Step 4 : RUN node -p "process.versions"
 ---> Running in edbc294c5ff1
{ http_parser: '1.0',
  node: '0.10.30',
  v8: '3.14.5.9',
  ares: '1.9.0-DEV',
  uv: '0.10.28',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1h' }
 ---> 6f610cea954f
Removing intermediate container edbc294c5ff1
Step 5 : RUN npm --version
 ---> Running in 28b232b8281f
1.4.21
 ---> 4c470939d0d3
Removing intermediate container 28b232b8281f
Successfully built 4c470939d0d3

```

# Tested image `nodesource/jessie:4.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in c10d4d9c18c6
 ---> b5946602f827
Removing intermediate container c10d4d9c18c6
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in db622e92abff
[91m  % Total    % Received % Xferd  A[0m[91mverage Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6460k  100 6460k    0     0  22.6M      0 --:--:-- --:--:-- --:--:-- 22.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.1.0-1nodesource1~jessie1) ...
Setting up nodejs (4.1.0-1nodesource1~jessie1) ...
 ---> 6be925821aeb
Removing intermediate container db622e92abff
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 4ce468688fc5
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@4.1.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.0/node-v4.1.0.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.1.0/node-v4.1.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error[0m[91m 
[0m[91mgyp[0m[91m ERR! stack[0m[91m Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR![0m[91m command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.1.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 6dee45a26967
Removing intermediate container 4ce468688fc5
Step 5 : ENV NODE_ENV production
 ---> Running in 1fa5199875ac
 ---> d41ec17a2acb
Removing intermediate container 1fa5199875ac
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4099efc20289
 ---> 5f30276660e4
Removing intermediate container 4099efc20289
Step 7 : CMD npm start
 ---> Running in 962286ffb82d
 ---> 7986709ce1f8
Removing intermediate container 962286ffb82d
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 34b07a735702
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 7s (1289 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3b34a62fe3b6
Removing intermediate container 34b07a735702
Successfully built 3b34a62fe3b6

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test30`

Contents of dockerfile `/root/docker-node/.~tmp.test30/Dockerfile`:

```
FROM nodesource/jessie:4.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.1.0-test1` from `/root/docker-node/.~tmp.test30`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.1.0
 ---> 3b34a62fe3b6
Step 2 : ENV NODE_ENV test
 ---> Running in ef7af6ab183e
 ---> 20ae84fa4926
Removing intermediate container ef7af6ab183e
Step 3 : RUN node -v
 ---> Running in 60e8ec271ab8
v4.1.0
 ---> 31eac2478934
Removing intermediate container 60e8ec271ab8
Step 4 : RUN node -p "process.versions"
 ---> Running in 6353063f3f88
{ http_parser: '2.5.0',
  node: '4.1.0',
  v8: '4.5.103.33',
  uv: '1.7.4',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 0b295d32e5af
Removing intermediate container 6353063f3f88
Step 5 : RUN npm --version
 ---> Running in 1f41d4c400a9
2.14.3
 ---> 1c1cd8afa45c
Removing intermediate container 1f41d4c400a9
Successfully built 1c1cd8afa45c

```

# Tested image `nodesource/jessie:4.1.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 88c7fd783cc5
 ---> 258d17cbc89f
Error removing intermediate container 88c7fd783cc5: rmdriverfs: Driver aufs failed to remove root filesystem 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640: rename /var/lib/docker/aufs/mnt/88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640 /var/lib/docker/aufs/mnt/88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.1.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 69eee7ea5fd1
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6465k  100 6[0m[91m465k    0     0  21.0M      0 --:--:-- --:--:-- --:--:-- 21.1M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.1.1-1nodesource1~jessie1) ...
Setting up nodejs (4.1.1-1nodesource1~jessie1) ...
 ---> 2dcae7fd5109
Error removing intermediate container 88c7fd783cc5: nosuchcontainer: no such id: 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in f29dce3c50e7
[91mnpm[0m[91m WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@4.1.1 | linux | x64
[0m[91mgyp[0m[91m http [0m[91mGET[0m[91m http://nodejs.org/dist/v4.1.1/node-v4.1.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.1.1/node-v4.1.1.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.1.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200 http://nodejs.org/dist/v4.1.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.1.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.1.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp [0m[91mERR! cwd /
[0m[91mgyp ERR! node -v v4.1.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 5a2ad2af99f7
Removing intermediate container f29dce3c50e7
Error removing intermediate container 88c7fd783cc5: nosuchcontainer: no such id: 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640
Step 5 : ENV NODE_ENV production
 ---> Running in c374df968cbb
 ---> 8975578d22a4
Error removing intermediate container 88c7fd783cc5: nosuchcontainer: no such id: 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640
Step 6 : WORKDIR /usr/src/app
 ---> Running in d3cfc3ccc736
 ---> acb89ad9c159
Error removing intermediate container 88c7fd783cc5: nosuchcontainer: no such id: 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640
Step 7 : CMD npm start
 ---> Running in 6c3e1314bbf8
 ---> 7d44ba66df12
Removing intermediate container d3cfc3ccc736
Removing intermediate container 6c3e1314bbf8
Error removing intermediate container 88c7fd783cc5: nosuchcontainer: no such id: 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 7b88a8e63fcf
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 54s (176 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> bd997032a75b
Removing intermediate container 69eee7ea5fd1
Removing intermediate container c374df968cbb
Removing intermediate container 7b88a8e63fcf
Error removing intermediate container 88c7fd783cc5: nosuchcontainer: no such id: 88c7fd783cc578091867cd7f1ab20d47cfc63752396b3f144e7a1ed0a50bc640
Successfully built bd997032a75b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test31`

Contents of dockerfile `/root/docker-node/.~tmp.test31/Dockerfile`:

```
FROM nodesource/jessie:4.1.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.1.1-test1` from `/root/docker-node/.~tmp.test31`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.1.1
 ---> bd997032a75b
Step 2 : ENV NODE_ENV test
 ---> Running in d502e4274cd9
 ---> 6dfcf5d01172
Removing intermediate container d502e4274cd9
Step 3 : RUN node -v
 ---> Running in 8b4ae4737eb1
v4.1.1
 ---> 5ab4792553de
Removing intermediate container 8b4ae4737eb1
Step 4 : RUN node -p "process.versions"
 ---> Running in 1c2ee5d75032
{ http_parser: '2.5.0',
  node: '4.1.1',
  v8: '4.5.103.33',
  uv: '1.7.4',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> cc69898926a8
Removing intermediate container 1c2ee5d75032
Step 5 : RUN npm --version
 ---> Running in df9550f7bf57
2.14.4
 ---> 625bb78d4efd
Error removing intermediate container df9550f7bf57: rmdriverfs: Driver aufs failed to remove root filesystem df9550f7bf579a46bc773c2063dcf97b4c60299b4ced6f20d98b1314fe3fb657: rename /var/lib/docker/aufs/mnt/df9550f7bf579a46bc773c2063dcf97b4c60299b4ced6f20d98b1314fe3fb657 /var/lib/docker/aufs/mnt/df9550f7bf579a46bc773c2063dcf97b4c60299b4ced6f20d98b1314fe3fb657-removing: device or resource busy
Successfully built 625bb78d4efd

```

# Tested image `nodesource/jessie:4.2.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 913f045ba8b9
 ---> 1e713214143b
Removing intermediate container 913f045ba8b9
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.2-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 0eeef1dd2981
[91m  % Total   [0m[91m % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m[0m[91m  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6845k  [0m[91m100 6845k    0     0  44.9M      0 --:--:-- --:--:-- --:--:-- 44.8M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.2-2nodesource1~jessie1) ...
Setting up nodejs (4.2.2-2nodesource1~jessie1) ...
 ---> 4ebf346f9986
Removing intermediate container 0eeef1dd2981
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 3f3c8bf43d47
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.2 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.2/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.2.2/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.2',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> af74dfe6090c
Removing intermediate container 3f3c8bf43d47
Step 5 : ENV NODE_ENV production
 ---> Running in 8277a3117274
 ---> 39c68c004e03
Removing intermediate container 8277a3117274
Step 6 : WORKDIR /usr/src/app
 ---> Running in fb73850dccc9
 ---> eadb748f1e99
Removing intermediate container fb73850dccc9
Step 7 : CMD npm start
 ---> Running in a0966e11ad8f
 ---> 9a4c188ba098
Removing intermediate container a0966e11ad8f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 20501b720c35
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1623 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> c211e6c7c97d
Removing intermediate container 20501b720c35
Successfully built c211e6c7c97d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test34`

Contents of dockerfile `/root/docker-node/.~tmp.test34/Dockerfile`:

```
FROM nodesource/jessie:4.2.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.2-test1` from `/root/docker-node/.~tmp.test34`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.2
 ---> c211e6c7c97d
Step 2 : ENV NODE_ENV test
 ---> Running in 28fe4d1c00ad
 ---> e4f22fabdbe7
Removing intermediate container 28fe4d1c00ad
Step 3 : RUN node -v
 ---> Running in 999974ac56ac
v4.2.2
 ---> e3000554b25b
Removing intermediate container 999974ac56ac
Step 4 : RUN node -p "process.versions"
 ---> Running in b2e4274f23b8
{ http_parser: '2.5.0',
  node: '4.2.2',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '52.1',
  modules: '46',
  openssl: '1.0.2d' }
 ---> b5fb0c05a476
Removing intermediate container b2e4274f23b8
Step 5 : RUN npm --version
 ---> Running in f4965d5f60db
2.14.7
 ---> 136d43fcc767
Removing intermediate container f4965d5f60db
Successfully built 136d43fcc767

```

# Tested image `nodesource/jessie:4.2.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in b52c25755065
 ---> f7391d53f697
Removing intermediate container b52c25755065
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.1-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in d7f9a3d1edf6
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Curren[0m[91mt
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6820k  100 6820k    0     0  34.4M      0 --:--:-- --:--:-- --:--:-- 34.6M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.1-2nodesource1~jessie1) ...
Setting up nodejs (4.2.1-2nodesource1~jessie1) ...
 ---> bc0ad3206251
Removing intermediate container d7f9a3d1edf6
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 123ae0d7a8b3
[91mnpm[0m[91m [0m[91mWARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
gyp info using node@4.2.1 | linux | x64
[0m[91mgyp[0m[91m http GET[0m[91m http://nodejs.org/dist/v4.2.1/node-v4.2.1.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.1/node-v4.2.1.tar.gz
[0m[91mgyp [0m[91mhttp GET[0m[91m http://nodejs.org/dist/v4.2.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http [0m[91m200 http://nodejs.org/dist/v4.2.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.1',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp [0m[91mERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp ERR! [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m ERR![0m[91m stack     at ChildProcess.emit (events.js:172:7)
gyp[0m[91m [0m[91mERR![0m[91m stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7f2d67b879b0
Removing intermediate container 123ae0d7a8b3
Step 5 : ENV NODE_ENV production
 ---> Running in 68a1b97d00fe
 ---> 6ee5857e64a3
Removing intermediate container 68a1b97d00fe
Step 6 : WORKDIR /usr/src/app
 ---> Running in b2fad79bed48
 ---> 59e075677f41
Removing intermediate container b2fad79bed48
Step 7 : CMD npm start
 ---> Running in 5830996eb994
 ---> a31a0cda883e
Removing intermediate container 5830996eb994
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 931e1d7226aa
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1632 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 18a5ec9b2668
Removing intermediate container 931e1d7226aa
Successfully built 18a5ec9b2668

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test33`

Contents of dockerfile `/root/docker-node/.~tmp.test33/Dockerfile`:

```
FROM nodesource/jessie:4.2.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.1-test1` from `/root/docker-node/.~tmp.test33`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.1
 ---> 18a5ec9b2668
Step 2 : ENV NODE_ENV test
 ---> Running in bb819f41ce90
 ---> 7ae53325e33a
Removing intermediate container bb819f41ce90
Step 3 : RUN node -v
 ---> Running in 59980c430afa
v4.2.1
 ---> cd9051552e5a
Removing intermediate container 59980c430afa
Step 4 : RUN node -p "process.versions"
 ---> Running in 4c3044e5514a
{ http_parser: '2.5.0',
  node: '4.2.1',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 1de5d1b7bc2f
Removing intermediate container 4c3044e5514a
Step 5 : RUN npm --version
 ---> Running in 5d1a04076e2e
2.14.7
 ---> 3c1a67fe9a39
Removing intermediate container 5d1a04076e2e
Successfully built 3c1a67fe9a39

```

# Tested image `nodesource/jessie:4.2.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 04daa471ea4b
 ---> 634995ca1216
Removing intermediate container 04daa471ea4b
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 60490e9713d3
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8346k  100 8346k    0     0  23.1M      0 --:--:-- --:--:-- --:--:-- 23.2M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.4-1nodesource1~jessie1) ...
Setting up nodejs (4.2.4-1nodesource1~jessie1) ...
 ---> 14418ee781e5
Removing intermediate container 60490e9713d3
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ff06d4048c00
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.4 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v4.2.4/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp 200 http://nodejs.org/dist/v4.2.4/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.4',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.4
[0m[91mgyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 3e2896897e41
Removing intermediate container ff06d4048c00
Step 5 : ENV NODE_ENV production
 ---> Running in ec7d4edb6864
 ---> a001a492c449
Removing intermediate container ec7d4edb6864
Step 6 : WORKDIR /usr/src/app
 ---> Running in ed3b7306e1c2
 ---> 3ab5b27a61bb
Removing intermediate container ed3b7306e1c2
Step 7 : CMD npm start
 ---> Running in c8327eb9c4e6
 ---> 8089b2ade8cc
Removing intermediate container c8327eb9c4e6
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 156a3c609df3
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 4s (2109 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> fb03609aead9
Removing intermediate container 156a3c609df3
Successfully built fb03609aead9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test36`

Contents of dockerfile `/root/docker-node/.~tmp.test36/Dockerfile`:

```
FROM nodesource/jessie:4.2.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.4-test1` from `/root/docker-node/.~tmp.test36`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.4
 ---> fb03609aead9
Step 2 : ENV NODE_ENV test
 ---> Running in a926d8a48fd9
 ---> 2b8346aa6b91
Removing intermediate container a926d8a48fd9
Step 3 : RUN node -v
 ---> Running in c4a4862f3d0c
v4.2.4
 ---> 53b6d3db5567
Error removing intermediate container c4a4862f3d0c: rmdriverfs: Driver aufs failed to remove root filesystem c4a4862f3d0c7d3be0d4c2a1e20beb6b23665997c3dc4b144fbbc92729ad8b27: rename /var/lib/docker/aufs/mnt/c4a4862f3d0c7d3be0d4c2a1e20beb6b23665997c3dc4b144fbbc92729ad8b27 /var/lib/docker/aufs/mnt/c4a4862f3d0c7d3be0d4c2a1e20beb6b23665997c3dc4b144fbbc92729ad8b27-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in ee500fd00838
{ http_parser: '2.5.0',
  node: '4.2.4',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> ddb0002b4bbe
Error removing intermediate container c4a4862f3d0c: nosuchcontainer: no such id: c4a4862f3d0c7d3be0d4c2a1e20beb6b23665997c3dc4b144fbbc92729ad8b27
Step 5 : RUN npm --version
 ---> Running in cfadf138e3d7
2.14.12
 ---> 5d142cf01bbd
Removing intermediate container ee500fd00838
Removing intermediate container cfadf138e3d7
Error removing intermediate container c4a4862f3d0c: nosuchcontainer: no such id: c4a4862f3d0c7d3be0d4c2a1e20beb6b23665997c3dc4b144fbbc92729ad8b27
Successfully built 5d142cf01bbd

```

# Tested image `nodesource/jessie:4.2.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a8676c28db1a
 ---> 93e99d096343
Removing intermediate container a8676c28db1a
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 6b912188c461
[91m  % Total    % Re[0m[91mceived % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8285k  100 [0m[91m8285k    0     0  24.4M      0 --:--:-- --:--:-- --:--:-- 24.5M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.3-1nodesource1~jessie1) ...
Setting up nodejs (4.2.3-1nodesource1~jessie1) ...
 ---> d8a9a77e70e8
Removing intermediate container 6b912188c461
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1f1d210b7938
[91mnpm WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp [0m[91minfo using[0m[91m node@4.2.3 | linux | x64
[0m[91mgyp [0m[91mhttp GET http://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200[0m[91m http://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz
[0m[91mgyp[0m[91m http [0m[91mGET http://nodejs.org/dist/v4.2.3/SHASUMS256.txt
[0m[91mgyp [0m[91mhttp 200 http://nodejs.org/dist/v4.2.3/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.3',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> c05d9ad9e1c3
Removing intermediate container 1f1d210b7938
Step 5 : ENV NODE_ENV production
 ---> Running in 7e5c808b46dc
 ---> da0d20d959d0
Removing intermediate container 7e5c808b46dc
Step 6 : WORKDIR /usr/src/app
 ---> Running in 3d208a2c0cbf
 ---> 2e2717efc572
Removing intermediate container 3d208a2c0cbf
Step 7 : CMD npm start
 ---> Running in 26c12d54091a
 ---> 07f6aaf5c7ea
Removing intermediate container 26c12d54091a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f9c11aca71b7
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 4s (1963 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 6ff049f15bb9
Removing intermediate container f9c11aca71b7
Successfully built 6ff049f15bb9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test35`

Contents of dockerfile `/root/docker-node/.~tmp.test35/Dockerfile`:

```
FROM nodesource/jessie:4.2.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.3-test1` from `/root/docker-node/.~tmp.test35`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.3
 ---> 6ff049f15bb9
Step 2 : ENV NODE_ENV test
 ---> Running in b7d12385b7be
 ---> 6f9aa790d398
Removing intermediate container b7d12385b7be
Step 3 : RUN node -v
 ---> Running in e195d6dc3799
v4.2.3
 ---> 0df42bf5691f
Removing intermediate container e195d6dc3799
Step 4 : RUN node -p "process.versions"
 ---> Running in 5a627e729237
{ http_parser: '2.5.0',
  node: '4.2.3',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> 671bd5188d89
Removing intermediate container 5a627e729237
Step 5 : RUN npm --version
 ---> Running in 1788efba5e23
2.14.7
 ---> 2fd8cc50c2a3
Removing intermediate container 1788efba5e23
Successfully built 2fd8cc50c2a3

```

# Tested image `nodesource/jessie:4.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8443f5bb4bed
 ---> e26c7b1aceb2
Removing intermediate container 8443f5bb4bed
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e63a659aa494
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upl[0m[91moad   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6489k  100 6489k    0     0  14.0M      0 --:--:-- --:--:-- --:--:-- 14.0M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.0-1nodesource1~jessie1) ...
Setting up nodejs (4.2.0-1nodesource1~jessie1) ...
 ---> 3f3c22a0d170
Removing intermediate container e63a659aa494
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 396fce4b2c07
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (forever-agent@0.5.2, caseless@0.8.0, aws-sign2@0.5.0, tunnel-agent@0.4.2, oauth-sign@0.5.0, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m info using node@4.2.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m http://nodejs.org/dist/v4.2.0/node-v4.2.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m 200 http://nodejs.org/dist/v4.2.0/node-v4.2.0.tar.gz
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.0/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200 http://nodejs.org/dist/v4.2.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> ede0a38a2ce6
Removing intermediate container 396fce4b2c07
Step 5 : ENV NODE_ENV production
 ---> Running in eca4b64b91c8
 ---> 5ba8b9e50cff
Removing intermediate container eca4b64b91c8
Step 6 : WORKDIR /usr/src/app
 ---> Running in fe3adc18081d
 ---> 50a29d47bbe0
Removing intermediate container fe3adc18081d
Step 7 : CMD npm start
 ---> Running in aa2711c7e5ad
 ---> cdc0a6adc28e
Removing intermediate container aa2711c7e5ad
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 3a0a8e5f7606
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 24s (398 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> d128be9f795f
Removing intermediate container 3a0a8e5f7606
Successfully built d128be9f795f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test32`

Contents of dockerfile `/root/docker-node/.~tmp.test32/Dockerfile`:

```
FROM nodesource/jessie:4.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.0-test1` from `/root/docker-node/.~tmp.test32`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.0
 ---> d128be9f795f
Step 2 : ENV NODE_ENV test
 ---> Running in eede1e4646f8
 ---> 5fbca5e4a3c5
Removing intermediate container eede1e4646f8
Step 3 : RUN node -v
 ---> Running in c33596172544
v4.2.0
 ---> ccb4fa9f2e2c
Removing intermediate container c33596172544
Step 4 : RUN node -p "process.versions"
 ---> Running in cd183cb46cc5
{ http_parser: '2.5.0',
  node: '4.2.0',
  v8: '4.5.103.35',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '46',
  openssl: '1.0.2d' }
 ---> 7dde8862d150
Removing intermediate container cd183cb46cc5
Step 5 : RUN npm --version
 ---> Running in f6521e8b6d16
2.14.7
 ---> bef8e2e9b143
Removing intermediate container f6521e8b6d16
Successfully built bef8e2e9b143

```

# Tested image `nodesource/jessie:4.2.5`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 6df10b6e9f4c
 ---> e9eb06294c0e
Removing intermediate container 6df10b6e9f4c
Step 3 : RUN curl https://deb.nodesource.com/node_4.x/pool/main/n/nodejs/nodejs_4.2.5-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8ab77708c0d9
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8387k  100 8387k    0     0  20.1M      0 --:--:-- --:--:-- --:--:-- 20.4M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (4.2.5-1nodesource1~jessie1) ...
Setting up nodejs (4.2.5-1nodesource1~jessie1) ...
 ---> ebb361965f62
Removing intermediate container 8ab77708c0d9
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c8d96309730e
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── graceful-fs@3.0.8
├── rimraf@2.2.8
├── semver@4.3.6
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (aws-sign2@0.5.0, forever-agent@0.5.2, caseless@0.8.0, oauth-sign@0.5.0, tunnel-agent@0.4.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, mime-types@1.0.2, qs@2.3.3, node-uuid@1.4.7, combined-stream@0.0.7, http-signature@0.10.1, form-data@0.2.0, bl@0.9.5, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@4.2.5 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v4.2.5/node-v4.2.5.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v4.2.5/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/4.2.5/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/4.2.5',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v4.2.5
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b3b73cc433b3
Removing intermediate container c8d96309730e
Step 5 : ENV NODE_ENV production
 ---> Running in 126f24cb4256
 ---> a446646ed6e2
Removing intermediate container 126f24cb4256
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8cd0f05c3170
 ---> 5fd997777354
Removing intermediate container 8cd0f05c3170
Step 7 : CMD npm start
 ---> Running in 8a6c8f76398b
 ---> 3b6d82ddb1cf
Removing intermediate container 8a6c8f76398b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e16b1430c753
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1689 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 1fbc093cd2d8
Removing intermediate container e16b1430c753
Successfully built 1fbc093cd2d8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test37`

Contents of dockerfile `/root/docker-node/.~tmp.test37/Dockerfile`:

```
FROM nodesource/jessie:4.2.5
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:4.2.5-test1` from `/root/docker-node/.~tmp.test37`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:4.2.5
 ---> 1fbc093cd2d8
Step 2 : ENV NODE_ENV test
 ---> Running in 03dd0d39963b
 ---> 1857b6753295
Removing intermediate container 03dd0d39963b
Step 3 : RUN node -v
 ---> Running in eba81b4051d7
v4.2.5
 ---> 450b472fcc35
Removing intermediate container eba81b4051d7
Step 4 : RUN node -p "process.versions"
 ---> Running in e0a0fa4030d8
{ http_parser: '2.5.0',
  node: '4.2.5',
  v8: '4.5.103.35',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '46',
  openssl: '1.0.2e' }
 ---> f9c738a6ed78
Removing intermediate container e0a0fa4030d8
Step 5 : RUN npm --version
 ---> Running in df3f1630ce7e
2.14.12
 ---> 7a01bff06d02
Removing intermediate container df3f1630ce7e
Successfully built 7a01bff06d02

```

# Tested image `nodesource/jessie:5.4.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 5c2018083695
 ---> 4c0d075722e6
Removing intermediate container 5c2018083695
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.4.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 861237b41655
[91m  % To[0m[91mtal    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100 8515k  100 8515k    0     0  19.9M      0 --:--:-- --:--:-- --:--:-- 19.9M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.4.0-1nodesource1~jessie1) ...
Setting up nodejs (5.4.0-1nodesource1~jessie1) ...
 ---> c294551b540c
Removing intermediate container 861237b41655
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c434581cb570
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@5.4.0 | linux | x64
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.4.0/node-v5.4.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.4.0/node-v5.4.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.4.0/SHASUMS256.txt
[0m[91mgyp http 200 http://nodejs.org/dist/v5.4.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp[0m[91m info[0m[91m spawn args[0m[91m   'binding.gyp',
[0m[91mgyp info [0m[91mspawn args   '-f',
[0m[91mgyp[0m[91m info[0m[91m spawn args[0m[91m   'make',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info[0m[91m spawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m info[0m[91m spawn args[0m[91m   '/root/.node-gyp/5.4.0/common.gypi',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-Dlibrary=shared_library',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-Dvisibility=default',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/5.4.0',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=node',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
[0m[91mgyp info[0m[91m spawn args   '--depth=.',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '--no-parallel',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '--generator-output',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   'build',
gyp [0m[91minfo[0m[91m spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m
[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.4.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> a72f2946c009
Removing intermediate container c434581cb570
Step 5 : ENV NODE_ENV production
 ---> Running in 2595055a3431
 ---> f8bf277dfb70
Removing intermediate container 2595055a3431
Step 6 : WORKDIR /usr/src/app
 ---> Running in c97315aa5f33
 ---> 5597c4cbfe9d
Removing intermediate container c97315aa5f33
Step 7 : CMD npm start
 ---> Running in 6cc5a60deb2a
 ---> cb4ad817c351
Removing intermediate container 6cc5a60deb2a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in fcbb8a593ba6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1828 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 40addf5292c1
Removing intermediate container fcbb8a593ba6
Successfully built 40addf5292c1

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test39`

Contents of dockerfile `/root/docker-node/.~tmp.test39/Dockerfile`:

```
FROM nodesource/jessie:5.4.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.4.0-test1` from `/root/docker-node/.~tmp.test39`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.4.0
 ---> 40addf5292c1
Step 2 : ENV NODE_ENV test
 ---> Running in 0969d975f42b
 ---> b321da521ae7
Removing intermediate container 0969d975f42b
Step 3 : RUN node -v
 ---> Running in 89d582091224
v5.4.0
 ---> 7a112701bd81
Removing intermediate container 89d582091224
Step 4 : RUN node -p "process.versions"
 ---> Running in 4f903684fd2d
{ http_parser: '2.6.0',
  node: '5.4.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
 ---> b2a035e82300
Removing intermediate container 4f903684fd2d
Step 5 : RUN npm --version
 ---> Running in 21f2327fa4b6
3.3.12
 ---> f86cb86b6012
Removing intermediate container 21f2327fa4b6
Successfully built f86cb86b6012

```

# Tested image `nodesource/jessie:5.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e1ed1bf6b678
 ---> af2561b4a9e0
Removing intermediate container e1ed1bf6b678
Step 3 : RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.1.0-2nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1123c4e438a6
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 8330k  1[0m[91m00 8330k    0     0  13.0M      0 --:--:-- --:--:-- --:--:-- 13.0M
[0mSelecting previously unselected package nodejs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking nodejs (5.1.0-2nodesource1~jessie1) ...
Setting up nodejs (5.1.0-2nodesource1~jessie1) ...
 ---> 5bce7c48e207
Removing intermediate container 1123c4e438a6
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 90e265c766ae
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
/usr/lib
`-- pangyp@2.3.3 
  +-- fstream@1.0.8 
  | +-- graceful-fs@4.1.2 
  | `-- inherits@2.0.1 
  +-- glob@4.3.5 
  | +-- inflight@1.0.4 
  | | `-- wrappy@1.0.1 
  | `-- once@1.3.3 
  +-- graceful-fs@3.0.8 
  +-- minimatch@2.0.10 
  | `-- brace-expansion@1.1.2 
  |   +-- balanced-match@0.3.0 
  |   `-- concat-map@0.0.1 
  +-- mkdirp@0.5.1 
  | `-- minimist@0.0.8 
  +-- nopt@3.0.6 
  | `-- abbrev@1.0.7 
  +-- npmlog@1.0.0 
  | +-- ansi@0.3.1 
  | +-- are-we-there-yet@1.0.6 
  | | +-- delegates@1.0.0 
  | | `-- readable-stream@2.0.5 
  | |   +-- core-util-is@1.0.2 
  | |   +-- isarray@0.0.1 
  | |   +-- process-nextick-args@1.0.6 
  | |   +-- string_decoder@0.10.31 
  | |   `-- util-deprecate@1.0.2 
  | `-- gauge@1.0.2 
  |   `-- has-unicode@1.0.1 
  +-- osenv@0.1.3 
  | +-- os-homedir@1.0.1 
  | `-- os-tmpdir@1.0.1 
  +-- request@2.51.0 
  | +-- aws-sign2@0.5.0 
  | +-- bl@0.9.5 
  | | `-- readable-stream@1.0.33 
  | +-- caseless@0.8.0 
  | +-- combined-stream@0.0.7 
  | | `-- delayed-stream@0.0.5 
  | +-- forever-agent@0.5.2 
  | +-- form-data@0.2.0 
  | | +-- async@0.9.2 
  | | `-- mime-types@2.0.14 
  | |   `-- mime-db@1.12.0 
  | +-- hawk@1.1.1 
  | | +-- boom@0.4.2 
  | | +-- cryptiles@0.2.2 
  | | +-- hoek@0.9.1 
  | | `-- sntp@0.2.4 
  | +-- http-signature@0.10.1 
  | | +-- asn1@0.1.11 
  | | +-- assert-plus@0.1.5 
  | | `-- ctype@0.5.3 
  | +-- json-stringify-safe@5.0.1 
  | +-- mime-types@1.0.2 
  | +-- node-uuid@1.4.7 
  | +-- oauth-sign@0.5.0 
  | +-- qs@2.3.3 
  | +-- stringstream@0.0.5 
  | +-- tough-cookie@2.2.1 
  | `-- tunnel-agent@0.4.2 
  +-- rimraf@2.2.8 
  +-- semver@4.3.6 
  +-- tar@1.0.3 
  | `-- block-stream@0.0.8 
  `-- which@1.0.9 

[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@5.1.0 | linux | x64
[0m[91mgyp http GET http://nodejs.org/dist/v5.1.0/node-v5.1.0.tar.gz
[0m[91mgyp http 200 http://nodejs.org/dist/v5.1.0/node-v5.1.0.tar.gz
[0m[91mgyp[0m[91m http GET http://nodejs.org/dist/v5.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 http://nodejs.org/dist/v5.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
[0m[91mgyp[0m[91m info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp [0m[91minfo spawn args   '-I',
gyp info[0m[91m spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '/root/.node-gyp/5.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/5.1.0',
gyp info spawn args   '-Druntime=node',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR![0m[91m stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/nodejs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v5.1.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> b4bad36d9737
Removing intermediate container 90e265c766ae
Step 5 : ENV NODE_ENV production
 ---> Running in cb0042a87c9e
 ---> 3044cc0a9450
Removing intermediate container cb0042a87c9e
Step 6 : WORKDIR /usr/src/app
 ---> Running in 471c5db0b7ec
 ---> 6faedda43b7c
Removing intermediate container 471c5db0b7ec
Step 7 : CMD npm start
 ---> Running in b9c7039595b5
 ---> 0bbc133d829c
Removing intermediate container b9c7039595b5
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in fd18d097a5e8
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1809 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7b8d3339fc81
Removing intermediate container fd18d097a5e8
Successfully built 7b8d3339fc81

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test38`

Contents of dockerfile `/root/docker-node/.~tmp.test38/Dockerfile`:

```
FROM nodesource/jessie:5.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:5.1.0-test1` from `/root/docker-node/.~tmp.test38`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:5.1.0
 ---> 7b8d3339fc81
Step 2 : ENV NODE_ENV test
 ---> Running in 0043b4cca8ec
 ---> 5ac2a0fd39e0
Removing intermediate container 0043b4cca8ec
Step 3 : RUN node -v
 ---> Running in ddecf14712fc
v5.1.0
 ---> 93f7c87020f1
Removing intermediate container ddecf14712fc
Step 4 : RUN node -p "process.versions"
 ---> Running in c7ce40c0bf28
{ http_parser: '2.6.0',
  node: '5.1.0',
  v8: '4.6.85.31',
  uv: '1.7.5',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2d' }
 ---> d123b6e80cbd
Removing intermediate container c7ce40c0bf28
Step 5 : RUN npm --version
 ---> Running in 2bf982b54006
3.3.12
 ---> aa402cd8ded5
Removing intermediate container 2bf982b54006
Successfully built aa402cd8ded5

```

# Tested image `nodesource/jessie:iojs-2.0.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in de8ea0f6509b
 ---> 452162a4948c
Removing intermediate container de8ea0f6509b
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.0.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 71b523caa4de
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 51 5607k   51 2879k    0     0  3878k      0  0:00:01 --:--:--  0:00:01 3875k[0m[91m100 5607k  100 5607k    0     0  6539k      0 --:--:-- --:--:-- --:--:-- 6536k
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.0.2-1nodesource1~jessie1) ...
Setting up iojs (2.0.2-1nodesource1~jessie1) ...
 ---> f40493df1b12
Removing intermediate container 71b523caa4de
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in eb2e477189e6
[91mnpm WARN [0m[91mdeprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m using node@2.0.2 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m https://iojs.org/dist/v2.0.2/iojs-v2.0.2.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.0.2/iojs-v2.0.2.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.0.2/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.0.2/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp [0m[91minfo spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp info spawn args   '-I',
[0m[91mgyp info spawn args   '/root/.node-gyp/2.0.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
[0m[91mgyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.0.2',
gyp [0m[91minfo[0m[91m spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp [0m[91minfo spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp [0m[91mERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.0.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 277ae4e595cf
Removing intermediate container eb2e477189e6
Step 5 : ENV NODE_ENV production
 ---> Running in 750b16004d64
 ---> 81fe49c977b1
Removing intermediate container 750b16004d64
Step 6 : WORKDIR /usr/src/app
 ---> Running in 50a8c1dafe4f
 ---> 804d2fd68e07
Removing intermediate container 50a8c1dafe4f
Step 7 : CMD npm start
 ---> Running in 3379face4043
 ---> 2475c7946072
Removing intermediate container 3379face4043
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in af15d7b7c933
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1839 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0bece9064ca0
Removing intermediate container af15d7b7c933
Successfully built 0bece9064ca0

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test48`

Contents of dockerfile `/root/docker-node/.~tmp.test48/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.0.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.0.2-test1` from `/root/docker-node/.~tmp.test48`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.0.2
 ---> 0bece9064ca0
Step 2 : ENV NODE_ENV test
 ---> Running in 0d8a0f52568c
 ---> e2d17ad2142f
Removing intermediate container 0d8a0f52568c
Step 3 : RUN node -v
 ---> Running in ddda352b5e02
v2.0.2
 ---> e68e7e7e64de
Removing intermediate container ddda352b5e02
Step 4 : RUN node -p "process.versions"
 ---> Running in 31a9afd0f808
{ http_parser: '2.5.0',
  node: '2.0.2',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> 63d6d461182e
Removing intermediate container 31a9afd0f808
Step 5 : RUN npm --version
 ---> Running in 7587717be588
2.9.0
 ---> 653ac3424b1e
Removing intermediate container 7587717be588
Successfully built 653ac3424b1e

```

# Tested image `nodesource/jessie:iojs-1.8.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 1a5a33c53d41
 ---> 079968741c95
Removing intermediate container 1a5a33c53d41
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.8.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1e0c7728cf33
[91m  % Total    % Received % X[0m[91mferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m[0m[91m100 5760k  100 5760k    0     0  11.0M      0 --:--:-- --:--:-- --:--:-- 11.0M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.8.4-1nodesource1~jessie1) ...
Setting up iojs (1.8.4-1nodesource1~jessie1) ...
 ---> 2cdbcaecffe1
Removing intermediate container 1e0c7728cf33
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6e3afb788f6a
[91mnpm WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m info[0m[91m [0m[91musing[0m[91m node@1.8.4 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.8.4/iojs-v1.8.4.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.8.4/iojs-v1.8.4.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.8.4/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m https://iojs.org/dist/v1.8.4/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn[0m[91m python
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'binding.gyp',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-f',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'make',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '/root/.node-gyp/1.8.4/common.gypi',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Dlibrary=shared_library',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Dvisibility=default',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/1.8.4',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Dmodule_root_dir=/',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '--depth=.',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '--no-parallel',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '--generator-output',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mstack     at ChildProcess.emit (events.js:169:7)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m stack[0m[91m     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mSystem[0m[91m Linux 3.13.0-71-generic
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mcommand[0m[91m "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mcwd[0m[91m /
[0m[91mgyp[0m[91m ERR! [0m[91mnode -v[0m[91m v1.8.4
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mpangyp -v[0m[91m v2.3.3
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mnot ok[0m[91m 
[0m
 ---> 9337b4b6a88b
Removing intermediate container 6e3afb788f6a
Step 5 : ENV NODE_ENV production
 ---> Running in 1f56b2b3ed21
 ---> a54cd38e201e
Removing intermediate container 1f56b2b3ed21
Step 6 : WORKDIR /usr/src/app
 ---> Running in e345cde31c16
 ---> dc88e56200dd
Removing intermediate container e345cde31c16
Step 7 : CMD npm start
 ---> Running in 9ad9769af95f
 ---> a45486984a36
Removing intermediate container 9ad9769af95f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 21613ad9c7b5
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1651 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> ca1f28967d68
Removing intermediate container 21613ad9c7b5
Successfully built ca1f28967d68

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test40`

Contents of dockerfile `/root/docker-node/.~tmp.test40/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.8.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.8.4-test1` from `/root/docker-node/.~tmp.test40`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.8.4
 ---> ca1f28967d68
Step 2 : ENV NODE_ENV test
 ---> Running in 582388177bf9
 ---> 3d7c4e3e8bd6
Error removing intermediate container 582388177bf9: rmdriverfs: Driver aufs failed to remove root filesystem 582388177bf96e0df08009896b1c424164bcd694f7308e6945b667a34164c779: rename /var/lib/docker/aufs/mnt/582388177bf96e0df08009896b1c424164bcd694f7308e6945b667a34164c779 /var/lib/docker/aufs/mnt/582388177bf96e0df08009896b1c424164bcd694f7308e6945b667a34164c779-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in ec4d6ff80eff
v1.8.4
 ---> ef100070bb12
Error removing intermediate container 582388177bf9: nosuchcontainer: no such id: 582388177bf96e0df08009896b1c424164bcd694f7308e6945b667a34164c779
Step 4 : RUN node -p "process.versions"
 ---> Running in 632d3cfcc045
{ http_parser: '2.5.0',
  node: '1.8.4',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.2d' }
 ---> dc727dfe7cd1
Error removing intermediate container 582388177bf9: nosuchcontainer: no such id: 582388177bf96e0df08009896b1c424164bcd694f7308e6945b667a34164c779
Step 5 : RUN npm --version
 ---> Running in 82ca9dbd3f3e
2.9.0
 ---> 3a1b1e49663b
Removing intermediate container 632d3cfcc045
Removing intermediate container 82ca9dbd3f3e
Error removing intermediate container 582388177bf9: nosuchcontainer: no such id: 582388177bf96e0df08009896b1c424164bcd694f7308e6945b667a34164c779
Successfully built 3a1b1e49663b

```

# Tested image `nodesource/jessie:iojs-3.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8338609f78d8
 ---> 048874f23d26
Removing intermediate container 8338609f78d8
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 49fee90e0f08
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6228k  100 6228k    0     0  18.9M      0 --:--:-- --:--:-- --:--:-- 18.9M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.3.0-1nodesource1~jessie1) ...
Setting up iojs (3.3.0-1nodesource1~jessie1) ...
 ---> f5e0995a3b7d
Removing intermediate container 49fee90e0f08
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in ed58464794fe
[91mnpm [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using[0m[91m pangyp@2.3.3
[0m[91mgyp info using node@3.3.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m https://iojs.org/dist/v3.3.0/iojs-v3.3.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m https://iojs.org/dist/v3.3.0/iojs-v3.3.0.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.3.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v3.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/3.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.3.0',
gyp info spawn args   '-Druntime=iojs',
gyp[0m[91m info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v3.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 749aa15ef24b
Removing intermediate container ed58464794fe
Step 5 : ENV NODE_ENV production
 ---> Running in 7de86d6af18c
 ---> 6a322f83c0f2
Removing intermediate container 7de86d6af18c
Step 6 : WORKDIR /usr/src/app
 ---> Running in e7ce56fd7226
 ---> 1af5ecc5501d
Removing intermediate container e7ce56fd7226
Step 7 : CMD npm start
 ---> Running in a242d71b92e3
 ---> 9fc706fa786f
Removing intermediate container a242d71b92e3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 5309fe424639
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1779 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f2ac397a7f7e
Removing intermediate container 5309fe424639
Successfully built f2ac397a7f7e

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test42`

Contents of dockerfile `/root/docker-node/.~tmp.test42/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.3.0-test1` from `/root/docker-node/.~tmp.test42`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.3.0
 ---> f2ac397a7f7e
Step 2 : ENV NODE_ENV test
 ---> Running in db7d796a3b75
 ---> 74e383e99e12
Removing intermediate container db7d796a3b75
Step 3 : RUN node -v
 ---> Running in 09a92eb29107
v3.3.0
 ---> ca79756225dc
Removing intermediate container 09a92eb29107
Step 4 : RUN node -p "process.versions"
 ---> Running in 13ea35043ad6
{ http_parser: '2.5.0',
  node: '3.3.0',
  v8: '4.4.63.30',
  uv: '1.7.3',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> 21381b1333f6
Removing intermediate container 13ea35043ad6
Step 5 : RUN npm --version
 ---> Running in 801dbb1a013f
2.13.3
 ---> 08a3d1ec5432
Removing intermediate container 801dbb1a013f
Successfully built 08a3d1ec5432

```

# Tested image `nodesource/jessie:iojs-1.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e9aee27b6fb2
 ---> eb4b975d0018
Removing intermediate container e9aee27b6fb2
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 691a5dbd624d
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m  1 5065k    1 98006    0     0   225k      0  0:00:22 --:--:--  0:00:22  225k[0m[91m100 5065k  100 5065k    0     0  7435k      0 --:--:-- --:--:-- --:--:-- 7438k
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.3.0-1nodesource1~jessie1) ...
Setting up iojs (1.3.0-1nodesource1~jessie1) ...
 ---> 8534b3815b2e
Removing intermediate container 691a5dbd624d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 4cc323b8251b
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, tunnel-agent@0.4.2, oauth-sign@0.5.0, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@1.3.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m https://iojs.org/dist/v1.3.0/iojs-v1.3.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp 200 https://iojs.org/dist/v1.3.0/iojs-v1.3.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET https://iojs.org/dist/v1.3.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200[0m[91m https://iojs.org/dist/v1.3.0/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn python
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'binding.gyp',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-f',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'make',
[0m[91mgyp [0m[91minfo[0m[91m spawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m [0m[91minfo spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp [0m[91minfo spawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-I',
gyp[0m[91m [0m[91minfo [0m[91mspawn args[0m[91m   '/root/.node-gyp/1.3.0/common.gypi',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '-Dlibrary=shared_library',
[0m[91mgyp[0m[91m info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.3.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp info [0m[91mspawn args   '--no-parallel',
gyp [0m[91minfo spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error[0m[91m 
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m [0m[91mERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:169:7)
gyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mSystem[0m[91m Linux 3.13.0-71-generic
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mcommand[0m[91m "node" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mcwd[0m[91m /
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mnode -v v1.3.0
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mpangyp -v v2.3.3
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mnot ok[0m[91m 
[0m
 ---> 80cf69d03da6
Removing intermediate container 4cc323b8251b
Step 5 : ENV NODE_ENV production
 ---> Running in 27e3d03341a1
 ---> 0c26417d0862
Removing intermediate container 27e3d03341a1
Step 6 : WORKDIR /usr/src/app
 ---> Running in 91ea5e8c291b
 ---> 4df78a61fa16
Removing intermediate container 91ea5e8c291b
Step 7 : CMD npm start
 ---> Running in dbeec8dcaf91
 ---> b019d1b09694
Removing intermediate container dbeec8dcaf91
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 4214cfa07557
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 4s (1947 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> d770b5abbd78
Removing intermediate container 4214cfa07557
Successfully built d770b5abbd78

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test43`

Contents of dockerfile `/root/docker-node/.~tmp.test43/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.3.0-test1` from `/root/docker-node/.~tmp.test43`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.3.0
 ---> d770b5abbd78
Step 2 : ENV NODE_ENV test
 ---> Running in 8c783ed7c0d6
 ---> d07169d6d5fc
Removing intermediate container 8c783ed7c0d6
Step 3 : RUN node -v
 ---> Running in 97de295158e3
v1.3.0
 ---> 53cc3547e341
Removing intermediate container 97de295158e3
Step 4 : RUN node -p "process.versions"
 ---> Running in a3da090ba921
{ http_parser: '2.3.0',
  node: '1.3.0',
  v8: '4.1.0.14',
  uv: '1.4.0',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> 2cdecfe4b6aa
Removing intermediate container a3da090ba921
Step 5 : RUN npm --version
 ---> Running in f6172ed79e78
2.5.1
 ---> 7dea1fec6e2a
Error removing intermediate container f6172ed79e78: rmdriverfs: Driver aufs failed to remove root filesystem f6172ed79e780f07d18165b031cb957e8de783b98c566858f97978aa9594d539: rename /var/lib/docker/aufs/mnt/f6172ed79e780f07d18165b031cb957e8de783b98c566858f97978aa9594d539 /var/lib/docker/aufs/mnt/f6172ed79e780f07d18165b031cb957e8de783b98c566858f97978aa9594d539-removing: device or resource busy
Successfully built 7dea1fec6e2a

```

# Tested image `nodesource/jessie:iojs-1.5.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8200b358402d
 ---> 55c944bead0f
Removing intermediate container 8200b358402d
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.5.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 81a76016a62a
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5106k  100 5106k    0     0  14.4M      0 --:--:-- --:--:-- --:--:-- 14.4M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.5.1-1nodesource1~jessie1) ...
Setting up iojs (1.5.1-1nodesource1~jessie1) ...
 ---> f0ff73d1dafc
Removing intermediate container 81a76016a62a
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 9a2e5e67f769
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m using[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m info using[0m[91m node@1.5.1 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.5.1/iojs-v1.5.1.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.5.1/iojs-v1.5.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.5.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.5.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   'make',
[0m[91mgyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args[0m[91m   '-I',
gyp info [0m[91mspawn args   '/root/.node-gyp/1.5.1/common.gypi',
[0m[91mgyp[0m[91m info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.5.1',
gyp info spawn args   '-Druntime=iojs',
gyp[0m[91m info [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp[0m[91m info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp[0m[91m ERR! stack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp [0m[91mERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.5.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> f4d0fdfde0e1
Removing intermediate container 9a2e5e67f769
Step 5 : ENV NODE_ENV production
 ---> Running in 6f0979a5408f
 ---> 2f198ccb93c7
Removing intermediate container 6f0979a5408f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 4bbd43a5b5b7
 ---> 04c5fec03545
Removing intermediate container 4bbd43a5b5b7
Step 7 : CMD npm start
 ---> Running in 3031d56065ce
 ---> a1d307c7288a
Removing intermediate container 3031d56065ce
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 73bd448724cf
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 4s (2188 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f4e782c956c6
Removing intermediate container 73bd448724cf
Successfully built f4e782c956c6

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test45`

Contents of dockerfile `/root/docker-node/.~tmp.test45/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.5.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.5.1-test1` from `/root/docker-node/.~tmp.test45`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.5.1
 ---> f4e782c956c6
Step 2 : ENV NODE_ENV test
 ---> Running in 14b226b97638
 ---> a7913405a775
Removing intermediate container 14b226b97638
Step 3 : RUN node -v
 ---> Running in 4755e266048c
v1.5.1
 ---> b4e2ff47c92a
Removing intermediate container 4755e266048c
Step 4 : RUN node -p "process.versions"
 ---> Running in ee6e5d81c9f4
{ http_parser: '2.3.0',
  node: '1.5.1',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> 061edeffe80d
Removing intermediate container ee6e5d81c9f4
Step 5 : RUN npm --version
 ---> Running in 53894b937774
2.7.0
 ---> f1f85ed8e08b
Removing intermediate container 53894b937774
Successfully built f1f85ed8e08b

```

# Tested image `nodesource/jessie:iojs-1.4.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in dfb44458ba8f
 ---> 59b51dbaeb20
Removing intermediate container dfb44458ba8f
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.4.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cc3ef62a7195
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5096k  100 5096k    0     0[0m[91m  19.9M      0 --:--:-- --:--:-- --:--:-- 19.9M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.4.3-1nodesource1~jessie1) ...
Setting up iojs (1.4.3-1nodesource1~jessie1) ...
 ---> 83316988b294
Removing intermediate container cc3ef62a7195
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b8ae5167db47
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@1.4.3 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.4.3/iojs-v1.4.3.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.3/iojs-v1.4.3.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.4.3/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.3/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info [0m[91mspawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '/root/.node-gyp/1.4.3/common.gypi',
[0m[91mgyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.4.3',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
[0m[91mgyp info spawn args[0m[91m   '--generator-output',
gyp[0m[91m [0m[91minfo spawn args[0m[91m   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.4.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> aedbc710726f
Removing intermediate container b8ae5167db47
Step 5 : ENV NODE_ENV production
 ---> Running in 5a59373a667b
 ---> fd79e915e46a
Removing intermediate container 5a59373a667b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 787f23e14a99
 ---> 38002edbed3f
Removing intermediate container 787f23e14a99
Step 7 : CMD npm start
 ---> Running in 3266c61ae665
 ---> 29526e4aa1f7
Removing intermediate container 3266c61ae665
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 28e439a27083
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1867 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> bcce82804c9d
Removing intermediate container 28e439a27083
Successfully built bcce82804c9d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test44`

Contents of dockerfile `/root/docker-node/.~tmp.test44/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.4.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.4.3-test1` from `/root/docker-node/.~tmp.test44`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.4.3
 ---> bcce82804c9d
Step 2 : ENV NODE_ENV test
 ---> Running in bf79214f0e78
 ---> 61056148af61
Removing intermediate container bf79214f0e78
Step 3 : RUN node -v
 ---> Running in a46a685082f3
v1.4.3
 ---> 640692cdc07a
Removing intermediate container a46a685082f3
Step 4 : RUN node -p "process.versions"
 ---> Running in 83ad083191ca
{ http_parser: '2.3.0',
  node: '1.4.3',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> b7c77288eaa4
Error removing intermediate container 83ad083191ca: rmdriverfs: Driver aufs failed to remove root filesystem 83ad083191ca975807782a1dd5c826592b94c22bf6981438dc1e98e01b9c8575: rename /var/lib/docker/aufs/mnt/83ad083191ca975807782a1dd5c826592b94c22bf6981438dc1e98e01b9c8575 /var/lib/docker/aufs/mnt/83ad083191ca975807782a1dd5c826592b94c22bf6981438dc1e98e01b9c8575-removing: device or resource busy
Step 5 : RUN npm --version
 ---> Running in bc5593fe8c0d
2.6.1
 ---> 8e5a6caf407c
Error removing intermediate container 83ad083191ca: nosuchcontainer: no such id: 83ad083191ca975807782a1dd5c826592b94c22bf6981438dc1e98e01b9c8575
Successfully built 8e5a6caf407c

```

# Tested image `nodesource/jessie:iojs-1.6.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2b24e4b4d0c0
 ---> 5c03728a2bca
Removing intermediate container 2b24e4b4d0c0
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in c50e52c669d1
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5297k  100 5297k    0     0  8434k      0 --:--:-- --:--:-- --:--:-- 8448k
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.4-1nodesource1~jessie1) ...
Setting up iojs (1.6.4-1nodesource1~jessie1) ...
 ---> 4fd0b29ba682
Removing intermediate container c50e52c669d1
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in fd9e83e5b4df
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info using[0m[91m pangyp@2.3.3
[0m[91mgyp [0m[91minfo using node@1.6.4 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.6.4/iojs-v1.6.4.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.6.4/iojs-v1.6.4.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.6.4/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.6.4/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp[0m[91m info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.4',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info[0m[91m spawn args   '--no-parallel',
gyp info [0m[91mspawn args[0m[91m   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 5e4d8bd33d0f
Removing intermediate container fd9e83e5b4df
Step 5 : ENV NODE_ENV production
 ---> Running in 222cd40a2315
 ---> 9ff935e9526e
Removing intermediate container 222cd40a2315
Step 6 : WORKDIR /usr/src/app
 ---> Running in 59debf35c868
 ---> 76b7df2015f5
Removing intermediate container 59debf35c868
Step 7 : CMD npm start
 ---> Running in 776fb4b3226c
 ---> 48218806d1df
Removing intermediate container 776fb4b3226c
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 9a9f81afba90
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1708 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 1f9b3dae5876
Removing intermediate container 9a9f81afba90
Successfully built 1f9b3dae5876

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test46`

Contents of dockerfile `/root/docker-node/.~tmp.test46/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.4-test1` from `/root/docker-node/.~tmp.test46`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.4
 ---> 1f9b3dae5876
Step 2 : ENV NODE_ENV test
 ---> Running in 28ac05a4d82c
 ---> 9be8a63038d6
Removing intermediate container 28ac05a4d82c
Step 3 : RUN node -v
 ---> Running in 93f347446b95
v1.6.4
 ---> abe5e4fae4b3
Removing intermediate container 93f347446b95
Step 4 : RUN node -p "process.versions"
 ---> Running in b048624d0ba4
{ http_parser: '2.3.0',
  node: '1.6.4',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 2676b25f6b61
Removing intermediate container b048624d0ba4
Step 5 : RUN npm --version
 ---> Running in ca661de6bf09
2.7.5
 ---> d254397eecc8
Error removing intermediate container ca661de6bf09: rmdriverfs: Driver aufs failed to remove root filesystem ca661de6bf095c50b5e18ac5c8930d09d01d5cc40c88a61d8142d37735e2dc36: rename /var/lib/docker/aufs/diff/ca661de6bf095c50b5e18ac5c8930d09d01d5cc40c88a61d8142d37735e2dc36 /var/lib/docker/aufs/diff/ca661de6bf095c50b5e18ac5c8930d09d01d5cc40c88a61d8142d37735e2dc36-removing: device or resource busy
Successfully built d254397eecc8

```

# Tested image `nodesource/jessie:iojs-1.7.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e98c16cebfca
 ---> fa472288f990
Removing intermediate container e98c16cebfca
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.7.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 3174dd6999fa
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5300k  100 5300k    0     0  12.8M      0 --:--:-- --:--:-- --:--:-- 12.9M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.7.1-1nodesource1~jessie1) ...
Setting up iojs (1.7.1-1nodesource1~jessie1) ...
 ---> 24a90cb0cd5a
Removing intermediate container 3174dd6999fa
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 28d6ff0ac3d7
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m it worked if it ends with ok
[0m[91mgyp[0m[91m info[0m[91m using pangyp@2.3.3
gyp info using node@1.7.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m https://iojs.org/dist/v1.7.1/iojs-v1.7.1.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200 https://iojs.org/dist/v1.7.1/iojs-v1.7.1.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp GET[0m[91m https://iojs.org/dist/v1.7.1/SHASUMS256.txt
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m https://iojs.org/dist/v1.7.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info[0m[91m spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.7.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.7.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.7.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 04d0a323192a
Removing intermediate container 28d6ff0ac3d7
Step 5 : ENV NODE_ENV production
 ---> Running in fc24fd82b238
 ---> ad5cf4b766c1
Removing intermediate container fc24fd82b238
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0e0058e0a2de
 ---> c0de497686dc
Removing intermediate container 0e0058e0a2de
Step 7 : CMD npm start
 ---> Running in 5fd6b36a2777
 ---> 7c7d2999c1cb
Removing intermediate container 5fd6b36a2777
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 5026d25535c8
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1741 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 91ffb6f60a73
Error removing intermediate container 5026d25535c8: rmdriverfs: Driver aufs failed to remove root filesystem 5026d25535c8ab72fb13de3ae0113a32e2f0de74c76585603652fd96b5e8ab03: rename /var/lib/docker/aufs/mnt/5026d25535c8ab72fb13de3ae0113a32e2f0de74c76585603652fd96b5e8ab03 /var/lib/docker/aufs/mnt/5026d25535c8ab72fb13de3ae0113a32e2f0de74c76585603652fd96b5e8ab03-removing: device or resource busy
Successfully built 91ffb6f60a73

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test47`

Contents of dockerfile `/root/docker-node/.~tmp.test47/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.7.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.7.1-test1` from `/root/docker-node/.~tmp.test47`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.7.1
 ---> 91ffb6f60a73
Step 2 : ENV NODE_ENV test
 ---> Running in 2b067b86badf
 ---> ced61227a713
Removing intermediate container 2b067b86badf
Step 3 : RUN node -v
 ---> Running in bbf45c5a0955
v1.7.1
 ---> 80b2cef6e589
Error removing intermediate container bbf45c5a0955: rmdriverfs: Driver aufs failed to remove root filesystem bbf45c5a0955be455e609f7d8b982f3580231ce776404057019462ae1d034904: rename /var/lib/docker/aufs/diff/bbf45c5a0955be455e609f7d8b982f3580231ce776404057019462ae1d034904 /var/lib/docker/aufs/diff/bbf45c5a0955be455e609f7d8b982f3580231ce776404057019462ae1d034904-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in 836efe033dc4
{ http_parser: '2.3.0',
  node: '1.7.1',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 6f50aad2adbb
Error removing intermediate container bbf45c5a0955: nosuchcontainer: no such id: bbf45c5a0955be455e609f7d8b982f3580231ce776404057019462ae1d034904
Step 5 : RUN npm --version
 ---> Running in f6c281e24439
2.7.6
 ---> 6c7b88608d2b
Error removing intermediate container bbf45c5a0955: nosuchcontainer: no such id: bbf45c5a0955be455e609f7d8b982f3580231ce776404057019462ae1d034904
Successfully built 6c7b88608d2b

```

# Tested image `nodesource/jessie:iojs-2.5.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a83092c5c49c
 ---> faa82fb724e0
Removing intermediate container a83092c5c49c
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.5.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 18545ba737ba
[91m  % Total[0m[91m    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0mSelecting previously unselected package iojs.
[91m100 6052k  100 6052k    0     0  17.6M      0 --:--:-- --:--:-- --:--:-- 17.6M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.5.0-1nodesource1~jessie1) ...
Setting up iojs (2.5.0-1nodesource1~jessie1) ...
 ---> 88a1a8a22d49
Removing intermediate container 18545ba737ba
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b19345472f74
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
[0m[91mgyp info using node@2.5.0 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.5.0/iojs-v2.5.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.5.0/iojs-v2.5.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.5.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.5.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.5.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.5.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack[0m[91m     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.5.0
gyp ERR! pangyp -v v2.3.3
[0m[91mgyp ERR! not ok 
[0m
 ---> a840bf7dc185
Removing intermediate container b19345472f74
Step 5 : ENV NODE_ENV production
 ---> Running in 0715ad816371
 ---> 43340bec2a2f
Removing intermediate container 0715ad816371
Step 6 : WORKDIR /usr/src/app
 ---> Running in 954692e6c10a
 ---> d0947b5d39ae
Removing intermediate container 954692e6c10a
Step 7 : CMD npm start
 ---> Running in 0192dc760cc9
 ---> 3ba62d056cec
Removing intermediate container 0192dc760cc9
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 427d5172bd6f
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1805 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> f247771ff2f7
Removing intermediate container 427d5172bd6f
Successfully built f247771ff2f7

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test41`

Contents of dockerfile `/root/docker-node/.~tmp.test41/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.5.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.5.0-test1` from `/root/docker-node/.~tmp.test41`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.5.0
 ---> f247771ff2f7
Step 2 : ENV NODE_ENV test
 ---> Running in 4c98b6ea6cb2
 ---> 5a7b04807542
Removing intermediate container 4c98b6ea6cb2
Step 3 : RUN node -v
 ---> Running in d01fffc79af7
v2.5.0
 ---> 0e4e0301ea20
Removing intermediate container d01fffc79af7
Step 4 : RUN node -p "process.versions"
 ---> Running in 2ee07f4be28b
{ http_parser: '2.5.0',
  node: '2.5.0',
  v8: '4.2.77.21',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2d' }
 ---> 95487e696b89
Removing intermediate container 2ee07f4be28b
Step 5 : RUN npm --version
 ---> Running in 01fe9e5fc062
2.13.2
 ---> 234aa049455e
Removing intermediate container 01fe9e5fc062
Successfully built 234aa049455e

```

# Tested image `nodesource/jessie:iojs-2.3.4`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 6dc1ff59bfac
 ---> 1748fbd24ee8
Removing intermediate container 6dc1ff59bfac
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.4-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in afc8228cbd2e
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6046k  1[0m[91m00 6046k    0     0  13.4M      0 --:--:-- --:--:-- --:--:-- 13.4M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.4-1nodesource1~jessie1) ...
Setting up iojs (2.3.4-1nodesource1~jessie1) ...
 ---> 932be4957a0a
Removing intermediate container afc8228cbd2e
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in c2b1fcf9c49f
[91mnpm[0m[91m WARN[0m[91m deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@2.3.4 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.4/iojs-v2.3.4.tar.gz
[0m[91mgyp[0m[91m http 200[0m[91m https://iojs.org/dist/v2.3.4/iojs-v2.3.4.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.3.4/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.3.4/SHASUMS256.txt
gyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp [0m[91minfo spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args[0m[91m   '-I',
gyp [0m[91minfo [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.4/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.4',
gyp info spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info[0m[91m spawn args   '--depth=.',
[0m[91mgyp info spawn args[0m[91m   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.3.4
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 68c154162072
Removing intermediate container c2b1fcf9c49f
Step 5 : ENV NODE_ENV production
 ---> Running in 46e94579166c
 ---> 29bd98c5fe44
Removing intermediate container 46e94579166c
Step 6 : WORKDIR /usr/src/app
 ---> Running in 8b524b743162
 ---> 4f73a4014a8b
Removing intermediate container 8b524b743162
Step 7 : CMD npm start
 ---> Running in 4a03e31d70b9
 ---> d3fa67240a72
Removing intermediate container 4a03e31d70b9
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 767644709edb
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1488 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> faa5a83f98e9
Error removing intermediate container 767644709edb: rmdriverfs: Driver aufs failed to remove root filesystem 767644709edb2446054097b245e90d60e1d10874f152be4ce30e2439beeae450: rename /var/lib/docker/aufs/mnt/767644709edb2446054097b245e90d60e1d10874f152be4ce30e2439beeae450 /var/lib/docker/aufs/mnt/767644709edb2446054097b245e90d60e1d10874f152be4ce30e2439beeae450-removing: device or resource busy
Successfully built faa5a83f98e9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test51`

Contents of dockerfile `/root/docker-node/.~tmp.test51/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.4
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.4-test1` from `/root/docker-node/.~tmp.test51`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.4
 ---> faa5a83f98e9
Step 2 : ENV NODE_ENV test
 ---> Running in ccc133faf164
 ---> 148764f8c67f
Removing intermediate container ccc133faf164
Step 3 : RUN node -v
 ---> Running in 4c9bdcb046dc
v2.3.4
 ---> f14d24a77157
Removing intermediate container 4c9bdcb046dc
Step 4 : RUN node -p "process.versions"
 ---> Running in 10207df36103
{ http_parser: '2.5.0',
  node: '2.3.4',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2d' }
 ---> c237adf98915
Removing intermediate container 10207df36103
Step 5 : RUN npm --version
 ---> Running in 26e132c90796
2.12.1
 ---> 68767de22e8a
Removing intermediate container 26e132c90796
Successfully built 68767de22e8a

```

# Tested image `nodesource/jessie:iojs-2.2.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9fd3c65d6552
 ---> 5bcd8a15fb5f
Removing intermediate container 9fd3c65d6552
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.2.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 5b6d714ba38f
[91m [0m[91m % [0m[91mTotal    % Received % Xf[0m[91merd  Average Speed   Time    Time     Tim[0m[91me  Current
                              [0m[91m   Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5640k  100 5640k    0     0  6276k      0 --:--:-- --:--:-- --:--:-- 6288k
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.2.1-1nodesource1~jessie1) ...
Setting up iojs (2.2.1-1nodesource1~jessie1) ...
 ---> fcf62421d485
Removing intermediate container 5b6d714ba38f
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6343a38da3c7
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@2.2.1 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.2.1/iojs-v2.2.1.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.2.1/iojs-v2.2.1.tar.gz
[0m[91mgyp [0m[91mhttp GET https://iojs.org/dist/v2.2.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.2.1/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.2.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.2.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:199:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.2.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> c2cea6d81ce7
Removing intermediate container 6343a38da3c7
Step 5 : ENV NODE_ENV production
 ---> Running in c5ec7670a047
 ---> 987afbc063ed
Removing intermediate container c5ec7670a047
Step 6 : WORKDIR /usr/src/app
 ---> Running in 1d8740e4be18
 ---> 2e075613990a
Removing intermediate container 1d8740e4be18
Step 7 : CMD npm start
 ---> Running in bfbc7973242e
 ---> 081238cc6571
Removing intermediate container bfbc7973242e
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in aa05d775890d
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1706 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 6c41f91c28e9
Removing intermediate container aa05d775890d
Successfully built 6c41f91c28e9

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test50`

Contents of dockerfile `/root/docker-node/.~tmp.test50/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.2.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.2.1-test1` from `/root/docker-node/.~tmp.test50`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.2.1
 ---> 6c41f91c28e9
Step 2 : ENV NODE_ENV test
 ---> Running in c13d583d333d
 ---> dfe93d542714
Removing intermediate container c13d583d333d
Step 3 : RUN node -v
 ---> Running in 8b7f995a280f
v2.2.1
 ---> ae1262299f41
Removing intermediate container 8b7f995a280f
Step 4 : RUN node -p "process.versions"
 ---> Running in 8c5ec3eff912
{ http_parser: '2.5.0',
  node: '2.2.1',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> fc1f0de706ab
Error removing intermediate container 8c5ec3eff912: rmdriverfs: Driver aufs failed to remove root filesystem 8c5ec3eff912096bf11bada954430c14c4647462b819656d5987611a0d129357: rename /var/lib/docker/aufs/diff/8c5ec3eff912096bf11bada954430c14c4647462b819656d5987611a0d129357 /var/lib/docker/aufs/diff/8c5ec3eff912096bf11bada954430c14c4647462b819656d5987611a0d129357-removing: device or resource busy
Step 5 : RUN npm --version
 ---> Running in e177a163c0e6
2.11.0
 ---> 5b9680ecc690
Removing intermediate container e177a163c0e6
Error removing intermediate container 8c5ec3eff912: nosuchcontainer: no such id: 8c5ec3eff912096bf11bada954430c14c4647462b819656d5987611a0d129357
Successfully built 5b9680ecc690

```

# Tested image `nodesource/jessie:iojs-2.4.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 420bf8d18b30
 ---> 57b2a162d110
Removing intermediate container 420bf8d18b30
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.4.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in a20beb7b3a35
[91m  % Total    % Received % [0mSelecting previously unselected package iojs.
[91mXferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100 6076k  100 6076k    0     0  48.4M      0 --:--:-- --:--:-- --:--:-- 48.6M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.4.0-1nodesource1~jessie1) ...
Setting up iojs (2.4.0-1nodesource1~jessie1) ...
 ---> 6595b614b265
Removing intermediate container a20beb7b3a35
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 00ef973d4a3c
[91mnpm WARN deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@2.4.0 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.4.0/iojs-v2.4.0.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.4.0/iojs-v2.4.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.4.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200[0m[91m https://iojs.org/dist/v2.4.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info[0m[91m spawn args   'binding.gyp',
gyp[0m[91m info spawn args[0m[91m   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info [0m[91mspawn args[0m[91m   '/build/config.gypi',
gyp info spawn args   '-I',
gyp[0m[91m info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp [0m[91minfo spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.4.0/common.gypi',
[0m[91mgyp info spawn args[0m[91m   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
[0m[91mgyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.4.0',
gyp info[0m[91m spawn args   '-Druntime=iojs',
gyp info[0m[91m spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.4.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> ad96e4bf7b0d
Removing intermediate container 00ef973d4a3c
Step 5 : ENV NODE_ENV production
 ---> Running in 90dba422a278
 ---> 698806bfaeac
Removing intermediate container 90dba422a278
Step 6 : WORKDIR /usr/src/app
 ---> Running in 1dabe2d901e6
 ---> e3d680323aab
Error removing intermediate container 1dabe2d901e6: rmdriverfs: Driver aufs failed to remove root filesystem 1dabe2d901e68d1dbb69cb14dc840d6c270dbf0c4d56d83b22339f7d9cea8852: rename /var/lib/docker/aufs/mnt/1dabe2d901e68d1dbb69cb14dc840d6c270dbf0c4d56d83b22339f7d9cea8852 /var/lib/docker/aufs/mnt/1dabe2d901e68d1dbb69cb14dc840d6c270dbf0c4d56d83b22339f7d9cea8852-removing: device or resource busy
Step 7 : CMD npm start
 ---> Running in 1b331b37dc97
 ---> 4fe3b339b2fa
Error removing intermediate container 1dabe2d901e6: nosuchcontainer: no such id: 1dabe2d901e68d1dbb69cb14dc840d6c270dbf0c4d56d83b22339f7d9cea8852
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6c63dcc02742
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1435 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 8a03c4cbb670
Error removing intermediate container 1dabe2d901e6: nosuchcontainer: no such id: 1dabe2d901e68d1dbb69cb14dc840d6c270dbf0c4d56d83b22339f7d9cea8852
Successfully built 8a03c4cbb670

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test52`

Contents of dockerfile `/root/docker-node/.~tmp.test52/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.4.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.4.0-test1` from `/root/docker-node/.~tmp.test52`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.4.0
 ---> 8a03c4cbb670
Step 2 : ENV NODE_ENV test
 ---> Running in 6d3f69e18d09
 ---> 837f566a0e1a
Removing intermediate container 6d3f69e18d09
Step 3 : RUN node -v
 ---> Running in 0a50213f733d
v2.4.0
 ---> a9561b84050c
Removing intermediate container 0a50213f733d
Step 4 : RUN node -p "process.versions"
 ---> Running in 26d5722e2ae2
{ http_parser: '2.5.0',
  node: '2.4.0',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2d' }
 ---> e8e3ded15be2
Removing intermediate container 26d5722e2ae2
Step 5 : RUN npm --version
 ---> Running in 5c531aa0afb9
2.13.0
 ---> 2bd22c67b178
Error removing intermediate container 5c531aa0afb9: rmdriverfs: Driver aufs failed to remove root filesystem 5c531aa0afb9c73af414ca14f72b0d0867f8643b1de717111222a2275c746172: rename /var/lib/docker/aufs/diff/5c531aa0afb9c73af414ca14f72b0d0867f8643b1de717111222a2275c746172 /var/lib/docker/aufs/diff/5c531aa0afb9c73af414ca14f72b0d0867f8643b1de717111222a2275c746172-removing: device or resource busy
Successfully built 2bd22c67b178

```

# Tested image `nodesource/jessie:iojs-3.2.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ad711e7b1e26
 ---> 162c1c269633
Removing intermediate container ad711e7b1e26
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.2.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 7a3fe18b6847
[91m [0m[91m % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 38 6216k   38 2415k  [0m[91m  0     0  13.2M      0 --:--:-- --:--:-- --:--:-- 13.2M[0m[91m100 6216k  100 6216k    0     0  24.3M      0 --:--:-- --:--:-- --:--:-- 24.3M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.2.0-1nodesource1~jessie1) ...
Setting up iojs (3.2.0-1nodesource1~jessie1) ...
 ---> c8412cd75dd8
Removing intermediate container 7a3fe18b6847
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 91ee0623dde7
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, http-signature@0.10.1, bl@0.9.5, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo it worked if it ends with ok
[0m[91mgyp [0m[91minfo using[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m info using node@3.2.0 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.2.0/iojs-v3.2.0.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v3.2.0/iojs-v3.2.0.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.2.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v3.2.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/3.2.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.2.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info [0m[91mspawn args   '--generator-output',
gyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m ERR! [0m[91mstack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp[0m[91m ERR! [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
gyp ERR! [0m[91mstack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v3.2.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 5c00a7e768bd
Removing intermediate container 91ee0623dde7
Step 5 : ENV NODE_ENV production
 ---> Running in 23958c29b5e3
 ---> 4785480897db
Removing intermediate container 23958c29b5e3
Step 6 : WORKDIR /usr/src/app
 ---> Running in 76b80a3cf109
 ---> 2c6f814edfba
Removing intermediate container 76b80a3cf109
Step 7 : CMD npm start
 ---> Running in fe4f483def27
 ---> 2567bf6d118e
Removing intermediate container fe4f483def27
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 15f9347aed4f
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1822 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 9a2cd9b0a70f
Error removing intermediate container 15f9347aed4f: rmdriverfs: Driver aufs failed to remove root filesystem 15f9347aed4f4720a6da99678c9d3e100fe63bdd5eaeb010caf7ad16b6f6163d: rename /var/lib/docker/aufs/mnt/15f9347aed4f4720a6da99678c9d3e100fe63bdd5eaeb010caf7ad16b6f6163d /var/lib/docker/aufs/mnt/15f9347aed4f4720a6da99678c9d3e100fe63bdd5eaeb010caf7ad16b6f6163d-removing: device or resource busy
Successfully built 9a2cd9b0a70f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test55`

Contents of dockerfile `/root/docker-node/.~tmp.test55/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.2.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.2.0-test1` from `/root/docker-node/.~tmp.test55`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.2.0
 ---> 9a2cd9b0a70f
Step 2 : ENV NODE_ENV test
 ---> Running in 29419f9e54dc
 ---> 960308c3a2ff
Removing intermediate container 29419f9e54dc
Step 3 : RUN node -v
 ---> Running in 890d8dc70716
v3.2.0
 ---> 2ce4a37665b5
Removing intermediate container 890d8dc70716
Step 4 : RUN node -p "process.versions"
 ---> Running in 2b439e51d56d
{ http_parser: '2.5.0',
  node: '3.2.0',
  v8: '4.4.63.26',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> 583899c4e4bb
Removing intermediate container 2b439e51d56d
Step 5 : RUN npm --version
 ---> Running in 03e7bad19334
2.13.3
 ---> 1c27faa368a8
Error removing intermediate container 03e7bad19334: rmdriverfs: Driver aufs failed to remove root filesystem 03e7bad19334200ec73520a9374c9871ee281604665c870a27113440b7dd455c: rename /var/lib/docker/aufs/mnt/03e7bad19334200ec73520a9374c9871ee281604665c870a27113440b7dd455c /var/lib/docker/aufs/mnt/03e7bad19334200ec73520a9374c9871ee281604665c870a27113440b7dd455c-removing: device or resource busy
Successfully built 1c27faa368a8

```

# Tested image `nodesource/jessie:iojs-2.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in e32dcf33bf18
 ---> f32336cc7992
Error removing intermediate container e32dcf33bf18: rmdriverfs: Driver aufs failed to remove root filesystem e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09: rename /var/lib/docker/aufs/mnt/e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09 /var/lib/docker/aufs/mnt/e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.1.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in efef7f3389ec
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 70 563[0m[91m2k   70 3967k    0     0  15.1M      0 --:--:-- --:--:-- --:--:-- 15.1M[0m[91m100 5632k  100 5632k    0     0  18.2M      0 --:--:-- --:--:-- --:--:-- 18.2M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.1.0-1nodesource1~jessie1) ...
Setting up iojs (2.1.0-1nodesource1~jessie1) ...
 ---> 862ea902bf6b
Removing intermediate container efef7f3389ec
Error removing intermediate container e32dcf33bf18: nosuchcontainer: no such id: e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in a80b99cc812d
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@2.1.0 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v2.1.0/iojs-v2.1.0.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91m200[0m[91m https://iojs.org/dist/v2.1.0/iojs-v2.1.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.1.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.1.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp [0m[91minfo spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp info spawn args[0m[91m   'binding.gyp',
gyp[0m[91m [0m[91minfo[0m[91m spawn args   '-f',
[0m[91mgyp [0m[91minfo [0m[91mspawn args   'make',
gyp [0m[91minfo spawn args[0m[91m   '-I',
gyp[0m[91m [0m[91minfo [0m[91mspawn args[0m[91m   '/build/config.gypi',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-I',
[0m[91mgyp[0m[91m [0m[91minfo [0m[91mspawn args[0m[91m   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp[0m[91m info spawn args   '-I',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '/root/.node-gyp/2.1.0/common.gypi',
[0m[91mgyp info[0m[91m spawn args   '-Dlibrary=shared_library',
gyp [0m[91minfo[0m[91m spawn args   '-Dvisibility=default',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '-Dnode_root_dir=/root/.node-gyp/2.1.0',
gyp[0m[91m info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m   '-Dmodule_root_dir=/',
gyp [0m[91minfo[0m[91m spawn args[0m[91m   '--depth=.',
gyp[0m[91m [0m[91minfo spawn args[0m[91m   '--no-parallel',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   '--generator-output',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m
[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.1.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> 020aad34633c
Error removing intermediate container e32dcf33bf18: nosuchcontainer: no such id: e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09
Step 5 : ENV NODE_ENV production
 ---> Running in f8e3ab4566a0
 ---> 9bfc81fe8bb7
Error removing intermediate container e32dcf33bf18: nosuchcontainer: no such id: e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0d88879436d4
 ---> 4cd7589df929
Error removing intermediate container e32dcf33bf18: nosuchcontainer: no such id: e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09
Step 7 : CMD npm start
 ---> Running in bbbd032a3667
 ---> a9cdd75554e6
Removing intermediate container bbbd032a3667
Error removing intermediate container e32dcf33bf18: nosuchcontainer: no such id: e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 88bb8560f94b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 14s (657 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> bb3403254ec2
Error removing intermediate container e32dcf33bf18: nosuchcontainer: no such id: e32dcf33bf182d1ec7f78e90b01e547216eeb51c34a1d77fb5aeb250cc04ae09
Successfully built bb3403254ec2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test49`

Contents of dockerfile `/root/docker-node/.~tmp.test49/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.1.0-test1` from `/root/docker-node/.~tmp.test49`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.1.0
 ---> bb3403254ec2
Step 2 : ENV NODE_ENV test
 ---> Running in d283cfeb7842
 ---> e798982c7e2d
Error removing intermediate container d283cfeb7842: rminit: Driver aufs failed to remove init filesystem d283cfeb7842514021cd62d77b16aa03abacb06e0b8bb51af99fe4fc54ae0017-init: rename /var/lib/docker/aufs/diff/d283cfeb7842514021cd62d77b16aa03abacb06e0b8bb51af99fe4fc54ae0017-init /var/lib/docker/aufs/diff/d283cfeb7842514021cd62d77b16aa03abacb06e0b8bb51af99fe4fc54ae0017-init-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in 471d9aef3360
v2.1.0
 ---> fed73fa35b03
Error removing intermediate container d283cfeb7842: nosuchcontainer: no such id: d283cfeb7842514021cd62d77b16aa03abacb06e0b8bb51af99fe4fc54ae0017
Step 4 : RUN node -p "process.versions"
 ---> Running in 74c3e22dfae6
{ http_parser: '2.5.0',
  node: '2.1.0',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> bc73fb4fb719
Error removing intermediate container d283cfeb7842: nosuchcontainer: no such id: d283cfeb7842514021cd62d77b16aa03abacb06e0b8bb51af99fe4fc54ae0017
Step 5 : RUN npm --version
 ---> Running in f11762255342
2.10.1
 ---> dc7b8c631b05
Error removing intermediate container d283cfeb7842: nosuchcontainer: no such id: d283cfeb7842514021cd62d77b16aa03abacb06e0b8bb51af99fe4fc54ae0017
Successfully built dc7b8c631b05

```

# Tested image `nodesource/jessie:iojs-3.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in d6cb81864c60
 ---> b007d5bf3bae
Removing intermediate container d6cb81864c60
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.0.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 0e729fdb19af
[91m  % Total    % Received % Xferd  Average [0m[91mSpeed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 6152k  100 6152k    0     0  13.5M      0 --:--:-- --:--:-- --:--:-- 13.5M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.0.0-1nodesource1~jessie1) ...
Setting up iojs (3.0.0-1nodesource1~jessie1) ...
 ---> c162bc1bff1c
Removing intermediate container 0e729fdb19af
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 93be03b6e442
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, oauth-sign@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp info using pangyp@2.3.3
gyp info using node@3.0.0 | linux | x64
[0m[91mgyp http GET[0m[91m https://iojs.org/dist/v3.0.0/iojs-v3.0.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v3.0.0/iojs-v3.0.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v3.0.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v3.0.0/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/3.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.0.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v3.0.0
gyp ERR! [0m[91mpangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 89041abac99c
Removing intermediate container 93be03b6e442
Step 5 : ENV NODE_ENV production
 ---> Running in 1fc5694f5399
 ---> fbc97f2f11cb
Removing intermediate container 1fc5694f5399
Step 6 : WORKDIR /usr/src/app
 ---> Running in 528a69ef3ada
 ---> f78a9b6366b2
Removing intermediate container 528a69ef3ada
Step 7 : CMD npm start
 ---> Running in 291712dcae4a
 ---> 58541dcf8a66
Removing intermediate container 291712dcae4a
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in e0e078f1262a
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1760 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 6610f10614a8
Removing intermediate container e0e078f1262a
Successfully built 6610f10614a8

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test53`

Contents of dockerfile `/root/docker-node/.~tmp.test53/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.0.0-test1` from `/root/docker-node/.~tmp.test53`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.0.0
 ---> 6610f10614a8
Step 2 : ENV NODE_ENV test
 ---> Running in 50ab87baa04c
 ---> ef93920aff58
Removing intermediate container 50ab87baa04c
Step 3 : RUN node -v
 ---> Running in 18e9ed0a2f12
v3.0.0
 ---> 427f8568c057
Removing intermediate container 18e9ed0a2f12
Step 4 : RUN node -p "process.versions"
 ---> Running in ab73a9b5f08f
{ http_parser: '2.5.0',
  node: '3.0.0',
  v8: '4.4.63.26',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> e0370d7efdff
Removing intermediate container ab73a9b5f08f
Step 5 : RUN npm --version
 ---> Running in 2ebcc7ff3920
2.13.3
 ---> 80d892b0a58e
Removing intermediate container 2ebcc7ff3920
Successfully built 80d892b0a58e

```

# Tested image `nodesource/jessie:iojs-1.5.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f08a382bec49
 ---> 6459a41d1f00
Removing intermediate container f08a382bec49
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.5.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in b814e0026a95
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m  0 5104k    0 16086    0     0  92076      0  0:00:56 --:--:--  0:00:56 91920[0m[91m100 5104k  100 5104k    0     0  13.5M      0 --:--:-- --:--:-- --:--:-- 13.5M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.5.0-1nodesource1~jessie1) ...
Setting up iojs (1.5.0-1nodesource1~jessie1) ...
 ---> f5a3b19b3679
Removing intermediate container b814e0026a95
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6486e5d3d55a
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@1.5.0 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.5.0/iojs-v1.5.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.5.0/iojs-v1.5.0.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.5.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.5.0/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.5.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.5.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.5.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> d8d07d28b5ca
Removing intermediate container 6486e5d3d55a
Step 5 : ENV NODE_ENV production
 ---> Running in a2deb49c8865
 ---> 7f344c3b2cc3
Removing intermediate container a2deb49c8865
Step 6 : WORKDIR /usr/src/app
 ---> Running in caa3f26f74a9
 ---> 0d80cd1d8e32
Removing intermediate container caa3f26f74a9
Step 7 : CMD npm start
 ---> Running in f8143d71ef90
 ---> ec6eca92ea84
Error removing intermediate container f8143d71ef90: rmdriverfs: Driver aufs failed to remove root filesystem f8143d71ef90d842b6b625205bce221d4a85d2cbb2e1366ce9cc09b0edec8510: rename /var/lib/docker/aufs/mnt/f8143d71ef90d842b6b625205bce221d4a85d2cbb2e1366ce9cc09b0edec8510 /var/lib/docker/aufs/mnt/f8143d71ef90d842b6b625205bce221d4a85d2cbb2e1366ce9cc09b0edec8510-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 75f12720c5e0
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1603 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> c2295cfe70e4
Error removing intermediate container f8143d71ef90: nosuchcontainer: no such id: f8143d71ef90d842b6b625205bce221d4a85d2cbb2e1366ce9cc09b0edec8510
Successfully built c2295cfe70e4

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test58`

Contents of dockerfile `/root/docker-node/.~tmp.test58/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.5.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.5.0-test1` from `/root/docker-node/.~tmp.test58`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.5.0
 ---> c2295cfe70e4
Step 2 : ENV NODE_ENV test
 ---> Running in a9f55d296c87
 ---> 9b6843ef1c27
Removing intermediate container a9f55d296c87
Step 3 : RUN node -v
 ---> Running in 1dbbdb0587cc
v1.5.0
 ---> 2dac926bf98f
Removing intermediate container 1dbbdb0587cc
Step 4 : RUN node -p "process.versions"
 ---> Running in fac4c211706c
{ http_parser: '2.3.0',
  node: '1.5.0',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> 5290b7528fdd
Removing intermediate container fac4c211706c
Step 5 : RUN npm --version
 ---> Running in f161092a0385
2.7.0
 ---> 5fbf9b04b51b
Removing intermediate container f161092a0385
Successfully built 5fbf9b04b51b

```

# Tested image `nodesource/jessie:iojs-3.1.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 0aedf81340b9
 ---> de1494d314c5
Removing intermediate container 0aedf81340b9
Step 3 : RUN curl https://deb.nodesource.com/iojs_3.x/pool/main/i/iojs/iojs_3.1.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 59a861148554
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 93 6159k   93 5759k    0     0  14.7M      0 --:--:-- --:--:-- --:--:-- 14.7M[0m[91m100 6159k  100 6159k    0     0  15.5M      0 --:--:-- --:--:-- --:--:-- 15.5M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (3.1.0-1nodesource1~jessie1) ...
Setting up iojs (3.1.0-1nodesource1~jessie1) ...
 ---> b8b7f02806fe
Removing intermediate container 59a861148554
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 877c0ccdcd1f
[91mnpm[0m[91m [0m[91mWARN[0m[91m deprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@3.1.0 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.1.0/iojs-v3.1.0.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v3.1.0/iojs-v3.1.0.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v3.1.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v3.1.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp [0m[91minfo spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info[0m[91m [0m[91mspawn args   'binding.gyp',
[0m[91mgyp[0m[91m info [0m[91mspawn args[0m[91m   '-f',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   'make',
[0m[91mgyp[0m[91m info spawn args[0m[91m   '-I',
gyp[0m[91m info spawn args[0m[91m   '/build/config.gypi',
gyp[0m[91m info[0m[91m spawn args   '-I',
gyp [0m[91minfo [0m[91mspawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
[0m[91mgyp [0m[91minfo spawn args   '-I',
[0m[91mgyp [0m[91minfo spawn args[0m[91m   '/root/.node-gyp/3.1.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/3.1.0',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info[0m[91m spawn args   'build',
[0m[91mgyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp [0m[91mERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v3.1.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 6606c83475ad
Removing intermediate container 877c0ccdcd1f
Step 5 : ENV NODE_ENV production
 ---> Running in 7eed9e3498e4
 ---> 755f11dc85f4
Removing intermediate container 7eed9e3498e4
Step 6 : WORKDIR /usr/src/app
 ---> Running in a661c71b473d
 ---> b070d694ba93
Removing intermediate container a661c71b473d
Step 7 : CMD npm start
 ---> Running in bac94e87e4e5
 ---> a36129e27e35
Error removing intermediate container bac94e87e4e5: rmdriverfs: Driver aufs failed to remove root filesystem bac94e87e4e5135b4b1cbe9a764da001e29c77d41d6b420f08238fe0986a8102: rename /var/lib/docker/aufs/diff/bac94e87e4e5135b4b1cbe9a764da001e29c77d41d6b420f08238fe0986a8102 /var/lib/docker/aufs/diff/bac94e87e4e5135b4b1cbe9a764da001e29c77d41d6b420f08238fe0986a8102-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6d561c85d342
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1778 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 7dd82a21fb26
Error removing intermediate container bac94e87e4e5: nosuchcontainer: no such id: bac94e87e4e5135b4b1cbe9a764da001e29c77d41d6b420f08238fe0986a8102
Successfully built 7dd82a21fb26

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test54`

Contents of dockerfile `/root/docker-node/.~tmp.test54/Dockerfile`:

```
FROM nodesource/jessie:iojs-3.1.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-3.1.0-test1` from `/root/docker-node/.~tmp.test54`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-3.1.0
 ---> 7dd82a21fb26
Step 2 : ENV NODE_ENV test
 ---> Running in b54d60c759a3
 ---> 6cd809c850da
Error removing intermediate container b54d60c759a3: rmdriverfs: Driver aufs failed to remove root filesystem b54d60c759a3486f0dd275e552eb544a1a5d7a59c2547428545ce724e99c7443: rename /var/lib/docker/aufs/mnt/b54d60c759a3486f0dd275e552eb544a1a5d7a59c2547428545ce724e99c7443 /var/lib/docker/aufs/mnt/b54d60c759a3486f0dd275e552eb544a1a5d7a59c2547428545ce724e99c7443-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in 77bf4575bc03
v3.1.0
 ---> 04c6ffd2058c
Error removing intermediate container b54d60c759a3: nosuchcontainer: no such id: b54d60c759a3486f0dd275e552eb544a1a5d7a59c2547428545ce724e99c7443
Step 4 : RUN node -p "process.versions"
 ---> Running in 3f2545dd3044
{ http_parser: '2.5.0',
  node: '3.1.0',
  v8: '4.4.63.26',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '45',
  openssl: '1.0.2d' }
 ---> 810d63c49353
Removing intermediate container 3f2545dd3044
Error removing intermediate container b54d60c759a3: nosuchcontainer: no such id: b54d60c759a3486f0dd275e552eb544a1a5d7a59c2547428545ce724e99c7443
Step 5 : RUN npm --version
 ---> Running in 2c47e3226591
2.13.3
 ---> 64ae1eff13c4
Error removing intermediate container b54d60c759a3: nosuchcontainer: no such id: b54d60c759a3486f0dd275e552eb544a1a5d7a59c2547428545ce724e99c7443
Successfully built 64ae1eff13c4

```

# Tested image `nodesource/jessie:iojs-1.4.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f485df056b3a
 ---> da52f4901846
Removing intermediate container f485df056b3a
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.4.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 1f47e76e1479
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5093k  100 5093k    0     0  11.0M      0 --:--:-- --:--:-- --:--:-- 11.1M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.4.2-1nodesource1~jessie1) ...
Setting up iojs (1.4.2-1nodesource1~jessie1) ...
 ---> bb181d37cb4b
Removing intermediate container 1f47e76e1479
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 44a3295976cd
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@1.4.2 | linux | x64
[0m[91mgyp http GET https://iojs.org/dist/v1.4.2/iojs-v1.4.2.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.2/iojs-v1.4.2.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.4.2/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.2/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.4.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.4.2',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! [0m[91mstack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.4.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 4eaf20b8a914
Removing intermediate container 44a3295976cd
Step 5 : ENV NODE_ENV production
 ---> Running in fcc8c98e603f
 ---> 070396e38bfc
Removing intermediate container fcc8c98e603f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 503aa6d17bed
 ---> 0e3ea4f9cebb
Removing intermediate container 503aa6d17bed
Step 7 : CMD npm start
 ---> Running in d41ece6d2509
 ---> 0ffe9e276d13
Removing intermediate container d41ece6d2509
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0f850e1327c8
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1450 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> a92a7ec4952c
Removing intermediate container 0f850e1327c8
Successfully built a92a7ec4952c

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test57`

Contents of dockerfile `/root/docker-node/.~tmp.test57/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.4.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.4.2-test1` from `/root/docker-node/.~tmp.test57`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.4.2
 ---> a92a7ec4952c
Step 2 : ENV NODE_ENV test
 ---> Running in 9ff15cb21c1d
 ---> 07bdd00cc3fc
Removing intermediate container 9ff15cb21c1d
Step 3 : RUN node -v
 ---> Running in 5d8ee7c758d0
v1.4.2
 ---> d18c8a2f23ab
Removing intermediate container 5d8ee7c758d0
Step 4 : RUN node -p "process.versions"
 ---> Running in 94a2ab015a4d
{ http_parser: '2.3.0',
  node: '1.4.2',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> d062ac25596a
Removing intermediate container 94a2ab015a4d
Step 5 : RUN npm --version
 ---> Running in 0bddb2c083ee
2.6.1
 ---> 6a2b86dbddb6
Removing intermediate container 0bddb2c083ee
Successfully built 6a2b86dbddb6

```

# Tested image `nodesource/jessie:iojs-1.4.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cfb35205fb6f
 ---> 15d6a8a13495
Removing intermediate container cfb35205fb6f
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.4.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 97c852bdb98c
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5087k  100 5087k    0     0  24.2M      0 --:--:-- --:--:-- --:--:-- 24.3M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.4.1-1nodesource1~jessie1) ...
Setting up iojs (1.4.1-1nodesource1~jessie1) ...
 ---> 4450674ffb4d
Removing intermediate container 97c852bdb98c
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in b2822349808b
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@1.4.1 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET https://iojs.org/dist/v1.4.1/iojs-v1.4.1.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.4.1/iojs-v1.4.1.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET https://iojs.org/dist/v1.4.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.4.1/SHASUMS256.txt
[0m[91mgyp info [0m[91mspawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.4.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.4.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "node" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.4.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> c95b88220abe
Removing intermediate container b2822349808b
Step 5 : ENV NODE_ENV production
 ---> Running in 37d7359a7a45
 ---> 913eae3ba6fa
Removing intermediate container 37d7359a7a45
Step 6 : WORKDIR /usr/src/app
 ---> Running in ee657b414519
 ---> bef9309c7eea
Removing intermediate container ee657b414519
Step 7 : CMD npm start
 ---> Running in 5ad5aec16c41
 ---> ebe4fbef2ea9
Removing intermediate container 5ad5aec16c41
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in ca3c33f3a254
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 8s (1087 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5754d917b16f
Removing intermediate container ca3c33f3a254
Successfully built 5754d917b16f

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test56`

Contents of dockerfile `/root/docker-node/.~tmp.test56/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.4.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.4.1-test1` from `/root/docker-node/.~tmp.test56`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.4.1
 ---> 5754d917b16f
Step 2 : ENV NODE_ENV test
 ---> Running in 94c33a064fc6
 ---> 2c5dcb2ed93f
Removing intermediate container 94c33a064fc6
Step 3 : RUN node -v
 ---> Running in 6a25637ad8f7
v1.4.1
 ---> f2c060db7824
Error removing intermediate container 6a25637ad8f7: rmdriverfs: Driver aufs failed to remove root filesystem 6a25637ad8f7ed767dcece9d094d83476d9e6cd9b6fc9c4f6ff3655ea8f8f14e: rename /var/lib/docker/aufs/mnt/6a25637ad8f7ed767dcece9d094d83476d9e6cd9b6fc9c4f6ff3655ea8f8f14e /var/lib/docker/aufs/mnt/6a25637ad8f7ed767dcece9d094d83476d9e6cd9b6fc9c4f6ff3655ea8f8f14e-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in fbc4a476e553
{ http_parser: '2.3.0',
  node: '1.4.1',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1k' }
 ---> eb3e4438ebdd
Error removing intermediate container 6a25637ad8f7: nosuchcontainer: no such id: 6a25637ad8f7ed767dcece9d094d83476d9e6cd9b6fc9c4f6ff3655ea8f8f14e
Step 5 : RUN npm --version
 ---> Running in ea65489b7a2b
2.6.0
 ---> c12033785f57
Error removing intermediate container 6a25637ad8f7: nosuchcontainer: no such id: 6a25637ad8f7ed767dcece9d094d83476d9e6cd9b6fc9c4f6ff3655ea8f8f14e
Successfully built c12033785f57

```

# Tested image `nodesource/jessie:iojs-1.6.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 75ca26d55840
 ---> 376f21355557
Removing intermediate container 75ca26d55840
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 64fb7a8cb634
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 73 5136k   73 3775k    0 [0m[91m    0  11.5M      0 --:--:-- --:--:-- --:--:-- 11.5M[0m[91m100 5136k  100 5136k    0     0  14.7M      0 --:--:-- --:--:-- --:--:-- 14.7M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.1-1nodesource1~jessie1) ...
Setting up iojs (1.6.1-1nodesource1~jessie1) ...
 ---> 4e75dc1b3f41
Removing intermediate container 64fb7a8cb634
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 9af6d00d1034
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m info using pangyp@2.3.3
[0m[91mgyp info using node@1.6.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.1/iojs-v1.6.1.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.6.1/iojs-v1.6.1.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.6.1/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 814a355d8ba0
Removing intermediate container 9af6d00d1034
Step 5 : ENV NODE_ENV production
 ---> Running in 576122616cf9
 ---> 68b7a29396ea
Removing intermediate container 576122616cf9
Step 6 : WORKDIR /usr/src/app
 ---> Running in f9a03e83e973
 ---> bf9da65e24f0
Removing intermediate container f9a03e83e973
Step 7 : CMD npm start
 ---> Running in 76cd0a439693
 ---> 28735313aac9
Removing intermediate container 76cd0a439693
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in b4fc5d66d83c
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1389 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> afcdf5315f52
Removing intermediate container b4fc5d66d83c
Successfully built afcdf5315f52

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test59`

Contents of dockerfile `/root/docker-node/.~tmp.test59/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.1-test1` from `/root/docker-node/.~tmp.test59`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.1
 ---> afcdf5315f52
Step 2 : ENV NODE_ENV test
 ---> Running in 018d199a33c7
 ---> 40cabcaaf81b
Removing intermediate container 018d199a33c7
Step 3 : RUN node -v
 ---> Running in e40f7605b327
v1.6.1
 ---> 191dfdc118ca
Removing intermediate container e40f7605b327
Step 4 : RUN node -p "process.versions"
 ---> Running in 4123a9012928
{ http_parser: '2.3.0',
  node: '1.6.1',
  v8: '4.1.0.21',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 6576d6240eb6
Removing intermediate container 4123a9012928
Step 5 : RUN npm --version
 ---> Running in 0793a5116754
2.7.1
 ---> 4fb48c1d18d0
Removing intermediate container 0793a5116754
Successfully built 4fb48c1d18d0

```

# Tested image `nodesource/jessie:iojs-1.6.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 0ffa17c5402f
 ---> 6edf1dbf8ad5
Removing intermediate container 0ffa17c5402f
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 8867ed2e205d
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Curre[0m[91mnt
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5139k  100 5139k    0     0  16.1M      0 --:--:-- --:--:-- --:--:-- 16.2M[0mSelecting previously unselected package iojs.
[91m
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.2-1nodesource1~jessie1) ...
Setting up iojs (1.6.2-1nodesource1~jessie1) ...
 ---> 17408338ea46
Removing intermediate container 8867ed2e205d
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 8ae94dfd6929
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@1.6.2 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.2/iojs-v1.6.2.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.6.2/iojs-v1.6.2.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.6.2/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.6.2/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info[0m[91m spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.2',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 02a7c1d26e40
Removing intermediate container 8ae94dfd6929
Step 5 : ENV NODE_ENV production
 ---> Running in ae9ee5823df1
 ---> 40c6e49b449f
Removing intermediate container ae9ee5823df1
Step 6 : WORKDIR /usr/src/app
 ---> Running in cfcca02daf77
 ---> be4fc0d50a56
Removing intermediate container cfcca02daf77
Step 7 : CMD npm start
 ---> Running in bd075577bd21
 ---> 3de2648c6d06
Removing intermediate container bd075577bd21
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in b578e903db94
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1421 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> c05047b6b24b
Removing intermediate container b578e903db94
Successfully built c05047b6b24b

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test60`

Contents of dockerfile `/root/docker-node/.~tmp.test60/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.2-test1` from `/root/docker-node/.~tmp.test60`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.2
 ---> c05047b6b24b
Step 2 : ENV NODE_ENV test
 ---> Running in aafcfd1407a4
 ---> 02a6e465687d
Removing intermediate container aafcfd1407a4
Step 3 : RUN node -v
 ---> Running in 761c79364ec5
v1.6.2
 ---> f9c9eef0d204
Removing intermediate container 761c79364ec5
Step 4 : RUN node -p "process.versions"
 ---> Running in bff9c88ee19b
{ http_parser: '2.3.0',
  node: '1.6.2',
  v8: '4.1.0.25',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 57fdac21491e
Removing intermediate container bff9c88ee19b
Step 5 : RUN npm --version
 ---> Running in 38c0a7e83c98
2.7.1
 ---> 54ac31a05147
Removing intermediate container 38c0a7e83c98
Successfully built 54ac31a05147

```

# Tested image `nodesource/jessie:iojs-1.8.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 113e8f15a92b
 ---> c84fd2b96d7e
Removing intermediate container 113e8f15a92b
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.8.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 3ca5080884cc
[91m  % Total    % Received % [0m[91mXferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 18 5762k   18 1039k    0     0  6421k      0 --:--:-- --:--:-- --:--:-- 6417k[0m[91m100 5762k  100 5762k    0     0  9682k      0 --:--:-- --:--:-- --:--:-- 9684k
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.8.3-1nodesource1~jessie1) ...
Setting up iojs (1.8.3-1nodesource1~jessie1) ...
 ---> f01e40f81122
Removing intermediate container 3ca5080884cc
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in fed4f514eea2
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@1.8.3 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET[0m[91m https://iojs.org/dist/v1.8.3/iojs-v1.8.3.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v1.8.3/iojs-v1.8.3.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.8.3/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v1.8.3/SHASUMS256.txt
[0m[91mgyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info[0m[91m spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.8.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.8.3',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp[0m[91m info[0m[91m spawn args   'build',
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.8.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 0685514b530c
Removing intermediate container fed4f514eea2
Step 5 : ENV NODE_ENV production
 ---> Running in c32d5b938e96
 ---> a0d112bfa6ac
Removing intermediate container c32d5b938e96
Step 6 : WORKDIR /usr/src/app
 ---> Running in 2b8479fe2387
 ---> b6b9602458ac
Removing intermediate container 2b8479fe2387
Step 7 : CMD npm start
 ---> Running in 6f3d7d4a0129
 ---> c81b28d2d79c
Error removing intermediate container 6f3d7d4a0129: rmdriverfs: Driver aufs failed to remove root filesystem 6f3d7d4a0129a13a1dba5f9ec1eda20c9903959cc55dd84701b172b73dbfa86f: rename /var/lib/docker/aufs/mnt/6f3d7d4a0129a13a1dba5f9ec1eda20c9903959cc55dd84701b172b73dbfa86f /var/lib/docker/aufs/mnt/6f3d7d4a0129a13a1dba5f9ec1eda20c9903959cc55dd84701b172b73dbfa86f-removing: device or resource busy
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d7d28b37b1e5
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1563 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 82fcf55fabf2
Error removing intermediate container 6f3d7d4a0129: nosuchcontainer: no such id: 6f3d7d4a0129a13a1dba5f9ec1eda20c9903959cc55dd84701b172b73dbfa86f
Successfully built 82fcf55fabf2

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test63`

Contents of dockerfile `/root/docker-node/.~tmp.test63/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.8.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.8.3-test1` from `/root/docker-node/.~tmp.test63`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.8.3
 ---> 82fcf55fabf2
Step 2 : ENV NODE_ENV test
 ---> Running in 219736a7a093
 ---> 315fef262bbe
Removing intermediate container 219736a7a093
Step 3 : RUN node -v
 ---> Running in 1905ff6518e6
v1.8.3
 ---> fedbc3d2f581
Removing intermediate container 1905ff6518e6
Step 4 : RUN node -p "process.versions"
 ---> Running in 8917b9c05223
{ http_parser: '2.5.0',
  node: '1.8.3',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.2c' }
 ---> e82446249822
Removing intermediate container 8917b9c05223
Step 5 : RUN npm --version
 ---> Running in 5d9a0e14fa90
2.9.0
 ---> 9ee7ab2f456d
Removing intermediate container 5d9a0e14fa90
Successfully built 9ee7ab2f456d

```

# Tested image `nodesource/jessie:iojs-1.8.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 7b02f7292622
 ---> 0115a3d438fc
Removing intermediate container 7b02f7292622
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.8.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 254800929ae0
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5546k  100 5546k    0     0  25.4M      0 --:--:-- --:--:-- --:--:-- 25.5M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.8.1-1nodesource1~jessie1) ...
Setting up iojs (1.8.1-1nodesource1~jessie1) ...
 ---> 5c292ec30b8b
Removing intermediate container 254800929ae0
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 7cbfafd419da
[91mnpm WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
[0m[91mgyp[0m[91m [0m[91minfo using pangyp@2.3.3
gyp info using node@1.8.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.8.1/iojs-v1.8.1.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.8.1/iojs-v1.8.1.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.8.1/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.8.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.8.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.8.1',
gyp info[0m[91m spawn args[0m[91m   '-Druntime=iojs',
[0m[91mgyp[0m[91m info[0m[91m [0m[91mspawn args   '-Dmodule_root_dir=/',
gyp info[0m[91m spawn args   '--depth=.',
gyp[0m[91m info spawn args   '--no-parallel',
gyp[0m[91m info spawn args   '--generator-output',
gyp [0m[91minfo [0m[91mspawn args   'build',
gyp info [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m
[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.8.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m ---> a7c1b3fe1400
Removing intermediate container 7cbfafd419da
Step 5 : ENV NODE_ENV production
 ---> Running in 461b12e35d5a
 ---> 57f88620b262
Removing intermediate container 461b12e35d5a
Step 6 : WORKDIR /usr/src/app
 ---> Running in 38f8558545ee
 ---> 102be7b3bcad
Removing intermediate container 38f8558545ee
Step 7 : CMD npm start
 ---> Running in b509cd7e1888
 ---> 341c9fb67394
Removing intermediate container b509cd7e1888
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 07f8a81557d6
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1701 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b0b0ed7f32ea
Removing intermediate container 07f8a81557d6
Successfully built b0b0ed7f32ea

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test62`

Contents of dockerfile `/root/docker-node/.~tmp.test62/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.8.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.8.1-test1` from `/root/docker-node/.~tmp.test62`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.8.1
 ---> b0b0ed7f32ea
Step 2 : ENV NODE_ENV test
 ---> Running in 5482f27b51fa
 ---> 89295283435f
Removing intermediate container 5482f27b51fa
Step 3 : RUN node -v
 ---> Running in 47cd8bed8e43
v1.8.1
 ---> 9461c0b281f8
Removing intermediate container 47cd8bed8e43
Step 4 : RUN node -p "process.versions"
 ---> Running in 216e84680499
{ http_parser: '2.3.0',
  node: '1.8.1',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.2a' }
 ---> c9a87769c5d6
Removing intermediate container 216e84680499
Step 5 : RUN npm --version
 ---> Running in 11bd3d26f9c5
2.8.3
 ---> 8b48457421cc
Error removing intermediate container 11bd3d26f9c5: rmdriverfs: Driver aufs failed to remove root filesystem 11bd3d26f9c509098bc0416cedd8cd1c80369762c63fd5030b0094626927a53c: rename /var/lib/docker/aufs/mnt/11bd3d26f9c509098bc0416cedd8cd1c80369762c63fd5030b0094626927a53c /var/lib/docker/aufs/mnt/11bd3d26f9c509098bc0416cedd8cd1c80369762c63fd5030b0094626927a53c-removing: device or resource busy
Successfully built 8b48457421cc

```

# Tested image `nodesource/jessie:iojs-1.6.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a5080de207e5
 ---> b0f9aea9bdfd
Removing intermediate container a5080de207e5
Step 3 : RUN curl https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/iojs_1.6.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 51fe151763a8
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0mSelecting previously unselected package iojs.
[91m 79 5177k   79 4127k    0     0  16.5M      0 --:--:-- --:--:-- --:--:-- 16.5M100 5177k  100 5177k    0     0  19.9M      0 --:--:-- --:--:-- --:--:-- 19.9M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (1.6.3-1nodesource1~jessie1) ...
Setting up iojs (1.6.3-1nodesource1~jessie1) ...
 ---> b556cace503c
Removing intermediate container 51fe151763a8
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 6a70bdba3e2a
[91mnpm[0m[91m WARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── semver@4.3.6
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@1.6.3 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v1.6.3/iojs-v1.6.3.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.6.3/iojs-v1.6.3.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v1.6.3/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v1.6.3/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
[0m[91mgyp info spawn args[0m[91m [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp[0m[91m info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/1.6.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/1.6.3',
gyp info[0m[91m spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp[0m[91m info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info [0m[91mspawn args[0m[91m   'build',
[0m[91mgyp info[0m[91m [0m[91mspawn args[0m[91m   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1044:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v1.6.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 7749661d34e8
Removing intermediate container 6a70bdba3e2a
Step 5 : ENV NODE_ENV production
 ---> Running in cf8217cd02ce
 ---> 62c6f3ccdb93
Removing intermediate container cf8217cd02ce
Step 6 : WORKDIR /usr/src/app
 ---> Running in 1eb6c05cb539
 ---> e5f240da7316
Removing intermediate container 1eb6c05cb539
Step 7 : CMD npm start
 ---> Running in 937b353bb2d3
 ---> 77f8fdda6b79
Removing intermediate container 937b353bb2d3
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 6cf9a9fd978f
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1624 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 3927f4502d18
Removing intermediate container 6cf9a9fd978f
Successfully built 3927f4502d18

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test61`

Contents of dockerfile `/root/docker-node/.~tmp.test61/Dockerfile`:

```
FROM nodesource/jessie:iojs-1.6.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-1.6.3-test1` from `/root/docker-node/.~tmp.test61`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-1.6.3
 ---> 3927f4502d18
Step 2 : ENV NODE_ENV test
 ---> Running in 32ec7ee1b95b
 ---> 5628b195e7b7
Removing intermediate container 32ec7ee1b95b
Step 3 : RUN node -v
 ---> Running in 04f5c817c1f1
v1.6.3
 ---> ff22f3789ec6
Removing intermediate container 04f5c817c1f1
Step 4 : RUN node -p "process.versions"
 ---> Running in 7f1fc517d8f2
{ http_parser: '2.3.0',
  node: '1.6.3',
  v8: '4.1.0.27',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '43',
  openssl: '1.0.1m' }
 ---> 313987d543e5
Removing intermediate container 7f1fc517d8f2
Step 5 : RUN npm --version
 ---> Running in c7716642dbe1
2.7.4
 ---> b0f0642f1eea
Removing intermediate container c7716642dbe1
Successfully built b0f0642f1eea

```

# Tested image `nodesource/jessie:iojs-2.0.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 2790051ba855
 ---> 1b9a2fbba7c0
Removing intermediate container 2790051ba855
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.0.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 31974bbd9495
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 74 5606k   74 4159k    0     0  26.5M      0 --:--:-- --:--:-- --:--:-- 26.5[0mSelecting previously unselected package iojs.
[91mM100 5606k  100 5606k    0     0  31.2M      0 --:--:-- --:--:-- --:--:-- 31.1M
[0m(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.0.1-1nodesource1~jessie1) ...
Setting up iojs (2.0.1-1nodesource1~jessie1) ...
 ---> 23f2abbd9bd2
Removing intermediate container 31974bbd9495
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 599033e05bc0
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m info[0m[91m using[0m[91m node@2.0.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.0.1/iojs-v2.0.1.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.0.1/iojs-v2.0.1.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.0.1/SHASUMS256.txt
[0m[91mgyp http 200[0m[91m https://iojs.org/dist/v2.0.1/SHASUMS256.txt
[0m[91mgyp [0m[91minfo spawn[0m[91m python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.0.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.0.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m ERR! [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.0.1
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 19437e7471d8
Removing intermediate container 599033e05bc0
Step 5 : ENV NODE_ENV production
 ---> Running in f8144d581c27
 ---> 1c86be1c6541
Removing intermediate container f8144d581c27
Step 6 : WORKDIR /usr/src/app
 ---> Running in ec47461e4aee
 ---> bafaa4ef9cc9
Removing intermediate container ec47461e4aee
Step 7 : CMD npm start
 ---> Running in 55c9ea6f98af
 ---> 6ef3f4a350db
Removing intermediate container 55c9ea6f98af
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 66e8e4c07634
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 7s (1351 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> b5cdf3e395e3
Removing intermediate container 66e8e4c07634
Successfully built b5cdf3e395e3

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test65`

Contents of dockerfile `/root/docker-node/.~tmp.test65/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.0.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.0.1-test1` from `/root/docker-node/.~tmp.test65`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.0.1
 ---> b5cdf3e395e3
Step 2 : ENV NODE_ENV test
 ---> Running in 212528ac85a7
 ---> 95b17ea56404
Removing intermediate container 212528ac85a7
Step 3 : RUN node -v
 ---> Running in 9a8e2cf8693a
v2.0.1
 ---> e668aa163566
Error removing intermediate container 9a8e2cf8693a: rmdriverfs: Driver aufs failed to remove root filesystem 9a8e2cf8693af62a1243d37f1b2ab357587fee436fbca834581da707fc69597e: rename /var/lib/docker/aufs/mnt/9a8e2cf8693af62a1243d37f1b2ab357587fee436fbca834581da707fc69597e /var/lib/docker/aufs/mnt/9a8e2cf8693af62a1243d37f1b2ab357587fee436fbca834581da707fc69597e-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in d79f7f13ad87
{ http_parser: '2.5.0',
  node: '2.0.1',
  v8: '4.2.77.20',
  uv: '1.5.0',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> 7b31e287c9c0
Error removing intermediate container 9a8e2cf8693a: nosuchcontainer: no such id: 9a8e2cf8693af62a1243d37f1b2ab357587fee436fbca834581da707fc69597e
Step 5 : RUN npm --version
 ---> Running in 0294451395ca
2.9.0
 ---> 4cecc6435b8c
Error removing intermediate container 9a8e2cf8693a: nosuchcontainer: no such id: 9a8e2cf8693af62a1243d37f1b2ab357587fee436fbca834581da707fc69597e
Successfully built 4cecc6435b8c

```

# Tested image `nodesource/jessie:iojs-2.0.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in af74e087dddb
 ---> c3f4fb1b0e7d
Error removing intermediate container af74e087dddb: rmdriverfs: Driver aufs failed to remove root filesystem af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252: rename /var/lib/docker/aufs/mnt/af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252 /var/lib/docker/aufs/mnt/af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.0.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 9aab7fb1bc7d
[91m  % Total    % Received % Xferd [0m[91m Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5604k  100 5604k    0     0  23.3M      0 --:--:-- --:--:-- --:--:-- 23.3M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.0.0-1nodesource1~jessie1) ...
Setting up iojs (2.0.0-1nodesource1~jessie1) ...
 ---> bc5692248c2e
Error removing intermediate container af74e087dddb: nosuchcontainer: no such id: af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 965e149570e5
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@2.0.0 | linux | x64
[0m[91mgyp http [0m[91mGET https://iojs.org/dist/v2.0.0/iojs-v2.0.0.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91m200[0m[91m https://iojs.org/dist/v2.0.0/iojs-v2.0.0.tar.gz
[0m[91mgyp http GET https://iojs.org/dist/v2.0.0/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.0.0/SHASUMS256.txt
[0m[91mgyp[0m[91m info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.0.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.0.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:169:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1009:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.0.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> ab5bc6752a5b
Error removing intermediate container af74e087dddb: nosuchcontainer: no such id: af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252
Step 5 : ENV NODE_ENV production
 ---> Running in 11a453d12673
 ---> 04114cb5a2f3
Error removing intermediate container af74e087dddb: nosuchcontainer: no such id: af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252
Step 6 : WORKDIR /usr/src/app
 ---> Running in 6824bd950c4c
 ---> 065bf0b141cd
Removing intermediate container 6824bd950c4c
Error removing intermediate container af74e087dddb: nosuchcontainer: no such id: af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252
Step 7 : CMD npm start
 ---> Running in 83d46daa21e1
 ---> a3ad80d2772f
Removing intermediate container 11a453d12673
Removing intermediate container 83d46daa21e1
Error removing intermediate container af74e087dddb: nosuchcontainer: no such id: af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in f073c7b5842e
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Get:2 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:3 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1492 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0edd4a21b233
Error removing intermediate container af74e087dddb: nosuchcontainer: no such id: af74e087dddb8b6fea19f1012db1fa1d26db634ae115eb7122e65502c7933252
Successfully built 0edd4a21b233

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test64`

Contents of dockerfile `/root/docker-node/.~tmp.test64/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.0.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.0.0-test1` from `/root/docker-node/.~tmp.test64`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.0.0
 ---> 0edd4a21b233
Step 2 : ENV NODE_ENV test
 ---> Running in e76a6d8bd6e1
 ---> 48fddf0730e0
Error removing intermediate container e76a6d8bd6e1: rmdriverfs: Driver aufs failed to remove root filesystem e76a6d8bd6e13e22c692d273a6815d3e855c5f8e50dce754f2f5953ea14be571: rename /var/lib/docker/aufs/mnt/e76a6d8bd6e13e22c692d273a6815d3e855c5f8e50dce754f2f5953ea14be571 /var/lib/docker/aufs/mnt/e76a6d8bd6e13e22c692d273a6815d3e855c5f8e50dce754f2f5953ea14be571-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in 7d0b577b01f5
v2.0.0
 ---> 836ddcc9be16
Error removing intermediate container e76a6d8bd6e1: nosuchcontainer: no such id: e76a6d8bd6e13e22c692d273a6815d3e855c5f8e50dce754f2f5953ea14be571
Step 4 : RUN node -p "process.versions"
 ---> Running in cc2cc0daf005
{ http_parser: '2.5.0',
  node: '2.0.0',
  v8: '4.2.77.18',
  uv: '1.4.2',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '44',
  openssl: '1.0.2a' }
 ---> 91fd494226f0
Error removing intermediate container e76a6d8bd6e1: nosuchcontainer: no such id: e76a6d8bd6e13e22c692d273a6815d3e855c5f8e50dce754f2f5953ea14be571
Step 5 : RUN npm --version
 ---> Running in 633c4b77c4c0
2.9.0
 ---> f0b6c0e372cb
Removing intermediate container cc2cc0daf005
Removing intermediate container 633c4b77c4c0
Error removing intermediate container e76a6d8bd6e1: nosuchcontainer: no such id: e76a6d8bd6e13e22c692d273a6815d3e855c5f8e50dce754f2f5953ea14be571
Successfully built f0b6c0e372cb

```

# Tested image `nodesource/jessie:iojs-2.3.0`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 0266297fe2ce
 ---> 2aeffad8583a
Removing intermediate container 0266297fe2ce
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.0-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in e6fff6b49bea
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m 31 5729k   31 1791k    0     0  6796k      0 --:--:-- --:--:-- --:--:-- 6786k[0m[91m100 5729k  100 5729k    0     0  16.7M      0 --:--:-- --:--:-- --:--:-- 16.7M[0m[91m
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.0-1nodesource1~jessie1) ...
Setting up iojs (2.3.0-1nodesource1~jessie1) ...
 ---> 3f6b93ba3320
Removing intermediate container e6fff6b49bea
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in aee115c6a4f1
[91mnpm[0m[91m [0m[91mWARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with ok
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m pangyp@2.3.3
[0m[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91musing[0m[91m node@2.3.0 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m https://iojs.org/dist/v2.3.0/iojs-v2.3.0.tar.gz
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.3.0/iojs-v2.3.0.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.0/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.3.0/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp[0m[91m info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args[0m[91m   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.0/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.0',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info [0m[91mspawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp [0m[91minfo[0m[91m [0m[91mspawn args[0m[91m   '--generator-output',
[0m[91mgyp info spawn args   'build',
gyp info [0m[91mspawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m ERR! configure error 
[0m[91mgyp[0m[91m ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.3.0
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> 32cac445adc4
Removing intermediate container aee115c6a4f1
Step 5 : ENV NODE_ENV production
 ---> Running in 38857e116718
 ---> 847ac6782cd0
Removing intermediate container 38857e116718
Step 6 : WORKDIR /usr/src/app
 ---> Running in c1fd40e43b8b
 ---> ba94e2aa094e
Removing intermediate container c1fd40e43b8b
Step 7 : CMD npm start
 ---> Running in a9572d8dd83f
 ---> 12ee0cf78080
Removing intermediate container a9572d8dd83f
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 924172798c3b
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1640 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 5066c213cca4
Removing intermediate container 924172798c3b
Successfully built 5066c213cca4

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test66`

Contents of dockerfile `/root/docker-node/.~tmp.test66/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.0
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.0-test1` from `/root/docker-node/.~tmp.test66`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.0
 ---> 5066c213cca4
Step 2 : ENV NODE_ENV test
 ---> Running in a624ac2b4a9d
 ---> 10d92c136611
Removing intermediate container a624ac2b4a9d
Step 3 : RUN node -v
 ---> Running in 32419c3ca5a2
v2.3.0
 ---> 97abff6b7490
Error removing intermediate container 32419c3ca5a2: rmdriverfs: Driver aufs failed to remove root filesystem 32419c3ca5a2bd64cf552d53bbb685546c84ebefc72bd70b4cc3d3ffa8a0c623: rename /var/lib/docker/aufs/mnt/32419c3ca5a2bd64cf552d53bbb685546c84ebefc72bd70b4cc3d3ffa8a0c623 /var/lib/docker/aufs/mnt/32419c3ca5a2bd64cf552d53bbb685546c84ebefc72bd70b4cc3d3ffa8a0c623-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in fe0962d8294c
{ http_parser: '2.5.0',
  node: '2.3.0',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> e51b8dc307fb
Error removing intermediate container 32419c3ca5a2: nosuchcontainer: no such id: 32419c3ca5a2bd64cf552d53bbb685546c84ebefc72bd70b4cc3d3ffa8a0c623
Step 5 : RUN npm --version
 ---> Running in bd6f83f9e2a9
2.11.1
 ---> 5ff22894f97a
Error removing intermediate container 32419c3ca5a2: nosuchcontainer: no such id: 32419c3ca5a2bd64cf552d53bbb685546c84ebefc72bd70b4cc3d3ffa8a0c623
Successfully built 5ff22894f97a

```

# Tested image `nodesource/jessie:iojs-2.3.1`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 55b5b313e88c
 ---> b27e065d8d5e
Removing intermediate container 55b5b313e88c
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.1-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in cc30690cbd77
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5776k  100 5776k    0     0  12.2M      0 --:--:-- --:--:-- --:--:-- 12.2M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.1-1nodesource1~jessie1) ...
Setting up iojs (2.3.1-1nodesource1~jessie1) ...
 ---> f1693b76b9df
Removing intermediate container cc30690cbd77
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 77ccd6f8d3e8
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-homedir@1.0.1, os-tmpdir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m [0m[91minfo[0m[91m [0m[91mit worked if it ends with[0m[91m ok
[0m[91mgyp[0m[91m info [0m[91musing pangyp@2.3.3
[0m[91mgyp[0m[91m info using node@2.3.1 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.1/iojs-v2.3.1.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp 200 https://iojs.org/dist/v2.3.1/iojs-v2.3.1.tar.gz
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.1/SHASUMS256.txt
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.1/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.1/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.1',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp[0m[91m [0m[91mERR! [0m[91mconfigure error[0m[91m 
[0m[91mgyp[0m[91m ERR! [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m ERR! [0m[91mstack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mstack[0m[91m     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp[0m[91m ERR![0m[91m System[0m[91m Linux 3.13.0-71-generic
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mcommand[0m[91m "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
[0m[91mgyp[0m[91m ERR![0m[91m cwd[0m[91m /
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mnode -v[0m[91m v2.3.1
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mpangyp -v[0m[91m v2.3.3
[0m[91mgyp[0m[91m ERR![0m[91m [0m[91mnot ok[0m[91m 
[0m
 ---> e24b34269fb6
Removing intermediate container 77ccd6f8d3e8
Step 5 : ENV NODE_ENV production
 ---> Running in c91231b5602f
 ---> d9257f58f8bc
Removing intermediate container c91231b5602f
Step 6 : WORKDIR /usr/src/app
 ---> Running in 3ac2b17de98e
 ---> 32f3c2728692
Removing intermediate container 3ac2b17de98e
Step 7 : CMD npm start
 ---> Running in a0e3b23a14fd
 ---> b1e0acb8f543
Removing intermediate container a0e3b23a14fd
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in d9414fe16fb1
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1581 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 9c396c0cfc34
Removing intermediate container d9414fe16fb1
Successfully built 9c396c0cfc34

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test67`

Contents of dockerfile `/root/docker-node/.~tmp.test67/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.1
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.1-test1` from `/root/docker-node/.~tmp.test67`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.1
 ---> 9c396c0cfc34
Step 2 : ENV NODE_ENV test
 ---> Running in 120a63861f4c
 ---> ac5bcf8b65a6
Removing intermediate container 120a63861f4c
Step 3 : RUN node -v
 ---> Running in 06921c1d79e5
v2.3.1
 ---> cee2ca2eae70
Removing intermediate container 06921c1d79e5
Step 4 : RUN node -p "process.versions"
 ---> Running in 8c4c051017ef
{ http_parser: '2.5.0',
  node: '2.3.1',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> 97051bc9c0d3
Removing intermediate container 8c4c051017ef
Step 5 : RUN npm --version
 ---> Running in dce5676bfee3
2.11.3
 ---> ab0d2b321f3f
Removing intermediate container dce5676bfee3
Successfully built ab0d2b321f3f

```

# Tested image `nodesource/jessie:iojs-2.3.2`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 8afc891d1d1f
 ---> b05fbd3830cd
Removing intermediate container 8afc891d1d1f
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.2-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in de0fa3eeb34b
[91m  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5986k  100 5986k    0     0  31.0M      0 --:--:-- --:--:-- --:--:-- 31.2M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.2-1nodesource1~jessie1) ...
Setting up iojs (2.3.2-1nodesource1~jessie1) ...
 ---> 3445c5ab87dd
Removing intermediate container de0fa3eeb34b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in a57e94f3d835
[91mnpm[0m[91m WARN deprecated pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, inflight@1.0.4, once@1.3.3)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, qs@2.3.3, node-uuid@1.4.7, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@2.3.2 | linux | x64
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m GET[0m[91m https://iojs.org/dist/v2.3.2/iojs-v2.3.2.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.2/iojs-v2.3.2.tar.gz
[0m[91mgyp[0m[91m http[0m[91m [0m[91mGET https://iojs.org/dist/v2.3.2/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.3.2/SHASUMS256.txt
[0m[91mgyp info spawn python
[0m[91mgyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.2/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.2',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
[0m[91mgyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp [0m[91minfo spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Linux 3.13.0-71-generic
gyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.3.2
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> bfca08e20525
Removing intermediate container a57e94f3d835
Step 5 : ENV NODE_ENV production
 ---> Running in e85204e2b8b3
 ---> 527fcf9cabc3
Removing intermediate container e85204e2b8b3
Step 6 : WORKDIR /usr/src/app
 ---> Running in b19a2439517f
 ---> 40210b4e76dd
Removing intermediate container b19a2439517f
Step 7 : CMD npm start
 ---> Running in 06263c87d3e5
 ---> cc9c1d89ca60
Removing intermediate container 06263c87d3e5
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in b554a3ddb4b8
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:5 http://httpredir.debian.org jessie Release [148 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 6s (1442 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> 0534c8af524d
Removing intermediate container b554a3ddb4b8
Successfully built 0534c8af524d

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test68`

Contents of dockerfile `/root/docker-node/.~tmp.test68/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.2
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.2-test1` from `/root/docker-node/.~tmp.test68`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.2
 ---> 0534c8af524d
Step 2 : ENV NODE_ENV test
 ---> Running in 9a95cc4e64c2
 ---> fe3b310b2c8c
Removing intermediate container 9a95cc4e64c2
Step 3 : RUN node -v
 ---> Running in 38b8231761e6
v2.3.2
 ---> 6d3dcf87d341
Error removing intermediate container 38b8231761e6: rmdriverfs: Driver aufs failed to remove root filesystem 38b8231761e62b5036b27aef68d599758240da6cf955d06ddc4ffc5536bf3d72: rename /var/lib/docker/aufs/mnt/38b8231761e62b5036b27aef68d599758240da6cf955d06ddc4ffc5536bf3d72 /var/lib/docker/aufs/mnt/38b8231761e62b5036b27aef68d599758240da6cf955d06ddc4ffc5536bf3d72-removing: device or resource busy
Step 4 : RUN node -p "process.versions"
 ---> Running in babc9eae86ba
{ http_parser: '2.5.0',
  node: '2.3.2',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> 8e678819bdc7
Error removing intermediate container 38b8231761e6: nosuchcontainer: no such id: 38b8231761e62b5036b27aef68d599758240da6cf955d06ddc4ffc5536bf3d72
Step 5 : RUN npm --version
 ---> Running in d0d2e6a5c06b
2.11.3
 ---> b77a2eb4cdcc
Error removing intermediate container 38b8231761e6: nosuchcontainer: no such id: 38b8231761e62b5036b27aef68d599758240da6cf955d06ddc4ffc5536bf3d72
Successfully built b77a2eb4cdcc

```

# Tested image `nodesource/jessie:iojs-2.3.3`

## Build Log

```
Sending build context to Docker daemon 3.072 kBSending build context to Docker daemon 3.072 kB
Step 1 : FROM nodesource/jessie-base
 ---> bbdaf92059ed
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a7fb33308814
 ---> 57e2fbb53aab
Error removing intermediate container a7fb33308814: rmdriverfs: Driver aufs failed to remove root filesystem a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b: rename /var/lib/docker/aufs/mnt/a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b /var/lib/docker/aufs/mnt/a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b-removing: device or resource busy
Step 3 : RUN curl https://deb.nodesource.com/iojs_2.x/pool/main/i/iojs/iojs_2.3.3-1nodesource1~jessie1_amd64.deb > node.deb  && dpkg -i node.deb  && rm node.deb
 ---> Running in 34885694f593
[91m  % Total    % Rece[0m[91mived % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0[0m[91m100 5987k  100 5987k    0     0  24.2M      0 --:--:-- --:--:-- --:--:-- 24.2M
[0mSelecting previously unselected package iojs.
(Reading database ... 14690 files and directories currently installed.)
Preparing to unpack node.deb ...
Unpacking iojs (2.3.3-1nodesource1~jessie1) ...
Setting up iojs (2.3.3-1nodesource1~jessie1) ...
 ---> 8ceb6533bbbb
Error removing intermediate container a7fb33308814: nosuchcontainer: no such id: a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b
Step 4 : RUN npm install -g pangyp && ln -s $(which pangyp) $(dirname $(which pangyp))/node-gyp && npm cache clear && node-gyp configure || echo ""
 ---> Running in 1f8f2d95c8bd
[91mnpm[0m[91m [0m[91mWARN[0m[91m [0m[91mdeprecated[0m[91m pangyp@2.3.3: use node-gyp@3+ instead
[0m/usr/bin/pangyp -> /usr/lib/node_modules/pangyp/bin/node-gyp.js
pangyp@2.3.3 /usr/lib/node_modules/pangyp
├── which@1.0.9
├── rimraf@2.2.8
├── graceful-fs@3.0.8
├── osenv@0.1.3 (os-tmpdir@1.0.1, os-homedir@1.0.1)
├── nopt@3.0.6 (abbrev@1.0.7)
├── semver@4.3.6
├── glob@4.3.5 (inherits@2.0.1, once@1.3.3, inflight@1.0.4)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
├── minimatch@2.0.10 (brace-expansion@1.1.2)
├── tar@1.0.3 (inherits@2.0.1, block-stream@0.0.8)
├── npmlog@1.0.0 (ansi@0.3.1, gauge@1.0.2, are-we-there-yet@1.0.6)
└── request@2.51.0 (caseless@0.8.0, aws-sign2@0.5.0, forever-agent@0.5.2, stringstream@0.0.5, oauth-sign@0.5.0, tunnel-agent@0.4.2, json-stringify-safe@5.0.1, node-uuid@1.4.7, qs@2.3.3, mime-types@1.0.2, combined-stream@0.0.7, tough-cookie@2.2.1, bl@0.9.5, http-signature@0.10.1, form-data@0.2.0, hawk@1.1.1)
[91mgyp[0m[91m info it worked if it ends with ok
gyp info using pangyp@2.3.3
gyp info using node@2.3.3 | linux | x64
[0m[91mgyp[0m[91m http GET https://iojs.org/dist/v2.3.3/iojs-v2.3.3.tar.gz
[0m[91mgyp http 200 https://iojs.org/dist/v2.3.3/iojs-v2.3.3.tar.gz
[0m[91mgyp[0m[91m [0m[91mhttp[0m[91m [0m[91mGET[0m[91m https://iojs.org/dist/v2.3.3/SHASUMS256.txt
[0m[91mgyp[0m[91m http 200 https://iojs.org/dist/v2.3.3/SHASUMS256.txt
gyp info spawn python
gyp info spawn args [ '/usr/lib/node_modules/pangyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/usr/lib/node_modules/pangyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/root/.node-gyp/2.3.3/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/root/.node-gyp/2.3.3',
gyp info spawn args   '-Druntime=iojs',
gyp info spawn args   '-Dmodule_root_dir=/',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.' ]
[0m[91mgyp: binding.gyp not found (cwd: /) while trying to load binding.gyp
[0m[91mgyp ERR! configure error 
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m Error: `gyp` failed with exit code: 1
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.onCpExit (/usr/lib/node_modules/pangyp/lib/configure.js:346:16)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at emitTwo (events.js:87:13)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at ChildProcess.emit (events.js:172:7)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mstack[0m[91m     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
[0m[91mgyp[0m[91m [0m[91mERR![0m[91m [0m[91mSystem[0m[91m Linux 3.13.0-71-generic
[0m[91mgyp ERR! command "/usr/bin/iojs" "/usr/bin/node-gyp" "configure"
gyp ERR! cwd /
gyp ERR! node -v v2.3.3
gyp ERR! pangyp -v v2.3.3
gyp ERR! not ok 
[0m
 ---> a385d785d478
Error removing intermediate container a7fb33308814: nosuchcontainer: no such id: a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b
Step 5 : ENV NODE_ENV production
 ---> Running in fc68a3ad4caa
 ---> 840e1a6a07ca
Error removing intermediate container a7fb33308814: nosuchcontainer: no such id: a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b
Step 6 : WORKDIR /usr/src/app
 ---> Running in 0cebc8158ff3
 ---> 8bd9a507867b
Removing intermediate container 34885694f593
Removing intermediate container 1f8f2d95c8bd
Removing intermediate container fc68a3ad4caa
Removing intermediate container 0cebc8158ff3
Error removing intermediate container a7fb33308814: nosuchcontainer: no such id: a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b
Step 7 : CMD npm start
 ---> Running in 69c49d771630
 ---> 673660ebc0c6
Error removing intermediate container a7fb33308814: nosuchcontainer: no such id: a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b
Step 8 : RUN apt-get update  && apt-get upgrade -y --force-yes  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 285f277ab5ea
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [136 kB]
Get:3 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:4 http://httpredir.debian.org jessie Release [148 kB]
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [249 kB]
Get:6 http://httpredir.debian.org jessie-updates/main amd64 Packages [3619 B]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9636 kB in 5s (1685 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
 ---> bfb44110b5d7
Error removing intermediate container a7fb33308814: nosuchcontainer: no such id: a7fb333088144f23ef270dd0a3bd2c164bcf5f7acecc2a4b19398cd61a0bd57b
Successfully built bfb44110b5d7

```

Array of tests: `[./tests/node]`

## Running test #0

Copying `/root/docker-node/tests/node` to `/root/docker-node/.~tmp.test69`

Contents of dockerfile `/root/docker-node/.~tmp.test69/Dockerfile`:

```
FROM nodesource/jessie:iojs-2.3.3
ENV NODE_ENV test

RUN node -v
RUN node -p "process.versions"
RUN npm --version

```

Building `nodesource/jessie:iojs-2.3.3-test1` from `/root/docker-node/.~tmp.test69`

```
Sending build context to Docker daemon 2.048 kBSending build context to Docker daemon 2.048 kB
Step 1 : FROM nodesource/jessie:iojs-2.3.3
 ---> bfb44110b5d7
Step 2 : ENV NODE_ENV test
 ---> Running in 8ed05e7f31af
 ---> 6341d5ac162b
Error removing intermediate container 8ed05e7f31af: rmdriverfs: Driver aufs failed to remove root filesystem 8ed05e7f31afb4362271c55450a9c00c3cbd3ffdc3b44f43451efc1bbf999504: rename /var/lib/docker/aufs/mnt/8ed05e7f31afb4362271c55450a9c00c3cbd3ffdc3b44f43451efc1bbf999504 /var/lib/docker/aufs/mnt/8ed05e7f31afb4362271c55450a9c00c3cbd3ffdc3b44f43451efc1bbf999504-removing: device or resource busy
Step 3 : RUN node -v
 ---> Running in 462f4eb38f6f
v2.3.3
 ---> 1477a8c85da6
Error removing intermediate container 8ed05e7f31af: nosuchcontainer: no such id: 8ed05e7f31afb4362271c55450a9c00c3cbd3ffdc3b44f43451efc1bbf999504
Step 4 : RUN node -p "process.versions"
 ---> Running in b8fa23486ece
{ http_parser: '2.5.0',
  node: '2.3.3',
  v8: '4.2.77.20',
  uv: '1.6.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  modules: '44',
  openssl: '1.0.2c' }
 ---> 4083d207f125
Error removing intermediate container 8ed05e7f31af: nosuchcontainer: no such id: 8ed05e7f31afb4362271c55450a9c00c3cbd3ffdc3b44f43451efc1bbf999504
Step 5 : RUN npm --version
 ---> Running in 58cb830e2b34
2.11.3
 ---> fbd5eeb6ab0d
Removing intermediate container 58cb830e2b34
Error removing intermediate container 8ed05e7f31af: nosuchcontainer: no such id: 8ed05e7f31afb4362271c55450a9c00c3cbd3ffdc3b44f43451efc1bbf999504
Successfully built fbd5eeb6ab0d

```

# Conclusion

all tests passed.

# Tagging Aliases

0. nodesource/jessie:4.2.6 -> nodesource/jessie:4
1. nodesource/jessie:4.2.6 -> nodesource/jessie:4.2
2. nodesource/jessie:4.2.6 -> nodesource/jessie:LTS
3. nodesource/jessie:4.2.6 -> nodesource/jessie:argon
4. nodesource/jessie:4.2.6 -> nodesource/node:4
5. nodesource/jessie:4.2.6 -> nodesource/node:4.2
6. nodesource/jessie:4.2.6 -> nodesource/node:LTS
7. nodesource/jessie:4.2.6 -> nodesource/node:argon
8. nodesource/jessie:4.2.6 -> nodesource/node:4.2.6
9. nodesource/jessie:5.5.0 -> nodesource/jessie:5
10. nodesource/jessie:5.5.0 -> nodesource/jessie:5.5
11. nodesource/jessie:5.5.0 -> nodesource/jessie:latest
12. nodesource/jessie:5.5.0 -> nodesource/node:5
13. nodesource/jessie:5.5.0 -> nodesource/node:5.5
14. nodesource/jessie:5.5.0 -> nodesource/node:latest
15. nodesource/jessie:5.5.0 -> nodesource/node:5.5.0
16. nodesource/jessie:0.10.41 -> nodesource/jessie:0.10
17. nodesource/jessie:0.10.41 -> nodesource/node:0.10
18. nodesource/jessie:0.10.41 -> nodesource/node:0.10.41
19. nodesource/jessie:0.12.9 -> nodesource/jessie:0.12
20. nodesource/jessie:0.12.9 -> nodesource/node:0.12
21. nodesource/jessie:0.12.9 -> nodesource/node:0.12.9
22. nodesource/jessie:4.0.0 -> nodesource/jessie:4.0
23. nodesource/jessie:4.0.0 -> nodesource/node:4.0
24. nodesource/jessie:4.0.0 -> nodesource/node:4.0.0
25. nodesource/jessie:4.1.2 -> nodesource/jessie:4.1
26. nodesource/jessie:4.1.2 -> nodesource/node:4.1
27. nodesource/jessie:4.1.2 -> nodesource/node:4.1.2
28. nodesource/jessie:5.0.0 -> nodesource/jessie:5.0
29. nodesource/jessie:5.0.0 -> nodesource/node:5.0
30. nodesource/jessie:5.0.0 -> nodesource/node:5.0.0
31. nodesource/jessie:5.1.1 -> nodesource/jessie:5.1
32. nodesource/jessie:5.1.1 -> nodesource/node:5.1
33. nodesource/jessie:5.1.1 -> nodesource/node:5.1.1
34. nodesource/jessie:5.2.0 -> nodesource/jessie:5.2
35. nodesource/jessie:5.2.0 -> nodesource/node:5.2
36. nodesource/jessie:5.2.0 -> nodesource/node:5.2.0
37. nodesource/jessie:5.3.0 -> nodesource/jessie:5.3
38. nodesource/jessie:5.3.0 -> nodesource/node:5.3
39. nodesource/jessie:5.3.0 -> nodesource/node:5.3.0
40. nodesource/jessie:5.4.1 -> nodesource/jessie:5.4
41. nodesource/jessie:5.4.1 -> nodesource/node:5.4
42. nodesource/jessie:5.4.1 -> nodesource/node:5.4.1
43. nodesource/jessie:0.10.30 -> nodesource/node:0.10.30
44. nodesource/jessie:0.10.31 -> nodesource/node:0.10.31
45. nodesource/jessie:0.10.32 -> nodesource/node:0.10.32
46. nodesource/jessie:0.10.33 -> nodesource/node:0.10.33
47. nodesource/jessie:0.10.34 -> nodesource/node:0.10.34
48. nodesource/jessie:0.10.35 -> nodesource/node:0.10.35
49. nodesource/jessie:0.10.36 -> nodesource/node:0.10.36
50. nodesource/jessie:0.10.37 -> nodesource/node:0.10.37
51. nodesource/jessie:0.10.38 -> nodesource/node:0.10.38
52. nodesource/jessie:0.10.39 -> nodesource/node:0.10.39
53. nodesource/jessie:0.10.40 -> nodesource/node:0.10.40
54. nodesource/jessie:0.12.0 -> nodesource/node:0.12.0
55. nodesource/jessie:0.12.2 -> nodesource/node:0.12.2
56. nodesource/jessie:0.12.3 -> nodesource/node:0.12.3
57. nodesource/jessie:0.12.4 -> nodesource/node:0.12.4
58. nodesource/jessie:0.12.5 -> nodesource/node:0.12.5
59. nodesource/jessie:0.12.6 -> nodesource/node:0.12.6
60. nodesource/jessie:0.12.7 -> nodesource/node:0.12.7
61. nodesource/jessie:0.12.8 -> nodesource/node:0.12.8
62. nodesource/jessie:4.1.0 -> nodesource/node:4.1.0
63. nodesource/jessie:4.1.1 -> nodesource/node:4.1.1
64. nodesource/jessie:4.2.0 -> nodesource/node:4.2.0
65. nodesource/jessie:4.2.1 -> nodesource/node:4.2.1
66. nodesource/jessie:4.2.2 -> nodesource/node:4.2.2
67. nodesource/jessie:4.2.3 -> nodesource/node:4.2.3
68. nodesource/jessie:4.2.4 -> nodesource/node:4.2.4
69. nodesource/jessie:4.2.5 -> nodesource/node:4.2.5
70. nodesource/jessie:5.1.0 -> nodesource/node:5.1.0
71. nodesource/jessie:5.4.0 -> nodesource/node:5.4.0
72. nodesource/jessie:iojs-1.8.4 -> nodesource/jessie:iojs-1
73. nodesource/jessie:iojs-1.8.4 -> nodesource/jessie:iojs-1.8
74. nodesource/jessie:iojs-1.8.4 -> nodesource/node:iojs-1
75. nodesource/jessie:iojs-1.8.4 -> nodesource/node:iojs-1.8
76. nodesource/jessie:iojs-1.8.4 -> nodesource/node:iojs-1.8.4
77. nodesource/jessie:iojs-2.5.0 -> nodesource/jessie:iojs-2
78. nodesource/jessie:iojs-2.5.0 -> nodesource/jessie:iojs-2.5
79. nodesource/jessie:iojs-2.5.0 -> nodesource/node:iojs-2
80. nodesource/jessie:iojs-2.5.0 -> nodesource/node:iojs-2.5
81. nodesource/jessie:iojs-2.5.0 -> nodesource/node:iojs-2.5.0
82. nodesource/jessie:iojs-3.3.0 -> nodesource/jessie:iojs-3
83. nodesource/jessie:iojs-3.3.0 -> nodesource/jessie:iojs-3.3
84. nodesource/jessie:iojs-3.3.0 -> nodesource/jessie:iojs
85. nodesource/jessie:iojs-3.3.0 -> nodesource/node:iojs-3
86. nodesource/jessie:iojs-3.3.0 -> nodesource/node:iojs-3.3
87. nodesource/jessie:iojs-3.3.0 -> nodesource/node:iojs
88. nodesource/jessie:iojs-3.3.0 -> nodesource/node:iojs-3.3.0
89. nodesource/jessie:iojs-1.3.0 -> nodesource/jessie:iojs-1.3
90. nodesource/jessie:iojs-1.3.0 -> nodesource/node:iojs-1.3
91. nodesource/jessie:iojs-1.3.0 -> nodesource/node:iojs-1.3.0
92. nodesource/jessie:iojs-1.4.3 -> nodesource/jessie:iojs-1.4
93. nodesource/jessie:iojs-1.4.3 -> nodesource/node:iojs-1.4
94. nodesource/jessie:iojs-1.4.3 -> nodesource/node:iojs-1.4.3
95. nodesource/jessie:iojs-1.5.1 -> nodesource/jessie:iojs-1.5
96. nodesource/jessie:iojs-1.5.1 -> nodesource/node:iojs-1.5
97. nodesource/jessie:iojs-1.5.1 -> nodesource/node:iojs-1.5.1
98. nodesource/jessie:iojs-1.6.4 -> nodesource/jessie:iojs-1.6
99. nodesource/jessie:iojs-1.6.4 -> nodesource/node:iojs-1.6
100. nodesource/jessie:iojs-1.6.4 -> nodesource/node:iojs-1.6.4
101. nodesource/jessie:iojs-1.7.1 -> nodesource/jessie:iojs-1.7
102. nodesource/jessie:iojs-1.7.1 -> nodesource/node:iojs-1.7
103. nodesource/jessie:iojs-1.7.1 -> nodesource/node:iojs-1.7.1
104. nodesource/jessie:iojs-2.0.2 -> nodesource/jessie:iojs-2.0
105. nodesource/jessie:iojs-2.0.2 -> nodesource/node:iojs-2.0
106. nodesource/jessie:iojs-2.0.2 -> nodesource/node:iojs-2.0.2
107. nodesource/jessie:iojs-2.1.0 -> nodesource/jessie:iojs-2.1
108. nodesource/jessie:iojs-2.1.0 -> nodesource/node:iojs-2.1
109. nodesource/jessie:iojs-2.1.0 -> nodesource/node:iojs-2.1.0
110. nodesource/jessie:iojs-2.2.1 -> nodesource/jessie:iojs-2.2
111. nodesource/jessie:iojs-2.2.1 -> nodesource/node:iojs-2.2
112. nodesource/jessie:iojs-2.2.1 -> nodesource/node:iojs-2.2.1
113. nodesource/jessie:iojs-2.3.4 -> nodesource/jessie:iojs-2.3
114. nodesource/jessie:iojs-2.3.4 -> nodesource/node:iojs-2.3
115. nodesource/jessie:iojs-2.3.4 -> nodesource/node:iojs-2.3.4
116. nodesource/jessie:iojs-2.4.0 -> nodesource/jessie:iojs-2.4
117. nodesource/jessie:iojs-2.4.0 -> nodesource/node:iojs-2.4
118. nodesource/jessie:iojs-2.4.0 -> nodesource/node:iojs-2.4.0
119. nodesource/jessie:iojs-3.0.0 -> nodesource/jessie:iojs-3.0
120. nodesource/jessie:iojs-3.0.0 -> nodesource/node:iojs-3.0
121. nodesource/jessie:iojs-3.0.0 -> nodesource/node:iojs-3.0.0
122. nodesource/jessie:iojs-3.1.0 -> nodesource/jessie:iojs-3.1
123. nodesource/jessie:iojs-3.1.0 -> nodesource/node:iojs-3.1
124. nodesource/jessie:iojs-3.1.0 -> nodesource/node:iojs-3.1.0
125. nodesource/jessie:iojs-3.2.0 -> nodesource/jessie:iojs-3.2
126. nodesource/jessie:iojs-3.2.0 -> nodesource/node:iojs-3.2
127. nodesource/jessie:iojs-3.2.0 -> nodesource/node:iojs-3.2.0
128. nodesource/jessie:iojs-1.4.1 -> nodesource/node:iojs-1.4.1
129. nodesource/jessie:iojs-1.4.2 -> nodesource/node:iojs-1.4.2
130. nodesource/jessie:iojs-1.5.0 -> nodesource/node:iojs-1.5.0
131. nodesource/jessie:iojs-1.6.1 -> nodesource/node:iojs-1.6.1
132. nodesource/jessie:iojs-1.6.2 -> nodesource/node:iojs-1.6.2
133. nodesource/jessie:iojs-1.6.3 -> nodesource/node:iojs-1.6.3
134. nodesource/jessie:iojs-1.8.1 -> nodesource/node:iojs-1.8.1
135. nodesource/jessie:iojs-1.8.3 -> nodesource/node:iojs-1.8.3
136. nodesource/jessie:iojs-2.0.0 -> nodesource/node:iojs-2.0.0
137. nodesource/jessie:iojs-2.0.1 -> nodesource/node:iojs-2.0.1
138. nodesource/jessie:iojs-2.3.0 -> nodesource/node:iojs-2.3.0
139. nodesource/jessie:iojs-2.3.1 -> nodesource/node:iojs-2.3.1
140. nodesource/jessie:iojs-2.3.2 -> nodesource/node:iojs-2.3.2

# Conclusion

all aliases succeeded.

%!(EXTRA int=0)