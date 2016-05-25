# Tested image `nodesource/wheezy-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM debian:wheezy
wheezy: Pulling from library/debian
47994b92ab73: Pulling fs layer
a3ed95caeb02: Pulling fs layer
47994b92ab73: Waiting
a3ed95caeb02: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Download complete
47994b92ab73: Verifying Checksum
47994b92ab73: Download complete
47994b92ab73: Pull complete
47994b92ab73: Pull complete
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:54a3dc2ac27608a8b126fa56819cb42b193d878250c42bf5af8027129f993987
Status: Downloaded newer image for debian:wheezy
 ---> c6bc6adc4da5
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in ff1eea3fb886
 ---> a749988ae7b1
Removing intermediate container ff1eea3fb886
Step 3 : RUN apt-get update  && apt-get install -y --force-yes --no-install-recommends      apt-transport-https       ssh-client       build-essential       curl       ca-certificates       git       libicu-dev       lsb-release       python-all       rlwrap  && rm -rf /var/lib/apt/lists/*;
 ---> Running in a9df20d365c6
Get:1 http://security.debian.org wheezy/updates Release.gpg [1554 B]
Get:2 http://security.debian.org wheezy/updates Release [39.0 kB]
Get:3 http://security.debian.org wheezy/updates/main amd64 Packages [463 kB]
Get:4 http://httpredir.debian.org wheezy Release.gpg [2373 B]
Get:5 http://httpredir.debian.org wheezy-updates Release.gpg [1554 B]
Get:6 http://httpredir.debian.org wheezy Release [191 kB]
Get:7 http://httpredir.debian.org wheezy-updates Release [151 kB]
Ign http://httpredir.debian.org wheezy-updates Release
Get:8 http://httpredir.debian.org wheezy/main amd64 Packages [7635 kB]
Get:9 http://httpredir.debian.org wheezy-updates/main amd64 Packages [7481 B]
Fetched 8492 kB in 2s (3734 kB/s)
Reading package lists...
[91mW: GPG error: http://httpredir.debian.org wheezy-updates Release: The following signatures were invalid: BADSIG 8B48AD6246925553 Debian Archive Automatic Signing Key (7.0/wheezy) <ftpmaster@debian.org>
[0mReading package lists...
Building dependency tree...
Reading state information...
The following extra packages will be installed:
  adduser binutils bzip2 cpp cpp-4.7 dpkg-dev g++ g++-4.7 gcc gcc-4.7 git-man
  libbsd0 libc-dev-bin libc6-dev libclass-isa-perl libcurl3 libcurl3-gnutls
  libdpkg-perl libedit2 liberror-perl libexpat1 libgcrypt11 libgdbm3 libgmp10
  libgnutls26 libgomp1 libgpg-error0 libgssapi-krb5-2 libicu48 libidn11
  libitm1 libk5crypto3 libkeyutils1 libkrb5-3 libkrb5support0 libldap-2.4-2
  libmpc2 libmpfr4 libncursesw5 libp11-kit0 libquadmath0 librtmp0 libsasl2-2
  libsqlite3-0 libssh2-1 libssl1.0.0 libstdc++6-4.7-dev libswitch-perl
  libtasn1-3 libtimedate-perl linux-libc-dev make mime-support openssl patch
  perl perl-modules python python-minimal python2.6 python2.6-minimal
  python2.7 python2.7-minimal
Suggested packages:
  binutils-doc bzip2-doc cpp-doc gcc-4.7-locales debian-keyring g++-multilib
  g++-4.7-multilib gcc-4.7-doc libstdc++6-4.7-dbg gcc-multilib manpages-dev
  autoconf automake1.9 libtool flex bison gdb gcc-doc gcc-4.7-multilib
  libmudflap0-4.7-dev libgcc1-dbg libgomp1-dbg libitm1-dbg libquadmath0-dbg
  libmudflap0-dbg libcloog-ppl0 libppl-c2 libppl7 binutils-gold gettext-base
  git-daemon-run git-daemon-sysvinit git-doc git-el git-arch git-cvs git-svn
  git-email git-gui gitk gitweb glibc-doc rng-tools krb5-doc krb5-user icu-doc
  libstdc++6-4.7-doc lsb make-doc ssh-askpass libpam-ssh keychain monkeysphere
  ed diffutils-doc perl-doc libterm-readline-gnu-perl
  libterm-readline-perl-perl libpod-plainer-perl python-doc python-tk
  python2.6-doc binfmt-support python2.7-doc
Recommended packages:
  fakeroot libalgorithm-merge-perl less rsync ssh-client
  libfile-fcntllock-perl krb5-locales libgpm2 libsasl2-modules file xauth
  openssh-blacklist openssh-blacklist-extra
The following NEW packages will be installed:
  adduser apt-transport-https binutils build-essential bzip2 ca-certificates
  cpp cpp-4.7 curl dpkg-dev g++ g++-4.7 gcc gcc-4.7 git git-man libbsd0
  libc-dev-bin libc6-dev libclass-isa-perl libcurl3 libcurl3-gnutls
  libdpkg-perl libedit2 liberror-perl libexpat1 libgcrypt11 libgdbm3 libgmp10
  libgnutls26 libgomp1 libgpg-error0 libgssapi-krb5-2 libicu-dev libicu48
  libidn11 libitm1 libk5crypto3 libkeyutils1 libkrb5-3 libkrb5support0
  libldap-2.4-2 libmpc2 libmpfr4 libncursesw5 libp11-kit0 libquadmath0
  librtmp0 libsasl2-2 libsqlite3-0 libssh2-1 libssl1.0.0 libstdc++6-4.7-dev
  libswitch-perl libtasn1-3 libtimedate-perl linux-libc-dev lsb-release make
  mime-support openssh-client openssl patch perl perl-modules python
  python-all python-minimal python2.6 python2.6-minimal python2.7
  python2.7-minimal rlwrap
0 upgraded, 73 newly installed, 0 to remove and 0 not upgraded.
Need to get 79.1 MB of archives.
After this operation, 243 MB of additional disk space will be used.
Get:1 http://security.debian.org/ wheezy/updates/main libssl1.0.0 amd64 1.0.1e-2+deb7u21 [1263 kB]
Get:2 http://httpredir.debian.org/debian/ wheezy/main libgdbm3 amd64 1.8.3-11 [46.9 kB]
Get:3 http://httpredir.debian.org/debian/ wheezy/main libncursesw5 amd64 5.9-10 [141 kB]
Get:4 http://httpredir.debian.org/debian/ wheezy/main libbsd0 amd64 0.4.2-1 [59.3 kB]
Get:5 http://httpredir.debian.org/debian/ wheezy/main libedit2 amd64 2.11-20080614-5 [72.9 kB]
Get:6 http://security.debian.org/ wheezy/updates/main libidn11 amd64 1.25-2+deb7u1 [179 kB]
Get:7 http://httpredir.debian.org/debian/ wheezy/main libgpg-error0 amd64 1.10-3.1 [77.9 kB]
Get:8 http://security.debian.org/ wheezy/updates/main libldap-2.4-2 amd64 2.4.31-2+deb7u1 [242 kB]
Get:9 http://security.debian.org/ wheezy/updates/main libexpat1 amd64 2.1.0-1+deb7u3 [139 kB]
Get:10 http://httpredir.debian.org/debian/ wheezy/main libgcrypt11 amd64 1.5.0-5+deb7u4 [301 kB]
Get:11 http://security.debian.org/ wheezy/updates/main openssh-client amd64 1:6.0p1-4+deb7u4 [1025 kB]
Get:12 http://httpredir.debian.org/debian/ wheezy/main libp11-kit0 amd64 0.12-3 [52.8 kB]
Get:13 http://security.debian.org/ wheezy/updates/main libc-dev-bin amd64 2.13-38+deb7u10 [228 kB]
Get:14 http://httpredir.debian.org/debian/ wheezy/main libtasn1-3 amd64 2.13-2+deb7u2 [67.8 kB]
Get:15 http://security.debian.org/ wheezy/updates/main libc6-dev amd64 2.13-38+deb7u10 [2663 kB]
Get:16 http://httpredir.debian.org/debian/ wheezy/main libgnutls26 amd64 2.12.20-8+deb7u5 [620 kB]
Get:17 http://httpredir.debian.org/debian/ wheezy/main libkeyutils1 amd64 1.5.5-3+deb7u1 [8664 B]
Get:18 http://httpredir.debian.org/debian/ wheezy/main libkrb5support0 amd64 1.10.1+dfsg-5+deb7u7 [50.5 kB]
Get:19 http://httpredir.debian.org/debian/ wheezy/main libk5crypto3 amd64 1.10.1+dfsg-5+deb7u7 [113 kB]
Get:20 http://security.debian.org/ wheezy/updates/main openssl amd64 1.0.1e-2+deb7u21 [702 kB]
Get:21 http://httpredir.debian.org/debian/ wheezy/main libkrb5-3 amd64 1.10.1+dfsg-5+deb7u7 [394 kB]
Get:22 http://httpredir.debian.org/debian/ wheezy/main libgssapi-krb5-2 amd64 1.10.1+dfsg-5+deb7u7 [150 kB]
Get:23 http://httpredir.debian.org/debian/ wheezy/main libsasl2-2 amd64 2.1.25.dfsg1-6+deb7u1 [120 kB]
Get:24 http://httpredir.debian.org/debian/ wheezy/main libsqlite3-0 amd64 3.7.13-1+deb7u2 [454 kB]
Get:25 http://httpredir.debian.org/debian/ wheezy/main librtmp0 amd64 2.4+20111222.git4e06e21-1 [62.3 kB]
Get:26 http://httpredir.debian.org/debian/ wheezy/main libssh2-1 amd64 1.4.2-1.1+deb7u2 [134 kB]
Get:27 http://httpredir.debian.org/debian/ wheezy/main libcurl3 amd64 7.26.0-1+wheezy13 [331 kB]
Get:28 http://httpredir.debian.org/debian/ wheezy/main libcurl3-gnutls amd64 7.26.0-1+wheezy13 [322 kB]
Get:29 http://httpredir.debian.org/debian/ wheezy/main libgmp10 amd64 2:5.0.5+dfsg-2 [250 kB]
Get:30 http://httpredir.debian.org/debian/ wheezy/main libgomp1 amd64 4.7.2-5 [27.5 kB]
Get:31 http://httpredir.debian.org/debian/ wheezy/main libicu48 amd64 4.8.1.1-12+deb7u3 [4761 kB]
Get:32 http://httpredir.debian.org/debian/ wheezy/main libitm1 amd64 4.7.2-5 [36.6 kB]
Get:33 http://httpredir.debian.org/debian/ wheezy/main libmpfr4 amd64 3.1.0-5 [538 kB]
Get:34 http://httpredir.debian.org/debian/ wheezy/main libquadmath0 amd64 4.7.2-5 [125 kB]
Get:35 http://httpredir.debian.org/debian/ wheezy/main libmpc2 amd64 0.9-4 [40.1 kB]
Get:36 http://httpredir.debian.org/debian/ wheezy/main adduser all 3.113+nmu3 [264 kB]
Get:37 http://httpredir.debian.org/debian/ wheezy/main bzip2 amd64 1.0.6-4 [50.1 kB]
Get:38 http://httpredir.debian.org/debian/ wheezy/main libclass-isa-perl all 0.36-3 [12.3 kB]
Get:39 http://httpredir.debian.org/debian/ wheezy/main perl-modules all 5.14.2-21+deb7u3 [3444 kB]
Get:40 http://httpredir.debian.org/debian/ wheezy/main perl amd64 5.14.2-21+deb7u3 [4429 kB]
Get:41 http://httpredir.debian.org/debian/ wheezy/main libswitch-perl all 2.16-2 [21.0 kB]
Get:42 http://httpredir.debian.org/debian/ wheezy/main mime-support all 3.52-1+deb7u1 [35.5 kB]
Get:43 http://httpredir.debian.org/debian/ wheezy/main patch amd64 2.6.1-3 [121 kB]
Get:44 http://httpredir.debian.org/debian/ wheezy/main python2.7-minimal amd64 2.7.3-6+deb7u2 [1785 kB]
Get:45 http://httpredir.debian.org/debian/ wheezy/main python-minimal all 2.7.3-4+deb7u1 [42.8 kB]
Get:46 http://httpredir.debian.org/debian/ wheezy/main python2.7 amd64 2.7.3-6+deb7u2 [2728 kB]
Get:47 http://httpredir.debian.org/debian/ wheezy/main python2.6-minimal amd64 2.6.8-1.1 [1547 kB]
Get:48 http://httpredir.debian.org/debian/ wheezy/main python all 2.7.3-4+deb7u1 [181 kB]
Get:49 http://httpredir.debian.org/debian/ wheezy/main apt-transport-https amd64 0.9.7.9+deb7u7 [109 kB]
Get:50 http://httpredir.debian.org/debian/ wheezy/main binutils amd64 2.22-8+deb7u2 [4793 kB]
Get:51 http://httpredir.debian.org/debian/ wheezy/main linux-libc-dev amd64 3.2.78-1 [854 kB]
Get:52 http://httpredir.debian.org/debian/ wheezy/main cpp-4.7 amd64 4.7.2-5 [5416 kB]
Get:53 http://httpredir.debian.org/debian/ wheezy/main cpp amd64 4:4.7.2-1 [16.6 kB]
Get:54 http://httpredir.debian.org/debian/ wheezy/main gcc-4.7 amd64 4.7.2-5 [8296 kB]
Get:55 http://httpredir.debian.org/debian/ wheezy/main g++-4.7 amd64 4.7.2-5 [8011 kB]
Get:56 http://httpredir.debian.org/debian/ wheezy/main g++ amd64 4:4.7.2-1 [1374 B]
Get:57 http://httpredir.debian.org/debian/ wheezy/main make amd64 3.81-8.2 [396 kB]
Get:58 http://httpredir.debian.org/debian/ wheezy/main libdpkg-perl all 1.16.17 [964 kB]
Get:59 http://httpredir.debian.org/debian/ wheezy/main dpkg-dev all 1.16.17 [1363 kB]
Get:60 http://httpredir.debian.org/debian/ wheezy/main build-essential amd64 11.5 [7178 B]
Get:61 http://httpredir.debian.org/debian/ wheezy/main ca-certificates all 20130119+deb7u1 [210 kB]
Get:62 http://httpredir.debian.org/debian/ wheezy/main curl amd64 7.26.0-1+wheezy13 [270 kB]
Get:63 http://httpredir.debian.org/debian/ wheezy/main gcc amd64 4:4.7.2-1 [5064 B]
Get:64 http://httpredir.debian.org/debian/ wheezy/main liberror-perl all 0.17-1 [23.6 kB]
Get:65 http://httpredir.debian.org/debian/ wheezy/main git-man all 1:1.7.10.4-1+wheezy3 [1075 kB]
Get:66 http://httpredir.debian.org/debian/ wheezy/main libicu-dev amd64 4.8.1.1-12+deb7u3 [5752 kB]
Get:67 http://httpredir.debian.org/debian/ wheezy/main libstdc++6-4.7-dev amd64 4.7.2-5 [1726 kB]
Get:68 http://httpredir.debian.org/debian/ wheezy/main libtimedate-perl all 1.2000-1 [41.2 kB]
Get:69 http://httpredir.debian.org/debian/ wheezy/main git amd64 1:1.7.10.4-1+wheezy3 [6688 kB]
Get:70 http://httpredir.debian.org/debian/ wheezy/main python2.6 amd64 2.6.8-1.1 [2509 kB]
Get:71 http://httpredir.debian.org/debian/ wheezy/main python-all all 2.7.3-4+deb7u1 [880 B]
Get:72 http://httpredir.debian.org/debian/ wheezy/main lsb-release all 4.1+Debian8+deb7u1 [27.2 kB]
Get:73 http://httpredir.debian.org/debian/ wheezy/main rlwrap amd64 0.37-3 [88.1 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 79.1 MB in 9s (8112 kB/s)
Selecting previously unselected package libgdbm3:amd64.
(Reading database ... 6732 files and directories currently installed.)
Unpacking libgdbm3:amd64 (from .../libgdbm3_1.8.3-11_amd64.deb) ...
Selecting previously unselected package libncursesw5:amd64.
Unpacking libncursesw5:amd64 (from .../libncursesw5_5.9-10_amd64.deb) ...
Selecting previously unselected package libssl1.0.0:amd64.
Unpacking libssl1.0.0:amd64 (from .../libssl1.0.0_1.0.1e-2+deb7u21_amd64.deb) ...
Selecting previously unselected package libbsd0:amd64.
Unpacking libbsd0:amd64 (from .../libbsd0_0.4.2-1_amd64.deb) ...
Selecting previously unselected package libedit2:amd64.
Unpacking libedit2:amd64 (from .../libedit2_2.11-20080614-5_amd64.deb) ...
Selecting previously unselected package libgpg-error0:amd64.
Unpacking libgpg-error0:amd64 (from .../libgpg-error0_1.10-3.1_amd64.deb) ...
Selecting previously unselected package libgcrypt11:amd64.
Unpacking libgcrypt11:amd64 (from .../libgcrypt11_1.5.0-5+deb7u4_amd64.deb) ...
Selecting previously unselected package libp11-kit0:amd64.
Unpacking libp11-kit0:amd64 (from .../libp11-kit0_0.12-3_amd64.deb) ...
Selecting previously unselected package libtasn1-3:amd64.
Unpacking libtasn1-3:amd64 (from .../libtasn1-3_2.13-2+deb7u2_amd64.deb) ...
Selecting previously unselected package libgnutls26:amd64.
Unpacking libgnutls26:amd64 (from .../libgnutls26_2.12.20-8+deb7u5_amd64.deb) ...
Selecting previously unselected package libkeyutils1:amd64.
Unpacking libkeyutils1:amd64 (from .../libkeyutils1_1.5.5-3+deb7u1_amd64.deb) ...
Selecting previously unselected package libkrb5support0:amd64.
Unpacking libkrb5support0:amd64 (from .../libkrb5support0_1.10.1+dfsg-5+deb7u7_amd64.deb) ...
Selecting previously unselected package libk5crypto3:amd64.
Unpacking libk5crypto3:amd64 (from .../libk5crypto3_1.10.1+dfsg-5+deb7u7_amd64.deb) ...
Selecting previously unselected package libkrb5-3:amd64.
Unpacking libkrb5-3:amd64 (from .../libkrb5-3_1.10.1+dfsg-5+deb7u7_amd64.deb) ...
Selecting previously unselected package libgssapi-krb5-2:amd64.
Unpacking libgssapi-krb5-2:amd64 (from .../libgssapi-krb5-2_1.10.1+dfsg-5+deb7u7_amd64.deb) ...
Selecting previously unselected package libidn11:amd64.
Unpacking libidn11:amd64 (from .../libidn11_1.25-2+deb7u1_amd64.deb) ...
Selecting previously unselected package libsasl2-2:amd64.
Unpacking libsasl2-2:amd64 (from .../libsasl2-2_2.1.25.dfsg1-6+deb7u1_amd64.deb) ...
Selecting previously unselected package libsqlite3-0:amd64.
Unpacking libsqlite3-0:amd64 (from .../libsqlite3-0_3.7.13-1+deb7u2_amd64.deb) ...
Selecting previously unselected package libldap-2.4-2:amd64.
Unpacking libldap-2.4-2:amd64 (from .../libldap-2.4-2_2.4.31-2+deb7u1_amd64.deb) ...
Selecting previously unselected package librtmp0:amd64.
Unpacking librtmp0:amd64 (from .../librtmp0_2.4+20111222.git4e06e21-1_amd64.deb) ...
Selecting previously unselected package libssh2-1:amd64.
Unpacking libssh2-1:amd64 (from .../libssh2-1_1.4.2-1.1+deb7u2_amd64.deb) ...
Selecting previously unselected package libcurl3:amd64.
Unpacking libcurl3:amd64 (from .../libcurl3_7.26.0-1+wheezy13_amd64.deb) ...
Selecting previously unselected package libcurl3-gnutls:amd64.
Unpacking libcurl3-gnutls:amd64 (from .../libcurl3-gnutls_7.26.0-1+wheezy13_amd64.deb) ...
Selecting previously unselected package libexpat1:amd64.
Unpacking libexpat1:amd64 (from .../libexpat1_2.1.0-1+deb7u3_amd64.deb) ...
Selecting previously unselected package libgmp10:amd64.
Unpacking libgmp10:amd64 (from .../libgmp10_2%3a5.0.5+dfsg-2_amd64.deb) ...
Selecting previously unselected package libgomp1:amd64.
Unpacking libgomp1:amd64 (from .../libgomp1_4.7.2-5_amd64.deb) ...
Selecting previously unselected package libicu48:amd64.
Unpacking libicu48:amd64 (from .../libicu48_4.8.1.1-12+deb7u3_amd64.deb) ...
Selecting previously unselected package libitm1:amd64.
Unpacking libitm1:amd64 (from .../libitm1_4.7.2-5_amd64.deb) ...
Selecting previously unselected package libmpfr4:amd64.
Unpacking libmpfr4:amd64 (from .../libmpfr4_3.1.0-5_amd64.deb) ...
Selecting previously unselected package libquadmath0:amd64.
Unpacking libquadmath0:amd64 (from .../libquadmath0_4.7.2-5_amd64.deb) ...
Selecting previously unselected package libmpc2:amd64.
Unpacking libmpc2:amd64 (from .../libmpc2_0.9-4_amd64.deb) ...
Selecting previously unselected package adduser.
Unpacking adduser (from .../adduser_3.113+nmu3_all.deb) ...
Selecting previously unselected package bzip2.
Unpacking bzip2 (from .../bzip2_1.0.6-4_amd64.deb) ...
Selecting previously unselected package libclass-isa-perl.
Unpacking libclass-isa-perl (from .../libclass-isa-perl_0.36-3_all.deb) ...
Selecting previously unselected package perl-modules.
Unpacking perl-modules (from .../perl-modules_5.14.2-21+deb7u3_all.deb) ...
Selecting previously unselected package perl.
Unpacking perl (from .../perl_5.14.2-21+deb7u3_amd64.deb) ...
Selecting previously unselected package libswitch-perl.
Unpacking libswitch-perl (from .../libswitch-perl_2.16-2_all.deb) ...
Selecting previously unselected package mime-support.
Unpacking mime-support (from .../mime-support_3.52-1+deb7u1_all.deb) ...
Selecting previously unselected package openssh-client.
Unpacking openssh-client (from .../openssh-client_1%3a6.0p1-4+deb7u4_amd64.deb) ...
Selecting previously unselected package patch.
Unpacking patch (from .../patch_2.6.1-3_amd64.deb) ...
Selecting previously unselected package python2.7-minimal.
Unpacking python2.7-minimal (from .../python2.7-minimal_2.7.3-6+deb7u2_amd64.deb) ...
Selecting previously unselected package python2.7.
Unpacking python2.7 (from .../python2.7_2.7.3-6+deb7u2_amd64.deb) ...
Selecting previously unselected package python-minimal.
Unpacking python-minimal (from .../python-minimal_2.7.3-4+deb7u1_all.deb) ...
Selecting previously unselected package python.
Unpacking python (from .../python_2.7.3-4+deb7u1_all.deb) ...
Selecting previously unselected package python2.6-minimal.
Unpacking python2.6-minimal (from .../python2.6-minimal_2.6.8-1.1_amd64.deb) ...
Selecting previously unselected package apt-transport-https.
Unpacking apt-transport-https (from .../apt-transport-https_0.9.7.9+deb7u7_amd64.deb) ...
Selecting previously unselected package binutils.
Unpacking binutils (from .../binutils_2.22-8+deb7u2_amd64.deb) ...
Selecting previously unselected package libc-dev-bin.
Unpacking libc-dev-bin (from .../libc-dev-bin_2.13-38+deb7u10_amd64.deb) ...
Selecting previously unselected package linux-libc-dev:amd64.
Unpacking linux-libc-dev:amd64 (from .../linux-libc-dev_3.2.78-1_amd64.deb) ...
Selecting previously unselected package libc6-dev:amd64.
Unpacking libc6-dev:amd64 (from .../libc6-dev_2.13-38+deb7u10_amd64.deb) ...
Selecting previously unselected package cpp-4.7.
Unpacking cpp-4.7 (from .../cpp-4.7_4.7.2-5_amd64.deb) ...
Selecting previously unselected package cpp.
Unpacking cpp (from .../cpp_4%3a4.7.2-1_amd64.deb) ...
Selecting previously unselected package gcc-4.7.
Unpacking gcc-4.7 (from .../gcc-4.7_4.7.2-5_amd64.deb) ...
Selecting previously unselected package gcc.
Unpacking gcc (from .../gcc_4%3a4.7.2-1_amd64.deb) ...
Selecting previously unselected package libstdc++6-4.7-dev.
Unpacking libstdc++6-4.7-dev (from .../libstdc++6-4.7-dev_4.7.2-5_amd64.deb) ...
Selecting previously unselected package g++-4.7.
Unpacking g++-4.7 (from .../g++-4.7_4.7.2-5_amd64.deb) ...
Selecting previously unselected package g++.
Unpacking g++ (from .../g++_4%3a4.7.2-1_amd64.deb) ...
Selecting previously unselected package make.
Unpacking make (from .../make_3.81-8.2_amd64.deb) ...
Selecting previously unselected package libtimedate-perl.
Unpacking libtimedate-perl (from .../libtimedate-perl_1.2000-1_all.deb) ...
Selecting previously unselected package libdpkg-perl.
Unpacking libdpkg-perl (from .../libdpkg-perl_1.16.17_all.deb) ...
Selecting previously unselected package dpkg-dev.
Unpacking dpkg-dev (from .../dpkg-dev_1.16.17_all.deb) ...
Selecting previously unselected package build-essential.
Unpacking build-essential (from .../build-essential_11.5_amd64.deb) ...
Selecting previously unselected package openssl.
Unpacking openssl (from .../openssl_1.0.1e-2+deb7u21_amd64.deb) ...
Selecting previously unselected package ca-certificates.
Unpacking ca-certificates (from .../ca-certificates_20130119+deb7u1_all.deb) ...
Selecting previously unselected package curl.
Unpacking curl (from .../curl_7.26.0-1+wheezy13_amd64.deb) ...
Selecting previously unselected package liberror-perl.
Unpacking liberror-perl (from .../liberror-perl_0.17-1_all.deb) ...
Selecting previously unselected package git-man.
Unpacking git-man (from .../git-man_1%3a1.7.10.4-1+wheezy3_all.deb) ...
Selecting previously unselected package git.
Unpacking git (from .../git_1%3a1.7.10.4-1+wheezy3_amd64.deb) ...
Selecting previously unselected package libicu-dev.
Unpacking libicu-dev (from .../libicu-dev_4.8.1.1-12+deb7u3_amd64.deb) ...
Selecting previously unselected package lsb-release.
Unpacking lsb-release (from .../lsb-release_4.1+Debian8+deb7u1_all.deb) ...
Selecting previously unselected package python2.6.
Unpacking python2.6 (from .../python2.6_2.6.8-1.1_amd64.deb) ...
Selecting previously unselected package python-all.
Unpacking python-all (from .../python-all_2.7.3-4+deb7u1_all.deb) ...
Selecting previously unselected package rlwrap.
Unpacking rlwrap (from .../rlwrap_0.37-3_amd64.deb) ...
Setting up libgdbm3:amd64 (1.8.3-11) ...
Setting up libncursesw5:amd64 (5.9-10) ...
Setting up libssl1.0.0:amd64 (1.0.1e-2+deb7u21) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0mSetting up libbsd0:amd64 (0.4.2-1) ...
Setting up libedit2:amd64 (2.11-20080614-5) ...
Setting up libgpg-error0:amd64 (1.10-3.1) ...
Setting up libgcrypt11:amd64 (1.5.0-5+deb7u4) ...
Setting up libp11-kit0:amd64 (0.12-3) ...
Setting up libtasn1-3:amd64 (2.13-2+deb7u2) ...
Setting up libgnutls26:amd64 (2.12.20-8+deb7u5) ...
Setting up libkeyutils1:amd64 (1.5.5-3+deb7u1) ...
Setting up libkrb5support0:amd64 (1.10.1+dfsg-5+deb7u7) ...
Setting up libk5crypto3:amd64 (1.10.1+dfsg-5+deb7u7) ...
Setting up libkrb5-3:amd64 (1.10.1+dfsg-5+deb7u7) ...
Setting up libgssapi-krb5-2:amd64 (1.10.1+dfsg-5+deb7u7) ...
Setting up libidn11:amd64 (1.25-2+deb7u1) ...
Setting up libsasl2-2:amd64 (2.1.25.dfsg1-6+deb7u1) ...
Setting up libsqlite3-0:amd64 (3.7.13-1+deb7u2) ...
Setting up libldap-2.4-2:amd64 (2.4.31-2+deb7u1) ...
Setting up librtmp0:amd64 (2.4+20111222.git4e06e21-1) ...
Setting up libssh2-1:amd64 (1.4.2-1.1+deb7u2) ...
Setting up libcurl3:amd64 (7.26.0-1+wheezy13) ...
Setting up libcurl3-gnutls:amd64 (7.26.0-1+wheezy13) ...
Setting up libexpat1:amd64 (2.1.0-1+deb7u3) ...
Setting up libgmp10:amd64 (2:5.0.5+dfsg-2) ...
Setting up libgomp1:amd64 (4.7.2-5) ...
Setting up libicu48:amd64 (4.8.1.1-12+deb7u3) ...
Setting up libitm1:amd64 (4.7.2-5) ...
Setting up libmpfr4:amd64 (3.1.0-5) ...
Setting up libquadmath0:amd64 (4.7.2-5) ...
Setting up libmpc2:amd64 (0.9-4) ...
Setting up adduser (3.113+nmu3) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0mSetting up bzip2 (1.0.6-4) ...
Setting up libclass-isa-perl (0.36-3) ...
Setting up mime-support (3.52-1+deb7u1) ...
update-alternatives: using /usr/bin/see to provide /usr/bin/view (view) in auto mode
Setting up openssh-client (1:6.0p1-4+deb7u4) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0mSetting up patch (2.6.1-3) ...
Setting up python2.7-minimal (2.7.3-6+deb7u2) ...
Linking and byte-compiling packages for runtime python2.7...
Setting up python2.7 (2.7.3-6+deb7u2) ...
Setting up python-minimal (2.7.3-4+deb7u1) ...
Setting up python (2.7.3-4+deb7u1) ...
Setting up python2.6-minimal (2.6.8-1.1) ...
Linking and byte-compiling packages for runtime python2.6...
Setting up apt-transport-https (0.9.7.9+deb7u7) ...
Setting up binutils (2.22-8+deb7u2) ...
Setting up libc-dev-bin (2.13-38+deb7u10) ...
Setting up linux-libc-dev:amd64 (3.2.78-1) ...
Setting up libc6-dev:amd64 (2.13-38+deb7u10) ...
Setting up cpp-4.7 (4.7.2-5) ...
Setting up cpp (4:4.7.2-1) ...
Setting up gcc-4.7 (4.7.2-5) ...
Setting up gcc (4:4.7.2-1) ...
Setting up make (3.81-8.2) ...
Setting up openssl (1.0.1e-2+deb7u21) ...
Setting up ca-certificates (20130119+deb7u1) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0mSetting up curl (7.26.0-1+wheezy13) ...
Setting up git-man (1:1.7.10.4-1+wheezy3) ...
Setting up libicu-dev (4.8.1.1-12+deb7u3) ...
Setting up lsb-release (4.1+Debian8+deb7u1) ...
Setting up python2.6 (2.6.8-1.1) ...
Setting up python-all (2.7.3-4+deb7u1) ...
Setting up rlwrap (0.37-3) ...
update-alternatives: using /usr/bin/rlwrap to provide /usr/bin/readline-editor (readline-editor) in auto mode
Setting up libswitch-perl (2.16-2) ...
Setting up perl-modules (5.14.2-21+deb7u3) ...
Setting up perl (5.14.2-21+deb7u3) ...
update-alternatives: using /usr/bin/prename to provide /usr/bin/rename (rename) in auto mode
Setting up libstdc++6-4.7-dev (4.7.2-5) ...
Setting up g++-4.7 (4.7.2-5) ...
Setting up g++ (4:4.7.2-1) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode
Setting up libtimedate-perl (1.2000-1) ...
Setting up libdpkg-perl (1.16.17) ...
Setting up dpkg-dev (1.16.17) ...
Setting up build-essential (11.5) ...
Setting up liberror-perl (0.17-1) ...
Setting up git (1:1.7.10.4-1+wheezy3) ...
Processing triggers for ca-certificates ...
Updating certificates in /etc/ssl/certs... 171 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d....done.
 ---> 18067d0d0eaa
Removing intermediate container a9df20d365c6
Successfully built 18067d0d0eaa

```

Array of tests: `[]`

# Tested image `nodesource/trusty-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM ubuntu:trusty
trusty: Pulling from library/ubuntu
6599cadaf950: Pulling fs layer
23eda618d451: Pulling fs layer
f0be3084efe9: Pulling fs layer
52de432f084b: Pulling fs layer
a3ed95caeb02: Pulling fs layer
52de432f084b: Waiting
a3ed95caeb02: Waiting
f0be3084efe9: Download complete
23eda618d451: Download complete
52de432f084b: Download complete
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Download complete
6599cadaf950: Verifying Checksum
6599cadaf950: Download complete
6599cadaf950: Pull complete
6599cadaf950: Pull complete
23eda618d451: Pull complete
23eda618d451: Pull complete
f0be3084efe9: Pull complete
f0be3084efe9: Pull complete
52de432f084b: Pull complete
52de432f084b: Pull complete
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:2d379e5d2f483dd2d5ef0c86b161a5fef6843bafad75498172fa2d659aace164
Status: Downloaded newer image for ubuntu:trusty
 ---> 90d5884b1ee0
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in dab3bdee4c2c
 ---> c0e1f27a2584
Error removing intermediate container dab3bdee4c2c: rmdriverfs: Driver aufs failed to remove root filesystem dab3bdee4c2c325cd64bfa27a258ef2fcb787343015dc40dbdf8e175f3417c6c: rename /var/lib/docker/aufs/mnt/c39fea3e73c5cc036f7a03192e49f0e1836cb4fe8607d8ee2f3116f1647892eb /var/lib/docker/aufs/mnt/c39fea3e73c5cc036f7a03192e49f0e1836cb4fe8607d8ee2f3116f1647892eb-removing: device or resource busy
Step 3 : RUN apt-get update  && apt-get install -y --force-yes --no-install-recommends      apt-transport-https       ssh-client       build-essential       curl       ca-certificates       git       libicu-dev       lsb-release       python-all       rlwrap  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 9830b006286c
Ign http://archive.ubuntu.com trusty InRelease
Get:1 http://archive.ubuntu.com trusty-updates InRelease [65.9 kB]
Get:2 http://archive.ubuntu.com trusty-security InRelease [65.9 kB]
Get:3 http://archive.ubuntu.com trusty Release.gpg [933 B]
Get:4 http://archive.ubuntu.com trusty-updates/main Sources [346 kB]
Get:5 http://archive.ubuntu.com trusty-updates/restricted Sources [5217 B]
Get:6 http://archive.ubuntu.com trusty-updates/universe Sources [195 kB]
Get:7 http://archive.ubuntu.com trusty-updates/main amd64 Packages [964 kB]
Get:8 http://archive.ubuntu.com trusty-updates/restricted amd64 Packages [23.5 kB]
Get:9 http://archive.ubuntu.com trusty-updates/universe amd64 Packages [465 kB]
Get:10 http://archive.ubuntu.com trusty-security/main Sources [147 kB]
Get:11 http://archive.ubuntu.com trusty-security/restricted Sources [3920 B]
Get:12 http://archive.ubuntu.com trusty-security/universe Sources [42.7 kB]
Get:13 http://archive.ubuntu.com trusty-security/main amd64 Packages [602 kB]
Get:14 http://archive.ubuntu.com trusty-security/restricted amd64 Packages [20.2 kB]
Get:15 http://archive.ubuntu.com trusty-security/universe amd64 Packages [168 kB]
Get:16 http://archive.ubuntu.com trusty Release [58.5 kB]
Get:17 http://archive.ubuntu.com trusty/main Sources [1335 kB]
Get:18 http://archive.ubuntu.com trusty/restricted Sources [5335 B]
Get:19 http://archive.ubuntu.com trusty/universe Sources [7926 kB]
Get:20 http://archive.ubuntu.com trusty/main amd64 Packages [1743 kB]
Get:21 http://archive.ubuntu.com trusty/restricted amd64 Packages [16.0 kB]
Get:22 http://archive.ubuntu.com trusty/universe amd64 Packages [7589 kB]
Fetched 21.8 MB in 18s (1169 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following extra packages will be installed:
  binutils cpp cpp-4.8 dpkg-dev g++ g++-4.8 gcc gcc-4.8 gcc-4.8-base git-man
  icu-devtools libasan0 libasn1-8-heimdal libatomic1 libc-dev-bin libc6-dev
  libcloog-isl4 libcurl3 libcurl3-gnutls libdpkg-perl libedit2 liberror-perl
  libgcc-4.8-dev libgmp10 libgomp1 libgssapi-krb5-2 libgssapi3-heimdal
  libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal
  libhx509-5-heimdal libicu52 libidn11 libisl10 libitm1 libk5crypto3
  libkeyutils1 libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2
  libmpc3 libmpfr4 libpython-stdlib libpython2.7-minimal libpython2.7-stdlib
  libquadmath0 libroken18-heimdal librtmp0 libsasl2-2 libsasl2-modules-db
  libstdc++-4.8-dev libstdc++6 libtimedate-perl libtsan0 libwind0-heimdal
  linux-libc-dev make openssl patch python python-minimal python2.7
  python2.7-minimal xz-utils
Suggested packages:
  binutils-doc cpp-doc gcc-4.8-locales debian-keyring g++-multilib
  g++-4.8-multilib gcc-4.8-doc libstdc++6-4.8-dbg gcc-multilib manpages-dev
  autoconf automake1.9 libtool flex bison gdb gcc-doc gcc-4.8-multilib
  libgcc1-dbg libgomp1-dbg libitm1-dbg libatomic1-dbg libasan0-dbg
  libtsan0-dbg libquadmath0-dbg gettext-base git-daemon-run
  git-daemon-sysvinit git-doc git-el git-email git-gui gitk gitweb git-arch
  git-bzr git-cvs git-mediawiki git-svn glibc-doc krb5-doc krb5-user icu-doc
  libstdc++-4.8-doc lsb make-doc ssh-askpass libpam-ssh keychain monkeysphere
  ed diffutils-doc python-doc python-tk python2.7-doc binfmt-support
Recommended packages:
  fakeroot libalgorithm-merge-perl rsync ssh-client libfile-fcntllock-perl
  krb5-locales libsasl2-modules xauth
The following NEW packages will be installed:
  apt-transport-https binutils build-essential ca-certificates cpp cpp-4.8
  curl dpkg-dev g++ g++-4.8 gcc gcc-4.8 git git-man icu-devtools libasan0
  libasn1-8-heimdal libatomic1 libc-dev-bin libc6-dev libcloog-isl4 libcurl3
  libcurl3-gnutls libdpkg-perl libedit2 liberror-perl libgcc-4.8-dev libgmp10
  libgomp1 libgssapi-krb5-2 libgssapi3-heimdal libhcrypto4-heimdal
  libheimbase1-heimdal libheimntlm0-heimdal libhx509-5-heimdal libicu-dev
  libicu52 libidn11 libisl10 libitm1 libk5crypto3 libkeyutils1
  libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2 libmpc3 libmpfr4
  libpython-stdlib libpython2.7-minimal libpython2.7-stdlib libquadmath0
  libroken18-heimdal librtmp0 libsasl2-2 libsasl2-modules-db libstdc++-4.8-dev
  libtimedate-perl libtsan0 libwind0-heimdal linux-libc-dev make
  openssh-client openssl patch python python-all python-minimal python2.7
  python2.7-minimal rlwrap xz-utils
The following packages will be upgraded:
  gcc-4.8-base libstdc++6 lsb-release
3 upgraded, 72 newly installed, 0 to remove and 8 not upgraded.
Need to get 63.2 MB of archives.
After this operation, 230 MB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu/ trusty-updates/main gcc-4.8-base amd64 4.8.4-2ubuntu1~14.04.3 [16.2 kB]
Get:2 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libstdc++6 amd64 4.8.4-2ubuntu1~14.04.3 [259 kB]
Get:3 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libroken18-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [40.0 kB]
Get:4 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libasn1-8-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [161 kB]
Get:5 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libkrb5support0 amd64 1.12+dfsg-2ubuntu5.2 [30.7 kB]
Get:6 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libk5crypto3 amd64 1.12+dfsg-2ubuntu5.2 [79.4 kB]
Get:7 http://archive.ubuntu.com/ubuntu/ trusty/main libkeyutils1 amd64 1.5.6-1 [7318 B]
Get:8 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libkrb5-3 amd64 1.12+dfsg-2ubuntu5.2 [262 kB]
Get:9 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libgssapi-krb5-2 amd64 1.12+dfsg-2ubuntu5.2 [114 kB]
Get:10 http://archive.ubuntu.com/ubuntu/ trusty/main libidn11 amd64 1.28-1ubuntu2 [93.0 kB]
Get:11 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libhcrypto4-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [83.9 kB]
Get:12 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libheimbase1-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [28.9 kB]
Get:13 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libwind0-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [47.8 kB]
Get:14 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libhx509-5-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [104 kB]
Get:15 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libkrb5-26-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [196 kB]
Get:16 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libheimntlm0-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [15.2 kB]
Get:17 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libgssapi3-heimdal amd64 1.6~git20131207+dfsg-1ubuntu1.1 [89.8 kB]
Get:18 http://archive.ubuntu.com/ubuntu/ trusty/main libsasl2-modules-db amd64 2.1.25.dfsg1-17build1 [14.9 kB]
Get:19 http://archive.ubuntu.com/ubuntu/ trusty/main libsasl2-2 amd64 2.1.25.dfsg1-17build1 [56.5 kB]
Get:20 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libldap-2.4-2 amd64 2.4.31-1+nmu2ubuntu8.2 [153 kB]
Get:21 http://archive.ubuntu.com/ubuntu/ trusty/main librtmp0 amd64 2.4+20121230.gitdf6c518-1 [57.5 kB]
Get:22 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libcurl3-gnutls amd64 7.35.0-1ubuntu2.6 [165 kB]
Get:23 http://archive.ubuntu.com/ubuntu/ trusty/main libedit2 amd64 3.1-20130712-2 [86.7 kB]
Get:24 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libasan0 amd64 4.8.4-2ubuntu1~14.04.3 [63.1 kB]
Get:25 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libatomic1 amd64 4.8.4-2ubuntu1~14.04.3 [8636 B]
Get:26 http://archive.ubuntu.com/ubuntu/ trusty/main libgmp10 amd64 2:5.1.3+dfsg-1ubuntu1 [218 kB]
Get:27 http://archive.ubuntu.com/ubuntu/ trusty/main libisl10 amd64 0.12.2-1 [419 kB]
Get:28 http://archive.ubuntu.com/ubuntu/ trusty/main libcloog-isl4 amd64 0.18.2-1 [57.5 kB]
Get:29 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libcurl3 amd64 7.35.0-1ubuntu2.6 [172 kB]
Get:30 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libgomp1 amd64 4.8.4-2ubuntu1~14.04.3 [23.1 kB]
Get:31 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libicu52 amd64 52.1-3ubuntu0.4 [6752 kB]
Get:32 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libitm1 amd64 4.8.4-2ubuntu1~14.04.3 [28.5 kB]
Get:33 http://archive.ubuntu.com/ubuntu/ trusty/main libmpfr4 amd64 3.1.2-1 [203 kB]
Get:34 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libquadmath0 amd64 4.8.4-2ubuntu1~14.04.3 [126 kB]
Get:35 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libtsan0 amd64 4.8.4-2ubuntu1~14.04.3 [94.9 kB]
Get:36 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libpython2.7-minimal amd64 2.7.6-8ubuntu0.2 [308 kB]
Get:37 http://archive.ubuntu.com/ubuntu/ trusty-updates/main python2.7-minimal amd64 2.7.6-8ubuntu0.2 [1185 kB]
Get:38 http://archive.ubuntu.com/ubuntu/ trusty/main libmpc3 amd64 1.0.1-1ubuntu1 [38.4 kB]
Get:39 http://archive.ubuntu.com/ubuntu/ trusty-updates/main lsb-release all 4.1+Debian11ubuntu6.1 [11.5 kB]
Get:40 http://archive.ubuntu.com/ubuntu/ trusty-updates/main apt-transport-https amd64 1.0.1ubuntu2.14 [25.0 kB]
Get:41 http://archive.ubuntu.com/ubuntu/ trusty-updates/main openssl amd64 1.0.1f-1ubuntu2.19 [490 kB]
Get:42 http://archive.ubuntu.com/ubuntu/ trusty-updates/main ca-certificates all 20160104ubuntu0.14.04.1 [190 kB]
Get:43 http://archive.ubuntu.com/ubuntu/ trusty-updates/main openssh-client amd64 1:6.6p1-2ubuntu2.7 [564 kB]
Get:44 http://archive.ubuntu.com/ubuntu/ trusty-updates/main binutils amd64 2.24-5ubuntu14.1 [2081 kB]
Get:45 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libc-dev-bin amd64 2.19-0ubuntu6.7 [69.0 kB]
Get:46 http://archive.ubuntu.com/ubuntu/ trusty-updates/main linux-libc-dev amd64 3.13.0-86.131 [779 kB]
Get:47 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libc6-dev amd64 2.19-0ubuntu6.7 [1910 kB]
Get:48 http://archive.ubuntu.com/ubuntu/ trusty-updates/main cpp-4.8 amd64 4.8.4-2ubuntu1~14.04.3 [4595 kB]
Get:49 http://archive.ubuntu.com/ubuntu/ trusty/main cpp amd64 4:4.8.2-1ubuntu6 [27.5 kB]
Get:50 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libgcc-4.8-dev amd64 4.8.4-2ubuntu1~14.04.3 [1688 kB]
Get:51 http://archive.ubuntu.com/ubuntu/ trusty-updates/main gcc-4.8 amd64 4.8.4-2ubuntu1~14.04.3 [5047 kB]
Get:52 http://archive.ubuntu.com/ubuntu/ trusty/main gcc amd64 4:4.8.2-1ubuntu6 [5098 B]
Get:53 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libstdc++-4.8-dev amd64 4.8.4-2ubuntu1~14.04.3 [1053 kB]
Get:54 http://archive.ubuntu.com/ubuntu/ trusty-updates/main g++-4.8 amd64 4.8.4-2ubuntu1~14.04.3 [18.1 MB]
Get:55 http://archive.ubuntu.com/ubuntu/ trusty/main g++ amd64 4:4.8.2-1ubuntu6 [1490 B]
Get:56 http://archive.ubuntu.com/ubuntu/ trusty/main make amd64 3.81-8.2ubuntu3 [119 kB]
Get:57 http://archive.ubuntu.com/ubuntu/ trusty/main libtimedate-perl all 2.3000-1 [37.2 kB]
Get:58 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libdpkg-perl all 1.17.5ubuntu5.6 [179 kB]
Get:59 http://archive.ubuntu.com/ubuntu/ trusty/main xz-utils amd64 5.1.1alpha+20120614-2ubuntu2 [78.8 kB]
Get:60 http://archive.ubuntu.com/ubuntu/ trusty-updates/main patch amd64 2.7.1-4ubuntu2.3 [86.4 kB]
Get:61 http://archive.ubuntu.com/ubuntu/ trusty-updates/main dpkg-dev all 1.17.5ubuntu5.6 [726 kB]
Get:62 http://archive.ubuntu.com/ubuntu/ trusty/main build-essential amd64 11.6ubuntu6 [4838 B]
Get:63 http://archive.ubuntu.com/ubuntu/ trusty-updates/main curl amd64 7.35.0-1ubuntu2.6 [123 kB]
Get:64 http://archive.ubuntu.com/ubuntu/ trusty/main liberror-perl all 0.17-1.1 [21.1 kB]
Get:65 http://archive.ubuntu.com/ubuntu/ trusty-updates/main git-man all 1:1.9.1-1ubuntu0.3 [699 kB]
Get:66 http://archive.ubuntu.com/ubuntu/ trusty-updates/main git amd64 1:1.9.1-1ubuntu0.3 [2586 kB]
Get:67 http://archive.ubuntu.com/ubuntu/ trusty-updates/main icu-devtools amd64 52.1-3ubuntu0.4 [163 kB]
Get:68 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libicu-dev amd64 52.1-3ubuntu0.4 [7588 kB]
Get:69 http://archive.ubuntu.com/ubuntu/ trusty-updates/main libpython2.7-stdlib amd64 2.7.6-8ubuntu0.2 [1869 kB]
Get:70 http://archive.ubuntu.com/ubuntu/ trusty/main libpython-stdlib amd64 2.7.5-5ubuntu3 [7012 B]
Get:71 http://archive.ubuntu.com/ubuntu/ trusty-updates/main python2.7 amd64 2.7.6-8ubuntu0.2 [196 kB]
Get:72 http://archive.ubuntu.com/ubuntu/ trusty/main python-minimal amd64 2.7.5-5ubuntu3 [27.5 kB]
Get:73 http://archive.ubuntu.com/ubuntu/ trusty/main python amd64 2.7.5-5ubuntu3 [134 kB]
Get:74 http://archive.ubuntu.com/ubuntu/ trusty/main python-all amd64 2.7.5-5ubuntu3 [984 B]
Get:75 http://archive.ubuntu.com/ubuntu/ trusty/universe rlwrap amd64 0.37-5 [73.4 kB]
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0m[91mdpkg-preconfigure: unable to re-open stdin: 
[0mFetched 63.2 MB in 36s (1713 kB/s)
(Reading database ... 11558 files and directories currently installed.)
Preparing to unpack .../gcc-4.8-base_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking gcc-4.8-base:amd64 (4.8.4-2ubuntu1~14.04.3) over (4.8.4-2ubuntu1~14.04.1) ...
Setting up gcc-4.8-base:amd64 (4.8.4-2ubuntu1~14.04.3) ...
(Reading database ... 11558 files and directories currently installed.)
Preparing to unpack .../libstdc++6_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libstdc++6:amd64 (4.8.4-2ubuntu1~14.04.3) over (4.8.4-2ubuntu1~14.04.1) ...
Setting up libstdc++6:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Processing triggers for libc-bin (2.19-0ubuntu6.7) ...
Selecting previously unselected package libroken18-heimdal:amd64.
(Reading database ... 11558 files and directories currently installed.)
Preparing to unpack .../libroken18-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libroken18-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libasn1-8-heimdal:amd64.
Preparing to unpack .../libasn1-8-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libasn1-8-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libkrb5support0:amd64.
Preparing to unpack .../libkrb5support0_1.12+dfsg-2ubuntu5.2_amd64.deb ...
Unpacking libkrb5support0:amd64 (1.12+dfsg-2ubuntu5.2) ...
Selecting previously unselected package libk5crypto3:amd64.
Preparing to unpack .../libk5crypto3_1.12+dfsg-2ubuntu5.2_amd64.deb ...
Unpacking libk5crypto3:amd64 (1.12+dfsg-2ubuntu5.2) ...
Selecting previously unselected package libkeyutils1:amd64.
Preparing to unpack .../libkeyutils1_1.5.6-1_amd64.deb ...
Unpacking libkeyutils1:amd64 (1.5.6-1) ...
Selecting previously unselected package libkrb5-3:amd64.
Preparing to unpack .../libkrb5-3_1.12+dfsg-2ubuntu5.2_amd64.deb ...
Unpacking libkrb5-3:amd64 (1.12+dfsg-2ubuntu5.2) ...
Selecting previously unselected package libgssapi-krb5-2:amd64.
Preparing to unpack .../libgssapi-krb5-2_1.12+dfsg-2ubuntu5.2_amd64.deb ...
Unpacking libgssapi-krb5-2:amd64 (1.12+dfsg-2ubuntu5.2) ...
Selecting previously unselected package libidn11:amd64.
Preparing to unpack .../libidn11_1.28-1ubuntu2_amd64.deb ...
Unpacking libidn11:amd64 (1.28-1ubuntu2) ...
Selecting previously unselected package libhcrypto4-heimdal:amd64.
Preparing to unpack .../libhcrypto4-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libhcrypto4-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libheimbase1-heimdal:amd64.
Preparing to unpack .../libheimbase1-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libheimbase1-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libwind0-heimdal:amd64.
Preparing to unpack .../libwind0-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libwind0-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libhx509-5-heimdal:amd64.
Preparing to unpack .../libhx509-5-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libhx509-5-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libkrb5-26-heimdal:amd64.
Preparing to unpack .../libkrb5-26-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libkrb5-26-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libheimntlm0-heimdal:amd64.
Preparing to unpack .../libheimntlm0-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libheimntlm0-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libgssapi3-heimdal:amd64.
Preparing to unpack .../libgssapi3-heimdal_1.6~git20131207+dfsg-1ubuntu1.1_amd64.deb ...
Unpacking libgssapi3-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Selecting previously unselected package libsasl2-modules-db:amd64.
Preparing to unpack .../libsasl2-modules-db_2.1.25.dfsg1-17build1_amd64.deb ...
Unpacking libsasl2-modules-db:amd64 (2.1.25.dfsg1-17build1) ...
Selecting previously unselected package libsasl2-2:amd64.
Preparing to unpack .../libsasl2-2_2.1.25.dfsg1-17build1_amd64.deb ...
Unpacking libsasl2-2:amd64 (2.1.25.dfsg1-17build1) ...
Selecting previously unselected package libldap-2.4-2:amd64.
Preparing to unpack .../libldap-2.4-2_2.4.31-1+nmu2ubuntu8.2_amd64.deb ...
Unpacking libldap-2.4-2:amd64 (2.4.31-1+nmu2ubuntu8.2) ...
Selecting previously unselected package librtmp0:amd64.
Preparing to unpack .../librtmp0_2.4+20121230.gitdf6c518-1_amd64.deb ...
Unpacking librtmp0:amd64 (2.4+20121230.gitdf6c518-1) ...
Selecting previously unselected package libcurl3-gnutls:amd64.
Preparing to unpack .../libcurl3-gnutls_7.35.0-1ubuntu2.6_amd64.deb ...
Unpacking libcurl3-gnutls:amd64 (7.35.0-1ubuntu2.6) ...
Selecting previously unselected package libedit2:amd64.
Preparing to unpack .../libedit2_3.1-20130712-2_amd64.deb ...
Unpacking libedit2:amd64 (3.1-20130712-2) ...
Selecting previously unselected package libasan0:amd64.
Preparing to unpack .../libasan0_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libasan0:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package libatomic1:amd64.
Preparing to unpack .../libatomic1_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libatomic1:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package libgmp10:amd64.
Preparing to unpack .../libgmp10_2%3a5.1.3+dfsg-1ubuntu1_amd64.deb ...
Unpacking libgmp10:amd64 (2:5.1.3+dfsg-1ubuntu1) ...
Selecting previously unselected package libisl10:amd64.
Preparing to unpack .../libisl10_0.12.2-1_amd64.deb ...
Unpacking libisl10:amd64 (0.12.2-1) ...
Selecting previously unselected package libcloog-isl4:amd64.
Preparing to unpack .../libcloog-isl4_0.18.2-1_amd64.deb ...
Unpacking libcloog-isl4:amd64 (0.18.2-1) ...
Selecting previously unselected package libcurl3:amd64.
Preparing to unpack .../libcurl3_7.35.0-1ubuntu2.6_amd64.deb ...
Unpacking libcurl3:amd64 (7.35.0-1ubuntu2.6) ...
Selecting previously unselected package libgomp1:amd64.
Preparing to unpack .../libgomp1_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libgomp1:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package libicu52:amd64.
Preparing to unpack .../libicu52_52.1-3ubuntu0.4_amd64.deb ...
Unpacking libicu52:amd64 (52.1-3ubuntu0.4) ...
Selecting previously unselected package libitm1:amd64.
Preparing to unpack .../libitm1_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libitm1:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package libmpfr4:amd64.
Preparing to unpack .../libmpfr4_3.1.2-1_amd64.deb ...
Unpacking libmpfr4:amd64 (3.1.2-1) ...
Selecting previously unselected package libquadmath0:amd64.
Preparing to unpack .../libquadmath0_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libquadmath0:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package libtsan0:amd64.
Preparing to unpack .../libtsan0_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libtsan0:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package libpython2.7-minimal:amd64.
Preparing to unpack .../libpython2.7-minimal_2.7.6-8ubuntu0.2_amd64.deb ...
Unpacking libpython2.7-minimal:amd64 (2.7.6-8ubuntu0.2) ...
Selecting previously unselected package python2.7-minimal.
Preparing to unpack .../python2.7-minimal_2.7.6-8ubuntu0.2_amd64.deb ...
Unpacking python2.7-minimal (2.7.6-8ubuntu0.2) ...
Selecting previously unselected package libmpc3:amd64.
Preparing to unpack .../libmpc3_1.0.1-1ubuntu1_amd64.deb ...
Unpacking libmpc3:amd64 (1.0.1-1ubuntu1) ...
Preparing to unpack .../lsb-release_4.1+Debian11ubuntu6.1_all.deb ...
Unpacking lsb-release (4.1+Debian11ubuntu6.1) over (4.1+Debian11ubuntu6) ...
Selecting previously unselected package apt-transport-https.
Preparing to unpack .../apt-transport-https_1.0.1ubuntu2.14_amd64.deb ...
Unpacking apt-transport-https (1.0.1ubuntu2.14) ...
Selecting previously unselected package openssl.
Preparing to unpack .../openssl_1.0.1f-1ubuntu2.19_amd64.deb ...
Unpacking openssl (1.0.1f-1ubuntu2.19) ...
Selecting previously unselected package ca-certificates.
Preparing to unpack .../ca-certificates_20160104ubuntu0.14.04.1_all.deb ...
Unpacking ca-certificates (20160104ubuntu0.14.04.1) ...
Selecting previously unselected package openssh-client.
Preparing to unpack .../openssh-client_1%3a6.6p1-2ubuntu2.7_amd64.deb ...
Unpacking openssh-client (1:6.6p1-2ubuntu2.7) ...
Selecting previously unselected package binutils.
Preparing to unpack .../binutils_2.24-5ubuntu14.1_amd64.deb ...
Unpacking binutils (2.24-5ubuntu14.1) ...
Selecting previously unselected package libc-dev-bin.
Preparing to unpack .../libc-dev-bin_2.19-0ubuntu6.7_amd64.deb ...
Unpacking libc-dev-bin (2.19-0ubuntu6.7) ...
Selecting previously unselected package linux-libc-dev:amd64.
Preparing to unpack .../linux-libc-dev_3.13.0-86.131_amd64.deb ...
Unpacking linux-libc-dev:amd64 (3.13.0-86.131) ...
Selecting previously unselected package libc6-dev:amd64.
Preparing to unpack .../libc6-dev_2.19-0ubuntu6.7_amd64.deb ...
Unpacking libc6-dev:amd64 (2.19-0ubuntu6.7) ...
Selecting previously unselected package cpp-4.8.
Preparing to unpack .../cpp-4.8_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking cpp-4.8 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package cpp.
Preparing to unpack .../cpp_4%3a4.8.2-1ubuntu6_amd64.deb ...
Unpacking cpp (4:4.8.2-1ubuntu6) ...
Selecting previously unselected package libgcc-4.8-dev:amd64.
Preparing to unpack .../libgcc-4.8-dev_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libgcc-4.8-dev:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package gcc-4.8.
Preparing to unpack .../gcc-4.8_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking gcc-4.8 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package gcc.
Preparing to unpack .../gcc_4%3a4.8.2-1ubuntu6_amd64.deb ...
Unpacking gcc (4:4.8.2-1ubuntu6) ...
Selecting previously unselected package libstdc++-4.8-dev:amd64.
Preparing to unpack .../libstdc++-4.8-dev_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking libstdc++-4.8-dev:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package g++-4.8.
Preparing to unpack .../g++-4.8_4.8.4-2ubuntu1~14.04.3_amd64.deb ...
Unpacking g++-4.8 (4.8.4-2ubuntu1~14.04.3) ...
Selecting previously unselected package g++.
Preparing to unpack .../g++_4%3a4.8.2-1ubuntu6_amd64.deb ...
Unpacking g++ (4:4.8.2-1ubuntu6) ...
Selecting previously unselected package make.
Preparing to unpack .../make_3.81-8.2ubuntu3_amd64.deb ...
Unpacking make (3.81-8.2ubuntu3) ...
Selecting previously unselected package libtimedate-perl.
Preparing to unpack .../libtimedate-perl_2.3000-1_all.deb ...
Unpacking libtimedate-perl (2.3000-1) ...
Selecting previously unselected package libdpkg-perl.
Preparing to unpack .../libdpkg-perl_1.17.5ubuntu5.6_all.deb ...
Unpacking libdpkg-perl (1.17.5ubuntu5.6) ...
Selecting previously unselected package xz-utils.
Preparing to unpack .../xz-utils_5.1.1alpha+20120614-2ubuntu2_amd64.deb ...
Unpacking xz-utils (5.1.1alpha+20120614-2ubuntu2) ...
Selecting previously unselected package patch.
Preparing to unpack .../patch_2.7.1-4ubuntu2.3_amd64.deb ...
Unpacking patch (2.7.1-4ubuntu2.3) ...
Selecting previously unselected package dpkg-dev.
Preparing to unpack .../dpkg-dev_1.17.5ubuntu5.6_all.deb ...
Unpacking dpkg-dev (1.17.5ubuntu5.6) ...
Selecting previously unselected package build-essential.
Preparing to unpack .../build-essential_11.6ubuntu6_amd64.deb ...
Unpacking build-essential (11.6ubuntu6) ...
Selecting previously unselected package curl.
Preparing to unpack .../curl_7.35.0-1ubuntu2.6_amd64.deb ...
Unpacking curl (7.35.0-1ubuntu2.6) ...
Selecting previously unselected package liberror-perl.
Preparing to unpack .../liberror-perl_0.17-1.1_all.deb ...
Unpacking liberror-perl (0.17-1.1) ...
Selecting previously unselected package git-man.
Preparing to unpack .../git-man_1%3a1.9.1-1ubuntu0.3_all.deb ...
Unpacking git-man (1:1.9.1-1ubuntu0.3) ...
Selecting previously unselected package git.
Preparing to unpack .../git_1%3a1.9.1-1ubuntu0.3_amd64.deb ...
Unpacking git (1:1.9.1-1ubuntu0.3) ...
Selecting previously unselected package icu-devtools.
Preparing to unpack .../icu-devtools_52.1-3ubuntu0.4_amd64.deb ...
Unpacking icu-devtools (52.1-3ubuntu0.4) ...
Selecting previously unselected package libicu-dev:amd64.
Preparing to unpack .../libicu-dev_52.1-3ubuntu0.4_amd64.deb ...
Unpacking libicu-dev:amd64 (52.1-3ubuntu0.4) ...
Selecting previously unselected package libpython2.7-stdlib:amd64.
Preparing to unpack .../libpython2.7-stdlib_2.7.6-8ubuntu0.2_amd64.deb ...
Unpacking libpython2.7-stdlib:amd64 (2.7.6-8ubuntu0.2) ...
Selecting previously unselected package libpython-stdlib:amd64.
Preparing to unpack .../libpython-stdlib_2.7.5-5ubuntu3_amd64.deb ...
Unpacking libpython-stdlib:amd64 (2.7.5-5ubuntu3) ...
Selecting previously unselected package python2.7.
Preparing to unpack .../python2.7_2.7.6-8ubuntu0.2_amd64.deb ...
Unpacking python2.7 (2.7.6-8ubuntu0.2) ...
Selecting previously unselected package python-minimal.
Preparing to unpack .../python-minimal_2.7.5-5ubuntu3_amd64.deb ...
Unpacking python-minimal (2.7.5-5ubuntu3) ...
Selecting previously unselected package python.
Preparing to unpack .../python_2.7.5-5ubuntu3_amd64.deb ...
Unpacking python (2.7.5-5ubuntu3) ...
Selecting previously unselected package python-all.
Preparing to unpack .../python-all_2.7.5-5ubuntu3_amd64.deb ...
Unpacking python-all (2.7.5-5ubuntu3) ...
Selecting previously unselected package rlwrap.
Preparing to unpack .../rlwrap_0.37-5_amd64.deb ...
Unpacking rlwrap (0.37-5) ...
Processing triggers for mime-support (3.54ubuntu1.1) ...
Setting up libroken18-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libasn1-8-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libkrb5support0:amd64 (1.12+dfsg-2ubuntu5.2) ...
Setting up libk5crypto3:amd64 (1.12+dfsg-2ubuntu5.2) ...
Setting up libkeyutils1:amd64 (1.5.6-1) ...
Setting up libkrb5-3:amd64 (1.12+dfsg-2ubuntu5.2) ...
Setting up libgssapi-krb5-2:amd64 (1.12+dfsg-2ubuntu5.2) ...
Setting up libidn11:amd64 (1.28-1ubuntu2) ...
Setting up libhcrypto4-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libheimbase1-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libwind0-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libhx509-5-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libkrb5-26-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libheimntlm0-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libgssapi3-heimdal:amd64 (1.6~git20131207+dfsg-1ubuntu1.1) ...
Setting up libsasl2-modules-db:amd64 (2.1.25.dfsg1-17build1) ...
Setting up libsasl2-2:amd64 (2.1.25.dfsg1-17build1) ...
Setting up libldap-2.4-2:amd64 (2.4.31-1+nmu2ubuntu8.2) ...
Setting up librtmp0:amd64 (2.4+20121230.gitdf6c518-1) ...
Setting up libcurl3-gnutls:amd64 (7.35.0-1ubuntu2.6) ...
Setting up libedit2:amd64 (3.1-20130712-2) ...
Setting up libasan0:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up libatomic1:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up libgmp10:amd64 (2:5.1.3+dfsg-1ubuntu1) ...
Setting up libisl10:amd64 (0.12.2-1) ...
Setting up libcloog-isl4:amd64 (0.18.2-1) ...
Setting up libcurl3:amd64 (7.35.0-1ubuntu2.6) ...
Setting up libgomp1:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up libicu52:amd64 (52.1-3ubuntu0.4) ...
Setting up libitm1:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up libmpfr4:amd64 (3.1.2-1) ...
Setting up libquadmath0:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up libtsan0:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up libpython2.7-minimal:amd64 (2.7.6-8ubuntu0.2) ...
Setting up python2.7-minimal (2.7.6-8ubuntu0.2) ...
Linking and byte-compiling packages for runtime python2.7...
Setting up libmpc3:amd64 (1.0.1-1ubuntu1) ...
Setting up lsb-release (4.1+Debian11ubuntu6.1) ...
Setting up apt-transport-https (1.0.1ubuntu2.14) ...
Setting up openssl (1.0.1f-1ubuntu2.19) ...
Setting up ca-certificates (20160104ubuntu0.14.04.1) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0mSetting up openssh-client (1:6.6p1-2ubuntu2.7) ...
Setting up binutils (2.24-5ubuntu14.1) ...
Setting up libc-dev-bin (2.19-0ubuntu6.7) ...
Setting up linux-libc-dev:amd64 (3.13.0-86.131) ...
Setting up libc6-dev:amd64 (2.19-0ubuntu6.7) ...
Setting up cpp-4.8 (4.8.4-2ubuntu1~14.04.3) ...
Setting up cpp (4:4.8.2-1ubuntu6) ...
Setting up libgcc-4.8-dev:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up gcc-4.8 (4.8.4-2ubuntu1~14.04.3) ...
Setting up gcc (4:4.8.2-1ubuntu6) ...
Setting up libstdc++-4.8-dev:amd64 (4.8.4-2ubuntu1~14.04.3) ...
Setting up g++-4.8 (4.8.4-2ubuntu1~14.04.3) ...
Setting up g++ (4:4.8.2-1ubuntu6) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode
Setting up make (3.81-8.2ubuntu3) ...
Setting up libtimedate-perl (2.3000-1) ...
Setting up libdpkg-perl (1.17.5ubuntu5.6) ...
Setting up xz-utils (5.1.1alpha+20120614-2ubuntu2) ...
update-alternatives: using /usr/bin/xz to provide /usr/bin/lzma (lzma) in auto mode
Setting up patch (2.7.1-4ubuntu2.3) ...
Setting up dpkg-dev (1.17.5ubuntu5.6) ...
Setting up build-essential (11.6ubuntu6) ...
Setting up curl (7.35.0-1ubuntu2.6) ...
Setting up liberror-perl (0.17-1.1) ...
Setting up git-man (1:1.9.1-1ubuntu0.3) ...
Setting up git (1:1.9.1-1ubuntu0.3) ...
Setting up icu-devtools (52.1-3ubuntu0.4) ...
Setting up libicu-dev:amd64 (52.1-3ubuntu0.4) ...
Setting up libpython2.7-stdlib:amd64 (2.7.6-8ubuntu0.2) ...
Setting up libpython-stdlib:amd64 (2.7.5-5ubuntu3) ...
Setting up python2.7 (2.7.6-8ubuntu0.2) ...
Setting up python-minimal (2.7.5-5ubuntu3) ...
Setting up python (2.7.5-5ubuntu3) ...
Setting up python-all (2.7.5-5ubuntu3) ...
Setting up rlwrap (0.37-5) ...
update-alternatives: using /usr/bin/rlwrap to provide /usr/bin/readline-editor (readline-editor) in auto mode
Processing triggers for libc-bin (2.19-0ubuntu6.7) ...
Processing triggers for ca-certificates (20160104ubuntu0.14.04.1) ...
Updating certificates in /etc/ssl/certs... 173 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d....done.
 ---> c45f748f0b5d
Error removing intermediate container dab3bdee4c2c: nosuchcontainer: No such container: dab3bdee4c2c325cd64bfa27a258ef2fcb787343015dc40dbdf8e175f3417c6c
Successfully built c45f748f0b5d

```

Array of tests: `[]`

# Tested image `nodesource/sid-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM debian:sid
sid: Pulling from library/debian
bbc93ec28c0a: Pulling fs layer
a3ed95caeb02: Pulling fs layer
bbc93ec28c0a: Waiting
a3ed95caeb02: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Download complete
bbc93ec28c0a: Verifying Checksum
bbc93ec28c0a: Download complete
bbc93ec28c0a: Pull complete
bbc93ec28c0a: Pull complete
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:7c411af7fe93225afc31469235b681f7300ea00818949b3268e1fca43deb428d
Status: Downloaded newer image for debian:sid
 ---> b1c1c61ac16a
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 53817cb8c6b5
 ---> 7e95842c6cbe
Removing intermediate container 53817cb8c6b5
Step 3 : RUN apt-get update  && apt-get install -y --force-yes --no-install-recommends      apt-transport-https       ssh-client       build-essential       curl       ca-certificates       git       libicu-dev       lsb-release       python-all       rlwrap  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 0aa860061c0b
Get:1 http://mirrors.accretive-networks.net/debian sid InRelease [205 kB]
Get:2 http://mirrors.accretive-networks.net/debian sid/main amd64 Packages [9525 kB]
Fetched 9730 kB in 2s (4540 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
The following additional packages will be installed:
  binutils bzip2 cpp cpp-5 dh-python distro-info-data dpkg-dev g++ g++-5 gcc
  gcc-5 git-man icu-devtools libasan2 libatomic1 libbsd0 libc-dev-bin
  libc6-dev libcc1-0 libcilkrts5 libcurl3-gnutls libdpkg-perl libedit2
  liberror-perl libexpat1 libffi6 libgcc-5-dev libgdbm3 libgmp10 libgnutls30
  libgomp1 libgssapi-krb5-2 libhogweed4 libicu55 libidn11 libisl15 libitm1
  libk5crypto3 libkeyutils1 libkrb5-3 libkrb5support0 libldap-2.4-2 liblsan0
  libmpc3 libmpdec2 libmpfr4 libmpx0 libnettle6 libnghttp2-14 libp11-kit0
  libperl5.22 libpython-stdlib libpython2.7-minimal libpython2.7-stdlib
  libpython3-stdlib libpython3.5-minimal libpython3.5-stdlib libquadmath0
  librtmp1 libsasl2-2 libsasl2-modules-db libsqlite3-0 libssh2-1 libssl1.0.2
  libstdc++-5-dev libtasn1-6 libtsan0 libubsan0 linux-libc-dev make
  mime-support openssl patch perl perl-modules-5.22 python python-minimal
  python2.7 python2.7-minimal python3 python3-minimal python3.5
  python3.5-minimal xz-utils
Suggested packages:
  binutils-doc bzip2-doc cpp-doc gcc-5-locales debian-keyring g++-multilib
  g++-5-multilib gcc-5-doc libstdc++6-5-dbg gcc-multilib manpages-dev autoconf
  automake libtool flex bison gdb gcc-doc gcc-5-multilib libgcc1-dbg
  libgomp1-dbg libitm1-dbg libatomic1-dbg libasan2-dbg liblsan0-dbg
  libtsan0-dbg libubsan0-dbg libcilkrts5-dbg libmpx0-dbg libquadmath0-dbg
  gettext-base git-daemon-run | git-daemon-sysvinit git-doc git-el git-email
  git-gui gitk gitweb git-arch git-cvs git-mediawiki git-svn glibc-doc
  gnutls-bin krb5-doc krb5-user icu-doc libstdc++-5-doc lsb make-doc
  ssh-askpass libpam-ssh keychain monkeysphere ed diffutils-doc perl-doc
  libterm-readline-gnu-perl | libterm-readline-perl-perl python-doc python-tk
  python2.7-doc binfmt-support python3-doc python3-tk python3-venv
  python3.5-venv python3.5-doc
Recommended packages:
  fakeroot libalgorithm-merge-perl less rsync manpages manpages-dev
  libfile-fcntllock-perl krb5-locales libsasl2-modules file xauth rename
The following NEW packages will be installed:
  apt-transport-https binutils build-essential bzip2 ca-certificates cpp cpp-5
  curl dh-python distro-info-data dpkg-dev g++ g++-5 gcc gcc-5 git git-man
  icu-devtools libasan2 libatomic1 libbsd0 libc-dev-bin libc6-dev libcc1-0
  libcilkrts5 libcurl3-gnutls libdpkg-perl libedit2 liberror-perl libexpat1
  libffi6 libgcc-5-dev libgdbm3 libgmp10 libgnutls30 libgomp1 libgssapi-krb5-2
  libhogweed4 libicu-dev libicu55 libidn11 libisl15 libitm1 libk5crypto3
  libkeyutils1 libkrb5-3 libkrb5support0 libldap-2.4-2 liblsan0 libmpc3
  libmpdec2 libmpfr4 libmpx0 libnettle6 libnghttp2-14 libp11-kit0 libperl5.22
  libpython-stdlib libpython2.7-minimal libpython2.7-stdlib libpython3-stdlib
  libpython3.5-minimal libpython3.5-stdlib libquadmath0 librtmp1 libsasl2-2
  libsasl2-modules-db libsqlite3-0 libssh2-1 libssl1.0.2 libstdc++-5-dev
  libtasn1-6 libtsan0 libubsan0 linux-libc-dev lsb-release make mime-support
  openssh-client openssl patch perl perl-modules-5.22 python python-all
  python-minimal python2.7 python2.7-minimal python3 python3-minimal python3.5
  python3.5-minimal rlwrap xz-utils
0 upgraded, 94 newly installed, 0 to remove and 0 not upgraded.
Need to get 131 MB of archives.
After this operation, 588 MB of additional disk space will be used.
Get:1 http://mirrors.kernel.org/debian sid/main amd64 libgdbm3 amd64 1.8.3-13.1 [30.0 kB]
Get:3 http://mirrors.accretive-networks.net/debian sid/main amd64 libperl5.22 amd64 5.22.2-1 [3438 kB]
Get:2 http://mirrors.kernel.org/debian sid/main amd64 perl-modules-5.22 all 5.22.2-1 [2696 kB]
Get:4 http://mirrors.accretive-networks.net/debian sid/main amd64 perl amd64 5.22.2-1 [237 kB]
Get:5 http://mirrors.accretive-networks.net/debian sid/main amd64 libpython2.7-minimal amd64 2.7.11-9 [383 kB]
Get:6 http://mirrors.accretive-networks.net/debian sid/main amd64 python2.7-minimal amd64 2.7.11-9 [1341 kB]
Get:8 http://mirrors.accretive-networks.net/debian sid/main amd64 mime-support all 3.60 [36.7 kB]
Get:10 http://mirrors.accretive-networks.net/debian sid/main amd64 libffi6 amd64 3.2.1-4 [20.4 kB]
Get:11 http://mirrors.accretive-networks.net/debian sid/main amd64 libsqlite3-0 amd64 3.13.0-1 [558 kB]
Get:12 http://mirrors.accretive-networks.net/debian sid/main amd64 libssl1.0.2 amd64 1.0.2h-1 [1287 kB]
Get:7 http://mirrors.kernel.org/debian sid/main amd64 python-minimal amd64 2.7.11-1 [40.1 kB]
Get:13 http://mirrors.accretive-networks.net/debian sid/main amd64 libpython2.7-stdlib amd64 2.7.11-9 [1854 kB]
Get:9 http://mirrors.kernel.org/debian sid/main amd64 libexpat1 amd64 2.1.1-2 [80.7 kB]
Get:14 http://mirrors.kernel.org/debian sid/main amd64 python2.7 amd64 2.7.11-9 [271 kB]
Get:15 http://mirrors.accretive-networks.net/debian sid/main amd64 libpython-stdlib amd64 2.7.11-1 [19.5 kB]
Get:16 http://mirrors.accretive-networks.net/debian sid/main amd64 python amd64 2.7.11-1 [151 kB]
Get:18 http://mirrors.accretive-networks.net/debian sid/main amd64 python3.5-minimal amd64 3.5.1-12 [1632 kB]
Get:19 http://mirrors.accretive-networks.net/debian sid/main amd64 python3-minimal amd64 3.5.1-3 [35.1 kB]
Get:22 http://mirrors.accretive-networks.net/debian sid/main amd64 python3.5 amd64 3.5.1-12 [202 kB]
Get:27 http://mirrors.accretive-networks.net/debian sid/main amd64 libmpfr4 amd64 3.1.4-1 [554 kB]
Get:17 http://mirrors.kernel.org/debian sid/main amd64 libpython3.5-minimal amd64 3.5.1-12 [561 kB]
Get:20 http://mirrors.kernel.org/debian sid/main amd64 libmpdec2 amd64 2.4.2-1 [85.2 kB]
Get:21 http://mirrors.kernel.org/debian sid/main amd64 libpython3.5-stdlib amd64 3.5.1-12 [2117 kB]
Get:23 http://mirrors.kernel.org/debian sid/main amd64 libpython3-stdlib amd64 3.5.1-3 [18.6 kB]
Get:24 http://mirrors.kernel.org/debian sid/main amd64 dh-python all 2.20151103 [76.9 kB]
Get:25 http://mirrors.kernel.org/debian sid/main amd64 python3 amd64 3.5.1-3 [21.6 kB]
Get:26 http://mirrors.kernel.org/debian sid/main amd64 libgmp10 amd64 2:6.1.0+dfsg-2 [254 kB]
Get:30 http://mirrors.kernel.org/debian sid/main amd64 libbsd0 amd64 0.8.3-1 [83.0 kB]
Get:32 http://mirrors.kernel.org/debian sid/main amd64 libnettle6 amd64 3.2-1 [191 kB]
Get:33 http://mirrors.kernel.org/debian sid/main amd64 libhogweed4 amd64 3.2-1 [136 kB]
Get:34 http://mirrors.kernel.org/debian sid/main amd64 libidn11 amd64 1.32-3 [113 kB]
Get:35 http://mirrors.kernel.org/debian sid/main amd64 libp11-kit0 amd64 0.23.2-3 [111 kB]
Get:36 http://mirrors.kernel.org/debian sid/main amd64 libtasn1-6 amd64 4.8-1 [49.5 kB]
Get:37 http://mirrors.kernel.org/debian sid/main amd64 libgnutls30 amd64 3.4.12-1 [808 kB]
Get:28 http://mirrors.accretive-networks.net/debian sid/main amd64 libmpc3 amd64 1.0.3-1 [40.2 kB]
Get:29 http://mirrors.accretive-networks.net/debian sid/main amd64 bzip2 amd64 1.0.6-8 [46.7 kB]
Get:31 http://mirrors.accretive-networks.net/debian sid/main amd64 libedit2 amd64 3.1-20150325-1+b1 [85.2 kB]
Get:43 http://mirrors.kernel.org/debian sid/main amd64 libsasl2-modules-db amd64 2.1.26.dfsg1-15 [66.9 kB]
Get:44 http://mirrors.kernel.org/debian sid/main amd64 libsasl2-2 amd64 2.1.26.dfsg1-15 [103 kB]
Get:38 http://mirrors.accretive-networks.net/debian sid/main amd64 libkeyutils1 amd64 1.5.9-9 [12.4 kB]
Get:39 http://mirrors.accretive-networks.net/debian sid/main amd64 libkrb5support0 amd64 1.13.2+dfsg-5 [60.2 kB]
Get:40 http://mirrors.accretive-networks.net/debian sid/main amd64 libk5crypto3 amd64 1.13.2+dfsg-5 [114 kB]
Get:41 http://mirrors.accretive-networks.net/debian sid/main amd64 libkrb5-3 amd64 1.13.2+dfsg-5 [309 kB]
Get:42 http://mirrors.accretive-networks.net/debian sid/main amd64 libgssapi-krb5-2 amd64 1.13.2+dfsg-5 [152 kB]
Get:45 http://mirrors.kernel.org/debian sid/main amd64 libldap-2.4-2 amd64 2.4.42+dfsg-2+b2 [222 kB]
Get:46 http://mirrors.accretive-networks.net/debian sid/main amd64 openssh-client amd64 1:7.2p2-5 [739 kB]
Get:50 http://mirrors.kernel.org/debian sid/main amd64 libssh2-1 amd64 1.5.0-2.1 [133 kB]
Get:51 http://mirrors.kernel.org/debian sid/main amd64 libcurl3-gnutls amd64 7.47.0-1 [273 kB]
Get:52 http://mirrors.kernel.org/debian sid/main amd64 apt-transport-https amd64 1.2.12 [152 kB]
Get:53 http://mirrors.kernel.org/debian sid/main amd64 binutils amd64 2.26-9 [3667 kB]
Get:47 http://mirrors.accretive-networks.net/debian sid/main amd64 xz-utils amd64 5.1.1alpha+20120614-2.1 [219 kB]
Get:48 http://mirrors.accretive-networks.net/debian sid/main amd64 libnghttp2-14 amd64 1.10.0-1 [82.7 kB]
Get:49 http://mirrors.accretive-networks.net/debian sid/main amd64 librtmp1 amd64 2.4+20151223.gitfa8646d.1-1 [60.0 kB]
Get:58 http://mirrors.accretive-networks.net/debian sid/main amd64 cpp-5 amd64 5.3.1-20 [29.7 MB]
Get:54 http://mirrors.kernel.org/debian sid/main amd64 libc-dev-bin amd64 2.22-9 [250 kB]
Get:55 http://mirrors.kernel.org/debian sid/main amd64 linux-libc-dev amd64 4.5.4-1 [1124 kB]
Get:56 http://mirrors.kernel.org/debian sid/main amd64 libc6-dev amd64 2.22-9 [2157 kB]
Get:57 http://mirrors.kernel.org/debian sid/main amd64 libisl15 amd64 0.16.1-1 [542 kB]
Get:59 http://mirrors.kernel.org/debian sid/main amd64 cpp amd64 4:5.3.1-2 [18.2 kB]
Get:61 http://mirrors.kernel.org/debian sid/main amd64 libgomp1 amd64 6.1.1-4 [73.3 kB]
Get:62 http://mirrors.kernel.org/debian sid/main amd64 libitm1 amd64 6.1.1-4 [27.3 kB]
Get:64 http://mirrors.kernel.org/debian sid/main amd64 libasan2 amd64 5.3.1-20 [261 kB]
Get:65 http://mirrors.kernel.org/debian sid/main amd64 liblsan0 amd64 6.1.1-4 [114 kB]
Get:68 http://mirrors.kernel.org/debian sid/main amd64 libcilkrts5 amd64 6.1.1-4 [40.4 kB]
Get:69 http://mirrors.kernel.org/debian sid/main amd64 libmpx0 amd64 5.3.1-20 [9428 B]
Get:71 http://mirrors.kernel.org/debian sid/main amd64 libgcc-5-dev amd64 5.3.1-20 [2214 kB]
Get:73 http://mirrors.kernel.org/debian sid/main amd64 gcc amd64 4:5.3.1-2 [5208 B]
Get:74 http://mirrors.kernel.org/debian sid/main amd64 libstdc++-5-dev amd64 5.3.1-20 [1412 kB]
Get:75 http://mirrors.kernel.org/debian sid/main amd64 g++-5 amd64 5.3.1-20 [32.0 MB]
Get:60 http://mirrors.accretive-networks.net/debian sid/main amd64 libcc1-0 amd64 6.1.1-4 [30.7 kB]
Get:63 http://mirrors.accretive-networks.net/debian sid/main amd64 libatomic1 amd64 6.1.1-4 [8906 B]
Get:66 http://mirrors.accretive-networks.net/debian sid/main amd64 libtsan0 amd64 6.1.1-4 [255 kB]
Get:67 http://mirrors.accretive-networks.net/debian sid/main amd64 libubsan0 amd64 6.1.1-4 [105 kB]
Get:70 http://mirrors.accretive-networks.net/debian sid/main amd64 libquadmath0 amd64 6.1.1-4 [132 kB]
Get:72 http://mirrors.accretive-networks.net/debian sid/main amd64 gcc-5 amd64 5.3.1-20 [8289 kB]
Get:80 http://mirrors.accretive-networks.net/debian sid/main amd64 dpkg-dev all 1.18.7 [1557 kB]
Get:82 http://mirrors.accretive-networks.net/debian sid/main amd64 openssl amd64 1.0.2h-1 [681 kB]
Get:83 http://mirrors.accretive-networks.net/debian sid/main amd64 ca-certificates all 20160104 [200 kB]
Get:76 http://mirrors.kernel.org/debian sid/main amd64 g++ amd64 4:5.3.1-2 [1554 B]
Get:85 http://mirrors.accretive-networks.net/debian sid/main amd64 distro-info-data all 0.29 [5308 B]
Get:87 http://mirrors.accretive-networks.net/debian sid/main amd64 git-man all 1:2.8.1-1 [1369 kB]
Get:90 http://mirrors.accretive-networks.net/debian sid/main amd64 icu-devtools amd64 55.1-7 [174 kB]
Get:77 http://mirrors.kernel.org/debian sid/main amd64 make amd64 4.1-9 [299 kB]
Get:78 http://mirrors.kernel.org/debian sid/main amd64 libdpkg-perl all 1.18.7 [1183 kB]
Get:79 http://mirrors.kernel.org/debian sid/main amd64 patch amd64 2.7.5-1 [109 kB]
Get:81 http://mirrors.kernel.org/debian sid/main amd64 build-essential amd64 12.2 [7280 B]
Get:84 http://mirrors.kernel.org/debian sid/main amd64 curl amd64 7.47.0-1 [214 kB]
Get:86 http://mirrors.kernel.org/debian sid/main amd64 liberror-perl all 0.17-1.2 [22.4 kB]
Get:88 http://mirrors.kernel.org/debian sid/main amd64 git amd64 1:2.8.1-1 [3679 kB]
Get:89 http://mirrors.kernel.org/debian sid/main amd64 libicu55 amd64 55.1-7 [7649 kB]
Get:91 http://mirrors.kernel.org/debian sid/main amd64 libicu-dev amd64 55.1-7 [8549 kB]
Get:92 http://mirrors.kernel.org/debian sid/main amd64 lsb-release all 9.20160110 [26.5 kB]
Get:93 http://mirrors.kernel.org/debian sid/main amd64 python-all amd64 2.7.11-1 [936 B]
Get:94 http://mirrors.kernel.org/debian sid/main amd64 rlwrap amd64 0.41-1+b1 [76.3 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 131 MB in 15s (8435 kB/s)
Selecting previously unselected package libgdbm3:amd64.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 7373 files and directories currently installed.)
Preparing to unpack .../libgdbm3_1.8.3-13.1_amd64.deb ...
Unpacking libgdbm3:amd64 (1.8.3-13.1) ...
Selecting previously unselected package perl-modules-5.22.
Preparing to unpack .../perl-modules-5.22_5.22.2-1_all.deb ...
Unpacking perl-modules-5.22 (5.22.2-1) ...
Selecting previously unselected package libperl5.22:amd64.
Preparing to unpack .../libperl5.22_5.22.2-1_amd64.deb ...
Unpacking libperl5.22:amd64 (5.22.2-1) ...
Selecting previously unselected package perl.
Preparing to unpack .../perl_5.22.2-1_amd64.deb ...
Unpacking perl (5.22.2-1) ...
Selecting previously unselected package libpython2.7-minimal:amd64.
Preparing to unpack .../libpython2.7-minimal_2.7.11-9_amd64.deb ...
Unpacking libpython2.7-minimal:amd64 (2.7.11-9) ...
Selecting previously unselected package python2.7-minimal.
Preparing to unpack .../python2.7-minimal_2.7.11-9_amd64.deb ...
Unpacking python2.7-minimal (2.7.11-9) ...
Selecting previously unselected package python-minimal.
Preparing to unpack .../python-minimal_2.7.11-1_amd64.deb ...
Unpacking python-minimal (2.7.11-1) ...
Selecting previously unselected package mime-support.
Preparing to unpack .../mime-support_3.60_all.deb ...
Unpacking mime-support (3.60) ...
Selecting previously unselected package libexpat1:amd64.
Preparing to unpack .../libexpat1_2.1.1-2_amd64.deb ...
Unpacking libexpat1:amd64 (2.1.1-2) ...
Selecting previously unselected package libffi6:amd64.
Preparing to unpack .../libffi6_3.2.1-4_amd64.deb ...
Unpacking libffi6:amd64 (3.2.1-4) ...
Selecting previously unselected package libsqlite3-0:amd64.
Preparing to unpack .../libsqlite3-0_3.13.0-1_amd64.deb ...
Unpacking libsqlite3-0:amd64 (3.13.0-1) ...
Selecting previously unselected package libssl1.0.2:amd64.
Preparing to unpack .../libssl1.0.2_1.0.2h-1_amd64.deb ...
Unpacking libssl1.0.2:amd64 (1.0.2h-1) ...
Selecting previously unselected package libpython2.7-stdlib:amd64.
Preparing to unpack .../libpython2.7-stdlib_2.7.11-9_amd64.deb ...
Unpacking libpython2.7-stdlib:amd64 (2.7.11-9) ...
Selecting previously unselected package python2.7.
Preparing to unpack .../python2.7_2.7.11-9_amd64.deb ...
Unpacking python2.7 (2.7.11-9) ...
Selecting previously unselected package libpython-stdlib:amd64.
Preparing to unpack .../libpython-stdlib_2.7.11-1_amd64.deb ...
Unpacking libpython-stdlib:amd64 (2.7.11-1) ...
Processing triggers for libc-bin (2.22-9) ...
Setting up libpython2.7-minimal:amd64 (2.7.11-9) ...
Setting up python2.7-minimal (2.7.11-9) ...
Linking and byte-compiling packages for runtime python2.7...
Setting up python-minimal (2.7.11-1) ...
Selecting previously unselected package python.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 9963 files and directories currently installed.)
Preparing to unpack .../python_2.7.11-1_amd64.deb ...
Unpacking python (2.7.11-1) ...
Selecting previously unselected package libpython3.5-minimal:amd64.
Preparing to unpack .../libpython3.5-minimal_3.5.1-12_amd64.deb ...
Unpacking libpython3.5-minimal:amd64 (3.5.1-12) ...
Selecting previously unselected package python3.5-minimal.
Preparing to unpack .../python3.5-minimal_3.5.1-12_amd64.deb ...
Unpacking python3.5-minimal (3.5.1-12) ...
Selecting previously unselected package python3-minimal.
Preparing to unpack .../python3-minimal_3.5.1-3_amd64.deb ...
Unpacking python3-minimal (3.5.1-3) ...
Selecting previously unselected package libmpdec2:amd64.
Preparing to unpack .../libmpdec2_2.4.2-1_amd64.deb ...
Unpacking libmpdec2:amd64 (2.4.2-1) ...
Selecting previously unselected package libpython3.5-stdlib:amd64.
Preparing to unpack .../libpython3.5-stdlib_3.5.1-12_amd64.deb ...
Unpacking libpython3.5-stdlib:amd64 (3.5.1-12) ...
Selecting previously unselected package python3.5.
Preparing to unpack .../python3.5_3.5.1-12_amd64.deb ...
Unpacking python3.5 (3.5.1-12) ...
Selecting previously unselected package libpython3-stdlib:amd64.
Preparing to unpack .../libpython3-stdlib_3.5.1-3_amd64.deb ...
Unpacking libpython3-stdlib:amd64 (3.5.1-3) ...
Selecting previously unselected package dh-python.
Preparing to unpack .../dh-python_2.20151103_all.deb ...
Unpacking dh-python (2.20151103) ...
Processing triggers for libc-bin (2.22-9) ...
Setting up libssl1.0.2:amd64 (1.0.2h-1) ...
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
Setting up libpython3.5-minimal:amd64 (3.5.1-12) ...
Setting up libexpat1:amd64 (2.1.1-2) ...
Setting up python3.5-minimal (3.5.1-12) ...
Setting up python3-minimal (3.5.1-3) ...
Processing triggers for libc-bin (2.22-9) ...
Selecting previously unselected package python3.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 10938 files and directories currently installed.)
Preparing to unpack .../python3_3.5.1-3_amd64.deb ...
Unpacking python3 (3.5.1-3) ...
Selecting previously unselected package libgmp10:amd64.
Preparing to unpack .../libgmp10_2%3a6.1.0+dfsg-2_amd64.deb ...
Unpacking libgmp10:amd64 (2:6.1.0+dfsg-2) ...
Selecting previously unselected package libmpfr4:amd64.
Preparing to unpack .../libmpfr4_3.1.4-1_amd64.deb ...
Unpacking libmpfr4:amd64 (3.1.4-1) ...
Selecting previously unselected package libmpc3:amd64.
Preparing to unpack .../libmpc3_1.0.3-1_amd64.deb ...
Unpacking libmpc3:amd64 (1.0.3-1) ...
Selecting previously unselected package bzip2.
Preparing to unpack .../bzip2_1.0.6-8_amd64.deb ...
Unpacking bzip2 (1.0.6-8) ...
Selecting previously unselected package libbsd0:amd64.
Preparing to unpack .../libbsd0_0.8.3-1_amd64.deb ...
Unpacking libbsd0:amd64 (0.8.3-1) ...
Selecting previously unselected package libedit2:amd64.
Preparing to unpack .../libedit2_3.1-20150325-1+b1_amd64.deb ...
Unpacking libedit2:amd64 (3.1-20150325-1+b1) ...
Selecting previously unselected package libnettle6:amd64.
Preparing to unpack .../libnettle6_3.2-1_amd64.deb ...
Unpacking libnettle6:amd64 (3.2-1) ...
Selecting previously unselected package libhogweed4:amd64.
Preparing to unpack .../libhogweed4_3.2-1_amd64.deb ...
Unpacking libhogweed4:amd64 (3.2-1) ...
Selecting previously unselected package libidn11:amd64.
Preparing to unpack .../libidn11_1.32-3_amd64.deb ...
Unpacking libidn11:amd64 (1.32-3) ...
Selecting previously unselected package libp11-kit0:amd64.
Preparing to unpack .../libp11-kit0_0.23.2-3_amd64.deb ...
Unpacking libp11-kit0:amd64 (0.23.2-3) ...
Selecting previously unselected package libtasn1-6:amd64.
Preparing to unpack .../libtasn1-6_4.8-1_amd64.deb ...
Unpacking libtasn1-6:amd64 (4.8-1) ...
Selecting previously unselected package libgnutls30:amd64.
Preparing to unpack .../libgnutls30_3.4.12-1_amd64.deb ...
Unpacking libgnutls30:amd64 (3.4.12-1) ...
Selecting previously unselected package libkeyutils1:amd64.
Preparing to unpack .../libkeyutils1_1.5.9-9_amd64.deb ...
Unpacking libkeyutils1:amd64 (1.5.9-9) ...
Selecting previously unselected package libkrb5support0:amd64.
Preparing to unpack .../libkrb5support0_1.13.2+dfsg-5_amd64.deb ...
Unpacking libkrb5support0:amd64 (1.13.2+dfsg-5) ...
Selecting previously unselected package libk5crypto3:amd64.
Preparing to unpack .../libk5crypto3_1.13.2+dfsg-5_amd64.deb ...
Unpacking libk5crypto3:amd64 (1.13.2+dfsg-5) ...
Selecting previously unselected package libkrb5-3:amd64.
Preparing to unpack .../libkrb5-3_1.13.2+dfsg-5_amd64.deb ...
Unpacking libkrb5-3:amd64 (1.13.2+dfsg-5) ...
Selecting previously unselected package libgssapi-krb5-2:amd64.
Preparing to unpack .../libgssapi-krb5-2_1.13.2+dfsg-5_amd64.deb ...
Unpacking libgssapi-krb5-2:amd64 (1.13.2+dfsg-5) ...
Selecting previously unselected package libsasl2-modules-db:amd64.
Preparing to unpack .../libsasl2-modules-db_2.1.26.dfsg1-15_amd64.deb ...
Unpacking libsasl2-modules-db:amd64 (2.1.26.dfsg1-15) ...
Selecting previously unselected package libsasl2-2:amd64.
Preparing to unpack .../libsasl2-2_2.1.26.dfsg1-15_amd64.deb ...
Unpacking libsasl2-2:amd64 (2.1.26.dfsg1-15) ...
Selecting previously unselected package libldap-2.4-2:amd64.
Preparing to unpack .../libldap-2.4-2_2.4.42+dfsg-2+b2_amd64.deb ...
Unpacking libldap-2.4-2:amd64 (2.4.42+dfsg-2+b2) ...
Selecting previously unselected package openssh-client.
Preparing to unpack .../openssh-client_1%3a7.2p2-5_amd64.deb ...
Unpacking openssh-client (1:7.2p2-5) ...
Selecting previously unselected package xz-utils.
Preparing to unpack .../xz-utils_5.1.1alpha+20120614-2.1_amd64.deb ...
Unpacking xz-utils (5.1.1alpha+20120614-2.1) ...
Selecting previously unselected package libnghttp2-14:amd64.
Preparing to unpack .../libnghttp2-14_1.10.0-1_amd64.deb ...
Unpacking libnghttp2-14:amd64 (1.10.0-1) ...
Selecting previously unselected package librtmp1:amd64.
Preparing to unpack .../librtmp1_2.4+20151223.gitfa8646d.1-1_amd64.deb ...
Unpacking librtmp1:amd64 (2.4+20151223.gitfa8646d.1-1) ...
Selecting previously unselected package libssh2-1:amd64.
Preparing to unpack .../libssh2-1_1.5.0-2.1_amd64.deb ...
Unpacking libssh2-1:amd64 (1.5.0-2.1) ...
Selecting previously unselected package libcurl3-gnutls:amd64.
Preparing to unpack .../libcurl3-gnutls_7.47.0-1_amd64.deb ...
Unpacking libcurl3-gnutls:amd64 (7.47.0-1) ...
Selecting previously unselected package apt-transport-https.
Preparing to unpack .../apt-transport-https_1.2.12_amd64.deb ...
Unpacking apt-transport-https (1.2.12) ...
Selecting previously unselected package binutils.
Preparing to unpack .../binutils_2.26-9_amd64.deb ...
Unpacking binutils (2.26-9) ...
Selecting previously unselected package libc-dev-bin.
Preparing to unpack .../libc-dev-bin_2.22-9_amd64.deb ...
Unpacking libc-dev-bin (2.22-9) ...
Selecting previously unselected package linux-libc-dev:amd64.
Preparing to unpack .../linux-libc-dev_4.5.4-1_amd64.deb ...
Unpacking linux-libc-dev:amd64 (4.5.4-1) ...
Selecting previously unselected package libc6-dev:amd64.
Preparing to unpack .../libc6-dev_2.22-9_amd64.deb ...
Unpacking libc6-dev:amd64 (2.22-9) ...
Selecting previously unselected package libisl15:amd64.
Preparing to unpack .../libisl15_0.16.1-1_amd64.deb ...
Unpacking libisl15:amd64 (0.16.1-1) ...
Selecting previously unselected package cpp-5.
Preparing to unpack .../cpp-5_5.3.1-20_amd64.deb ...
Unpacking cpp-5 (5.3.1-20) ...
Selecting previously unselected package cpp.
Preparing to unpack .../cpp_4%3a5.3.1-2_amd64.deb ...
Unpacking cpp (4:5.3.1-2) ...
Selecting previously unselected package libcc1-0:amd64.
Preparing to unpack .../libcc1-0_6.1.1-4_amd64.deb ...
Unpacking libcc1-0:amd64 (6.1.1-4) ...
Selecting previously unselected package libgomp1:amd64.
Preparing to unpack .../libgomp1_6.1.1-4_amd64.deb ...
Unpacking libgomp1:amd64 (6.1.1-4) ...
Selecting previously unselected package libitm1:amd64.
Preparing to unpack .../libitm1_6.1.1-4_amd64.deb ...
Unpacking libitm1:amd64 (6.1.1-4) ...
Selecting previously unselected package libatomic1:amd64.
Preparing to unpack .../libatomic1_6.1.1-4_amd64.deb ...
Unpacking libatomic1:amd64 (6.1.1-4) ...
Selecting previously unselected package libasan2:amd64.
Preparing to unpack .../libasan2_5.3.1-20_amd64.deb ...
Unpacking libasan2:amd64 (5.3.1-20) ...
Selecting previously unselected package liblsan0:amd64.
Preparing to unpack .../liblsan0_6.1.1-4_amd64.deb ...
Unpacking liblsan0:amd64 (6.1.1-4) ...
Selecting previously unselected package libtsan0:amd64.
Preparing to unpack .../libtsan0_6.1.1-4_amd64.deb ...
Unpacking libtsan0:amd64 (6.1.1-4) ...
Selecting previously unselected package libubsan0:amd64.
Preparing to unpack .../libubsan0_6.1.1-4_amd64.deb ...
Unpacking libubsan0:amd64 (6.1.1-4) ...
Selecting previously unselected package libcilkrts5:amd64.
Preparing to unpack .../libcilkrts5_6.1.1-4_amd64.deb ...
Unpacking libcilkrts5:amd64 (6.1.1-4) ...
Selecting previously unselected package libmpx0:amd64.
Preparing to unpack .../libmpx0_5.3.1-20_amd64.deb ...
Unpacking libmpx0:amd64 (5.3.1-20) ...
Selecting previously unselected package libquadmath0:amd64.
Preparing to unpack .../libquadmath0_6.1.1-4_amd64.deb ...
Unpacking libquadmath0:amd64 (6.1.1-4) ...
Selecting previously unselected package libgcc-5-dev:amd64.
Preparing to unpack .../libgcc-5-dev_5.3.1-20_amd64.deb ...
Unpacking libgcc-5-dev:amd64 (5.3.1-20) ...
Selecting previously unselected package gcc-5.
Preparing to unpack .../gcc-5_5.3.1-20_amd64.deb ...
Unpacking gcc-5 (5.3.1-20) ...
Selecting previously unselected package gcc.
Preparing to unpack .../gcc_4%3a5.3.1-2_amd64.deb ...
Unpacking gcc (4:5.3.1-2) ...
Selecting previously unselected package libstdc++-5-dev:amd64.
Preparing to unpack .../libstdc++-5-dev_5.3.1-20_amd64.deb ...
Unpacking libstdc++-5-dev:amd64 (5.3.1-20) ...
Selecting previously unselected package g++-5.
Preparing to unpack .../g++-5_5.3.1-20_amd64.deb ...
Unpacking g++-5 (5.3.1-20) ...
Selecting previously unselected package g++.
Preparing to unpack .../g++_4%3a5.3.1-2_amd64.deb ...
Unpacking g++ (4:5.3.1-2) ...
Selecting previously unselected package make.
Preparing to unpack .../archives/make_4.1-9_amd64.deb ...
Unpacking make (4.1-9) ...
Selecting previously unselected package libdpkg-perl.
Preparing to unpack .../libdpkg-perl_1.18.7_all.deb ...
Unpacking libdpkg-perl (1.18.7) ...
Selecting previously unselected package patch.
Preparing to unpack .../patch_2.7.5-1_amd64.deb ...
Unpacking patch (2.7.5-1) ...
Selecting previously unselected package dpkg-dev.
Preparing to unpack .../dpkg-dev_1.18.7_all.deb ...
Unpacking dpkg-dev (1.18.7) ...
Selecting previously unselected package build-essential.
Preparing to unpack .../build-essential_12.2_amd64.deb ...
Unpacking build-essential (12.2) ...
Selecting previously unselected package openssl.
Preparing to unpack .../openssl_1.0.2h-1_amd64.deb ...
Unpacking openssl (1.0.2h-1) ...
Selecting previously unselected package ca-certificates.
Preparing to unpack .../ca-certificates_20160104_all.deb ...
Unpacking ca-certificates (20160104) ...
Selecting previously unselected package curl.
Preparing to unpack .../curl_7.47.0-1_amd64.deb ...
Unpacking curl (7.47.0-1) ...
Selecting previously unselected package distro-info-data.
Preparing to unpack .../distro-info-data_0.29_all.deb ...
Unpacking distro-info-data (0.29) ...
Selecting previously unselected package liberror-perl.
Preparing to unpack .../liberror-perl_0.17-1.2_all.deb ...
Unpacking liberror-perl (0.17-1.2) ...
Selecting previously unselected package git-man.
Preparing to unpack .../git-man_1%3a2.8.1-1_all.deb ...
Unpacking git-man (1:2.8.1-1) ...
Selecting previously unselected package git.
Preparing to unpack .../git_1%3a2.8.1-1_amd64.deb ...
Unpacking git (1:2.8.1-1) ...
Selecting previously unselected package libicu55:amd64.
Preparing to unpack .../libicu55_55.1-7_amd64.deb ...
Unpacking libicu55:amd64 (55.1-7) ...
Selecting previously unselected package icu-devtools.
Preparing to unpack .../icu-devtools_55.1-7_amd64.deb ...
Unpacking icu-devtools (55.1-7) ...
Selecting previously unselected package libicu-dev:amd64.
Preparing to unpack .../libicu-dev_55.1-7_amd64.deb ...
Unpacking libicu-dev:amd64 (55.1-7) ...
Selecting previously unselected package lsb-release.
Preparing to unpack .../lsb-release_9.20160110_all.deb ...
Unpacking lsb-release (9.20160110) ...
Selecting previously unselected package python-all.
Preparing to unpack .../python-all_2.7.11-1_amd64.deb ...
Unpacking python-all (2.7.11-1) ...
Selecting previously unselected package rlwrap.
Preparing to unpack .../rlwrap_0.41-1+b1_amd64.deb ...
Unpacking rlwrap (0.41-1+b1) ...
Processing triggers for libc-bin (2.22-9) ...
Setting up libgdbm3:amd64 (1.8.3-13.1) ...
Setting up perl-modules-5.22 (5.22.2-1) ...
Setting up libperl5.22:amd64 (5.22.2-1) ...
Setting up perl (5.22.2-1) ...
update-alternatives: using /usr/bin/prename to provide /usr/bin/rename (rename) in auto mode
Setting up mime-support (3.60) ...
Setting up libffi6:amd64 (3.2.1-4) ...
Setting up libsqlite3-0:amd64 (3.13.0-1) ...
Setting up libpython2.7-stdlib:amd64 (2.7.11-9) ...
Setting up python2.7 (2.7.11-9) ...
Setting up libpython-stdlib:amd64 (2.7.11-1) ...
Setting up python (2.7.11-1) ...
Setting up libmpdec2:amd64 (2.4.2-1) ...
Setting up libpython3.5-stdlib:amd64 (3.5.1-12) ...
Setting up python3.5 (3.5.1-12) ...
Setting up libpython3-stdlib:amd64 (3.5.1-3) ...
Setting up libgmp10:amd64 (2:6.1.0+dfsg-2) ...
Setting up libmpfr4:amd64 (3.1.4-1) ...
Setting up libmpc3:amd64 (1.0.3-1) ...
Setting up bzip2 (1.0.6-8) ...
Setting up libbsd0:amd64 (0.8.3-1) ...
Setting up libedit2:amd64 (3.1-20150325-1+b1) ...
Setting up libnettle6:amd64 (3.2-1) ...
Setting up libhogweed4:amd64 (3.2-1) ...
Setting up libidn11:amd64 (1.32-3) ...
Setting up libp11-kit0:amd64 (0.23.2-3) ...
Setting up libtasn1-6:amd64 (4.8-1) ...
Setting up libgnutls30:amd64 (3.4.12-1) ...
Setting up libkeyutils1:amd64 (1.5.9-9) ...
Setting up libkrb5support0:amd64 (1.13.2+dfsg-5) ...
Setting up libk5crypto3:amd64 (1.13.2+dfsg-5) ...
Setting up libkrb5-3:amd64 (1.13.2+dfsg-5) ...
Setting up libgssapi-krb5-2:amd64 (1.13.2+dfsg-5) ...
Setting up libsasl2-modules-db:amd64 (2.1.26.dfsg1-15) ...
Setting up libsasl2-2:amd64 (2.1.26.dfsg1-15) ...
Setting up libldap-2.4-2:amd64 (2.4.42+dfsg-2+b2) ...
Setting up openssh-client (1:7.2p2-5) ...
Setting up xz-utils (5.1.1alpha+20120614-2.1) ...
update-alternatives: using /usr/bin/xz to provide /usr/bin/lzma (lzma) in auto mode
Setting up libnghttp2-14:amd64 (1.10.0-1) ...
Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d.1-1) ...
Setting up libssh2-1:amd64 (1.5.0-2.1) ...
Setting up libcurl3-gnutls:amd64 (7.47.0-1) ...
Setting up apt-transport-https (1.2.12) ...
Setting up binutils (2.26-9) ...
Setting up libc-dev-bin (2.22-9) ...
Setting up linux-libc-dev:amd64 (4.5.4-1) ...
Setting up libc6-dev:amd64 (2.22-9) ...
Setting up libisl15:amd64 (0.16.1-1) ...
Setting up cpp-5 (5.3.1-20) ...
Setting up cpp (4:5.3.1-2) ...
Setting up libcc1-0:amd64 (6.1.1-4) ...
Setting up libgomp1:amd64 (6.1.1-4) ...
Setting up libitm1:amd64 (6.1.1-4) ...
Setting up libatomic1:amd64 (6.1.1-4) ...
Setting up libasan2:amd64 (5.3.1-20) ...
Setting up liblsan0:amd64 (6.1.1-4) ...
Setting up libtsan0:amd64 (6.1.1-4) ...
Setting up libubsan0:amd64 (6.1.1-4) ...
Setting up libcilkrts5:amd64 (6.1.1-4) ...
Setting up libmpx0:amd64 (5.3.1-20) ...
Setting up libquadmath0:amd64 (6.1.1-4) ...
Setting up libgcc-5-dev:amd64 (5.3.1-20) ...
Setting up gcc-5 (5.3.1-20) ...
Setting up gcc (4:5.3.1-2) ...
Setting up libstdc++-5-dev:amd64 (5.3.1-20) ...
Setting up g++-5 (5.3.1-20) ...
Setting up g++ (4:5.3.1-2) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode
Setting up make (4.1-9) ...
Setting up libdpkg-perl (1.18.7) ...
Setting up patch (2.7.5-1) ...
Setting up dpkg-dev (1.18.7) ...
Setting up build-essential (12.2) ...
Setting up openssl (1.0.2h-1) ...
Setting up ca-certificates (20160104) ...
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
Setting up curl (7.47.0-1) ...
Setting up distro-info-data (0.29) ...
Setting up liberror-perl (0.17-1.2) ...
Setting up git-man (1:2.8.1-1) ...
Setting up git (1:2.8.1-1) ...
Setting up libicu55:amd64 (55.1-7) ...
Setting up icu-devtools (55.1-7) ...
Setting up libicu-dev:amd64 (55.1-7) ...
Setting up python-all (2.7.11-1) ...
Setting up rlwrap (0.41-1+b1) ...
update-alternatives: using /usr/bin/rlwrap to provide /usr/bin/readline-editor (readline-editor) in auto mode
Setting up python3 (3.5.1-3) ...
running python rtupdate hooks for python3.5...
running python post-rtupdate hooks for python3.5...
Setting up lsb-release (9.20160110) ...
Setting up dh-python (2.20151103) ...
Processing triggers for libc-bin (2.22-9) ...
Processing triggers for ca-certificates (20160104) ...
Updating certificates in /etc/ssl/certs...
173 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
[91mW[0m[91m: --force-yes is deprecated, use one of the options starting with --allow instead.
[0m ---> 132235e4087e
Removing intermediate container 0aa860061c0b
Successfully built 132235e4087e

```

Array of tests: `[]`

# Tested image `nodesource/jessie-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM debian:jessie
jessie: Pulling from library/debian
51f5c6a04d83: Pulling fs layer
a3ed95caeb02: Pulling fs layer
a3ed95caeb02: Waiting
51f5c6a04d83: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Download complete
51f5c6a04d83: Download complete
51f5c6a04d83: Pull complete
51f5c6a04d83: Pull complete
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:3dc34c5b6d35644b1c1af8cc3e0665022611e78999d7269c460afc5a0678ac45
Status: Downloaded newer image for debian:jessie
 ---> 1742affe03b5
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in cbe9ddb2c6a9
 ---> e4afaeb8cbf6
Removing intermediate container cbe9ddb2c6a9
Step 3 : RUN apt-get update  && apt-get install -y --force-yes --no-install-recommends      apt-transport-https       ssh-client       build-essential       curl       ca-certificates       git       libicu-dev       lsb-release       python-all       rlwrap  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 17102caa947c
Get:1 http://security.debian.org jessie/updates InRelease [63.1 kB]
Ign http://httpredir.debian.org jessie InRelease
Get:2 http://httpredir.debian.org jessie-updates InRelease [142 kB]
Get:3 http://security.debian.org jessie/updates/main amd64 Packages [312 kB]
Get:4 http://httpredir.debian.org jessie Release.gpg [2373 B]
Get:5 http://httpredir.debian.org jessie-updates/main amd64 Packages [9283 B]
Get:6 http://httpredir.debian.org jessie Release [148 kB]
Get:7 http://httpredir.debian.org jessie/main amd64 Packages [9034 kB]
Fetched 9712 kB in 4s (2263 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following extra packages will be installed:
  binutils bzip2 cpp cpp-4.9 dpkg-dev g++ g++-4.9 gcc gcc-4.9 git-man
  icu-devtools libasan1 libatomic1 libbsd0 libc-dev-bin libc6-dev libcilkrts5
  libcloog-isl4 libcurl3 libcurl3-gnutls libdpkg-perl libedit2 liberror-perl
  libexpat1 libffi6 libgcc-4.9-dev libgdbm3 libgmp10 libgnutls-deb0-28
  libgomp1 libgssapi-krb5-2 libhogweed2 libicu52 libidn11 libisl10 libitm1
  libk5crypto3 libkeyutils1 libkrb5-3 libkrb5support0 libldap-2.4-2 liblsan0
  libmpc3 libmpfr4 libnettle4 libp11-kit0 libpython-stdlib
  libpython2.7-minimal libpython2.7-stdlib libquadmath0 librtmp1 libsasl2-2
  libsasl2-modules-db libsqlite3-0 libssh2-1 libssl1.0.0 libstdc++-4.9-dev
  libtasn1-6 libtimedate-perl libtsan0 libubsan0 linux-libc-dev make
  mime-support openssl patch perl perl-modules python python-minimal python2.7
  python2.7-minimal xz-utils
Suggested packages:
  binutils-doc bzip2-doc cpp-doc gcc-4.9-locales debian-keyring g++-multilib
  g++-4.9-multilib gcc-4.9-doc libstdc++6-4.9-dbg gcc-multilib manpages-dev
  autoconf automake libtool flex bison gdb gcc-doc gcc-4.9-multilib
  libgcc1-dbg libgomp1-dbg libitm1-dbg libatomic1-dbg libasan1-dbg
  liblsan0-dbg libtsan0-dbg libubsan0-dbg libcilkrts5-dbg libquadmath0-dbg
  gettext-base git-daemon-run git-daemon-sysvinit git-doc git-el git-email
  git-gui gitk gitweb git-arch git-cvs git-mediawiki git-svn glibc-doc
  gnutls-bin krb5-doc krb5-user icu-doc libstdc++-4.9-doc lsb make-doc
  ssh-askpass libpam-ssh keychain monkeysphere ed diffutils-doc perl-doc
  libterm-readline-gnu-perl libterm-readline-perl-perl libb-lint-perl
  libcpanplus-dist-build-perl libcpanplus-perl libfile-checktree-perl
  liblog-message-simple-perl liblog-message-perl libobject-accessor-perl
  python-doc python-tk python2.7-doc binfmt-support
Recommended packages:
  fakeroot libalgorithm-merge-perl less rsync ssh-client
  libfile-fcntllock-perl krb5-locales libsasl2-modules file xauth rename
  libarchive-extract-perl libmodule-pluggable-perl libpod-latex-perl
  libterm-ui-perl libtext-soundex-perl libcgi-pm-perl libmodule-build-perl
  libpackage-constants-perl
The following NEW packages will be installed:
  apt-transport-https binutils build-essential bzip2 ca-certificates cpp
  cpp-4.9 curl dpkg-dev g++ g++-4.9 gcc gcc-4.9 git git-man icu-devtools
  libasan1 libatomic1 libbsd0 libc-dev-bin libc6-dev libcilkrts5 libcloog-isl4
  libcurl3 libcurl3-gnutls libdpkg-perl libedit2 liberror-perl libexpat1
  libffi6 libgcc-4.9-dev libgdbm3 libgmp10 libgnutls-deb0-28 libgomp1
  libgssapi-krb5-2 libhogweed2 libicu-dev libicu52 libidn11 libisl10 libitm1
  libk5crypto3 libkeyutils1 libkrb5-3 libkrb5support0 libldap-2.4-2 liblsan0
  libmpc3 libmpfr4 libnettle4 libp11-kit0 libpython-stdlib
  libpython2.7-minimal libpython2.7-stdlib libquadmath0 librtmp1 libsasl2-2
  libsasl2-modules-db libsqlite3-0 libssh2-1 libssl1.0.0 libstdc++-4.9-dev
  libtasn1-6 libtimedate-perl libtsan0 libubsan0 linux-libc-dev lsb-release
  make mime-support openssh-client openssl patch perl perl-modules python
  python-all python-minimal python2.7 python2.7-minimal rlwrap xz-utils
0 upgraded, 83 newly installed, 0 to remove and 0 not upgraded.
Need to get 82.6 MB of archives.
After this operation, 298 MB of additional disk space will be used.
Get:1 http://security.debian.org/ jessie/updates/main libssl1.0.0 amd64 1.0.1k-3+deb8u5 [1038 kB]
Get:2 http://httpredir.debian.org/debian/ jessie/main libgdbm3 amd64 1.8.3-13.1 [30.0 kB]
Get:3 http://httpredir.debian.org/debian/ jessie/main libbsd0 amd64 0.7.0-2 [67.9 kB]
Get:4 http://httpredir.debian.org/debian/ jessie/main libedit2 amd64 3.1-20140620-2 [85.1 kB]
Get:5 http://httpredir.debian.org/debian/ jessie/main libgmp10 amd64 2:6.0.0+dfsg-6 [253 kB]
Get:6 http://httpredir.debian.org/debian/ jessie/main libnettle4 amd64 2.7.1-5+deb8u1 [176 kB]
Get:7 http://httpredir.debian.org/debian/ jessie/main libhogweed2 amd64 2.7.1-5+deb8u1 [126 kB]
Get:8 http://security.debian.org/ jessie/updates/main libtasn1-6 amd64 4.2-3+deb8u2 [49.0 kB]
Get:9 http://httpredir.debian.org/debian/ jessie/main libp11-kit0 amd64 0.20.7-1 [81.2 kB]
Get:10 http://security.debian.org/ jessie/updates/main libidn11 amd64 1.29-1+deb8u1 [136 kB]
Get:11 http://httpredir.debian.org/debian/ jessie/main libgnutls-deb0-28 amd64 3.3.8-6+deb8u3 [694 kB]
Get:12 http://httpredir.debian.org/debian/ jessie/main libffi6 amd64 3.1-2+b2 [20.1 kB]
Get:13 http://security.debian.org/ jessie/updates/main libexpat1 amd64 2.1.0-6+deb8u2 [79.4 kB]
Get:14 http://httpredir.debian.org/debian/ jessie/main libkeyutils1 amd64 1.5.9-5+b1 [12.0 kB]
Get:15 http://security.debian.org/ jessie/updates/main openssh-client amd64 1:6.7p1-5+deb8u2 [691 kB]
Get:16 http://httpredir.debian.org/debian/ jessie/main libkrb5support0 amd64 1.12.1+dfsg-19+deb8u2 [59.1 kB]
Get:17 http://httpredir.debian.org/debian/ jessie/main libk5crypto3 amd64 1.12.1+dfsg-19+deb8u2 [115 kB]
Get:18 http://security.debian.org/ jessie/updates/main openssl amd64 1.0.1k-3+deb8u5 [677 kB]
Get:19 http://httpredir.debian.org/debian/ jessie/main libkrb5-3 amd64 1.12.1+dfsg-19+deb8u2 [303 kB]
Get:20 http://httpredir.debian.org/debian/ jessie/main libgssapi-krb5-2 amd64 1.12.1+dfsg-19+deb8u2 [152 kB]
Get:21 http://httpredir.debian.org/debian/ jessie/main libsasl2-modules-db amd64 2.1.26.dfsg1-13+deb8u1 [67.1 kB]
Get:22 http://httpredir.debian.org/debian/ jessie/main libsasl2-2 amd64 2.1.26.dfsg1-13+deb8u1 [105 kB]
Get:23 http://httpredir.debian.org/debian/ jessie/main libldap-2.4-2 amd64 2.4.40+dfsg-1+deb8u2 [218 kB]
Get:24 http://httpredir.debian.org/debian/ jessie/main perl-modules all 5.20.2-3+deb8u4 [2546 kB]
Get:25 http://httpredir.debian.org/debian/ jessie/main libsqlite3-0 amd64 3.8.7.1-1+deb8u1 [438 kB]
Get:26 http://httpredir.debian.org/debian/ jessie/main perl amd64 5.20.2-3+deb8u4 [2638 kB]
Get:27 http://httpredir.debian.org/debian/ jessie/main python2.7-minimal amd64 2.7.9-2 [1401 kB]
Get:28 http://httpredir.debian.org/debian/ jessie/main python-minimal amd64 2.7.9-1 [40.3 kB]
Get:29 http://httpredir.debian.org/debian/ jessie/main mime-support all 3.58 [36.0 kB]
Get:30 http://httpredir.debian.org/debian/ jessie/main libpython2.7-stdlib amd64 2.7.9-2 [1844 kB]
Get:31 http://httpredir.debian.org/debian/ jessie/main python2.7 amd64 2.7.9-2 [251 kB]
Get:32 http://httpredir.debian.org/debian/ jessie/main libpython2.7-minimal amd64 2.7.9-2 [376 kB]
Get:33 http://httpredir.debian.org/debian/ jessie/main libpython-stdlib amd64 2.7.9-1 [19.5 kB]
Get:34 http://httpredir.debian.org/debian/ jessie/main python amd64 2.7.9-1 [151 kB]
Get:35 http://httpredir.debian.org/debian/ jessie/main libasan1 amd64 4.9.2-10 [195 kB]
Get:36 http://httpredir.debian.org/debian/ jessie/main libatomic1 amd64 4.9.2-10 [8992 B]
Get:37 http://httpredir.debian.org/debian/ jessie/main libcilkrts5 amd64 4.9.2-10 [40.1 kB]
Get:38 http://httpredir.debian.org/debian/ jessie/main libisl10 amd64 0.12.2-2 [440 kB]
Get:39 http://httpredir.debian.org/debian/ jessie/main libcloog-isl4 amd64 0.18.2-1+b2 [61.8 kB]
Get:40 http://httpredir.debian.org/debian/ jessie/main librtmp1 amd64 2.4+20150115.gita107cef-1 [59.8 kB]
Get:41 http://httpredir.debian.org/debian/ jessie/main libssh2-1 amd64 1.4.3-4.1+deb8u1 [125 kB]
Get:42 http://httpredir.debian.org/debian/ jessie/main libcurl3 amd64 7.38.0-4+deb8u3 [259 kB]
Get:43 http://httpredir.debian.org/debian/ jessie/main libcurl3-gnutls amd64 7.38.0-4+deb8u3 [251 kB]
Get:44 http://httpredir.debian.org/debian/ jessie/main libgomp1 amd64 4.9.2-10 [37.8 kB]
Get:45 http://httpredir.debian.org/debian/ jessie/main libicu52 amd64 52.1-8+deb8u3 [6784 kB]
Get:46 http://httpredir.debian.org/debian/ jessie/main libitm1 amd64 4.9.2-10 [29.2 kB]
Get:47 http://httpredir.debian.org/debian/ jessie/main liblsan0 amd64 4.9.2-10 [92.8 kB]
Get:48 http://httpredir.debian.org/debian/ jessie/main libmpfr4 amd64 3.1.2-2 [527 kB]
Get:49 http://httpredir.debian.org/debian/ jessie/main libquadmath0 amd64 4.9.2-10 [129 kB]
Get:50 http://httpredir.debian.org/debian/ jessie/main libtsan0 amd64 4.9.2-10 [212 kB]
Get:51 http://httpredir.debian.org/debian/ jessie/main libubsan0 amd64 4.9.2-10 [82.4 kB]
Get:52 http://httpredir.debian.org/debian/ jessie/main libmpc3 amd64 1.0.2-1 [39.3 kB]
Get:53 http://httpredir.debian.org/debian/ jessie/main bzip2 amd64 1.0.6-7+b3 [46.9 kB]
Get:54 http://httpredir.debian.org/debian/ jessie/main patch amd64 2.7.5-1 [109 kB]
Get:55 http://httpredir.debian.org/debian/ jessie/main xz-utils amd64 5.1.1alpha+20120614-2+b3 [221 kB]
Get:56 http://httpredir.debian.org/debian/ jessie/main apt-transport-https amd64 1.0.9.8.3 [138 kB]
Get:57 http://httpredir.debian.org/debian/ jessie/main binutils amd64 2.25-5 [3516 kB]
Get:58 http://httpredir.debian.org/debian/ jessie/main libc-dev-bin amd64 2.19-18+deb8u4 [237 kB]
Get:59 http://httpredir.debian.org/debian/ jessie-updates/main linux-libc-dev amd64 3.16.7-ckt25-2 [1023 kB]
Get:60 http://httpredir.debian.org/debian/ jessie/main libc6-dev amd64 2.19-18+deb8u4 [2002 kB]
Get:61 http://httpredir.debian.org/debian/ jessie/main cpp-4.9 amd64 4.9.2-10 [5169 kB]
Get:62 http://httpredir.debian.org/debian/ jessie/main cpp amd64 4:4.9.2-2 [17.3 kB]
Get:63 http://httpredir.debian.org/debian/ jessie/main libgcc-4.9-dev amd64 4.9.2-10 [2066 kB]
Get:64 http://httpredir.debian.org/debian/ jessie/main gcc-4.9 amd64 4.9.2-10 [5352 kB]
Get:65 http://httpredir.debian.org/debian/ jessie/main libstdc++-4.9-dev amd64 4.9.2-10 [1121 kB]
Get:66 http://httpredir.debian.org/debian/ jessie/main g++ amd64 4:4.9.2-2 [1530 B]
Get:67 http://httpredir.debian.org/debian/ jessie/main make amd64 4.0-8.1 [349 kB]
Get:68 http://httpredir.debian.org/debian/ jessie/main libtimedate-perl all 2.3000-2 [42.2 kB]
Get:69 http://httpredir.debian.org/debian/ jessie/main libdpkg-perl all 1.17.26 [1072 kB]
Get:70 http://httpredir.debian.org/debian/ jessie/main gcc amd64 4:4.9.2-2 [5136 B]
Get:71 http://httpredir.debian.org/debian/ jessie/main g++-4.9 amd64 4.9.2-10 [21.4 MB]
Get:72 http://httpredir.debian.org/debian/ jessie/main dpkg-dev all 1.17.26 [1545 kB]
Get:73 http://httpredir.debian.org/debian/ jessie/main build-essential amd64 11.7 [7114 B]
Get:74 http://httpredir.debian.org/debian/ jessie/main ca-certificates all 20141019+deb8u1 [204 kB]
Get:75 http://httpredir.debian.org/debian/ jessie/main liberror-perl all 0.17-1.1 [22.4 kB]
Get:76 http://httpredir.debian.org/debian/ jessie/main git-man all 1:2.1.4-2.1+deb8u2 [1267 kB]
Get:77 http://httpredir.debian.org/debian/ jessie/main git amd64 1:2.1.4-2.1+deb8u2 [3262 kB]
Get:78 http://httpredir.debian.org/debian/ jessie/main icu-devtools amd64 52.1-8+deb8u3 [172 kB]
Get:79 http://httpredir.debian.org/debian/ jessie/main lsb-release all 4.1+Debian13+nmu1 [26.5 kB]
Get:80 http://httpredir.debian.org/debian/ jessie/main python-all amd64 2.7.9-1 [996 B]
Get:81 http://httpredir.debian.org/debian/ jessie/main rlwrap amd64 0.41-1 [75.7 kB]
Get:82 http://httpredir.debian.org/debian/ jessie/main curl amd64 7.38.0-4+deb8u3 [200 kB]
Get:83 http://httpredir.debian.org/debian/ jessie/main libicu-dev amd64 52.1-8+deb8u3 [7642 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 82.6 MB in 9s (8554 kB/s)
Selecting previously unselected package libgdbm3:amd64.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 7548 files and directories currently installed.)
Preparing to unpack .../libgdbm3_1.8.3-13.1_amd64.deb ...
Unpacking libgdbm3:amd64 (1.8.3-13.1) ...
Selecting previously unselected package libssl1.0.0:amd64.
Preparing to unpack .../libssl1.0.0_1.0.1k-3+deb8u5_amd64.deb ...
Unpacking libssl1.0.0:amd64 (1.0.1k-3+deb8u5) ...
Selecting previously unselected package libbsd0:amd64.
Preparing to unpack .../libbsd0_0.7.0-2_amd64.deb ...
Unpacking libbsd0:amd64 (0.7.0-2) ...
Selecting previously unselected package libedit2:amd64.
Preparing to unpack .../libedit2_3.1-20140620-2_amd64.deb ...
Unpacking libedit2:amd64 (3.1-20140620-2) ...
Selecting previously unselected package libgmp10:amd64.
Preparing to unpack .../libgmp10_2%3a6.0.0+dfsg-6_amd64.deb ...
Unpacking libgmp10:amd64 (2:6.0.0+dfsg-6) ...
Selecting previously unselected package libnettle4:amd64.
Preparing to unpack .../libnettle4_2.7.1-5+deb8u1_amd64.deb ...
Unpacking libnettle4:amd64 (2.7.1-5+deb8u1) ...
Selecting previously unselected package libhogweed2:amd64.
Preparing to unpack .../libhogweed2_2.7.1-5+deb8u1_amd64.deb ...
Unpacking libhogweed2:amd64 (2.7.1-5+deb8u1) ...
Selecting previously unselected package libffi6:amd64.
Preparing to unpack .../libffi6_3.1-2+b2_amd64.deb ...
Unpacking libffi6:amd64 (3.1-2+b2) ...
Selecting previously unselected package libp11-kit0:amd64.
Preparing to unpack .../libp11-kit0_0.20.7-1_amd64.deb ...
Unpacking libp11-kit0:amd64 (0.20.7-1) ...
Selecting previously unselected package libtasn1-6:amd64.
Preparing to unpack .../libtasn1-6_4.2-3+deb8u2_amd64.deb ...
Unpacking libtasn1-6:amd64 (4.2-3+deb8u2) ...
Selecting previously unselected package libgnutls-deb0-28:amd64.
Preparing to unpack .../libgnutls-deb0-28_3.3.8-6+deb8u3_amd64.deb ...
Unpacking libgnutls-deb0-28:amd64 (3.3.8-6+deb8u3) ...
Selecting previously unselected package libkeyutils1:amd64.
Preparing to unpack .../libkeyutils1_1.5.9-5+b1_amd64.deb ...
Unpacking libkeyutils1:amd64 (1.5.9-5+b1) ...
Selecting previously unselected package libkrb5support0:amd64.
Preparing to unpack .../libkrb5support0_1.12.1+dfsg-19+deb8u2_amd64.deb ...
Unpacking libkrb5support0:amd64 (1.12.1+dfsg-19+deb8u2) ...
Selecting previously unselected package libk5crypto3:amd64.
Preparing to unpack .../libk5crypto3_1.12.1+dfsg-19+deb8u2_amd64.deb ...
Unpacking libk5crypto3:amd64 (1.12.1+dfsg-19+deb8u2) ...
Selecting previously unselected package libkrb5-3:amd64.
Preparing to unpack .../libkrb5-3_1.12.1+dfsg-19+deb8u2_amd64.deb ...
Unpacking libkrb5-3:amd64 (1.12.1+dfsg-19+deb8u2) ...
Selecting previously unselected package libgssapi-krb5-2:amd64.
Preparing to unpack .../libgssapi-krb5-2_1.12.1+dfsg-19+deb8u2_amd64.deb ...
Unpacking libgssapi-krb5-2:amd64 (1.12.1+dfsg-19+deb8u2) ...
Selecting previously unselected package libidn11:amd64.
Preparing to unpack .../libidn11_1.29-1+deb8u1_amd64.deb ...
Unpacking libidn11:amd64 (1.29-1+deb8u1) ...
Selecting previously unselected package libsasl2-modules-db:amd64.
Preparing to unpack .../libsasl2-modules-db_2.1.26.dfsg1-13+deb8u1_amd64.deb ...
Unpacking libsasl2-modules-db:amd64 (2.1.26.dfsg1-13+deb8u1) ...
Selecting previously unselected package libsasl2-2:amd64.
Preparing to unpack .../libsasl2-2_2.1.26.dfsg1-13+deb8u1_amd64.deb ...
Unpacking libsasl2-2:amd64 (2.1.26.dfsg1-13+deb8u1) ...
Selecting previously unselected package libldap-2.4-2:amd64.
Preparing to unpack .../libldap-2.4-2_2.4.40+dfsg-1+deb8u2_amd64.deb ...
Unpacking libldap-2.4-2:amd64 (2.4.40+dfsg-1+deb8u2) ...
Selecting previously unselected package libsqlite3-0:amd64.
Preparing to unpack .../libsqlite3-0_3.8.7.1-1+deb8u1_amd64.deb ...
Unpacking libsqlite3-0:amd64 (3.8.7.1-1+deb8u1) ...
Selecting previously unselected package perl-modules.
Preparing to unpack .../perl-modules_5.20.2-3+deb8u4_all.deb ...
Unpacking perl-modules (5.20.2-3+deb8u4) ...
Selecting previously unselected package perl.
Preparing to unpack .../perl_5.20.2-3+deb8u4_amd64.deb ...
Unpacking perl (5.20.2-3+deb8u4) ...
Selecting previously unselected package libpython2.7-minimal:amd64.
Preparing to unpack .../libpython2.7-minimal_2.7.9-2_amd64.deb ...
Unpacking libpython2.7-minimal:amd64 (2.7.9-2) ...
Selecting previously unselected package python2.7-minimal.
Preparing to unpack .../python2.7-minimal_2.7.9-2_amd64.deb ...
Unpacking python2.7-minimal (2.7.9-2) ...
Selecting previously unselected package python-minimal.
Preparing to unpack .../python-minimal_2.7.9-1_amd64.deb ...
Unpacking python-minimal (2.7.9-1) ...
Selecting previously unselected package mime-support.
Preparing to unpack .../mime-support_3.58_all.deb ...
Unpacking mime-support (3.58) ...
Selecting previously unselected package libexpat1:amd64.
Preparing to unpack .../libexpat1_2.1.0-6+deb8u2_amd64.deb ...
Unpacking libexpat1:amd64 (2.1.0-6+deb8u2) ...
Selecting previously unselected package libpython2.7-stdlib:amd64.
Preparing to unpack .../libpython2.7-stdlib_2.7.9-2_amd64.deb ...
Unpacking libpython2.7-stdlib:amd64 (2.7.9-2) ...
Selecting previously unselected package python2.7.
Preparing to unpack .../python2.7_2.7.9-2_amd64.deb ...
Unpacking python2.7 (2.7.9-2) ...
Selecting previously unselected package libpython-stdlib:amd64.
Preparing to unpack .../libpython-stdlib_2.7.9-1_amd64.deb ...
Unpacking libpython-stdlib:amd64 (2.7.9-1) ...
Setting up libpython2.7-minimal:amd64 (2.7.9-2) ...
Setting up python2.7-minimal (2.7.9-2) ...
Linking and byte-compiling packages for runtime python2.7...
Setting up python-minimal (2.7.9-1) ...
Selecting previously unselected package python.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 9724 files and directories currently installed.)
Preparing to unpack .../python_2.7.9-1_amd64.deb ...
Unpacking python (2.7.9-1) ...
Selecting previously unselected package libasan1:amd64.
Preparing to unpack .../libasan1_4.9.2-10_amd64.deb ...
Unpacking libasan1:amd64 (4.9.2-10) ...
Selecting previously unselected package libatomic1:amd64.
Preparing to unpack .../libatomic1_4.9.2-10_amd64.deb ...
Unpacking libatomic1:amd64 (4.9.2-10) ...
Selecting previously unselected package libcilkrts5:amd64.
Preparing to unpack .../libcilkrts5_4.9.2-10_amd64.deb ...
Unpacking libcilkrts5:amd64 (4.9.2-10) ...
Selecting previously unselected package libisl10:amd64.
Preparing to unpack .../libisl10_0.12.2-2_amd64.deb ...
Unpacking libisl10:amd64 (0.12.2-2) ...
Selecting previously unselected package libcloog-isl4:amd64.
Preparing to unpack .../libcloog-isl4_0.18.2-1+b2_amd64.deb ...
Unpacking libcloog-isl4:amd64 (0.18.2-1+b2) ...
Selecting previously unselected package librtmp1:amd64.
Preparing to unpack .../librtmp1_2.4+20150115.gita107cef-1_amd64.deb ...
Unpacking librtmp1:amd64 (2.4+20150115.gita107cef-1) ...
Selecting previously unselected package libssh2-1:amd64.
Preparing to unpack .../libssh2-1_1.4.3-4.1+deb8u1_amd64.deb ...
Unpacking libssh2-1:amd64 (1.4.3-4.1+deb8u1) ...
Selecting previously unselected package libcurl3:amd64.
Preparing to unpack .../libcurl3_7.38.0-4+deb8u3_amd64.deb ...
Unpacking libcurl3:amd64 (7.38.0-4+deb8u3) ...
Selecting previously unselected package libcurl3-gnutls:amd64.
Preparing to unpack .../libcurl3-gnutls_7.38.0-4+deb8u3_amd64.deb ...
Unpacking libcurl3-gnutls:amd64 (7.38.0-4+deb8u3) ...
Selecting previously unselected package libgomp1:amd64.
Preparing to unpack .../libgomp1_4.9.2-10_amd64.deb ...
Unpacking libgomp1:amd64 (4.9.2-10) ...
Selecting previously unselected package libicu52:amd64.
Preparing to unpack .../libicu52_52.1-8+deb8u3_amd64.deb ...
Unpacking libicu52:amd64 (52.1-8+deb8u3) ...
Selecting previously unselected package libitm1:amd64.
Preparing to unpack .../libitm1_4.9.2-10_amd64.deb ...
Unpacking libitm1:amd64 (4.9.2-10) ...
Selecting previously unselected package liblsan0:amd64.
Preparing to unpack .../liblsan0_4.9.2-10_amd64.deb ...
Unpacking liblsan0:amd64 (4.9.2-10) ...
Selecting previously unselected package libmpfr4:amd64.
Preparing to unpack .../libmpfr4_3.1.2-2_amd64.deb ...
Unpacking libmpfr4:amd64 (3.1.2-2) ...
Selecting previously unselected package libquadmath0:amd64.
Preparing to unpack .../libquadmath0_4.9.2-10_amd64.deb ...
Unpacking libquadmath0:amd64 (4.9.2-10) ...
Selecting previously unselected package libtsan0:amd64.
Preparing to unpack .../libtsan0_4.9.2-10_amd64.deb ...
Unpacking libtsan0:amd64 (4.9.2-10) ...
Selecting previously unselected package libubsan0:amd64.
Preparing to unpack .../libubsan0_4.9.2-10_amd64.deb ...
Unpacking libubsan0:amd64 (4.9.2-10) ...
Selecting previously unselected package libmpc3:amd64.
Preparing to unpack .../libmpc3_1.0.2-1_amd64.deb ...
Unpacking libmpc3:amd64 (1.0.2-1) ...
Selecting previously unselected package bzip2.
Preparing to unpack .../bzip2_1.0.6-7+b3_amd64.deb ...
Unpacking bzip2 (1.0.6-7+b3) ...
Selecting previously unselected package openssh-client.
Preparing to unpack .../openssh-client_1%3a6.7p1-5+deb8u2_amd64.deb ...
Unpacking openssh-client (1:6.7p1-5+deb8u2) ...
Selecting previously unselected package patch.
Preparing to unpack .../patch_2.7.5-1_amd64.deb ...
Unpacking patch (2.7.5-1) ...
Selecting previously unselected package xz-utils.
Preparing to unpack .../xz-utils_5.1.1alpha+20120614-2+b3_amd64.deb ...
Unpacking xz-utils (5.1.1alpha+20120614-2+b3) ...
Selecting previously unselected package apt-transport-https.
Preparing to unpack .../apt-transport-https_1.0.9.8.3_amd64.deb ...
Unpacking apt-transport-https (1.0.9.8.3) ...
Selecting previously unselected package binutils.
Preparing to unpack .../binutils_2.25-5_amd64.deb ...
Unpacking binutils (2.25-5) ...
Selecting previously unselected package libc-dev-bin.
Preparing to unpack .../libc-dev-bin_2.19-18+deb8u4_amd64.deb ...
Unpacking libc-dev-bin (2.19-18+deb8u4) ...
Selecting previously unselected package linux-libc-dev:amd64.
Preparing to unpack .../linux-libc-dev_3.16.7-ckt25-2_amd64.deb ...
Unpacking linux-libc-dev:amd64 (3.16.7-ckt25-2) ...
Selecting previously unselected package libc6-dev:amd64.
Preparing to unpack .../libc6-dev_2.19-18+deb8u4_amd64.deb ...
Unpacking libc6-dev:amd64 (2.19-18+deb8u4) ...
Selecting previously unselected package cpp-4.9.
Preparing to unpack .../cpp-4.9_4.9.2-10_amd64.deb ...
Unpacking cpp-4.9 (4.9.2-10) ...
Selecting previously unselected package cpp.
Preparing to unpack .../cpp_4%3a4.9.2-2_amd64.deb ...
Unpacking cpp (4:4.9.2-2) ...
Selecting previously unselected package libgcc-4.9-dev:amd64.
Preparing to unpack .../libgcc-4.9-dev_4.9.2-10_amd64.deb ...
Unpacking libgcc-4.9-dev:amd64 (4.9.2-10) ...
Selecting previously unselected package gcc-4.9.
Preparing to unpack .../gcc-4.9_4.9.2-10_amd64.deb ...
Unpacking gcc-4.9 (4.9.2-10) ...
Selecting previously unselected package gcc.
Preparing to unpack .../gcc_4%3a4.9.2-2_amd64.deb ...
Unpacking gcc (4:4.9.2-2) ...
Selecting previously unselected package libstdc++-4.9-dev:amd64.
Preparing to unpack .../libstdc++-4.9-dev_4.9.2-10_amd64.deb ...
Unpacking libstdc++-4.9-dev:amd64 (4.9.2-10) ...
Selecting previously unselected package g++-4.9.
Preparing to unpack .../g++-4.9_4.9.2-10_amd64.deb ...
Unpacking g++-4.9 (4.9.2-10) ...
Selecting previously unselected package g++.
Preparing to unpack .../g++_4%3a4.9.2-2_amd64.deb ...
Unpacking g++ (4:4.9.2-2) ...
Selecting previously unselected package make.
Preparing to unpack .../make_4.0-8.1_amd64.deb ...
Unpacking make (4.0-8.1) ...
Selecting previously unselected package libtimedate-perl.
Preparing to unpack .../libtimedate-perl_2.3000-2_all.deb ...
Unpacking libtimedate-perl (2.3000-2) ...
Selecting previously unselected package libdpkg-perl.
Preparing to unpack .../libdpkg-perl_1.17.26_all.deb ...
Unpacking libdpkg-perl (1.17.26) ...
Selecting previously unselected package dpkg-dev.
Preparing to unpack .../dpkg-dev_1.17.26_all.deb ...
Unpacking dpkg-dev (1.17.26) ...
Selecting previously unselected package build-essential.
Preparing to unpack .../build-essential_11.7_amd64.deb ...
Unpacking build-essential (11.7) ...
Selecting previously unselected package openssl.
Preparing to unpack .../openssl_1.0.1k-3+deb8u5_amd64.deb ...
Unpacking openssl (1.0.1k-3+deb8u5) ...
Selecting previously unselected package ca-certificates.
Preparing to unpack .../ca-certificates_20141019+deb8u1_all.deb ...
Unpacking ca-certificates (20141019+deb8u1) ...
Selecting previously unselected package curl.
Preparing to unpack .../curl_7.38.0-4+deb8u3_amd64.deb ...
Unpacking curl (7.38.0-4+deb8u3) ...
Selecting previously unselected package liberror-perl.
Preparing to unpack .../liberror-perl_0.17-1.1_all.deb ...
Unpacking liberror-perl (0.17-1.1) ...
Selecting previously unselected package git-man.
Preparing to unpack .../git-man_1%3a2.1.4-2.1+deb8u2_all.deb ...
Unpacking git-man (1:2.1.4-2.1+deb8u2) ...
Selecting previously unselected package git.
Preparing to unpack .../git_1%3a2.1.4-2.1+deb8u2_amd64.deb ...
Unpacking git (1:2.1.4-2.1+deb8u2) ...
Selecting previously unselected package icu-devtools.
Preparing to unpack .../icu-devtools_52.1-8+deb8u3_amd64.deb ...
Unpacking icu-devtools (52.1-8+deb8u3) ...
Selecting previously unselected package libicu-dev:amd64.
Preparing to unpack .../libicu-dev_52.1-8+deb8u3_amd64.deb ...
Unpacking libicu-dev:amd64 (52.1-8+deb8u3) ...
Selecting previously unselected package lsb-release.
Preparing to unpack .../lsb-release_4.1+Debian13+nmu1_all.deb ...
Unpacking lsb-release (4.1+Debian13+nmu1) ...
Selecting previously unselected package python-all.
Preparing to unpack .../python-all_2.7.9-1_amd64.deb ...
Unpacking python-all (2.7.9-1) ...
Selecting previously unselected package rlwrap.
Preparing to unpack .../rlwrap_0.41-1_amd64.deb ...
Unpacking rlwrap (0.41-1) ...
Setting up libgdbm3:amd64 (1.8.3-13.1) ...
Setting up libssl1.0.0:amd64 (1.0.1k-3+deb8u5) ...
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
Setting up libbsd0:amd64 (0.7.0-2) ...
Setting up libedit2:amd64 (3.1-20140620-2) ...
Setting up libgmp10:amd64 (2:6.0.0+dfsg-6) ...
Setting up libnettle4:amd64 (2.7.1-5+deb8u1) ...
Setting up libhogweed2:amd64 (2.7.1-5+deb8u1) ...
Setting up libffi6:amd64 (3.1-2+b2) ...
Setting up libp11-kit0:amd64 (0.20.7-1) ...
Setting up libtasn1-6:amd64 (4.2-3+deb8u2) ...
Setting up libgnutls-deb0-28:amd64 (3.3.8-6+deb8u3) ...
Setting up libkeyutils1:amd64 (1.5.9-5+b1) ...
Setting up libkrb5support0:amd64 (1.12.1+dfsg-19+deb8u2) ...
Setting up libk5crypto3:amd64 (1.12.1+dfsg-19+deb8u2) ...
Setting up libkrb5-3:amd64 (1.12.1+dfsg-19+deb8u2) ...
Setting up libgssapi-krb5-2:amd64 (1.12.1+dfsg-19+deb8u2) ...
Setting up libidn11:amd64 (1.29-1+deb8u1) ...
Setting up libsasl2-modules-db:amd64 (2.1.26.dfsg1-13+deb8u1) ...
Setting up libsasl2-2:amd64 (2.1.26.dfsg1-13+deb8u1) ...
Setting up libldap-2.4-2:amd64 (2.4.40+dfsg-1+deb8u2) ...
Setting up libsqlite3-0:amd64 (3.8.7.1-1+deb8u1) ...
Setting up perl-modules (5.20.2-3+deb8u4) ...
Setting up perl (5.20.2-3+deb8u4) ...
update-alternatives: using /usr/bin/prename to provide /usr/bin/rename (rename) in auto mode
Setting up mime-support (3.58) ...
Setting up libexpat1:amd64 (2.1.0-6+deb8u2) ...
Setting up libpython2.7-stdlib:amd64 (2.7.9-2) ...
Setting up python2.7 (2.7.9-2) ...
Setting up libpython-stdlib:amd64 (2.7.9-1) ...
Setting up python (2.7.9-1) ...
Setting up libasan1:amd64 (4.9.2-10) ...
Setting up libatomic1:amd64 (4.9.2-10) ...
Setting up libcilkrts5:amd64 (4.9.2-10) ...
Setting up libisl10:amd64 (0.12.2-2) ...
Setting up libcloog-isl4:amd64 (0.18.2-1+b2) ...
Setting up librtmp1:amd64 (2.4+20150115.gita107cef-1) ...
Setting up libssh2-1:amd64 (1.4.3-4.1+deb8u1) ...
Setting up libcurl3:amd64 (7.38.0-4+deb8u3) ...
Setting up libcurl3-gnutls:amd64 (7.38.0-4+deb8u3) ...
Setting up libgomp1:amd64 (4.9.2-10) ...
Setting up libicu52:amd64 (52.1-8+deb8u3) ...
Setting up libitm1:amd64 (4.9.2-10) ...
Setting up liblsan0:amd64 (4.9.2-10) ...
Setting up libmpfr4:amd64 (3.1.2-2) ...
Setting up libquadmath0:amd64 (4.9.2-10) ...
Setting up libtsan0:amd64 (4.9.2-10) ...
Setting up libubsan0:amd64 (4.9.2-10) ...
Setting up libmpc3:amd64 (1.0.2-1) ...
Setting up bzip2 (1.0.6-7+b3) ...
Setting up openssh-client (1:6.7p1-5+deb8u2) ...
Setting up patch (2.7.5-1) ...
Setting up xz-utils (5.1.1alpha+20120614-2+b3) ...
update-alternatives: using /usr/bin/xz to provide /usr/bin/lzma (lzma) in auto mode
Setting up apt-transport-https (1.0.9.8.3) ...
Setting up binutils (2.25-5) ...
Setting up libc-dev-bin (2.19-18+deb8u4) ...
Setting up linux-libc-dev:amd64 (3.16.7-ckt25-2) ...
Setting up libc6-dev:amd64 (2.19-18+deb8u4) ...
Setting up cpp-4.9 (4.9.2-10) ...
Setting up cpp (4:4.9.2-2) ...
Setting up libgcc-4.9-dev:amd64 (4.9.2-10) ...
Setting up gcc-4.9 (4.9.2-10) ...
Setting up gcc (4:4.9.2-2) ...
Setting up libstdc++-4.9-dev:amd64 (4.9.2-10) ...
Setting up g++-4.9 (4.9.2-10) ...
Setting up g++ (4:4.9.2-2) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode
Setting up make (4.0-8.1) ...
Setting up libtimedate-perl (2.3000-2) ...
Setting up libdpkg-perl (1.17.26) ...
Setting up dpkg-dev (1.17.26) ...
Setting up build-essential (11.7) ...
Setting up openssl (1.0.1k-3+deb8u5) ...
Setting up ca-certificates (20141019+deb8u1) ...
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
Setting up curl (7.38.0-4+deb8u3) ...
Setting up liberror-perl (0.17-1.1) ...
Setting up git-man (1:2.1.4-2.1+deb8u2) ...
Setting up git (1:2.1.4-2.1+deb8u2) ...
Setting up icu-devtools (52.1-8+deb8u3) ...
Setting up libicu-dev:amd64 (52.1-8+deb8u3) ...
Setting up lsb-release (4.1+Debian13+nmu1) ...
Setting up python-all (2.7.9-1) ...
Setting up rlwrap (0.41-1) ...
update-alternatives: using /usr/bin/rlwrap to provide /usr/bin/readline-editor (readline-editor) in auto mode
Processing triggers for libc-bin (2.19-18+deb8u4) ...
Processing triggers for ca-certificates (20141019+deb8u1) ...
Updating certificates in /etc/ssl/certs... 174 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d....done.
 ---> 66bd0921074e
Removing intermediate container 17102caa947c
Successfully built 66bd0921074e

```

Array of tests: `[]`

# Tested image `nodesource/precise-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM ubuntu:precise
precise: Pulling from library/ubuntu
fd67d82aecab: Pulling fs layer
93684ce3ceb6: Pulling fs layer
3c084aa9a9c7: Pulling fs layer
12491411cafc: Pulling fs layer
a3ed95caeb02: Pulling fs layer
93684ce3ceb6: Waiting
a3ed95caeb02: Waiting
12491411cafc: Waiting
3c084aa9a9c7: Waiting
93684ce3ceb6: Verifying Checksum
93684ce3ceb6: Download complete
3c084aa9a9c7: Verifying Checksum
3c084aa9a9c7: Download complete
fd67d82aecab: Verifying Checksum
fd67d82aecab: Download complete
12491411cafc: Download complete
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Download complete
fd67d82aecab: Pull complete
fd67d82aecab: Pull complete
93684ce3ceb6: Pull complete
93684ce3ceb6: Pull complete
3c084aa9a9c7: Pull complete
3c084aa9a9c7: Pull complete
12491411cafc: Pull complete
12491411cafc: Pull complete
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:8a2f85be8c8bec2229d91b3e03008f4657e70dd06ae406918641843079c71fac
Status: Downloaded newer image for ubuntu:precise
 ---> 2bffcdf4b693
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in a257cb474f2e
 ---> 591f72fbec51
Removing intermediate container a257cb474f2e
Step 3 : RUN apt-get update  && apt-get install -y --force-yes --no-install-recommends      apt-transport-https       ssh-client       build-essential       curl       ca-certificates       git       libicu-dev       lsb-release       python-all       rlwrap  && rm -rf /var/lib/apt/lists/*;
 ---> Running in 32e809132651
Get:1 http://archive.ubuntu.com precise Release.gpg [198 B]
Get:2 http://archive.ubuntu.com precise-updates Release.gpg [198 B]
Get:3 http://archive.ubuntu.com precise-security Release.gpg [198 B]
Get:4 http://archive.ubuntu.com precise Release [49.6 kB]
Get:5 http://archive.ubuntu.com precise-updates Release [55.4 kB]
Get:6 http://archive.ubuntu.com precise-security Release [55.5 kB]
Get:7 http://archive.ubuntu.com precise/main Sources [1175 kB]
Get:8 http://archive.ubuntu.com precise/restricted Sources [5306 B]
Get:9 http://archive.ubuntu.com precise/universe Sources [6239 kB]
Get:10 http://archive.ubuntu.com precise/main amd64 Packages [1640 kB]
Get:11 http://archive.ubuntu.com precise/restricted amd64 Packages [9098 B]
Get:12 http://archive.ubuntu.com precise/universe amd64 Packages [6167 kB]
Get:13 http://archive.ubuntu.com precise/main i386 Packages [1641 kB]
Get:14 http://archive.ubuntu.com precise/restricted i386 Packages [9108 B]
Get:15 http://archive.ubuntu.com precise/universe i386 Packages [6180 kB]
Get:16 http://archive.ubuntu.com precise-updates/main Sources [609 kB]
Get:17 http://archive.ubuntu.com precise-updates/restricted Sources [8938 B]
Get:18 http://archive.ubuntu.com precise-updates/universe Sources [157 kB]
Get:19 http://archive.ubuntu.com precise-updates/main amd64 Packages [1280 kB]
Get:20 http://archive.ubuntu.com precise-updates/restricted amd64 Packages [24.0 kB]
Get:21 http://archive.ubuntu.com precise-updates/universe amd64 Packages [355 kB]
Get:22 http://archive.ubuntu.com precise-updates/main i386 Packages [1359 kB]
Get:23 http://archive.ubuntu.com precise-updates/restricted i386 Packages [24.0 kB]
Get:24 http://archive.ubuntu.com precise-updates/universe i386 Packages [366 kB]
Get:25 http://archive.ubuntu.com precise-security/main Sources [180 kB]
Get:26 http://archive.ubuntu.com precise-security/restricted Sources [4320 B]
Get:27 http://archive.ubuntu.com precise-security/universe Sources [56.8 kB]
Get:28 http://archive.ubuntu.com precise-security/main amd64 Packages [780 kB]
Get:29 http://archive.ubuntu.com precise-security/restricted amd64 Packages [18.3 kB]
Get:30 http://archive.ubuntu.com precise-security/universe amd64 Packages [170 kB]
Get:31 http://archive.ubuntu.com precise-security/main i386 Packages [857 kB]
Get:32 http://archive.ubuntu.com precise-security/restricted i386 Packages [18.3 kB]
Get:33 http://archive.ubuntu.com precise-security/universe i386 Packages [180 kB]
Fetched 29.7 MB in 12s (2388 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following extra packages will be installed:
  binutils bzip2 cpp cpp-4.6 dpkg-dev g++ g++-4.6 gcc gcc-4.6 git-man
  libapt-pkg4.12 libasn1-8-heimdal libbsd0 libc-dev-bin libc6-dev
  libclass-isa-perl libcurl3 libcurl3-gnutls libdpkg-perl libedit2
  liberror-perl libexpat1 libgcrypt11 libgdbm3 libgmp10 libgnutls26 libgomp1
  libgpg-error0 libgssapi-krb5-2 libgssapi3-heimdal libhcrypto4-heimdal
  libheimbase1-heimdal libheimntlm0-heimdal libhx509-5-heimdal libicu48
  libidn11 libk5crypto3 libkeyutils1 libkrb5-26-heimdal libkrb5-3
  libkrb5support0 libldap-2.4-2 libmpc2 libmpfr4 libp11-kit0 libquadmath0
  libroken18-heimdal librtmp0 libsasl2-2 libsqlite3-0 libstdc++6-4.6-dev
  libswitch-perl libtasn1-3 libtimedate-perl libwind0-heimdal linux-libc-dev
  make mime-support openssl patch perl perl-modules python python2.7
Suggested packages:
  binutils-doc bzip2-doc cpp-doc gcc-4.6-locales debian-keyring g++-multilib
  g++-4.6-multilib gcc-4.6-doc libstdc++6-4.6-dbg gcc-multilib manpages-dev
  autoconf automake1.9 libtool flex bison gdb gcc-doc gcc-4.6-multilib
  libmudflap0-4.6-dev libgcc1-dbg libgomp1-dbg libquadmath0-dbg
  libmudflap0-dbg binutils-gold git-daemon-run git-daemon-sysvinit git-doc
  git-el git-arch git-cvs git-svn git-email git-gui gitk gitweb glibc-doc
  rng-tools gnutls-bin krb5-doc krb5-user icu-doc libstdc++6-4.6-doc lsb
  make-doc ssh-askpass libpam-ssh keychain monkeysphere openssh-blacklist
  openssh-blacklist-extra ed diffutils-doc perl-doc libterm-readline-gnu-perl
  libterm-readline-perl-perl libpod-plainer-perl python-doc python-tk
  python2.7-doc
Recommended packages:
  fakeroot libalgorithm-merge-perl less rsync ssh-client krb5-locales
  libsasl2-modules file xauth netbase
The following NEW packages will be installed:
  apt-transport-https binutils build-essential bzip2 ca-certificates cpp
  cpp-4.6 curl dpkg-dev g++ g++-4.6 gcc gcc-4.6 git git-man libasn1-8-heimdal
  libbsd0 libc-dev-bin libc6-dev libclass-isa-perl libcurl3 libcurl3-gnutls
  libdpkg-perl libedit2 liberror-perl libexpat1 libgcrypt11 libgdbm3 libgmp10
  libgnutls26 libgomp1 libgpg-error0 libgssapi-krb5-2 libgssapi3-heimdal
  libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal
  libhx509-5-heimdal libicu-dev libicu48 libidn11 libk5crypto3 libkeyutils1
  libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2 libmpc2 libmpfr4
  libp11-kit0 libquadmath0 libroken18-heimdal librtmp0 libsasl2-2 libsqlite3-0
  libstdc++6-4.6-dev libswitch-perl libtasn1-3 libtimedate-perl
  libwind0-heimdal linux-libc-dev lsb-release make mime-support openssh-client
  openssl patch perl perl-modules python python-all python2.7 rlwrap
The following packages will be upgraded:
  libapt-pkg4.12
1 upgraded, 73 newly installed, 0 to remove and 1 not upgraded.
Need to get 71.4 MB of archives.
After this operation, 209 MB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu/ precise-updates/main libapt-pkg4.12 amd64 0.8.16~exp12ubuntu10.27 [934 kB]
Get:2 http://archive.ubuntu.com/ubuntu/ precise-updates/main libsqlite3-0 amd64 3.7.9-2ubuntu1.2 [349 kB]
Get:3 http://archive.ubuntu.com/ubuntu/ precise-updates/main libroken18-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [46.0 kB]
Get:4 http://archive.ubuntu.com/ubuntu/ precise-updates/main libasn1-8-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [220 kB]
Get:5 http://archive.ubuntu.com/ubuntu/ precise/main libbsd0 amd64 0.3.0-2 [31.6 kB]
Get:6 http://archive.ubuntu.com/ubuntu/ precise/main libgpg-error0 amd64 1.10-2ubuntu1 [14.5 kB]
Get:7 http://archive.ubuntu.com/ubuntu/ precise-updates/main libgcrypt11 amd64 1.5.0-3ubuntu0.5 [282 kB]
Get:8 http://archive.ubuntu.com/ubuntu/ precise/main libp11-kit0 amd64 0.12-2ubuntu1 [34.3 kB]
Get:9 http://archive.ubuntu.com/ubuntu/ precise-updates/main libtasn1-3 amd64 2.10-1ubuntu1.5 [43.6 kB]
Get:10 http://archive.ubuntu.com/ubuntu/ precise-updates/main libgnutls26 amd64 2.12.14-5ubuntu3.12 [460 kB]
Get:11 http://archive.ubuntu.com/ubuntu/ precise-updates/main libkrb5support0 amd64 1.10+dfsg~beta1-2ubuntu0.7 [24.9 kB]
Get:12 http://archive.ubuntu.com/ubuntu/ precise-updates/main libk5crypto3 amd64 1.10+dfsg~beta1-2ubuntu0.7 [80.1 kB]
Get:13 http://archive.ubuntu.com/ubuntu/ precise/main libkeyutils1 amd64 1.5.2-2 [7862 B]
Get:14 http://archive.ubuntu.com/ubuntu/ precise-updates/main libkrb5-3 amd64 1.10+dfsg~beta1-2ubuntu0.7 [355 kB]
Get:15 http://archive.ubuntu.com/ubuntu/ precise-updates/main libgssapi-krb5-2 amd64 1.10+dfsg~beta1-2ubuntu0.7 [119 kB]
Get:16 http://archive.ubuntu.com/ubuntu/ precise/main libidn11 amd64 1.23-2 [112 kB]
Get:17 http://archive.ubuntu.com/ubuntu/ precise-updates/main libhcrypto4-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [103 kB]
Get:18 http://archive.ubuntu.com/ubuntu/ precise-updates/main libheimbase1-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [33.1 kB]
Get:19 http://archive.ubuntu.com/ubuntu/ precise-updates/main libwind0-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [77.8 kB]
Get:20 http://archive.ubuntu.com/ubuntu/ precise-updates/main libhx509-5-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [125 kB]
Get:21 http://archive.ubuntu.com/ubuntu/ precise-updates/main libkrb5-26-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [234 kB]
Get:22 http://archive.ubuntu.com/ubuntu/ precise-updates/main libheimntlm0-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [16.0 kB]
Get:23 http://archive.ubuntu.com/ubuntu/ precise-updates/main libgssapi3-heimdal amd64 1.6~git20120311.dfsg.1-2ubuntu0.1 [108 kB]
Get:24 http://archive.ubuntu.com/ubuntu/ precise-updates/main libsasl2-2 amd64 2.1.25.dfsg1-3ubuntu0.1 [69.1 kB]
Get:25 http://archive.ubuntu.com/ubuntu/ precise-updates/main libldap-2.4-2 amd64 2.4.28-1.1ubuntu4.6 [185 kB]
Get:26 http://archive.ubuntu.com/ubuntu/ precise/main librtmp0 amd64 2.4~20110711.gitc28f1bab-1 [57.1 kB]
Get:27 http://archive.ubuntu.com/ubuntu/ precise-updates/main openssl amd64 1.0.1-4ubuntu5.36 [524 kB]
Get:28 http://archive.ubuntu.com/ubuntu/ precise-updates/main ca-certificates all 20160104ubuntu0.12.04.1 [208 kB]
Get:29 http://archive.ubuntu.com/ubuntu/ precise-updates/main libcurl3-gnutls amd64 7.22.0-3ubuntu4.15 [228 kB]
Get:30 http://archive.ubuntu.com/ubuntu/ precise/main libedit2 amd64 2.11-20080614-3ubuntu2 [70.3 kB]
Get:31 http://archive.ubuntu.com/ubuntu/ precise/main libgdbm3 amd64 1.8.3-10 [35.3 kB]
Get:32 http://archive.ubuntu.com/ubuntu/ precise-updates/main libcurl3 amd64 7.22.0-3ubuntu4.15 [236 kB]
Get:33 http://archive.ubuntu.com/ubuntu/ precise-updates/main libexpat1 amd64 2.0.1-7.2ubuntu1.3 [131 kB]
Get:34 http://archive.ubuntu.com/ubuntu/ precise/main libgmp10 amd64 2:5.0.2+dfsg-2ubuntu1 [238 kB]
Get:35 http://archive.ubuntu.com/ubuntu/ precise/main libgomp1 amd64 4.6.3-1ubuntu5 [25.5 kB]
Get:36 http://archive.ubuntu.com/ubuntu/ precise/main libmpfr4 amd64 3.1.0-3ubuntu2 [201 kB]
Get:37 http://archive.ubuntu.com/ubuntu/ precise/main libquadmath0 amd64 4.6.3-1ubuntu5 [126 kB]
Get:38 http://archive.ubuntu.com/ubuntu/ precise/main libmpc2 amd64 0.9-4 [39.5 kB]
Get:39 http://archive.ubuntu.com/ubuntu/ precise/main bzip2 amd64 1.0.6-1 [37.8 kB]
Get:40 http://archive.ubuntu.com/ubuntu/ precise-updates/main mime-support all 3.51-1ubuntu1.1 [30.4 kB]
Get:41 http://archive.ubuntu.com/ubuntu/ precise-updates/main python2.7 amd64 2.7.3-0ubuntu3.8 [2676 kB]
Get:42 http://archive.ubuntu.com/ubuntu/ precise-updates/main python amd64 2.7.3-0ubuntu2.2 [168 kB]
Get:43 http://archive.ubuntu.com/ubuntu/ precise-updates/main lsb-release all 4.0-0ubuntu20.3 [11.0 kB]
Get:44 http://archive.ubuntu.com/ubuntu/ precise-updates/main apt-transport-https amd64 0.8.16~exp12ubuntu10.27 [16.4 kB]
Get:45 http://archive.ubuntu.com/ubuntu/ precise-updates/main openssh-client amd64 1:5.9p1-5ubuntu1.9 [943 kB]
Get:46 http://archive.ubuntu.com/ubuntu/ precise-updates/main binutils amd64 2.22-6ubuntu1.3 [2657 kB]
Get:47 http://archive.ubuntu.com/ubuntu/ precise-updates/main libc-dev-bin amd64 2.15-0ubuntu10.13 [84.7 kB]
Get:48 http://archive.ubuntu.com/ubuntu/ precise-updates/main linux-libc-dev amd64 3.2.0-102.142 [860 kB]
Get:49 http://archive.ubuntu.com/ubuntu/ precise-updates/main libc6-dev amd64 2.15-0ubuntu10.13 [2943 kB]
Get:50 http://archive.ubuntu.com/ubuntu/ precise/main cpp-4.6 amd64 4.6.3-1ubuntu5 [4836 kB]
Get:51 http://archive.ubuntu.com/ubuntu/ precise/main cpp amd64 4:4.6.3-1ubuntu5 [27.6 kB]
Get:52 http://archive.ubuntu.com/ubuntu/ precise/main gcc-4.6 amd64 4.6.3-1ubuntu5 [7572 kB]
Get:53 http://archive.ubuntu.com/ubuntu/ precise/main gcc amd64 4:4.6.3-1ubuntu5 [5114 B]
Get:54 http://archive.ubuntu.com/ubuntu/ precise/main libstdc++6-4.6-dev amd64 4.6.3-1ubuntu5 [1660 kB]
Get:55 http://archive.ubuntu.com/ubuntu/ precise/main g++-4.6 amd64 4.6.3-1ubuntu5 [6954 kB]
Get:56 http://archive.ubuntu.com/ubuntu/ precise/main g++ amd64 4:4.6.3-1ubuntu5 [1442 B]
Get:57 http://archive.ubuntu.com/ubuntu/ precise-updates/main make amd64 3.81-8.1ubuntu1.1 [119 kB]
Get:58 http://archive.ubuntu.com/ubuntu/ precise/main libswitch-perl all 2.16-2 [19.2 kB]
Get:59 http://archive.ubuntu.com/ubuntu/ precise/main libclass-isa-perl all 0.36-3 [11.9 kB]
Get:60 http://archive.ubuntu.com/ubuntu/ precise-updates/main perl-modules all 5.14.2-6ubuntu2.5 [3397 kB]
Get:61 http://archive.ubuntu.com/ubuntu/ precise-updates/main perl amd64 5.14.2-6ubuntu2.5 [4412 kB]
Get:62 http://archive.ubuntu.com/ubuntu/ precise/main libtimedate-perl all 1.2000-1 [41.6 kB]
Get:63 http://archive.ubuntu.com/ubuntu/ precise-updates/main libdpkg-perl all 1.16.1.2ubuntu7.7 [181 kB]
Get:64 http://archive.ubuntu.com/ubuntu/ precise-updates/main patch amd64 2.6.1-3ubuntu0.1 [80.0 kB]
Get:65 http://archive.ubuntu.com/ubuntu/ precise-updates/main dpkg-dev all 1.16.1.2ubuntu7.7 [469 kB]
Get:66 http://archive.ubuntu.com/ubuntu/ precise-updates/main build-essential amd64 11.5ubuntu2.1 [5816 B]
Get:67 http://archive.ubuntu.com/ubuntu/ precise-updates/main curl amd64 7.22.0-3ubuntu4.15 [138 kB]
Get:68 http://archive.ubuntu.com/ubuntu/ precise/main liberror-perl all 0.17-1 [23.8 kB]
Get:69 http://archive.ubuntu.com/ubuntu/ precise-updates/main git-man all 1:1.7.9.5-1ubuntu0.3 [632 kB]
Get:70 http://archive.ubuntu.com/ubuntu/ precise-updates/main git amd64 1:1.7.9.5-1ubuntu0.3 [6103 kB]
Get:71 http://archive.ubuntu.com/ubuntu/ precise-updates/main libicu48 amd64 4.8.1.1-3ubuntu0.6 [8143 kB]
Get:72 http://archive.ubuntu.com/ubuntu/ precise-updates/main libicu-dev amd64 4.8.1.1-3ubuntu0.6 [9837 kB]
Get:73 http://archive.ubuntu.com/ubuntu/ precise-updates/main python-all amd64 2.7.3-0ubuntu2.2 [912 B]
Get:74 http://archive.ubuntu.com/ubuntu/ precise/universe rlwrap amd64 0.37-2 [81.0 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 71.4 MB in 26s (2652 kB/s)
(Reading database ... 7579 files and directories currently installed.)
Preparing to replace libapt-pkg4.12 0.8.16~exp12ubuntu10.26 (using .../libapt-pkg4.12_0.8.16~exp12ubuntu10.27_amd64.deb) ...
Unpacking replacement libapt-pkg4.12 ...
Setting up libapt-pkg4.12 (0.8.16~exp12ubuntu10.27) ...
Processing triggers for libc-bin ...
ldconfig deferred processing now taking place
Selecting previously unselected package libsqlite3-0.
(Reading database ... 7579 files and directories currently installed.)
Unpacking libsqlite3-0 (from .../libsqlite3-0_3.7.9-2ubuntu1.2_amd64.deb) ...
Selecting previously unselected package libroken18-heimdal.
Unpacking libroken18-heimdal (from .../libroken18-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libasn1-8-heimdal.
Unpacking libasn1-8-heimdal (from .../libasn1-8-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libbsd0.
Unpacking libbsd0 (from .../libbsd0_0.3.0-2_amd64.deb) ...
Selecting previously unselected package libgpg-error0.
Unpacking libgpg-error0 (from .../libgpg-error0_1.10-2ubuntu1_amd64.deb) ...
Selecting previously unselected package libgcrypt11.
Unpacking libgcrypt11 (from .../libgcrypt11_1.5.0-3ubuntu0.5_amd64.deb) ...
Selecting previously unselected package libp11-kit0.
Unpacking libp11-kit0 (from .../libp11-kit0_0.12-2ubuntu1_amd64.deb) ...
Selecting previously unselected package libtasn1-3.
Unpacking libtasn1-3 (from .../libtasn1-3_2.10-1ubuntu1.5_amd64.deb) ...
Selecting previously unselected package libgnutls26.
Unpacking libgnutls26 (from .../libgnutls26_2.12.14-5ubuntu3.12_amd64.deb) ...
Selecting previously unselected package libkrb5support0.
Unpacking libkrb5support0 (from .../libkrb5support0_1.10+dfsg~beta1-2ubuntu0.7_amd64.deb) ...
Selecting previously unselected package libk5crypto3.
Unpacking libk5crypto3 (from .../libk5crypto3_1.10+dfsg~beta1-2ubuntu0.7_amd64.deb) ...
Selecting previously unselected package libkeyutils1.
Unpacking libkeyutils1 (from .../libkeyutils1_1.5.2-2_amd64.deb) ...
Selecting previously unselected package libkrb5-3.
Unpacking libkrb5-3 (from .../libkrb5-3_1.10+dfsg~beta1-2ubuntu0.7_amd64.deb) ...
Selecting previously unselected package libgssapi-krb5-2.
Unpacking libgssapi-krb5-2 (from .../libgssapi-krb5-2_1.10+dfsg~beta1-2ubuntu0.7_amd64.deb) ...
Selecting previously unselected package libidn11.
Unpacking libidn11 (from .../libidn11_1.23-2_amd64.deb) ...
Selecting previously unselected package libhcrypto4-heimdal.
Unpacking libhcrypto4-heimdal (from .../libhcrypto4-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libheimbase1-heimdal.
Unpacking libheimbase1-heimdal (from .../libheimbase1-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libwind0-heimdal.
Unpacking libwind0-heimdal (from .../libwind0-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libhx509-5-heimdal.
Unpacking libhx509-5-heimdal (from .../libhx509-5-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libkrb5-26-heimdal.
Unpacking libkrb5-26-heimdal (from .../libkrb5-26-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libheimntlm0-heimdal.
Unpacking libheimntlm0-heimdal (from .../libheimntlm0-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libgssapi3-heimdal.
Unpacking libgssapi3-heimdal (from .../libgssapi3-heimdal_1.6~git20120311.dfsg.1-2ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libsasl2-2.
Unpacking libsasl2-2 (from .../libsasl2-2_2.1.25.dfsg1-3ubuntu0.1_amd64.deb) ...
Selecting previously unselected package libldap-2.4-2.
Unpacking libldap-2.4-2 (from .../libldap-2.4-2_2.4.28-1.1ubuntu4.6_amd64.deb) ...
Selecting previously unselected package librtmp0.
Unpacking librtmp0 (from .../librtmp0_2.4~20110711.gitc28f1bab-1_amd64.deb) ...
Selecting previously unselected package openssl.
Unpacking openssl (from .../openssl_1.0.1-4ubuntu5.36_amd64.deb) ...
Selecting previously unselected package ca-certificates.
Unpacking ca-certificates (from .../ca-certificates_20160104ubuntu0.12.04.1_all.deb) ...
Selecting previously unselected package libcurl3-gnutls.
Unpacking libcurl3-gnutls (from .../libcurl3-gnutls_7.22.0-3ubuntu4.15_amd64.deb) ...
Selecting previously unselected package libedit2.
Unpacking libedit2 (from .../libedit2_2.11-20080614-3ubuntu2_amd64.deb) ...
Selecting previously unselected package libgdbm3.
Unpacking libgdbm3 (from .../libgdbm3_1.8.3-10_amd64.deb) ...
Selecting previously unselected package libcurl3.
Unpacking libcurl3 (from .../libcurl3_7.22.0-3ubuntu4.15_amd64.deb) ...
Selecting previously unselected package libexpat1.
Unpacking libexpat1 (from .../libexpat1_2.0.1-7.2ubuntu1.3_amd64.deb) ...
Selecting previously unselected package libgmp10.
Unpacking libgmp10 (from .../libgmp10_2%3a5.0.2+dfsg-2ubuntu1_amd64.deb) ...
Selecting previously unselected package libgomp1.
Unpacking libgomp1 (from .../libgomp1_4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package libmpfr4.
Unpacking libmpfr4 (from .../libmpfr4_3.1.0-3ubuntu2_amd64.deb) ...
Selecting previously unselected package libquadmath0.
Unpacking libquadmath0 (from .../libquadmath0_4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package libmpc2.
Unpacking libmpc2 (from .../libmpc2_0.9-4_amd64.deb) ...
Selecting previously unselected package bzip2.
Unpacking bzip2 (from .../bzip2_1.0.6-1_amd64.deb) ...
Selecting previously unselected package mime-support.
Unpacking mime-support (from .../mime-support_3.51-1ubuntu1.1_all.deb) ...
Selecting previously unselected package python2.7.
Unpacking python2.7 (from .../python2.7_2.7.3-0ubuntu3.8_amd64.deb) ...
Selecting previously unselected package python.
Unpacking python (from .../python_2.7.3-0ubuntu2.2_amd64.deb) ...
Selecting previously unselected package lsb-release.
Unpacking lsb-release (from .../lsb-release_4.0-0ubuntu20.3_all.deb) ...
Selecting previously unselected package apt-transport-https.
Unpacking apt-transport-https (from .../apt-transport-https_0.8.16~exp12ubuntu10.27_amd64.deb) ...
Selecting previously unselected package openssh-client.
Unpacking openssh-client (from .../openssh-client_1%3a5.9p1-5ubuntu1.9_amd64.deb) ...
Selecting previously unselected package binutils.
Unpacking binutils (from .../binutils_2.22-6ubuntu1.3_amd64.deb) ...
Selecting previously unselected package libc-dev-bin.
Unpacking libc-dev-bin (from .../libc-dev-bin_2.15-0ubuntu10.13_amd64.deb) ...
Selecting previously unselected package linux-libc-dev.
Unpacking linux-libc-dev (from .../linux-libc-dev_3.2.0-102.142_amd64.deb) ...
Selecting previously unselected package libc6-dev.
Unpacking libc6-dev (from .../libc6-dev_2.15-0ubuntu10.13_amd64.deb) ...
Selecting previously unselected package cpp-4.6.
Unpacking cpp-4.6 (from .../cpp-4.6_4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package cpp.
Unpacking cpp (from .../cpp_4%3a4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package gcc-4.6.
Unpacking gcc-4.6 (from .../gcc-4.6_4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package gcc.
Unpacking gcc (from .../gcc_4%3a4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package libstdc++6-4.6-dev.
Unpacking libstdc++6-4.6-dev (from .../libstdc++6-4.6-dev_4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package g++-4.6.
Unpacking g++-4.6 (from .../g++-4.6_4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package g++.
Unpacking g++ (from .../g++_4%3a4.6.3-1ubuntu5_amd64.deb) ...
Selecting previously unselected package make.
Unpacking make (from .../make_3.81-8.1ubuntu1.1_amd64.deb) ...
Selecting previously unselected package libswitch-perl.
Unpacking libswitch-perl (from .../libswitch-perl_2.16-2_all.deb) ...
Selecting previously unselected package libclass-isa-perl.
Unpacking libclass-isa-perl (from .../libclass-isa-perl_0.36-3_all.deb) ...
Selecting previously unselected package perl-modules.
Unpacking perl-modules (from .../perl-modules_5.14.2-6ubuntu2.5_all.deb) ...
Selecting previously unselected package perl.
Unpacking perl (from .../perl_5.14.2-6ubuntu2.5_amd64.deb) ...
Selecting previously unselected package libtimedate-perl.
Unpacking libtimedate-perl (from .../libtimedate-perl_1.2000-1_all.deb) ...
Selecting previously unselected package libdpkg-perl.
Unpacking libdpkg-perl (from .../libdpkg-perl_1.16.1.2ubuntu7.7_all.deb) ...
Selecting previously unselected package patch.
Unpacking patch (from .../patch_2.6.1-3ubuntu0.1_amd64.deb) ...
Selecting previously unselected package dpkg-dev.
Unpacking dpkg-dev (from .../dpkg-dev_1.16.1.2ubuntu7.7_all.deb) ...
Selecting previously unselected package build-essential.
Unpacking build-essential (from .../build-essential_11.5ubuntu2.1_amd64.deb) ...
Selecting previously unselected package curl.
Unpacking curl (from .../curl_7.22.0-3ubuntu4.15_amd64.deb) ...
Selecting previously unselected package liberror-perl.
Unpacking liberror-perl (from .../liberror-perl_0.17-1_all.deb) ...
Selecting previously unselected package git-man.
Unpacking git-man (from .../git-man_1%3a1.7.9.5-1ubuntu0.3_all.deb) ...
Selecting previously unselected package git.
Unpacking git (from .../git_1%3a1.7.9.5-1ubuntu0.3_amd64.deb) ...
Selecting previously unselected package libicu48.
Unpacking libicu48 (from .../libicu48_4.8.1.1-3ubuntu0.6_amd64.deb) ...
Selecting previously unselected package libicu-dev.
Unpacking libicu-dev (from .../libicu-dev_4.8.1.1-3ubuntu0.6_amd64.deb) ...
Selecting previously unselected package python-all.
Unpacking python-all (from .../python-all_2.7.3-0ubuntu2.2_amd64.deb) ...
Selecting previously unselected package rlwrap.
Unpacking rlwrap (from .../rlwrap_0.37-2_amd64.deb) ...
Setting up libsqlite3-0 (3.7.9-2ubuntu1.2) ...
Setting up libroken18-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libasn1-8-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libbsd0 (0.3.0-2) ...
Setting up libgpg-error0 (1.10-2ubuntu1) ...
Setting up libgcrypt11 (1.5.0-3ubuntu0.5) ...
Setting up libp11-kit0 (0.12-2ubuntu1) ...
Setting up libtasn1-3 (2.10-1ubuntu1.5) ...
Setting up libgnutls26 (2.12.14-5ubuntu3.12) ...
Setting up libkrb5support0 (1.10+dfsg~beta1-2ubuntu0.7) ...
Setting up libk5crypto3 (1.10+dfsg~beta1-2ubuntu0.7) ...
Setting up libkeyutils1 (1.5.2-2) ...
Setting up libkrb5-3 (1.10+dfsg~beta1-2ubuntu0.7) ...
Setting up libgssapi-krb5-2 (1.10+dfsg~beta1-2ubuntu0.7) ...
Setting up libidn11 (1.23-2) ...
Setting up libhcrypto4-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libheimbase1-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libwind0-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libhx509-5-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libkrb5-26-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libheimntlm0-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libgssapi3-heimdal (1.6~git20120311.dfsg.1-2ubuntu0.1) ...
Setting up libsasl2-2 (2.1.25.dfsg1-3ubuntu0.1) ...
Setting up libldap-2.4-2 (2.4.28-1.1ubuntu4.6) ...
Setting up librtmp0 (2.4~20110711.gitc28f1bab-1) ...
Setting up openssl (1.0.1-4ubuntu5.36) ...
Setting up ca-certificates (20160104ubuntu0.12.04.1) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0m[91mUpdating certificates in /etc/ssl/certs... [0m[91m173 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d....[0m[91mdone.
[0mSetting up libcurl3-gnutls (7.22.0-3ubuntu4.15) ...
Setting up libedit2 (2.11-20080614-3ubuntu2) ...
Setting up libgdbm3 (1.8.3-10) ...
Setting up libcurl3 (7.22.0-3ubuntu4.15) ...
Setting up libexpat1 (2.0.1-7.2ubuntu1.3) ...
Setting up libgmp10 (2:5.0.2+dfsg-2ubuntu1) ...
Setting up libgomp1 (4.6.3-1ubuntu5) ...
Setting up libmpfr4 (3.1.0-3ubuntu2) ...
Setting up libquadmath0 (4.6.3-1ubuntu5) ...
Setting up libmpc2 (0.9-4) ...
Setting up bzip2 (1.0.6-1) ...
Setting up mime-support (3.51-1ubuntu1.1) ...
update-alternatives: using /usr/bin/see to provide /usr/bin/view (view) in auto mode.
Setting up python2.7 (2.7.3-0ubuntu3.8) ...
Setting up python (2.7.3-0ubuntu2.2) ...
Setting up lsb-release (4.0-0ubuntu20.3) ...
Setting up apt-transport-https (0.8.16~exp12ubuntu10.27) ...
Setting up openssh-client (1:5.9p1-5ubuntu1.9) ...
[91mdebconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
[0m[91mdebconf: unable to initialize frontend: Readline
debconf: (This frontend requires a controlling tty.)
debconf: falling back to frontend: Teletype
[0mSetting up binutils (2.22-6ubuntu1.3) ...
Setting up libc-dev-bin (2.15-0ubuntu10.13) ...
Setting up linux-libc-dev (3.2.0-102.142) ...
Setting up libc6-dev (2.15-0ubuntu10.13) ...
Setting up cpp-4.6 (4.6.3-1ubuntu5) ...
Setting up cpp (4:4.6.3-1ubuntu5) ...
Setting up gcc-4.6 (4.6.3-1ubuntu5) ...
Setting up gcc (4:4.6.3-1ubuntu5) ...
Setting up make (3.81-8.1ubuntu1.1) ...
Setting up libclass-isa-perl (0.36-3) ...
Setting up patch (2.6.1-3ubuntu0.1) ...
Setting up curl (7.22.0-3ubuntu4.15) ...
Setting up git-man (1:1.7.9.5-1ubuntu0.3) ...
Setting up libicu48 (4.8.1.1-3ubuntu0.6) ...
Setting up libicu-dev (4.8.1.1-3ubuntu0.6) ...
Setting up python-all (2.7.3-0ubuntu2.2) ...
Setting up rlwrap (0.37-2) ...
update-alternatives: using /usr/bin/rlwrap to provide /usr/bin/readline-editor (readline-editor) in auto mode.
Setting up libstdc++6-4.6-dev (4.6.3-1ubuntu5) ...
Setting up g++-4.6 (4.6.3-1ubuntu5) ...
Setting up g++ (4:4.6.3-1ubuntu5) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode.
Setting up libswitch-perl (2.16-2) ...
Setting up perl-modules (5.14.2-6ubuntu2.5) ...
Setting up perl (5.14.2-6ubuntu2.5) ...
update-alternatives: using /usr/bin/prename to provide /usr/bin/rename (rename) in auto mode.
Setting up libtimedate-perl (1.2000-1) ...
Setting up libdpkg-perl (1.16.1.2ubuntu7.7) ...
Setting up dpkg-dev (1.16.1.2ubuntu7.7) ...
Setting up build-essential (11.5ubuntu2.1) ...
Setting up liberror-perl (0.17-1) ...
Setting up git (1:1.7.9.5-1ubuntu0.3) ...
Processing triggers for libc-bin ...
ldconfig deferred processing now taking place
 ---> 6df7a06eb47c
Removing intermediate container 32e809132651
Successfully built 6df7a06eb47c

```

Array of tests: `[]`

# Tested image `nodesource/centos7-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM centos:7
7: Pulling from library/centos
a3ed95caeb02: Pulling fs layer
1534505fcbc6: Pulling fs layer
1534505fcbc6: Waiting
a3ed95caeb02: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
1534505fcbc6: Verifying Checksum
1534505fcbc6: Download complete
1534505fcbc6: Pull complete
1534505fcbc6: Pull complete
Digest: sha256:a0bce8434ce421f5a44d9e436f00e7058ccf7a13e8aab1817346b7151e95356f
Status: Downloaded newer image for centos:7
 ---> 8596123a638e
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in addf252d799c
 ---> 7b8086b1c76e
Removing intermediate container addf252d799c
Step 3 : RUN yum install -y       automake       libicu       curl       gcc       gcc-c++       git       kernel-devel       make       perl       which  && yum clean all
 ---> Running in 426d7fdd6aae
Loaded plugins: fastestmirror, ovl
Determining fastest mirrors
 * base: mirror.n5tech.com
 * extras: mirrors.kernel.org
 * updates: mirrors.cat.pdx.edu
Package curl-7.29.0-25.el7.centos.x86_64 already installed and latest version
Resolving Dependencies
--> Running transaction check
---> Package automake.noarch 0:1.13.4-3.el7 will be installed
--> Processing Dependency: autoconf >= 2.65 for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(threads) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(constant) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(Thread::Queue) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(TAP::Parser) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(Getopt::Long) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(File::Spec) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(File::Path) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(Exporter) for package: automake-1.13.4-3.el7.noarch
--> Processing Dependency: perl(Carp) for package: automake-1.13.4-3.el7.noarch
---> Package gcc.x86_64 0:4.8.5-4.el7 will be installed
--> Processing Dependency: libgomp = 4.8.5-4.el7 for package: gcc-4.8.5-4.el7.x86_64
--> Processing Dependency: cpp = 4.8.5-4.el7 for package: gcc-4.8.5-4.el7.x86_64
--> Processing Dependency: glibc-devel >= 2.2.90-12 for package: gcc-4.8.5-4.el7.x86_64
--> Processing Dependency: libmpfr.so.4()(64bit) for package: gcc-4.8.5-4.el7.x86_64
--> Processing Dependency: libmpc.so.3()(64bit) for package: gcc-4.8.5-4.el7.x86_64
--> Processing Dependency: libgomp.so.1()(64bit) for package: gcc-4.8.5-4.el7.x86_64
---> Package gcc-c++.x86_64 0:4.8.5-4.el7 will be installed
--> Processing Dependency: libstdc++-devel = 4.8.5-4.el7 for package: gcc-c++-4.8.5-4.el7.x86_64
---> Package git.x86_64 0:1.8.3.1-6.el7_2.1 will be installed
--> Processing Dependency: perl-Git = 1.8.3.1-6.el7_2.1 for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: rsync for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: perl(Term::ReadKey) for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: perl(Git) for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: perl(File::Temp) for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: perl(Error) for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: openssh-clients for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: less for package: git-1.8.3.1-6.el7_2.1.x86_64
--> Processing Dependency: libgnome-keyring.so.0()(64bit) for package: git-1.8.3.1-6.el7_2.1.x86_64
---> Package kernel-devel.x86_64 0:3.10.0-327.18.2.el7 will be installed
---> Package libicu.x86_64 0:50.1.2-15.el7 will be installed
---> Package make.x86_64 1:3.82-21.el7 will be installed
---> Package perl.x86_64 4:5.16.3-286.el7 will be installed
--> Processing Dependency: perl-libs = 4:5.16.3-286.el7 for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Socket) >= 1.3 for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Scalar::Util) >= 1.10 for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl-macros for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl-libs for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(threads::shared) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Time::Local) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Time::HiRes) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Storable) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Socket) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Scalar::Util) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Pod::Simple::XHTML) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Pod::Simple::Search) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: perl(Filter::Util::Call) for package: 4:perl-5.16.3-286.el7.x86_64
--> Processing Dependency: libperl.so()(64bit) for package: 4:perl-5.16.3-286.el7.x86_64
---> Package which.x86_64 0:2.20-7.el7 will be installed
--> Running transaction check
---> Package autoconf.noarch 0:2.69-11.el7 will be installed
--> Processing Dependency: m4 >= 1.4.14 for package: autoconf-2.69-11.el7.noarch
--> Processing Dependency: perl(Text::ParseWords) for package: autoconf-2.69-11.el7.noarch
--> Processing Dependency: perl(Data::Dumper) for package: autoconf-2.69-11.el7.noarch
---> Package cpp.x86_64 0:4.8.5-4.el7 will be installed
---> Package glibc-devel.x86_64 0:2.17-106.el7_2.6 will be installed
--> Processing Dependency: glibc-headers = 2.17-106.el7_2.6 for package: glibc-devel-2.17-106.el7_2.6.x86_64
--> Processing Dependency: glibc-headers for package: glibc-devel-2.17-106.el7_2.6.x86_64
---> Package less.x86_64 0:458-9.el7 will be installed
--> Processing Dependency: groff-base for package: less-458-9.el7.x86_64
---> Package libgnome-keyring.x86_64 0:3.8.0-3.el7 will be installed
---> Package libgomp.x86_64 0:4.8.5-4.el7 will be installed
---> Package libmpc.x86_64 0:1.0.1-3.el7 will be installed
---> Package libstdc++-devel.x86_64 0:4.8.5-4.el7 will be installed
---> Package mpfr.x86_64 0:3.1.1-4.el7 will be installed
---> Package openssh-clients.x86_64 0:6.6.1p1-25.el7_2 will be installed
--> Processing Dependency: openssh = 6.6.1p1-25.el7_2 for package: openssh-clients-6.6.1p1-25.el7_2.x86_64
--> Processing Dependency: fipscheck-lib(x86-64) >= 1.3.0 for package: openssh-clients-6.6.1p1-25.el7_2.x86_64
--> Processing Dependency: libfipscheck.so.1()(64bit) for package: openssh-clients-6.6.1p1-25.el7_2.x86_64
--> Processing Dependency: libedit.so.0()(64bit) for package: openssh-clients-6.6.1p1-25.el7_2.x86_64
---> Package perl-Carp.noarch 0:1.26-244.el7 will be installed
---> Package perl-Error.noarch 1:0.17020-2.el7 will be installed
---> Package perl-Exporter.noarch 0:5.68-3.el7 will be installed
---> Package perl-File-Path.noarch 0:2.09-2.el7 will be installed
---> Package perl-File-Temp.noarch 0:0.23.01-3.el7 will be installed
---> Package perl-Filter.x86_64 0:1.49-3.el7 will be installed
---> Package perl-Getopt-Long.noarch 0:2.40-2.el7 will be installed
--> Processing Dependency: perl(Pod::Usage) >= 1.14 for package: perl-Getopt-Long-2.40-2.el7.noarch
---> Package perl-Git.noarch 0:1.8.3.1-6.el7_2.1 will be installed
---> Package perl-PathTools.x86_64 0:3.40-5.el7 will be installed
---> Package perl-Pod-Simple.noarch 1:3.28-4.el7 will be installed
--> Processing Dependency: perl(Pod::Escapes) >= 1.04 for package: 1:perl-Pod-Simple-3.28-4.el7.noarch
--> Processing Dependency: perl(Encode) for package: 1:perl-Pod-Simple-3.28-4.el7.noarch
---> Package perl-Scalar-List-Utils.x86_64 0:1.27-248.el7 will be installed
---> Package perl-Socket.x86_64 0:2.010-3.el7 will be installed
---> Package perl-Storable.x86_64 0:2.45-3.el7 will be installed
---> Package perl-TermReadKey.x86_64 0:2.30-20.el7 will be installed
---> Package perl-Test-Harness.noarch 0:3.28-3.el7 will be installed
---> Package perl-Thread-Queue.noarch 0:3.02-2.el7 will be installed
---> Package perl-Time-HiRes.x86_64 4:1.9725-3.el7 will be installed
---> Package perl-Time-Local.noarch 0:1.2300-2.el7 will be installed
---> Package perl-constant.noarch 0:1.27-2.el7 will be installed
---> Package perl-libs.x86_64 4:5.16.3-286.el7 will be installed
---> Package perl-macros.x86_64 4:5.16.3-286.el7 will be installed
---> Package perl-threads.x86_64 0:1.87-4.el7 will be installed
---> Package perl-threads-shared.x86_64 0:1.43-6.el7 will be installed
---> Package rsync.x86_64 0:3.0.9-17.el7 will be installed
--> Running transaction check
---> Package fipscheck-lib.x86_64 0:1.4.1-5.el7 will be installed
--> Processing Dependency: /usr/bin/fipscheck for package: fipscheck-lib-1.4.1-5.el7.x86_64
---> Package glibc-headers.x86_64 0:2.17-106.el7_2.6 will be installed
--> Processing Dependency: kernel-headers >= 2.2.1 for package: glibc-headers-2.17-106.el7_2.6.x86_64
--> Processing Dependency: kernel-headers for package: glibc-headers-2.17-106.el7_2.6.x86_64
---> Package groff-base.x86_64 0:1.22.2-8.el7 will be installed
---> Package libedit.x86_64 0:3.0-12.20121213cvs.el7 will be installed
---> Package m4.x86_64 0:1.4.16-10.el7 will be installed
---> Package openssh.x86_64 0:6.6.1p1-25.el7_2 will be installed
---> Package perl-Data-Dumper.x86_64 0:2.145-3.el7 will be installed
---> Package perl-Encode.x86_64 0:2.51-7.el7 will be installed
---> Package perl-Pod-Escapes.noarch 1:1.04-286.el7 will be installed
---> Package perl-Pod-Usage.noarch 0:1.63-3.el7 will be installed
--> Processing Dependency: perl(Pod::Text) >= 3.15 for package: perl-Pod-Usage-1.63-3.el7.noarch
--> Processing Dependency: perl-Pod-Perldoc for package: perl-Pod-Usage-1.63-3.el7.noarch
---> Package perl-Text-ParseWords.noarch 0:3.29-4.el7 will be installed
--> Running transaction check
---> Package fipscheck.x86_64 0:1.4.1-5.el7 will be installed
---> Package kernel-headers.x86_64 0:3.10.0-327.18.2.el7 will be installed
---> Package perl-Pod-Perldoc.noarch 0:3.20-4.el7 will be installed
--> Processing Dependency: perl(parent) for package: perl-Pod-Perldoc-3.20-4.el7.noarch
--> Processing Dependency: perl(HTTP::Tiny) for package: perl-Pod-Perldoc-3.20-4.el7.noarch
---> Package perl-podlators.noarch 0:2.5.1-3.el7 will be installed
--> Running transaction check
---> Package perl-HTTP-Tiny.noarch 0:0.033-3.el7 will be installed
---> Package perl-parent.noarch 1:0.225-244.el7 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package                   Arch      Version                   Repository  Size
================================================================================
Installing:
 automake                  noarch    1.13.4-3.el7              base       679 k
 gcc                       x86_64    4.8.5-4.el7               base        16 M
 gcc-c++                   x86_64    4.8.5-4.el7               base       7.2 M
 git                       x86_64    1.8.3.1-6.el7_2.1         updates    4.4 M
 kernel-devel              x86_64    3.10.0-327.18.2.el7       updates     11 M
 libicu                    x86_64    50.1.2-15.el7             base       6.9 M
 make                      x86_64    1:3.82-21.el7             base       420 k
 perl                      x86_64    4:5.16.3-286.el7          base       8.0 M
 which                     x86_64    2.20-7.el7                base        41 k
Installing for dependencies:
 autoconf                  noarch    2.69-11.el7               base       701 k
 cpp                       x86_64    4.8.5-4.el7               base       5.9 M
 fipscheck                 x86_64    1.4.1-5.el7               base        21 k
 fipscheck-lib             x86_64    1.4.1-5.el7               base        11 k
 glibc-devel               x86_64    2.17-106.el7_2.6          updates    1.0 M
 glibc-headers             x86_64    2.17-106.el7_2.6          updates    662 k
 groff-base                x86_64    1.22.2-8.el7              base       942 k
 kernel-headers            x86_64    3.10.0-327.18.2.el7       updates    3.2 M
 less                      x86_64    458-9.el7                 base       120 k
 libedit                   x86_64    3.0-12.20121213cvs.el7    base        92 k
 libgnome-keyring          x86_64    3.8.0-3.el7               base       109 k
 libgomp                   x86_64    4.8.5-4.el7               base       130 k
 libmpc                    x86_64    1.0.1-3.el7               base        51 k
 libstdc++-devel           x86_64    4.8.5-4.el7               base       1.5 M
 m4                        x86_64    1.4.16-10.el7             base       256 k
 mpfr                      x86_64    3.1.1-4.el7               base       203 k
 openssh                   x86_64    6.6.1p1-25.el7_2          updates    435 k
 openssh-clients           x86_64    6.6.1p1-25.el7_2          updates    639 k
 perl-Carp                 noarch    1.26-244.el7              base        19 k
 perl-Data-Dumper          x86_64    2.145-3.el7               base        47 k
 perl-Encode               x86_64    2.51-7.el7                base       1.5 M
 perl-Error                noarch    1:0.17020-2.el7           base        32 k
 perl-Exporter             noarch    5.68-3.el7                base        28 k
 perl-File-Path            noarch    2.09-2.el7                base        26 k
 perl-File-Temp            noarch    0.23.01-3.el7             base        56 k
 perl-Filter               x86_64    1.49-3.el7                base        76 k
 perl-Getopt-Long          noarch    2.40-2.el7                base        56 k
 perl-Git                  noarch    1.8.3.1-6.el7_2.1         updates     53 k
 perl-HTTP-Tiny            noarch    0.033-3.el7               base        38 k
 perl-PathTools            x86_64    3.40-5.el7                base        82 k
 perl-Pod-Escapes          noarch    1:1.04-286.el7            base        50 k
 perl-Pod-Perldoc          noarch    3.20-4.el7                base        87 k
 perl-Pod-Simple           noarch    1:3.28-4.el7              base       216 k
 perl-Pod-Usage            noarch    1.63-3.el7                base        27 k
 perl-Scalar-List-Utils    x86_64    1.27-248.el7              base        36 k
 perl-Socket               x86_64    2.010-3.el7               base        49 k
 perl-Storable             x86_64    2.45-3.el7                base        77 k
 perl-TermReadKey          x86_64    2.30-20.el7               base        31 k
 perl-Test-Harness         noarch    3.28-3.el7                base       302 k
 perl-Text-ParseWords      noarch    3.29-4.el7                base        14 k
 perl-Thread-Queue         noarch    3.02-2.el7                base        17 k
 perl-Time-HiRes           x86_64    4:1.9725-3.el7            base        45 k
 perl-Time-Local           noarch    1.2300-2.el7              base        24 k
 perl-constant             noarch    1.27-2.el7                base        19 k
 perl-libs                 x86_64    4:5.16.3-286.el7          base       687 k
 perl-macros               x86_64    4:5.16.3-286.el7          base        43 k
 perl-parent               noarch    1:0.225-244.el7           base        12 k
 perl-podlators            noarch    2.5.1-3.el7               base       112 k
 perl-threads              x86_64    1.87-4.el7                base        49 k
 perl-threads-shared       x86_64    1.43-6.el7                base        39 k
 rsync                     x86_64    3.0.9-17.el7              base       360 k

Transaction Summary
================================================================================
Install  9 Packages (+51 Dependent packages)

Total download size: 75 M
Installed size: 214 M
Downloading packages:
Delta RPMs disabled because /usr/bin/applydeltarpm not installed.
[91mwarning: /var/cache/yum/x86_64/7/base/packages/fipscheck-lib-1.4.1-5.el7.x86_64.rpm: Header V3 RSA/SHA256 Signature, key ID f4a80eb5: NOKEY
[0mPublic key for fipscheck-lib-1.4.1-5.el7.x86_64.rpm is not installed
Public key for glibc-devel-2.17-106.el7_2.6.x86_64.rpm is not installed
--------------------------------------------------------------------------------
Total                                              5.6 MB/s |  75 MB  00:13     
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
[91mImporting GPG key 0xF4A80EB5:
 Userid     : "CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>"
 Fingerprint: 6341 ab27 53d7 8a78 a7c2 7bb1 24c6 a8a7 f4a8 0eb5
 Package    : centos-release-7-2.1511.el7.centos.2.10.x86_64 (@CentOS)
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
[0mRunning transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : mpfr-3.1.1-4.el7.x86_64                                     1/60 
  Installing : libmpc-1.0.1-3.el7.x86_64                                   2/60 
  Installing : groff-base-1.22.2-8.el7.x86_64                              3/60 
  Installing : 1:perl-parent-0.225-244.el7.noarch                          4/60 
  Installing : perl-HTTP-Tiny-0.033-3.el7.noarch                           5/60 
  Installing : perl-podlators-2.5.1-3.el7.noarch                           6/60 
  Installing : perl-Pod-Perldoc-3.20-4.el7.noarch                          7/60 
  Installing : 1:perl-Pod-Escapes-1.04-286.el7.noarch                      8/60 
  Installing : perl-Text-ParseWords-3.29-4.el7.noarch                      9/60 
  Installing : perl-Encode-2.51-7.el7.x86_64                              10/60 
  Installing : perl-Pod-Usage-1.63-3.el7.noarch                           11/60 
  Installing : 4:perl-libs-5.16.3-286.el7.x86_64                          12/60 
  Installing : 4:perl-macros-5.16.3-286.el7.x86_64                        13/60 
  Installing : 4:perl-Time-HiRes-1.9725-3.el7.x86_64                      14/60 
  Installing : perl-Exporter-5.68-3.el7.noarch                            15/60 
  Installing : perl-constant-1.27-2.el7.noarch                            16/60 
  Installing : perl-Time-Local-1.2300-2.el7.noarch                        17/60 
  Installing : perl-Carp-1.26-244.el7.noarch                              18/60 
  Installing : perl-Storable-2.45-3.el7.x86_64                            19/60 
  Installing : perl-PathTools-3.40-5.el7.x86_64                           20/60 
  Installing : perl-Scalar-List-Utils-1.27-248.el7.x86_64                 21/60 
  Installing : perl-File-Temp-0.23.01-3.el7.noarch                        22/60 
  Installing : perl-File-Path-2.09-2.el7.noarch                           23/60 
  Installing : perl-threads-shared-1.43-6.el7.x86_64                      24/60 
  Installing : perl-threads-1.87-4.el7.x86_64                             25/60 
  Installing : perl-Socket-2.010-3.el7.x86_64                             26/60 
  Installing : perl-Filter-1.49-3.el7.x86_64                              27/60 
  Installing : 1:perl-Pod-Simple-3.28-4.el7.noarch                        28/60 
  Installing : perl-Getopt-Long-2.40-2.el7.noarch                         29/60 
  Installing : 4:perl-5.16.3-286.el7.x86_64                               30/60 
  Installing : 1:perl-Error-0.17020-2.el7.noarch                          31/60 
  Installing : perl-TermReadKey-2.30-20.el7.x86_64                        32/60 
  Installing : perl-Thread-Queue-3.02-2.el7.noarch                        33/60 
  Installing : perl-Data-Dumper-2.145-3.el7.x86_64                        34/60 
  Installing : perl-Test-Harness-3.28-3.el7.noarch                        35/60 
  Installing : less-458-9.el7.x86_64                                      36/60 
  Installing : cpp-4.8.5-4.el7.x86_64                                     37/60 
  Installing : fipscheck-lib-1.4.1-5.el7.x86_64                           38/60 
  Installing : fipscheck-1.4.1-5.el7.x86_64                               39/60 
  Installing : openssh-6.6.1p1-25.el7_2.x86_64                            40/60 
  Installing : rsync-3.0.9-17.el7.x86_64                                  41/60 
  Installing : libstdc++-devel-4.8.5-4.el7.x86_64                         42/60 
  Installing : m4-1.4.16-10.el7.x86_64                                    43/60 
  Installing : autoconf-2.69-11.el7.noarch                                44/60 
install-info: No such file or directory for /usr/share/info/autoconf.info
  Installing : libgnome-keyring-3.8.0-3.el7.x86_64                        45/60 
  Installing : kernel-headers-3.10.0-327.18.2.el7.x86_64                  46/60 
  Installing : glibc-headers-2.17-106.el7_2.6.x86_64                      47/60 
  Installing : glibc-devel-2.17-106.el7_2.6.x86_64                        48/60 
  Installing : libedit-3.0-12.20121213cvs.el7.x86_64                      49/60 
  Installing : openssh-clients-6.6.1p1-25.el7_2.x86_64                    50/60 
  Installing : perl-Git-1.8.3.1-6.el7_2.1.noarch                          51/60 
  Installing : git-1.8.3.1-6.el7_2.1.x86_64                               52/60 
  Installing : libgomp-4.8.5-4.el7.x86_64                                 53/60 
  Installing : gcc-4.8.5-4.el7.x86_64                                     54/60 
  Installing : gcc-c++-4.8.5-4.el7.x86_64                                 55/60 
  Installing : automake-1.13.4-3.el7.noarch                               56/60 
install-info: No such file or directory for /usr/share/info/automake.info.gz
  Installing : kernel-devel-3.10.0-327.18.2.el7.x86_64                    57/60 
  Installing : 1:make-3.82-21.el7.x86_64                                  58/60 
  Installing : libicu-50.1.2-15.el7.x86_64                                59/60 
  Installing : which-2.20-7.el7.x86_64                                    60/60 
install-info: No such file or directory for /usr/share/info/which.info.gz
  Verifying  : perl-HTTP-Tiny-0.033-3.el7.noarch                           1/60 
  Verifying  : libgomp-4.8.5-4.el7.x86_64                                  2/60 
  Verifying  : kernel-devel-3.10.0-327.18.2.el7.x86_64                     3/60 
  Verifying  : gcc-4.8.5-4.el7.x86_64                                      4/60 
  Verifying  : libedit-3.0-12.20121213cvs.el7.x86_64                       5/60 
  Verifying  : perl-threads-shared-1.43-6.el7.x86_64                       6/60 
  Verifying  : 4:perl-Time-HiRes-1.9725-3.el7.x86_64                       7/60 
  Verifying  : mpfr-3.1.1-4.el7.x86_64                                     8/60 
  Verifying  : perl-Exporter-5.68-3.el7.noarch                             9/60 
  Verifying  : perl-constant-1.27-2.el7.noarch                            10/60 
  Verifying  : perl-PathTools-3.40-5.el7.x86_64                           11/60 
  Verifying  : gcc-c++-4.8.5-4.el7.x86_64                                 12/60 
  Verifying  : automake-1.13.4-3.el7.noarch                               13/60 
  Verifying  : 4:perl-libs-5.16.3-286.el7.x86_64                          14/60 
  Verifying  : 4:perl-macros-5.16.3-286.el7.x86_64                        15/60 
  Verifying  : fipscheck-1.4.1-5.el7.x86_64                               16/60 
  Verifying  : 1:perl-Pod-Escapes-1.04-286.el7.noarch                     17/60 
  Verifying  : kernel-headers-3.10.0-327.18.2.el7.x86_64                  18/60 
  Verifying  : 1:perl-parent-0.225-244.el7.noarch                         19/60 
  Verifying  : perl-TermReadKey-2.30-20.el7.x86_64                        20/60 
  Verifying  : perl-Pod-Usage-1.63-3.el7.noarch                           21/60 
  Verifying  : 4:perl-5.16.3-286.el7.x86_64                               22/60 
  Verifying  : which-2.20-7.el7.x86_64                                    23/60 
  Verifying  : groff-base-1.22.2-8.el7.x86_64                             24/60 
  Verifying  : perl-Thread-Queue-3.02-2.el7.noarch                        25/60 
  Verifying  : perl-File-Temp-0.23.01-3.el7.noarch                        26/60 
  Verifying  : 1:perl-Pod-Simple-3.28-4.el7.noarch                        27/60 
  Verifying  : perl-Time-Local-1.2300-2.el7.noarch                        28/60 
  Verifying  : perl-Pod-Perldoc-3.20-4.el7.noarch                         29/60 
  Verifying  : 1:perl-Error-0.17020-2.el7.noarch                          30/60 
  Verifying  : openssh-6.6.1p1-25.el7_2.x86_64                            31/60 
  Verifying  : perl-Carp-1.26-244.el7.noarch                              32/60 
  Verifying  : glibc-headers-2.17-106.el7_2.6.x86_64                      33/60 
  Verifying  : perl-Data-Dumper-2.145-3.el7.x86_64                        34/60 
  Verifying  : perl-Git-1.8.3.1-6.el7_2.1.noarch                          35/60 
  Verifying  : perl-Storable-2.45-3.el7.x86_64                            36/60 
  Verifying  : glibc-devel-2.17-106.el7_2.6.x86_64                        37/60 
  Verifying  : perl-Scalar-List-Utils-1.27-248.el7.x86_64                 38/60 
  Verifying  : libmpc-1.0.1-3.el7.x86_64                                  39/60 
  Verifying  : fipscheck-lib-1.4.1-5.el7.x86_64                           40/60 
  Verifying  : libgnome-keyring-3.8.0-3.el7.x86_64                        41/60 
  Verifying  : m4-1.4.16-10.el7.x86_64                                    42/60 
  Verifying  : perl-Encode-2.51-7.el7.x86_64                              43/60 
  Verifying  : libstdc++-devel-4.8.5-4.el7.x86_64                         44/60 
  Verifying  : perl-podlators-2.5.1-3.el7.noarch                          45/60 
  Verifying  : perl-Getopt-Long-2.40-2.el7.noarch                         46/60 
  Verifying  : autoconf-2.69-11.el7.noarch                                47/60 
  Verifying  : cpp-4.8.5-4.el7.x86_64                                     48/60 
  Verifying  : perl-File-Path-2.09-2.el7.noarch                           49/60 
  Verifying  : libicu-50.1.2-15.el7.x86_64                                50/60 
  Verifying  : openssh-clients-6.6.1p1-25.el7_2.x86_64                    51/60 
  Verifying  : perl-threads-1.87-4.el7.x86_64                             52/60 
  Verifying  : 1:make-3.82-21.el7.x86_64                                  53/60 
  Verifying  : perl-Socket-2.010-3.el7.x86_64                             54/60 
  Verifying  : perl-Filter-1.49-3.el7.x86_64                              55/60 
  Verifying  : perl-Text-ParseWords-3.29-4.el7.noarch                     56/60 
  Verifying  : git-1.8.3.1-6.el7_2.1.x86_64                               57/60 
  Verifying  : rsync-3.0.9-17.el7.x86_64                                  58/60 
  Verifying  : perl-Test-Harness-3.28-3.el7.noarch                        59/60 
  Verifying  : less-458-9.el7.x86_64                                      60/60 

Installed:
  automake.noarch 0:1.13.4-3.el7               gcc.x86_64 0:4.8.5-4.el7         
  gcc-c++.x86_64 0:4.8.5-4.el7                 git.x86_64 0:1.8.3.1-6.el7_2.1   
  kernel-devel.x86_64 0:3.10.0-327.18.2.el7    libicu.x86_64 0:50.1.2-15.el7    
  make.x86_64 1:3.82-21.el7                    perl.x86_64 4:5.16.3-286.el7     
  which.x86_64 0:2.20-7.el7                   

Dependency Installed:
  autoconf.noarch 0:2.69-11.el7                                                 
  cpp.x86_64 0:4.8.5-4.el7                                                      
  fipscheck.x86_64 0:1.4.1-5.el7                                                
  fipscheck-lib.x86_64 0:1.4.1-5.el7                                            
  glibc-devel.x86_64 0:2.17-106.el7_2.6                                         
  glibc-headers.x86_64 0:2.17-106.el7_2.6                                       
  groff-base.x86_64 0:1.22.2-8.el7                                              
  kernel-headers.x86_64 0:3.10.0-327.18.2.el7                                   
  less.x86_64 0:458-9.el7                                                       
  libedit.x86_64 0:3.0-12.20121213cvs.el7                                       
  libgnome-keyring.x86_64 0:3.8.0-3.el7                                         
  libgomp.x86_64 0:4.8.5-4.el7                                                  
  libmpc.x86_64 0:1.0.1-3.el7                                                   
  libstdc++-devel.x86_64 0:4.8.5-4.el7                                          
  m4.x86_64 0:1.4.16-10.el7                                                     
  mpfr.x86_64 0:3.1.1-4.el7                                                     
  openssh.x86_64 0:6.6.1p1-25.el7_2                                             
  openssh-clients.x86_64 0:6.6.1p1-25.el7_2                                     
  perl-Carp.noarch 0:1.26-244.el7                                               
  perl-Data-Dumper.x86_64 0:2.145-3.el7                                         
  perl-Encode.x86_64 0:2.51-7.el7                                               
  perl-Error.noarch 1:0.17020-2.el7                                             
  perl-Exporter.noarch 0:5.68-3.el7                                             
  perl-File-Path.noarch 0:2.09-2.el7                                            
  perl-File-Temp.noarch 0:0.23.01-3.el7                                         
  perl-Filter.x86_64 0:1.49-3.el7                                               
  perl-Getopt-Long.noarch 0:2.40-2.el7                                          
  perl-Git.noarch 0:1.8.3.1-6.el7_2.1                                           
  perl-HTTP-Tiny.noarch 0:0.033-3.el7                                           
  perl-PathTools.x86_64 0:3.40-5.el7                                            
  perl-Pod-Escapes.noarch 1:1.04-286.el7                                        
  perl-Pod-Perldoc.noarch 0:3.20-4.el7                                          
  perl-Pod-Simple.noarch 1:3.28-4.el7                                           
  perl-Pod-Usage.noarch 0:1.63-3.el7                                            
  perl-Scalar-List-Utils.x86_64 0:1.27-248.el7                                  
  perl-Socket.x86_64 0:2.010-3.el7                                              
  perl-Storable.x86_64 0:2.45-3.el7                                             
  perl-TermReadKey.x86_64 0:2.30-20.el7                                         
  perl-Test-Harness.noarch 0:3.28-3.el7                                         
  perl-Text-ParseWords.noarch 0:3.29-4.el7                                      
  perl-Thread-Queue.noarch 0:3.02-2.el7                                         
  perl-Time-HiRes.x86_64 4:1.9725-3.el7                                         
  perl-Time-Local.noarch 0:1.2300-2.el7                                         
  perl-constant.noarch 0:1.27-2.el7                                             
  perl-libs.x86_64 4:5.16.3-286.el7                                             
  perl-macros.x86_64 4:5.16.3-286.el7                                           
  perl-parent.noarch 1:0.225-244.el7                                            
  perl-podlators.noarch 0:2.5.1-3.el7                                           
  perl-threads.x86_64 0:1.87-4.el7                                              
  perl-threads-shared.x86_64 0:1.43-6.el7                                       
  rsync.x86_64 0:3.0.9-17.el7                                                   

Complete!
Loaded plugins: fastestmirror, ovl
Cleaning repos: base extras updates
Cleaning up everything
Cleaning up list of fastest mirrors
 ---> 0408f59f689c
Removing intermediate container 426d7fdd6aae
Successfully built 0408f59f689c

```

Array of tests: `[]`

# Tested image `nodesource/centos5-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM centos:5
5: Pulling from library/centos
a3ed95caeb02: Pulling fs layer
f3ac51548714: Pulling fs layer
a3ed95caeb02: Waiting
f3ac51548714: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
f3ac51548714: Verifying Checksum
f3ac51548714: Download complete
f3ac51548714: Pull complete
f3ac51548714: Pull complete
Digest: sha256:c9c37663ee2c7c1481500451d7c15e5f36619af3c73b21a6c80edd8d900701d7
Status: Downloaded newer image for centos:5
 ---> 505999341f87
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 9580f4630609
 ---> 54a158bdd2d1
Removing intermediate container 9580f4630609
Step 3 : RUN yum install -y       automake       libicu       curl       gcc       gcc-c++       git       kernel-devel       make       perl       which  && yum clean all
 ---> Running in 3be5b6d46794
Loaded plugins: fastestmirror
Determining fastest mirrors
 * base: mirror.hmc.edu
 * extras: mirror.pac-12.org
 * libselinux: mirrors.kernel.org
 * updates: mirror.scalabledns.com
Reducing CentOS-5 - libselinux to included packages only
Finished
Setting up Install Process
No package git available.
Resolving Dependencies
--> Running transaction check
---> Package automake.noarch 0:1.9.6-3.el5 set to be updated
--> Processing Dependency: autoconf >= 2.58 for package: automake
---> Package curl.i386 0:7.15.5-17.el5_9 set to be updated
--> Processing Dependency: libc.so.6(GLIBC_2.4) for package: curl
--> Processing Dependency: libgssapi_krb5.so.2 for package: curl
--> Processing Dependency: libdl.so.2(GLIBC_2.1) for package: curl
--> Processing Dependency: libc.so.6(GLIBC_2.1.3) for package: curl
--> Processing Dependency: libc.so.6(GLIBC_2.2) for package: curl
--> Processing Dependency: libidn.so.11 for package: curl
--> Processing Dependency: libz.so.1 for package: curl
--> Processing Dependency: libc.so.6 for package: curl
--> Processing Dependency: libdl.so.2 for package: curl
--> Processing Dependency: libgssapi_krb5.so.2(gssapi_krb5_2_MIT) for package: curl
--> Processing Dependency: libc.so.6(GLIBC_2.3) for package: curl
--> Processing Dependency: libc.so.6(GLIBC_2.3.4) for package: curl
--> Processing Dependency: libk5crypto.so.3 for package: curl
--> Processing Dependency: libc.so.6(GLIBC_2.1) for package: curl
--> Processing Dependency: libssl.so.6 for package: curl
--> Processing Dependency: libcom_err.so.2 for package: curl
--> Processing Dependency: libcrypto.so.6 for package: curl
--> Processing Dependency: libc.so.6(GLIBC_2.0) for package: curl
--> Processing Dependency: libdl.so.2(GLIBC_2.0) for package: curl
--> Processing Dependency: libkrb5.so.3 for package: curl
---> Package curl.x86_64 0:7.15.5-17.el5_9 set to be updated
--> Processing Dependency: libidn.so.11()(64bit) for package: curl
---> Package gcc.x86_64 0:4.1.2-55.el5 set to be updated
--> Processing Dependency: cpp = 4.1.2-55.el5 for package: gcc
--> Processing Dependency: libgomp >= 4.1.2-55.el5 for package: gcc
--> Processing Dependency: glibc-devel >= 2.2.90-12 for package: gcc
---> Package gcc-c++.x86_64 0:4.1.2-55.el5 set to be updated
--> Processing Dependency: libstdc++-devel = 4.1.2-55.el5 for package: gcc-c++
---> Package kernel-devel.x86_64 0:2.6.18-410.el5 set to be installed
---> Package libicu.i386 0:3.6-5.16.1 set to be updated
--> Processing Dependency: libstdc++.so.6(GLIBCXX_3.4) for package: libicu
--> Processing Dependency: libgcc_s.so.1(GCC_3.0) for package: libicu
--> Processing Dependency: libstdc++.so.6(CXXABI_1.3) for package: libicu
--> Processing Dependency: libgcc_s.so.1(GLIBC_2.0) for package: libicu
--> Processing Dependency: libgcc_s.so.1 for package: libicu
--> Processing Dependency: libstdc++.so.6 for package: libicu
---> Package libicu.x86_64 0:3.6-5.16.1 set to be updated
---> Package make.x86_64 1:3.81-3.el5 set to be updated
---> Package perl.i386 4:5.8.8-43.el5_11 set to be updated
--> Processing Dependency: libgdbm.so.2 for package: perl
--> Processing Dependency: libdb-4.3.so for package: perl
---> Package perl.x86_64 4:5.8.8-43.el5_11 set to be updated
---> Package which.x86_64 0:2.16-7 set to be updated
--> Running transaction check
---> Package autoconf.noarch 0:2.59-12 set to be updated
--> Processing Dependency: imake for package: autoconf
--> Processing Dependency: m4 for package: autoconf
---> Package cpp.x86_64 0:4.1.2-55.el5 set to be updated
---> Package db4.i386 0:4.3.29-10.el5_5.2 set to be updated
---> Package e2fsprogs-libs.i386 0:1.39-37.el5 set to be updated
--> Processing Dependency: libdevmapper.so.1.02 for package: e2fsprogs-libs
---> Package gdbm.i386 0:1.8.0-28.el5 set to be updated
---> Package glibc.i686 0:2.5-123.el5_11.3 set to be updated
---> Package glibc-devel.x86_64 0:2.5-123.el5_11.3 set to be updated
--> Processing Dependency: glibc-headers = 2.5-123.el5_11.3 for package: glibc-devel
--> Processing Dependency: glibc-headers for package: glibc-devel
---> Package krb5-libs.i386 0:1.6.1-80.el5_11 set to be updated
--> Processing Dependency: libkeyutils.so.1 for package: krb5-libs
--> Processing Dependency: libselinux.so.1 for package: krb5-libs
--> Processing Dependency: libkeyutils.so.1(KEYUTILS_0.3) for package: krb5-libs
---> Package libgcc.i386 0:4.1.2-55.el5 set to be updated
---> Package libgomp.x86_64 0:4.4.7-1.el5 set to be updated
---> Package libidn.i386 0:0.6.5-1.1 set to be updated
---> Package libidn.x86_64 0:0.6.5-1.1 set to be updated
---> Package libstdc++.i386 0:4.1.2-55.el5 set to be updated
---> Package libstdc++-devel.x86_64 0:4.1.2-55.el5 set to be updated
---> Package openssl.i686 0:0.9.8e-39.el5_11 set to be updated
---> Package zlib.i386 0:1.2.3-7.el5 set to be updated
--> Running transaction check
---> Package device-mapper.i386 0:1.02.67-2.el5_11.1 set to be updated
--> Processing Dependency: libsepol.so.1 for package: device-mapper
---> Package glibc-headers.x86_64 0:2.5-123.el5_11.3 set to be updated
--> Processing Dependency: kernel-headers >= 2.2.1 for package: glibc-headers
--> Processing Dependency: kernel-headers for package: glibc-headers
---> Package imake.x86_64 0:1.0.2-3 set to be updated
---> Package keyutils-libs.i386 0:1.2-1.el5 set to be updated
---> Package libselinux.i386 0:1.33.4-5.7.el5.centos set to be updated
---> Package m4.x86_64 0:1.4.5-3.el5.1 set to be updated
--> Running transaction check
---> Package kernel-headers.x86_64 0:2.6.18-410.el5 set to be updated
---> Package libsepol.i386 0:1.15.2-3.el5 set to be updated
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package             Arch       Version                    Repository      Size
================================================================================
Installing:
 automake            noarch     1.9.6-3.el5                base           476 k
 curl                i386       7.15.5-17.el5_9            base           235 k
 curl                x86_64     7.15.5-17.el5_9            base           232 k
 gcc                 x86_64     4.1.2-55.el5               base           5.3 M
 gcc-c++             x86_64     4.1.2-55.el5               base           3.8 M
 kernel-devel        x86_64     2.6.18-410.el5             updates        5.9 M
 libicu              i386       3.6-5.16.1                 base           5.3 M
 libicu              x86_64     3.6-5.16.1                 base           5.2 M
 make                x86_64     1:3.81-3.el5               base           470 k
 perl                i386       4:5.8.8-43.el5_11          updates         12 M
 perl                x86_64     4:5.8.8-43.el5_11          updates         12 M
 which               x86_64     2.16-7                     base            24 k
Installing for dependencies:
 autoconf            noarch     2.59-12                    base           647 k
 cpp                 x86_64     4.1.2-55.el5               base           2.9 M
 db4                 i386       4.3.29-10.el5_5.2          base           910 k
 device-mapper       i386       1.02.67-2.el5_11.1         updates        804 k
 e2fsprogs-libs      i386       1.39-37.el5                base           120 k
 gdbm                i386       1.8.0-28.el5               base            28 k
 glibc               i686       2.5-123.el5_11.3           updates        5.4 M
 glibc-devel         x86_64     2.5-123.el5_11.3           updates        2.4 M
 glibc-headers       x86_64     2.5-123.el5_11.3           updates        602 k
 imake               x86_64     1.0.2-3                    base           319 k
 kernel-headers      x86_64     2.6.18-410.el5             updates        1.5 M
 keyutils-libs       i386       1.2-1.el5                  base            18 k
 krb5-libs           i386       1.6.1-80.el5_11            updates        670 k
 libgcc              i386       4.1.2-55.el5               base            97 k
 libgomp             x86_64     4.4.7-1.el5                base            71 k
 libidn              i386       0.6.5-1.1                  base           194 k
 libidn              x86_64     0.6.5-1.1                  base           195 k
 libselinux          i386       1.33.4-5.7.el5.centos      libselinux      77 k
 libsepol            i386       1.15.2-3.el5               base           128 k
 libstdc++           i386       4.1.2-55.el5               base           364 k
 libstdc++-devel     x86_64     4.1.2-55.el5               base           2.8 M
 m4                  x86_64     1.4.5-3.el5.1              base           171 k
 openssl             i686       0.9.8e-39.el5_11           updates        1.7 M
 zlib                i386       1.2.3-7.el5                base            51 k

Transaction Summary
================================================================================
Install      36 Package(s)
Upgrade       0 Package(s)

Total download size: 73 M
Downloading Packages:
--------------------------------------------------------------------------------
Total                                           6.7 MB/s |  73 MB     00:10     
[91mwarning: rpmts_HdrFromFdno: Header V3 DSA signature: NOKEY, key ID e8562897
[0m[91mImporting GPG key 0xE8562897 "CentOS-5 Key (CentOS 5 Official Signing Key) <centos-5-key@centos.org>" from /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-5
[0mRunning rpm_check_debug
Running Transaction Test
Finished Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing     : kernel-headers                                          1/36 
  Installing     : kernel-devel                                            2/36 
  Installing     : libgcc                                                  3/36 
  Installing     : glibc                                                   4/36 
  Installing     : perl                                                    5/36 
  Installing     : libstdc++                                               6/36 
  Installing     : libsepol                                                7/36 
  Installing     : libselinux                                              8/36 
  Installing     : zlib                                                    9/36 
  Installing     : imake                                                  10/36 
  Installing     : cpp                                                    11/36 
  Installing     : libgomp                                                12/36 
  Installing     : m4                                                     13/36 
  Installing     : libidn                                                 14/36 
  Installing     : device-mapper                                          15/36 
  Installing     : e2fsprogs-libs                                         16/36 
  Installing     : db4                                                    17/36 
  Installing     : libidn                                                 18/36 
  Installing     : keyutils-libs                                          19/36 
  Installing     : krb5-libs                                              20/36 
  Installing     : openssl                                                21/36 
  Installing     : gdbm                                                   22/36 
  Installing     : curl                                                   23/36 
  Installing     : make                                                   24/36 
  Installing     : which                                                  25/36 
  Installing     : libicu                                                 26/36 
  Installing     : autoconf                                               27/36 
  Installing     : libstdc++-devel                                        28/36 
  Installing     : glibc-headers                                          29/36 
  Installing     : perl                                                   30/36 
  Installing     : curl                                                   31/36 
  Installing     : libicu                                                 32/36 
  Installing     : glibc-devel                                            33/36 
  Installing     : automake                                               34/36 
  Installing     : gcc                                                    35/36 
  Installing     : gcc-c++                                                36/36 

Installed:
  automake.noarch 0:1.9.6-3.el5       curl.i386 0:7.15.5-17.el5_9               
  curl.x86_64 0:7.15.5-17.el5_9       gcc.x86_64 0:4.1.2-55.el5                 
  gcc-c++.x86_64 0:4.1.2-55.el5       kernel-devel.x86_64 0:2.6.18-410.el5      
  libicu.i386 0:3.6-5.16.1            libicu.x86_64 0:3.6-5.16.1                
  make.x86_64 1:3.81-3.el5            perl.i386 4:5.8.8-43.el5_11               
  perl.x86_64 4:5.8.8-43.el5_11       which.x86_64 0:2.16-7                     

Dependency Installed:
  autoconf.noarch 0:2.59-12                                                     
  cpp.x86_64 0:4.1.2-55.el5                                                     
  db4.i386 0:4.3.29-10.el5_5.2                                                  
  device-mapper.i386 0:1.02.67-2.el5_11.1                                       
  e2fsprogs-libs.i386 0:1.39-37.el5                                             
  gdbm.i386 0:1.8.0-28.el5                                                      
  glibc.i686 0:2.5-123.el5_11.3                                                 
  glibc-devel.x86_64 0:2.5-123.el5_11.3                                         
  glibc-headers.x86_64 0:2.5-123.el5_11.3                                       
  imake.x86_64 0:1.0.2-3                                                        
  kernel-headers.x86_64 0:2.6.18-410.el5                                        
  keyutils-libs.i386 0:1.2-1.el5                                                
  krb5-libs.i386 0:1.6.1-80.el5_11                                              
  libgcc.i386 0:4.1.2-55.el5                                                    
  libgomp.x86_64 0:4.4.7-1.el5                                                  
  libidn.i386 0:0.6.5-1.1                                                       
  libidn.x86_64 0:0.6.5-1.1                                                     
  libselinux.i386 0:1.33.4-5.7.el5.centos                                       
  libsepol.i386 0:1.15.2-3.el5                                                  
  libstdc++.i386 0:4.1.2-55.el5                                                 
  libstdc++-devel.x86_64 0:4.1.2-55.el5                                         
  m4.x86_64 0:1.4.5-3.el5.1                                                     
  openssl.i686 0:0.9.8e-39.el5_11                                               
  zlib.i386 0:1.2.3-7.el5                                                       

Complete!
Loaded plugins: fastestmirror
Cleaning up Everything
Cleaning up list of fastest mirrors
 ---> 23e704a1e376
Removing intermediate container 3be5b6d46794
Step 4 : RUN rpm -ivh http://dl.fedoraproject.org/pub/epel/5/x86_64/epel-release-5-4.noarch.rpm  && yum install -y python26 git && yum clean all
 ---> Running in 200cd3c959be
[91mwarning: /var/tmp/rpm-xfer.sORxnf: Header V3 DSA signature: NOKEY, key ID 217521f6
[0mRetrieving http://dl.fedoraproject.org/pub/epel/5/x86_64/epel-release-5-4.noarch.rpm
Preparing...                ##################################################
epel-release                ##################################################
Loaded plugins: fastestmirror
Determining fastest mirrors
 * base: mirror.hmc.edu
 * extras: mirror.pac-12.org
 * libselinux: centos.sonn.com
 * updates: mirrors.usc.edu
Reducing CentOS-5 - libselinux to included packages only
Finished
Setting up Install Process
Resolving Dependencies
--> Running transaction check
---> Package git.x86_64 0:1.8.2.3-1.el5 set to be updated
--> Processing Dependency: perl-Git = 1.8.2.3-1.el5 for package: git
--> Processing Dependency: rsync for package: git
--> Processing Dependency: perl(Term::ReadKey) for package: git
--> Processing Dependency: perl(Git) for package: git
--> Processing Dependency: perl(Error) for package: git
--> Processing Dependency: openssh-clients for package: git
---> Package python26.x86_64 0:2.6.8-2.el5 set to be updated
--> Processing Dependency: libpython2.6.so.1.0()(64bit) for package: python26
--> Processing Dependency: libffi.so.5()(64bit) for package: python26
--> Running transaction check
---> Package libffi.x86_64 0:3.0.5-1.el5 set to be updated
---> Package openssh-clients.x86_64 0:4.3p2-82.el5 set to be updated
--> Processing Dependency: openssh = 4.3p2-82.el5 for package: openssh-clients
--> Processing Dependency: libfipscheck.so.1()(64bit) for package: openssh-clients
---> Package perl-Error.noarch 1:0.17010-1.el5 set to be updated
---> Package perl-Git.x86_64 0:1.8.2.3-1.el5 set to be updated
---> Package perl-TermReadKey.x86_64 0:2.30-4.el5 set to be updated
---> Package python26-libs.x86_64 0:2.6.8-2.el5 set to be updated
---> Package rsync.x86_64 0:3.0.6-6.el5_11 set to be updated
--> Running transaction check
---> Package fipscheck-lib.x86_64 0:1.2.0-1.el5 set to be updated
--> Processing Dependency: /usr/bin/fipscheck for package: fipscheck-lib
---> Package openssh.x86_64 0:4.3p2-82.el5 set to be updated
--> Running transaction check
---> Package fipscheck.x86_64 0:1.2.0-1.el5 set to be updated
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package                Arch         Version                Repository     Size
================================================================================
Installing:
 git                    x86_64       1.8.2.3-1.el5          epel           17 M
 python26               x86_64       2.6.8-2.el5            epel          6.5 M
Installing for dependencies:
 fipscheck              x86_64       1.2.0-1.el5            base           13 k
 fipscheck-lib          x86_64       1.2.0-1.el5            base          6.7 k
 libffi                 x86_64       3.0.5-1.el5            epel           24 k
 openssh                x86_64       4.3p2-82.el5           base          291 k
 openssh-clients        x86_64       4.3p2-82.el5           base          456 k
 perl-Error             noarch       1:0.17010-1.el5        epel           26 k
 perl-Git               x86_64       1.8.2.3-1.el5          epel           45 k
 perl-TermReadKey       x86_64       2.30-4.el5             epel           32 k
 python26-libs          x86_64       2.6.8-2.el5            epel          695 k
 rsync                  x86_64       3.0.6-6.el5_11         updates       347 k

Transaction Summary
================================================================================
Install      12 Package(s)
Upgrade       0 Package(s)

Total download size: 25 M
Downloading Packages:
--------------------------------------------------------------------------------
Total                                            10 MB/s |  25 MB     00:02     
[91mwarning: rpmts_HdrFromFdno: Header V3 DSA signature: NOKEY, key ID 217521f6
[0m[91mImporting GPG key 0x217521F6 "Fedora EPEL <epel@fedoraproject.org>" from /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL
[0mRunning rpm_check_debug
Running Transaction Test
Finished Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing     : perl-Error                                              1/12 
  Installing     : libffi                                                  2/12 
  Installing     : perl-TermReadKey                                        3/12 
  Installing     : rsync                                                   4/12 
  Installing     : fipscheck-lib                                           5/12 
  Installing     : openssh                                                 6/12 
  Installing     : openssh-clients                                         7/12 
  Installing     : python26                                                8/12 
  Installing     : fipscheck                                               9/12 
  Installing     : python26-libs                                          10/12 
  Installing     : git                                                    11/12 
  Installing     : perl-Git                                               12/12 

Installed:
  git.x86_64 0:1.8.2.3-1.el5            python26.x86_64 0:2.6.8-2.el5           

Dependency Installed:
  fipscheck.x86_64 0:1.2.0-1.el5          fipscheck-lib.x86_64 0:1.2.0-1.el5    
  libffi.x86_64 0:3.0.5-1.el5             openssh.x86_64 0:4.3p2-82.el5         
  openssh-clients.x86_64 0:4.3p2-82.el5   perl-Error.noarch 1:0.17010-1.el5     
  perl-Git.x86_64 0:1.8.2.3-1.el5         perl-TermReadKey.x86_64 0:2.30-4.el5  
  python26-libs.x86_64 0:2.6.8-2.el5      rsync.x86_64 0:3.0.6-6.el5_11         

Complete!
Loaded plugins: fastestmirror
Cleaning up Everything
Cleaning up list of fastest mirrors
 ---> df6e894d68ce
Removing intermediate container 200cd3c959be
Step 5 : ENV PYTHON python2.6
 ---> Running in b2d2d8b67ee7
 ---> 7515e0ea2c0c
Removing intermediate container b2d2d8b67ee7
Successfully built 7515e0ea2c0c

```

Array of tests: `[]`

# Tested image `nodesource/centos6-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM centos:6
6: Pulling from library/centos
a3ed95caeb02: Pulling fs layer
02b89e82a85f: Pulling fs layer
02b89e82a85f: Waiting
a3ed95caeb02: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
02b89e82a85f: Verifying Checksum
02b89e82a85f: Download complete
02b89e82a85f: Pull complete
02b89e82a85f: Pull complete
Digest: sha256:81b465e0e0146f7d177cf1725e6097436ae91be69cbb58e6b93f41025eb62d0d
Status: Downloaded newer image for centos:6
 ---> ae6154bcd445
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in bdaebfbd23a6
 ---> ba2edb323a9f
Removing intermediate container bdaebfbd23a6
Step 3 : RUN yum install -y       automake       libicu       curl       gcc       gcc-c++       git       kernel-devel       make       perl       which  && yum clean all
 ---> Running in edb8e0119ef6
Loaded plugins: fastestmirror
Setting up Install Process
Package curl-7.19.7-52.el6.x86_64 already installed and latest version
Package 1:make-3.81-23.el6.x86_64 already installed and latest version
Package which-2.19-6.el6.x86_64 already installed and latest version
Resolving Dependencies
--> Running transaction check
---> Package automake.noarch 0:1.11.1-4.el6 will be installed
--> Processing Dependency: autoconf >= 2.62 for package: automake-1.11.1-4.el6.noarch
---> Package gcc.x86_64 0:4.4.7-17.el6 will be installed
--> Processing Dependency: libgomp = 4.4.7-17.el6 for package: gcc-4.4.7-17.el6.x86_64
--> Processing Dependency: cpp = 4.4.7-17.el6 for package: gcc-4.4.7-17.el6.x86_64
--> Processing Dependency: glibc-devel >= 2.2.90-12 for package: gcc-4.4.7-17.el6.x86_64
--> Processing Dependency: cloog-ppl >= 0.15 for package: gcc-4.4.7-17.el6.x86_64
--> Processing Dependency: libgomp.so.1()(64bit) for package: gcc-4.4.7-17.el6.x86_64
---> Package gcc-c++.x86_64 0:4.4.7-17.el6 will be installed
--> Processing Dependency: libstdc++-devel = 4.4.7-17.el6 for package: gcc-c++-4.4.7-17.el6.x86_64
--> Processing Dependency: libmpfr.so.1()(64bit) for package: gcc-c++-4.4.7-17.el6.x86_64
---> Package git.x86_64 0:1.7.1-4.el6_7.1 will be installed
--> Processing Dependency: perl-Git = 1.7.1-4.el6_7.1 for package: git-1.7.1-4.el6_7.1.x86_64
--> Processing Dependency: rsync for package: git-1.7.1-4.el6_7.1.x86_64
--> Processing Dependency: perl(Git) for package: git-1.7.1-4.el6_7.1.x86_64
--> Processing Dependency: perl(Error) for package: git-1.7.1-4.el6_7.1.x86_64
--> Processing Dependency: openssh-clients for package: git-1.7.1-4.el6_7.1.x86_64
---> Package kernel-devel.x86_64 0:2.6.32-642.el6 will be installed
---> Package libicu.x86_64 0:4.2.1-14.el6 will be installed
---> Package perl.x86_64 4:5.10.1-141.el6_7.1 will be installed
--> Processing Dependency: perl-libs = 4:5.10.1-141.el6_7.1 for package: 4:perl-5.10.1-141.el6_7.1.x86_64
--> Processing Dependency: perl-libs for package: 4:perl-5.10.1-141.el6_7.1.x86_64
--> Processing Dependency: perl(version) for package: 4:perl-5.10.1-141.el6_7.1.x86_64
--> Processing Dependency: perl(Pod::Simple) for package: 4:perl-5.10.1-141.el6_7.1.x86_64
--> Processing Dependency: perl(Module::Pluggable) for package: 4:perl-5.10.1-141.el6_7.1.x86_64
--> Processing Dependency: libperl.so()(64bit) for package: 4:perl-5.10.1-141.el6_7.1.x86_64
--> Running transaction check
---> Package autoconf.noarch 0:2.63-5.1.el6 will be installed
--> Processing Dependency: m4 >= 1.4.7 for package: autoconf-2.63-5.1.el6.noarch
---> Package cloog-ppl.x86_64 0:0.15.7-1.2.el6 will be installed
--> Processing Dependency: libppl_c.so.2()(64bit) for package: cloog-ppl-0.15.7-1.2.el6.x86_64
--> Processing Dependency: libppl.so.7()(64bit) for package: cloog-ppl-0.15.7-1.2.el6.x86_64
---> Package cpp.x86_64 0:4.4.7-17.el6 will be installed
---> Package glibc-devel.x86_64 0:2.12-1.192.el6 will be installed
--> Processing Dependency: glibc-headers = 2.12-1.192.el6 for package: glibc-devel-2.12-1.192.el6.x86_64
--> Processing Dependency: glibc-headers for package: glibc-devel-2.12-1.192.el6.x86_64
---> Package libgomp.x86_64 0:4.4.7-17.el6 will be installed
---> Package libstdc++-devel.x86_64 0:4.4.7-17.el6 will be installed
---> Package mpfr.x86_64 0:2.4.1-6.el6 will be installed
---> Package openssh-clients.x86_64 0:5.3p1-118.1.el6_8 will be installed
--> Processing Dependency: openssh = 5.3p1-118.1.el6_8 for package: openssh-clients-5.3p1-118.1.el6_8.x86_64
--> Processing Dependency: libfipscheck.so.1()(64bit) for package: openssh-clients-5.3p1-118.1.el6_8.x86_64
--> Processing Dependency: libedit.so.0()(64bit) for package: openssh-clients-5.3p1-118.1.el6_8.x86_64
---> Package perl-Error.noarch 1:0.17015-4.el6 will be installed
---> Package perl-Git.noarch 0:1.7.1-4.el6_7.1 will be installed
---> Package perl-Module-Pluggable.x86_64 1:3.90-141.el6_7.1 will be installed
---> Package perl-Pod-Simple.x86_64 1:3.13-141.el6_7.1 will be installed
--> Processing Dependency: perl(Pod::Escapes) >= 1.04 for package: 1:perl-Pod-Simple-3.13-141.el6_7.1.x86_64
---> Package perl-libs.x86_64 4:5.10.1-141.el6_7.1 will be installed
---> Package perl-version.x86_64 3:0.77-141.el6_7.1 will be installed
---> Package rsync.x86_64 0:3.0.6-12.el6 will be installed
--> Running transaction check
---> Package fipscheck-lib.x86_64 0:1.2.0-7.el6 will be installed
--> Processing Dependency: /usr/bin/fipscheck for package: fipscheck-lib-1.2.0-7.el6.x86_64
---> Package glibc-headers.x86_64 0:2.12-1.192.el6 will be installed
--> Processing Dependency: kernel-headers >= 2.2.1 for package: glibc-headers-2.12-1.192.el6.x86_64
--> Processing Dependency: kernel-headers for package: glibc-headers-2.12-1.192.el6.x86_64
---> Package libedit.x86_64 0:2.11-4.20080712cvs.1.el6 will be installed
---> Package m4.x86_64 0:1.4.13-5.el6 will be installed
---> Package openssh.x86_64 0:5.3p1-118.1.el6_8 will be installed
--> Processing Dependency: initscripts >= 5.20 for package: openssh-5.3p1-118.1.el6_8.x86_64
--> Processing Dependency: /sbin/nologin for package: openssh-5.3p1-118.1.el6_8.x86_64
---> Package perl-Pod-Escapes.x86_64 1:1.04-141.el6_7.1 will be installed
---> Package ppl.x86_64 0:0.10.2-11.el6 will be installed
--> Running transaction check
---> Package fipscheck.x86_64 0:1.2.0-7.el6 will be installed
---> Package initscripts.x86_64 0:9.03.53-1.el6.centos will be installed
--> Processing Dependency: udev >= 125-1 for package: initscripts-9.03.53-1.el6.centos.x86_64
--> Processing Dependency: sysvinit-tools >= 2.87-6 for package: initscripts-9.03.53-1.el6.centos.x86_64
--> Processing Dependency: plymouth for package: initscripts-9.03.53-1.el6.centos.x86_64
--> Processing Dependency: /sbin/pidof for package: initscripts-9.03.53-1.el6.centos.x86_64
--> Processing Dependency: /sbin/ip for package: initscripts-9.03.53-1.el6.centos.x86_64
--> Processing Dependency: /sbin/arping for package: initscripts-9.03.53-1.el6.centos.x86_64
---> Package kernel-headers.x86_64 0:2.6.32-642.el6 will be installed
---> Package util-linux-ng.x86_64 0:2.17.2-12.24.el6 will be installed
--> Running transaction check
---> Package iproute.x86_64 0:2.6.32-54.el6 will be installed
--> Processing Dependency: iptables >= 1.4.5 for package: iproute-2.6.32-54.el6.x86_64
--> Processing Dependency: libxtables.so.4()(64bit) for package: iproute-2.6.32-54.el6.x86_64
---> Package iputils.x86_64 0:20071127-21.el6 will be installed
---> Package plymouth.x86_64 0:0.8.3-27.el6.centos.1 will be installed
--> Processing Dependency: system-logos for package: plymouth-0.8.3-27.el6.centos.1.x86_64
--> Processing Dependency: libdrm_radeon.so.1()(64bit) for package: plymouth-0.8.3-27.el6.centos.1.x86_64
--> Processing Dependency: libdrm_nouveau.so.1()(64bit) for package: plymouth-0.8.3-27.el6.centos.1.x86_64
--> Processing Dependency: libdrm_intel.so.1()(64bit) for package: plymouth-0.8.3-27.el6.centos.1.x86_64
--> Processing Dependency: libdrm.so.2()(64bit) for package: plymouth-0.8.3-27.el6.centos.1.x86_64
---> Package sysvinit-tools.x86_64 0:2.87-6.dsf.el6 will be installed
---> Package udev.x86_64 0:147-2.73.el6 will be installed
--> Processing Dependency: hwdata for package: udev-147-2.73.el6.x86_64
--> Running transaction check
---> Package hwdata.noarch 0:0.233-16.1.el6 will be installed
---> Package iptables.x86_64 0:1.4.7-16.el6 will be installed
--> Processing Dependency: policycoreutils for package: iptables-1.4.7-16.el6.x86_64
---> Package libdrm.x86_64 0:2.4.65-2.el6 will be installed
--> Processing Dependency: libpciaccess.so.0()(64bit) for package: libdrm-2.4.65-2.el6.x86_64
---> Package redhat-logos.noarch 0:60.0.14-12.el6.centos will be installed
--> Running transaction check
---> Package libpciaccess.x86_64 0:0.13.4-1.el6 will be installed
---> Package policycoreutils.x86_64 0:2.0.83-29.el6 will be installed
--> Processing Dependency: libdbus-glib-1.so.2()(64bit) for package: policycoreutils-2.0.83-29.el6.x86_64
--> Running transaction check
---> Package dbus-glib.x86_64 0:0.86-6.el6 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package                 Arch     Version                       Repository
                                                                           Size
================================================================================
Installing:
 automake                noarch   1.11.1-4.el6                  base      550 k
 gcc                     x86_64   4.4.7-17.el6                  cr         10 M
 gcc-c++                 x86_64   4.4.7-17.el6                  cr        4.7 M
 git                     x86_64   1.7.1-4.el6_7.1               updates   4.6 M
 kernel-devel            x86_64   2.6.32-642.el6                cr         11 M
 libicu                  x86_64   4.2.1-14.el6                  cr        4.9 M
 perl                    x86_64   4:5.10.1-141.el6_7.1          updates    10 M
Installing for dependencies:
 autoconf                noarch   2.63-5.1.el6                  base      781 k
 cloog-ppl               x86_64   0.15.7-1.2.el6                base       93 k
 cpp                     x86_64   4.4.7-17.el6                  cr        3.7 M
 dbus-glib               x86_64   0.86-6.el6                    base      170 k
 fipscheck               x86_64   1.2.0-7.el6                   base       14 k
 fipscheck-lib           x86_64   1.2.0-7.el6                   base      8.3 k
 glibc-devel             x86_64   2.12-1.192.el6                cr        988 k
 glibc-headers           x86_64   2.12-1.192.el6                cr        617 k
 hwdata                  noarch   0.233-16.1.el6                cr        1.3 M
 initscripts             x86_64   9.03.53-1.el6.centos          cr        947 k
 iproute                 x86_64   2.6.32-54.el6                 cr        389 k
 iptables                x86_64   1.4.7-16.el6                  base      254 k
 iputils                 x86_64   20071127-21.el6               cr        120 k
 kernel-headers          x86_64   2.6.32-642.el6                cr        4.4 M
 libdrm                  x86_64   2.4.65-2.el6                  cr        136 k
 libedit                 x86_64   2.11-4.20080712cvs.1.el6      base       74 k
 libgomp                 x86_64   4.4.7-17.el6                  cr        134 k
 libpciaccess            x86_64   0.13.4-1.el6                  cr         24 k
 libstdc++-devel         x86_64   4.4.7-17.el6                  cr        1.6 M
 m4                      x86_64   1.4.13-5.el6                  base      278 k
 mpfr                    x86_64   2.4.1-6.el6                   base      157 k
 openssh                 x86_64   5.3p1-118.1.el6_8             cr        276 k
 openssh-clients         x86_64   5.3p1-118.1.el6_8             cr        442 k
 perl-Error              noarch   1:0.17015-4.el6               base       29 k
 perl-Git                noarch   1.7.1-4.el6_7.1               updates    28 k
 perl-Module-Pluggable   x86_64   1:3.90-141.el6_7.1            updates    40 k
 perl-Pod-Escapes        x86_64   1:1.04-141.el6_7.1            updates    33 k
 perl-Pod-Simple         x86_64   1:3.13-141.el6_7.1            updates   213 k
 perl-libs               x86_64   4:5.10.1-141.el6_7.1          updates   579 k
 perl-version            x86_64   3:0.77-141.el6_7.1            updates    52 k
 plymouth                x86_64   0.8.3-27.el6.centos.1         base       89 k
 policycoreutils         x86_64   2.0.83-29.el6                 cr        663 k
 ppl                     x86_64   0.10.2-11.el6                 base      1.3 M
 redhat-logos            noarch   60.0.14-12.el6.centos         base       15 M
 rsync                   x86_64   3.0.6-12.el6                  base      335 k
 sysvinit-tools          x86_64   2.87-6.dsf.el6                base       60 k
 udev                    x86_64   147-2.73.el6                  cr        358 k
 util-linux-ng           x86_64   2.17.2-12.24.el6              cr        1.6 M

Transaction Summary
================================================================================
Install      45 Package(s)

Total download size: 82 M
Installed size: 200 M
Downloading Packages:
--------------------------------------------------------------------------------
Total                                           2.2 MB/s |  82 MB     00:37     
[91mwarning: rpmts_HdrFromFdno: Header V3 RSA/SHA1 Signature, key ID c105b9de: NOKEY
[0mRetrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6
[91mImporting GPG key 0xC105B9DE:
 Userid : CentOS-6 Key (CentOS 6 Official Signing Key) <centos-6-key@centos.org>
 Package: centos-release-6-7.el6.centos.12.3.x86_64 (@CentOS/6.7)
 From   : /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6
[0mRunning rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing : hwdata-0.233-16.1.el6.noarch                                1/45 
  Installing : mpfr-2.4.1-6.el6.x86_64                                     2/45 
  Installing : sysvinit-tools-2.87-6.dsf.el6.x86_64                        3/45 
  Installing : cpp-4.4.7-17.el6.x86_64                                     4/45 
  Installing : libpciaccess-0.13.4-1.el6.x86_64                            5/45 
  Installing : 1:perl-Pod-Escapes-1.04-141.el6_7.1.x86_64                  6/45 
  Installing : 1:perl-Pod-Simple-3.13-141.el6_7.1.x86_64                   7/45 
  Installing : 3:perl-version-0.77-141.el6_7.1.x86_64                      8/45 
  Installing : 4:perl-libs-5.10.1-141.el6_7.1.x86_64                       9/45 
  Installing : 1:perl-Module-Pluggable-3.90-141.el6_7.1.x86_64            10/45 
  Installing : 4:perl-5.10.1-141.el6_7.1.x86_64                           11/45 
  Installing : 1:perl-Error-0.17015-4.el6.noarch                          12/45 
  Installing : fipscheck-lib-1.2.0-7.el6.x86_64                           13/45 
  Installing : fipscheck-1.2.0-7.el6.x86_64                               14/45 
  Installing : libgomp-4.4.7-17.el6.x86_64                                15/45 
  Installing : rsync-3.0.6-12.el6.x86_64                                  16/45 
  Installing : redhat-logos-60.0.14-12.el6.centos.noarch                  17/45 
  Installing : libstdc++-devel-4.4.7-17.el6.x86_64                        18/45 
  Installing : libedit-2.11-4.20080712cvs.1.el6.x86_64                    19/45 
  Installing : dbus-glib-0.86-6.el6.x86_64                                20/45 
  Installing : policycoreutils-2.0.83-29.el6.x86_64                       21/45 
  Installing : iptables-1.4.7-16.el6.x86_64                               22/45 
  Installing : iproute-2.6.32-54.el6.x86_64                               23/45 
  Installing : libdrm-2.4.65-2.el6.x86_64                                 24/45 
  Installing : plymouth-0.8.3-27.el6.centos.1.x86_64                      25/45 
  Installing : iputils-20071127-21.el6.x86_64                             26/45 
  Installing : util-linux-ng-2.17.2-12.24.el6.x86_64                      27/45 
install-info: No such file or directory for /usr/share/info/ipc.info
  Installing : initscripts-9.03.53-1.el6.centos.x86_64                    28/45 
  Installing : udev-147-2.73.el6.x86_64                                   29/45 
  Installing : openssh-5.3p1-118.1.el6_8.x86_64                           30/45 
  Installing : openssh-clients-5.3p1-118.1.el6_8.x86_64                   31/45 
  Installing : perl-Git-1.7.1-4.el6_7.1.noarch                            32/45 
  Installing : git-1.7.1-4.el6_7.1.x86_64                                 33/45 
  Installing : ppl-0.10.2-11.el6.x86_64                                   34/45 
  Installing : cloog-ppl-0.15.7-1.2.el6.x86_64                            35/45 
  Installing : kernel-headers-2.6.32-642.el6.x86_64                       36/45 
  Installing : glibc-headers-2.12-1.192.el6.x86_64                        37/45 
  Installing : glibc-devel-2.12-1.192.el6.x86_64                          38/45 
  Installing : gcc-4.4.7-17.el6.x86_64                                    39/45 
  Installing : m4-1.4.13-5.el6.x86_64                                     40/45 
  Installing : autoconf-2.63-5.1.el6.noarch                               41/45 
install-info: No such file or directory for /usr/share/info/autoconf.info
  Installing : automake-1.11.1-4.el6.noarch                               42/45 
install-info: No such file or directory for /usr/share/info/automake.info.gz
  Installing : gcc-c++-4.4.7-17.el6.x86_64                                43/45 
  Installing : kernel-devel-2.6.32-642.el6.x86_64                         44/45 
  Installing : libicu-4.2.1-14.el6.x86_64                                 45/45 
  Verifying  : fipscheck-1.2.0-7.el6.x86_64                                1/45 
  Verifying  : iputils-20071127-21.el6.x86_64                              2/45 
  Verifying  : m4-1.4.13-5.el6.x86_64                                      3/45 
  Verifying  : libpciaccess-0.13.4-1.el6.x86_64                            4/45 
  Verifying  : gcc-c++-4.4.7-17.el6.x86_64                                 5/45 
  Verifying  : 1:perl-Module-Pluggable-3.90-141.el6_7.1.x86_64             6/45 
  Verifying  : 1:perl-Pod-Simple-3.13-141.el6_7.1.x86_64                   7/45 
  Verifying  : kernel-headers-2.6.32-642.el6.x86_64                        8/45 
  Verifying  : perl-Git-1.7.1-4.el6_7.1.noarch                             9/45 
  Verifying  : 1:perl-Pod-Escapes-1.04-141.el6_7.1.x86_64                 10/45 
  Verifying  : cpp-4.4.7-17.el6.x86_64                                    11/45 
  Verifying  : 4:perl-5.10.1-141.el6_7.1.x86_64                           12/45 
  Verifying  : 1:perl-Error-0.17015-4.el6.noarch                          13/45 
  Verifying  : openssh-5.3p1-118.1.el6_8.x86_64                           14/45 
  Verifying  : sysvinit-tools-2.87-6.dsf.el6.x86_64                       15/45 
  Verifying  : ppl-0.10.2-11.el6.x86_64                                   16/45 
  Verifying  : mpfr-2.4.1-6.el6.x86_64                                    17/45 
  Verifying  : initscripts-9.03.53-1.el6.centos.x86_64                    18/45 
  Verifying  : automake-1.11.1-4.el6.noarch                               19/45 
  Verifying  : dbus-glib-0.86-6.el6.x86_64                                20/45 
  Verifying  : cloog-ppl-0.15.7-1.2.el6.x86_64                            21/45 
  Verifying  : autoconf-2.63-5.1.el6.noarch                               22/45 
  Verifying  : glibc-devel-2.12-1.192.el6.x86_64                          23/45 
  Verifying  : libicu-4.2.1-14.el6.x86_64                                 24/45 
  Verifying  : kernel-devel-2.6.32-642.el6.x86_64                         25/45 
  Verifying  : openssh-clients-5.3p1-118.1.el6_8.x86_64                   26/45 
  Verifying  : libedit-2.11-4.20080712cvs.1.el6.x86_64                    27/45 
  Verifying  : libstdc++-devel-4.4.7-17.el6.x86_64                        28/45 
  Verifying  : redhat-logos-60.0.14-12.el6.centos.noarch                  29/45 
  Verifying  : policycoreutils-2.0.83-29.el6.x86_64                       30/45 
  Verifying  : 3:perl-version-0.77-141.el6_7.1.x86_64                     31/45 
  Verifying  : 4:perl-libs-5.10.1-141.el6_7.1.x86_64                      32/45 
  Verifying  : udev-147-2.73.el6.x86_64                                   33/45 
  Verifying  : plymouth-0.8.3-27.el6.centos.1.x86_64                      34/45 
  Verifying  : glibc-headers-2.12-1.192.el6.x86_64                        35/45 
  Verifying  : git-1.7.1-4.el6_7.1.x86_64                                 36/45 
  Verifying  : rsync-3.0.6-12.el6.x86_64                                  37/45 
  Verifying  : libdrm-2.4.65-2.el6.x86_64                                 38/45 
  Verifying  : util-linux-ng-2.17.2-12.24.el6.x86_64                      39/45 
  Verifying  : iptables-1.4.7-16.el6.x86_64                               40/45 
  Verifying  : gcc-4.4.7-17.el6.x86_64                                    41/45 
  Verifying  : libgomp-4.4.7-17.el6.x86_64                                42/45 
  Verifying  : fipscheck-lib-1.2.0-7.el6.x86_64                           43/45 
  Verifying  : iproute-2.6.32-54.el6.x86_64                               44/45 
  Verifying  : hwdata-0.233-16.1.el6.noarch                               45/45 

Installed:
  automake.noarch 0:1.11.1-4.el6             gcc.x86_64 0:4.4.7-17.el6         
  gcc-c++.x86_64 0:4.4.7-17.el6              git.x86_64 0:1.7.1-4.el6_7.1      
  kernel-devel.x86_64 0:2.6.32-642.el6       libicu.x86_64 0:4.2.1-14.el6      
  perl.x86_64 4:5.10.1-141.el6_7.1          

Dependency Installed:
  autoconf.noarch 0:2.63-5.1.el6                                                
  cloog-ppl.x86_64 0:0.15.7-1.2.el6                                             
  cpp.x86_64 0:4.4.7-17.el6                                                     
  dbus-glib.x86_64 0:0.86-6.el6                                                 
  fipscheck.x86_64 0:1.2.0-7.el6                                                
  fipscheck-lib.x86_64 0:1.2.0-7.el6                                            
  glibc-devel.x86_64 0:2.12-1.192.el6                                           
  glibc-headers.x86_64 0:2.12-1.192.el6                                         
  hwdata.noarch 0:0.233-16.1.el6                                                
  initscripts.x86_64 0:9.03.53-1.el6.centos                                     
  iproute.x86_64 0:2.6.32-54.el6                                                
  iptables.x86_64 0:1.4.7-16.el6                                                
  iputils.x86_64 0:20071127-21.el6                                              
  kernel-headers.x86_64 0:2.6.32-642.el6                                        
  libdrm.x86_64 0:2.4.65-2.el6                                                  
  libedit.x86_64 0:2.11-4.20080712cvs.1.el6                                     
  libgomp.x86_64 0:4.4.7-17.el6                                                 
  libpciaccess.x86_64 0:0.13.4-1.el6                                            
  libstdc++-devel.x86_64 0:4.4.7-17.el6                                         
  m4.x86_64 0:1.4.13-5.el6                                                      
  mpfr.x86_64 0:2.4.1-6.el6                                                     
  openssh.x86_64 0:5.3p1-118.1.el6_8                                            
  openssh-clients.x86_64 0:5.3p1-118.1.el6_8                                    
  perl-Error.noarch 1:0.17015-4.el6                                             
  perl-Git.noarch 0:1.7.1-4.el6_7.1                                             
  perl-Module-Pluggable.x86_64 1:3.90-141.el6_7.1                               
  perl-Pod-Escapes.x86_64 1:1.04-141.el6_7.1                                    
  perl-Pod-Simple.x86_64 1:3.13-141.el6_7.1                                     
  perl-libs.x86_64 4:5.10.1-141.el6_7.1                                         
  perl-version.x86_64 3:0.77-141.el6_7.1                                        
  plymouth.x86_64 0:0.8.3-27.el6.centos.1                                       
  policycoreutils.x86_64 0:2.0.83-29.el6                                        
  ppl.x86_64 0:0.10.2-11.el6                                                    
  redhat-logos.noarch 0:60.0.14-12.el6.centos                                   
  rsync.x86_64 0:3.0.6-12.el6                                                   
  sysvinit-tools.x86_64 0:2.87-6.dsf.el6                                        
  udev.x86_64 0:147-2.73.el6                                                    
  util-linux-ng.x86_64 0:2.17.2-12.24.el6                                       

Complete!
Loaded plugins: fastestmirror
Cleaning repos: base cr extras updates
Cleaning up Everything
 ---> 04802ff78720
Removing intermediate container edb8e0119ef6
Successfully built 04802ff78720

```

Array of tests: `[]`

# Tested image `nodesource/fedora20-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM fedora:20
20: Pulling from library/fedora
a3ed95caeb02: Pulling fs layer
54d02f21d98a: Pulling fs layer
a3ed95caeb02: Waiting
54d02f21d98a: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
54d02f21d98a: Download complete
54d02f21d98a: Pull complete
54d02f21d98a: Pull complete
Digest: sha256:1c7e748fc0aebdb6c61048e0d1dcb66ca4e4ee2c9f00f104dc9bb0b6213d0591
Status: Downloaded newer image for fedora:20
 ---> 19be29911e3e
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in f8b307f09e74
 ---> 4358263abe14
Removing intermediate container f8b307f09e74
Step 3 : RUN yum install -y       automake       libicu       curl       gcc       gcc-c++       git       kernel-devel       make       perl       which  && yum clean all
 ---> Running in 9fa8e942a60e
Package curl-7.32.0-20.fc20.x86_64 already installed and latest version
Resolving Dependencies
--> Running transaction check
---> Package automake.noarch 0:1.13.4-6.fc20 will be installed
--> Processing Dependency: autoconf >= 2.65 for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(threads) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(constant) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(Thread::Queue) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(TAP::Parser) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(Getopt::Long) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(File::Spec) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(File::Path) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(Exporter) for package: automake-1.13.4-6.fc20.noarch
--> Processing Dependency: perl(Carp) for package: automake-1.13.4-6.fc20.noarch
---> Package gcc.x86_64 0:4.8.3-7.fc20 will be installed
--> Processing Dependency: libgomp = 4.8.3-7.fc20 for package: gcc-4.8.3-7.fc20.x86_64
--> Processing Dependency: cpp = 4.8.3-7.fc20 for package: gcc-4.8.3-7.fc20.x86_64
--> Processing Dependency: glibc-devel >= 2.2.90-12 for package: gcc-4.8.3-7.fc20.x86_64
--> Processing Dependency: binutils >= 2.20.51.0.2-12 for package: gcc-4.8.3-7.fc20.x86_64
--> Processing Dependency: libmpfr.so.4()(64bit) for package: gcc-4.8.3-7.fc20.x86_64
--> Processing Dependency: libmpc.so.3()(64bit) for package: gcc-4.8.3-7.fc20.x86_64
--> Processing Dependency: libgomp.so.1()(64bit) for package: gcc-4.8.3-7.fc20.x86_64
---> Package gcc-c++.x86_64 0:4.8.3-7.fc20 will be installed
--> Processing Dependency: libstdc++-devel = 4.8.3-7.fc20 for package: gcc-c++-4.8.3-7.fc20.x86_64
---> Package git.x86_64 0:1.9.3-2.fc20 will be installed
--> Processing Dependency: perl-Git = 1.9.3-2.fc20 for package: git-1.9.3-2.fc20.x86_64
--> Processing Dependency: perl(Term::ReadKey) for package: git-1.9.3-2.fc20.x86_64
--> Processing Dependency: perl(Git) for package: git-1.9.3-2.fc20.x86_64
--> Processing Dependency: perl(File::Temp) for package: git-1.9.3-2.fc20.x86_64
--> Processing Dependency: perl(Error) for package: git-1.9.3-2.fc20.x86_64
--> Processing Dependency: libgnome-keyring.so.0()(64bit) for package: git-1.9.3-2.fc20.x86_64
---> Package kernel-devel.x86_64 0:3.19.8-100.fc20 will be installed
---> Package libicu.x86_64 0:50.1.2-12.fc20 will be installed
---> Package make.x86_64 1:3.82-19.fc20 will be installed
---> Package perl.x86_64 4:5.18.4-293.fc20 will be installed
--> Processing Dependency: perl-libs = 4:5.18.4-293.fc20 for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Socket) >= 1.3 for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Scalar::Util) >= 1.10 for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl-macros for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl-libs for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(threads::shared) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Time::Local) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Time::HiRes) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Storable) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Socket) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Scalar::Util) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Pod::Simple::XHTML) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Pod::Simple::Search) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Module::CoreList) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: perl(Filter::Util::Call) for package: 4:perl-5.18.4-293.fc20.x86_64
--> Processing Dependency: libperl.so.5.18()(64bit) for package: 4:perl-5.18.4-293.fc20.x86_64
---> Package which.x86_64 0:2.20-6.fc20 will be installed
--> Running transaction check
---> Package autoconf.noarch 0:2.69-15.fc20 will be installed
--> Processing Dependency: m4 >= 1.4.14 for package: autoconf-2.69-15.fc20.noarch
--> Processing Dependency: perl(Text::ParseWords) for package: autoconf-2.69-15.fc20.noarch
--> Processing Dependency: perl(Data::Dumper) for package: autoconf-2.69-15.fc20.noarch
---> Package binutils.x86_64 0:2.23.88.0.1-13.fc20 will be installed
---> Package cpp.x86_64 0:4.8.3-7.fc20 will be installed
---> Package glibc-devel.x86_64 0:2.18-19.fc20 will be installed
--> Processing Dependency: glibc-headers = 2.18-19.fc20 for package: glibc-devel-2.18-19.fc20.x86_64
--> Processing Dependency: glibc-headers for package: glibc-devel-2.18-19.fc20.x86_64
---> Package libgnome-keyring.x86_64 0:3.10.1-1.fc20 will be installed
---> Package libgomp.x86_64 0:4.8.3-7.fc20 will be installed
---> Package libmpc.x86_64 0:1.0.1-2.fc20 will be installed
---> Package libstdc++-devel.x86_64 0:4.8.3-7.fc20 will be installed
---> Package mpfr.x86_64 0:3.1.2-5.fc20 will be installed
---> Package perl-Carp.noarch 0:1.26-245.fc20 will be installed
---> Package perl-Error.noarch 1:0.17021-1.fc20 will be installed
---> Package perl-Exporter.noarch 0:5.70-1.fc20 will be installed
---> Package perl-File-Path.noarch 0:2.09-292.fc20 will be installed
---> Package perl-File-Temp.noarch 0:0.23.01-4.fc20 will be installed
---> Package perl-Filter.x86_64 1:1.54-1.fc20 will be installed
---> Package perl-Getopt-Long.noarch 0:2.45-1.fc20 will be installed
--> Processing Dependency: perl(Pod::Usage) >= 1.14 for package: perl-Getopt-Long-2.45-1.fc20.noarch
---> Package perl-Git.noarch 0:1.9.3-2.fc20 will be installed
---> Package perl-Module-CoreList.noarch 1:3.13-293.fc20 will be installed
--> Processing Dependency: perl(version) for package: 1:perl-Module-CoreList-3.13-293.fc20.noarch
---> Package perl-PathTools.x86_64 0:3.40-291.fc20 will be installed
---> Package perl-Pod-Simple.noarch 1:3.29-1.fc20 will be installed
--> Processing Dependency: perl(Pod::Escapes) >= 1.04 for package: 1:perl-Pod-Simple-3.29-1.fc20.noarch
--> Processing Dependency: perl(Encode) for package: 1:perl-Pod-Simple-3.29-1.fc20.noarch
---> Package perl-Scalar-List-Utils.x86_64 0:1.31-293.fc20 will be installed
---> Package perl-Socket.x86_64 1:2.019-1.fc20 will be installed
---> Package perl-Storable.x86_64 0:2.51-1.fc20 will be installed
---> Package perl-TermReadKey.x86_64 0:2.30-20.fc20 will be installed
---> Package perl-Test-Harness.noarch 0:3.28-4.fc20 will be installed
---> Package perl-Thread-Queue.noarch 0:3.02-291.fc20 will be installed
---> Package perl-Time-HiRes.x86_64 0:1.9726-1.fc20 will be installed
---> Package perl-Time-Local.noarch 0:1.2300-291.fc20 will be installed
---> Package perl-constant.noarch 0:1.27-292.fc20 will be installed
---> Package perl-libs.x86_64 4:5.18.4-293.fc20 will be installed
---> Package perl-macros.x86_64 4:5.18.4-293.fc20 will be installed
---> Package perl-threads.x86_64 1:1.92-1.fc20 will be installed
---> Package perl-threads-shared.x86_64 0:1.46-1.fc20 will be installed
--> Running transaction check
---> Package glibc-headers.x86_64 0:2.18-19.fc20 will be installed
--> Processing Dependency: kernel-headers >= 2.2.1 for package: glibc-headers-2.18-19.fc20.x86_64
--> Processing Dependency: kernel-headers for package: glibc-headers-2.18-19.fc20.x86_64
---> Package m4.x86_64 0:1.4.16-10.fc20 will be installed
---> Package perl-Data-Dumper.x86_64 0:2.154-1.fc20 will be installed
---> Package perl-Encode.x86_64 1:2.54-4.fc20 will be installed
---> Package perl-Pod-Escapes.noarch 1:1.04-293.fc20 will be installed
---> Package perl-Pod-Usage.noarch 4:1.66-1.fc20 will be installed
--> Processing Dependency: perl(Pod::Text) >= 3.15 for package: 4:perl-Pod-Usage-1.66-1.fc20.noarch
--> Processing Dependency: perl-Pod-Perldoc for package: 4:perl-Pod-Usage-1.66-1.fc20.noarch
---> Package perl-Text-ParseWords.noarch 0:3.30-1.fc20 will be installed
---> Package perl-version.x86_64 3:0.99.07-1.fc20 will be installed
--> Running transaction check
---> Package kernel-headers.x86_64 0:3.19.8-100.fc20 will be installed
---> Package perl-Pod-Perldoc.noarch 0:3.20-7.fc20 will be installed
--> Processing Dependency: perl(parent) for package: perl-Pod-Perldoc-3.20-7.fc20.noarch
--> Processing Dependency: perl(HTTP::Tiny) for package: perl-Pod-Perldoc-3.20-7.fc20.noarch
---> Package perl-podlators.noarch 0:2.5.1-291.fc20 will be installed
--> Running transaction check
---> Package perl-HTTP-Tiny.noarch 0:0.034-4.fc20 will be installed
---> Package perl-parent.noarch 1:0.228-1.fc20 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package                   Arch      Version                   Repository  Size
================================================================================
Installing:
 automake                  noarch    1.13.4-6.fc20             updates    678 k
 gcc                       x86_64    4.8.3-7.fc20              updates     16 M
 gcc-c++                   x86_64    4.8.3-7.fc20              updates    7.2 M
 git                       x86_64    1.9.3-2.fc20              updates    4.7 M
 kernel-devel              x86_64    3.19.8-100.fc20           updates    9.3 M
 libicu                    x86_64    50.1.2-12.fc20            updates    6.9 M
 make                      x86_64    1:3.82-19.fc20            fedora     420 k
 perl                      x86_64    4:5.18.4-293.fc20         updates    8.2 M
 which                     x86_64    2.20-6.fc20               fedora      41 k
Installing for dependencies:
 autoconf                  noarch    2.69-15.fc20              updates    704 k
 binutils                  x86_64    2.23.88.0.1-13.fc20       fedora     3.8 M
 cpp                       x86_64    4.8.3-7.fc20              updates    5.9 M
 glibc-devel               x86_64    2.18-19.fc20              updates    1.0 M
 glibc-headers             x86_64    2.18-19.fc20              updates    648 k
 kernel-headers            x86_64    3.19.8-100.fc20           updates    1.0 M
 libgnome-keyring          x86_64    3.10.1-1.fc20             fedora     110 k
 libgomp                   x86_64    4.8.3-7.fc20              updates    127 k
 libmpc                    x86_64    1.0.1-2.fc20              fedora      50 k
 libstdc++-devel           x86_64    4.8.3-7.fc20              updates    1.5 M
 m4                        x86_64    1.4.16-10.fc20            fedora     255 k
 mpfr                      x86_64    3.1.2-5.fc20              updates    200 k
 perl-Carp                 noarch    1.26-245.fc20             fedora      19 k
 perl-Data-Dumper          x86_64    2.154-1.fc20              updates     49 k
 perl-Encode               x86_64    1:2.54-4.fc20             updates    1.5 M
 perl-Error                noarch    1:0.17021-1.fc20          fedora      32 k
 perl-Exporter             noarch    5.70-1.fc20               updates     29 k
 perl-File-Path            noarch    2.09-292.fc20             fedora      27 k
 perl-File-Temp            noarch    0.23.01-4.fc20            fedora      57 k
 perl-Filter               x86_64    1:1.54-1.fc20             updates     79 k
 perl-Getopt-Long          noarch    2.45-1.fc20               updates     57 k
 perl-Git                  noarch    1.9.3-2.fc20              updates     54 k
 perl-HTTP-Tiny            noarch    0.034-4.fc20              updates     39 k
 perl-Module-CoreList      noarch    1:3.13-293.fc20           updates     98 k
 perl-PathTools            x86_64    3.40-291.fc20             fedora      83 k
 perl-Pod-Escapes          noarch    1:1.04-293.fc20           updates     52 k
 perl-Pod-Perldoc          noarch    3.20-7.fc20               fedora      87 k
 perl-Pod-Simple           noarch    1:3.29-1.fc20             updates    217 k
 perl-Pod-Usage            noarch    4:1.66-1.fc20             updates     29 k
 perl-Scalar-List-Utils    x86_64    1.31-293.fc20             fedora      43 k
 perl-Socket               x86_64    1:2.019-1.fc20            updates     51 k
 perl-Storable             x86_64    2.51-1.fc20               updates     78 k
 perl-TermReadKey          x86_64    2.30-20.fc20              fedora      31 k
 perl-Test-Harness         noarch    3.28-4.fc20               updates    302 k
 perl-Text-ParseWords      noarch    3.30-1.fc20               updates     13 k
 perl-Thread-Queue         noarch    3.02-291.fc20             fedora      17 k
 perl-Time-HiRes           x86_64    1.9726-1.fc20             fedora      46 k
 perl-Time-Local           noarch    1.2300-291.fc20           fedora      25 k
 perl-constant             noarch    1.27-292.fc20             fedora      19 k
 perl-libs                 x86_64    4:5.18.4-293.fc20         updates    694 k
 perl-macros               x86_64    4:5.18.4-293.fc20         updates     44 k
 perl-parent               noarch    1:0.228-1.fc20            fedora      13 k
 perl-podlators            noarch    2.5.1-291.fc20            fedora     112 k
 perl-threads              x86_64    1:1.92-1.fc20             updates     50 k
 perl-threads-shared       x86_64    1.46-1.fc20               updates     39 k
 perl-version              x86_64    3:0.99.07-1.fc20          updates     84 k

Transaction Summary
================================================================================
Install  9 Packages (+46 Dependent packages)

Total download size: 73 M
Installed size: 227 M
Downloading packages:
Delta RPMs disabled because /usr/bin/applydeltarpm not installed.
[91mwarning: /var/cache/yum/x86_64/20/updates/packages/autoconf-2.69-15.fc20.noarch.rpm: Header V3 RSA/SHA256 Signature, key ID 246110c1: NOKEY
[0mPublic key for autoconf-2.69-15.fc20.noarch.rpm is not installed
Public key for binutils-2.23.88.0.1-13.fc20.x86_64.rpm is not installed
--------------------------------------------------------------------------------
Total                                              3.0 MB/s |  73 MB  00:24     
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-20-x86_64
[91mImporting GPG key 0x246110C1:
 Userid     : "Fedora (20) <fedora@fedoraproject.org>"
 Fingerprint: c7c9 a9c8 9153 f201 83ce 7cba 2eb1 61fa 2461 10c1
 Package    : fedora-release-20-4.noarch (@fedora-updates/$releasever)
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-20-x86_64
[0mRunning transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : perl-HTTP-Tiny-0.034-4.fc20.noarch                          1/55 
  Installing : 1:perl-parent-0.228-1.fc20.noarch                           2/55 
  Installing : perl-Pod-Perldoc-3.20-7.fc20.noarch                         3/55 
  Installing : perl-podlators-2.5.1-291.fc20.noarch                        4/55 
  Installing : 1:perl-Pod-Escapes-1.04-293.fc20.noarch                     5/55 
  Installing : 3:perl-version-0.99.07-1.fc20.x86_64                        6/55 
  Installing : perl-Text-ParseWords-3.30-1.fc20.noarch                     7/55 
  Installing : 1:perl-Encode-2.54-4.fc20.x86_64                            8/55 
  Installing : 4:perl-Pod-Usage-1.66-1.fc20.noarch                         9/55 
  Installing : perl-Time-Local-1.2300-291.fc20.noarch                     10/55 
  Installing : perl-constant-1.27-292.fc20.noarch                         11/55 
  Installing : perl-Scalar-List-Utils-1.31-293.fc20.x86_64                12/55 
  Installing : 1:perl-Socket-2.019-1.fc20.x86_64                          13/55 
  Installing : 1:perl-Filter-1.54-1.fc20.x86_64                           14/55 
  Installing : perl-Storable-2.51-1.fc20.x86_64                           15/55 
  Installing : 4:perl-libs-5.18.4-293.fc20.x86_64                         16/55 
  Installing : perl-File-Path-2.09-292.fc20.noarch                        17/55 
  Installing : perl-PathTools-3.40-291.fc20.x86_64                        18/55 
  Installing : 4:perl-macros-5.18.4-293.fc20.x86_64                       19/55 
  Installing : perl-File-Temp-0.23.01-4.fc20.noarch                       20/55 
  Installing : perl-Time-HiRes-1.9726-1.fc20.x86_64                       21/55 
  Installing : 1:perl-Pod-Simple-3.29-1.fc20.noarch                       22/55 
  Installing : 1:perl-Module-CoreList-3.13-293.fc20.noarch                23/55 
  Installing : perl-Getopt-Long-2.45-1.fc20.noarch                        24/55 
  Installing : perl-threads-shared-1.46-1.fc20.x86_64                     25/55 
  Installing : 1:perl-threads-1.92-1.fc20.x86_64                          26/55 
  Installing : perl-Carp-1.26-245.fc20.noarch                             27/55 
  Installing : perl-Exporter-5.70-1.fc20.noarch                           28/55 
  Installing : 4:perl-5.18.4-293.fc20.x86_64                              29/55 
  Installing : mpfr-3.1.2-5.fc20.x86_64                                   30/55 
  Installing : libmpc-1.0.1-2.fc20.x86_64                                 31/55 
  Installing : 1:perl-Error-0.17021-1.fc20.noarch                         32/55 
  Installing : cpp-4.8.3-7.fc20.x86_64                                    33/55 
  Installing : perl-TermReadKey-2.30-20.fc20.x86_64                       34/55 
  Installing : perl-Thread-Queue-3.02-291.fc20.noarch                     35/55 
  Installing : perl-Test-Harness-3.28-4.fc20.noarch                       36/55 
  Installing : perl-Data-Dumper-2.154-1.fc20.x86_64                       37/55 
  Installing : m4-1.4.16-10.fc20.x86_64                                   38/55 
  Installing : autoconf-2.69-15.fc20.noarch                               39/55 
  Installing : kernel-headers-3.19.8-100.fc20.x86_64                      40/55 
  Installing : glibc-headers-2.18-19.fc20.x86_64                          41/55 
  Installing : glibc-devel-2.18-19.fc20.x86_64                            42/55 
  Installing : binutils-2.23.88.0.1-13.fc20.x86_64                        43/55 
  Installing : libgomp-4.8.3-7.fc20.x86_64                                44/55 
  Installing : gcc-4.8.3-7.fc20.x86_64                                    45/55 
  Installing : libgnome-keyring-3.10.1-1.fc20.x86_64                      46/55 
  Installing : perl-Git-1.9.3-2.fc20.noarch                               47/55 
  Installing : git-1.9.3-2.fc20.x86_64                                    48/55 
  Installing : libstdc++-devel-4.8.3-7.fc20.x86_64                        49/55 
  Installing : gcc-c++-4.8.3-7.fc20.x86_64                                50/55 
  Installing : automake-1.13.4-6.fc20.noarch                              51/55 
  Installing : kernel-devel-3.19.8-100.fc20.x86_64                        52/55 
  Installing : 1:make-3.82-19.fc20.x86_64                                 53/55 
  Installing : libicu-50.1.2-12.fc20.x86_64                               54/55 
  Installing : which-2.20-6.fc20.x86_64                                   55/55 
  Verifying  : which-2.20-6.fc20.x86_64                                    1/55 
  Verifying  : perl-Exporter-5.70-1.fc20.noarch                            2/55 
  Verifying  : perl-TermReadKey-2.30-20.fc20.x86_64                        3/55 
  Verifying  : perl-Time-Local-1.2300-291.fc20.noarch                      4/55 
  Verifying  : 1:perl-Encode-2.54-4.fc20.x86_64                            5/55 
  Verifying  : git-1.9.3-2.fc20.x86_64                                     6/55 
  Verifying  : perl-constant-1.27-292.fc20.noarch                          7/55 
  Verifying  : 1:perl-Module-CoreList-3.13-293.fc20.noarch                 8/55 
  Verifying  : libstdc++-devel-4.8.3-7.fc20.x86_64                         9/55 
  Verifying  : 4:perl-Pod-Usage-1.66-1.fc20.noarch                        10/55 
  Verifying  : perl-HTTP-Tiny-0.034-4.fc20.noarch                         11/55 
  Verifying  : libgnome-keyring-3.10.1-1.fc20.x86_64                      12/55 
  Verifying  : 1:perl-Error-0.17021-1.fc20.noarch                         13/55 
  Verifying  : cpp-4.8.3-7.fc20.x86_64                                    14/55 
  Verifying  : perl-Scalar-List-Utils-1.31-293.fc20.x86_64                15/55 
  Verifying  : 1:perl-Pod-Simple-3.29-1.fc20.noarch                       16/55 
  Verifying  : 1:perl-Socket-2.019-1.fc20.x86_64                          17/55 
  Verifying  : libgomp-4.8.3-7.fc20.x86_64                                18/55 
  Verifying  : glibc-headers-2.18-19.fc20.x86_64                          19/55 
  Verifying  : 1:perl-Pod-Escapes-1.04-293.fc20.noarch                    20/55 
  Verifying  : 1:perl-Filter-1.54-1.fc20.x86_64                           21/55 
  Verifying  : perl-Git-1.9.3-2.fc20.noarch                               22/55 
  Verifying  : binutils-2.23.88.0.1-13.fc20.x86_64                        23/55 
  Verifying  : gcc-c++-4.8.3-7.fc20.x86_64                                24/55 
  Verifying  : gcc-4.8.3-7.fc20.x86_64                                    25/55 
  Verifying  : 4:perl-5.18.4-293.fc20.x86_64                              26/55 
  Verifying  : kernel-devel-3.19.8-100.fc20.x86_64                        27/55 
  Verifying  : perl-threads-shared-1.46-1.fc20.x86_64                     28/55 
  Verifying  : perl-Storable-2.51-1.fc20.x86_64                           29/55 
  Verifying  : perl-File-Path-2.09-292.fc20.noarch                        30/55 
  Verifying  : mpfr-3.1.2-5.fc20.x86_64                                   31/55 
  Verifying  : perl-Pod-Perldoc-3.20-7.fc20.noarch                        32/55 
  Verifying  : libmpc-1.0.1-2.fc20.x86_64                                 33/55 
  Verifying  : perl-podlators-2.5.1-291.fc20.noarch                       34/55 
  Verifying  : 1:perl-parent-0.228-1.fc20.noarch                          35/55 
  Verifying  : 3:perl-version-0.99.07-1.fc20.x86_64                       36/55 
  Verifying  : 4:perl-libs-5.18.4-293.fc20.x86_64                         37/55 
  Verifying  : automake-1.13.4-6.fc20.noarch                              38/55 
  Verifying  : perl-PathTools-3.40-291.fc20.x86_64                        39/55 
  Verifying  : 4:perl-macros-5.18.4-293.fc20.x86_64                       40/55 
  Verifying  : perl-Text-ParseWords-3.30-1.fc20.noarch                    41/55 
  Verifying  : perl-Thread-Queue-3.02-291.fc20.noarch                     42/55 
  Verifying  : glibc-devel-2.18-19.fc20.x86_64                            43/55 
  Verifying  : kernel-headers-3.19.8-100.fc20.x86_64                      44/55 
  Verifying  : perl-File-Temp-0.23.01-4.fc20.noarch                       45/55 
  Verifying  : m4-1.4.16-10.fc20.x86_64                                   46/55 
  Verifying  : perl-Time-HiRes-1.9726-1.fc20.x86_64                       47/55 
  Verifying  : perl-Getopt-Long-2.45-1.fc20.noarch                        48/55 
  Verifying  : 1:perl-threads-1.92-1.fc20.x86_64                          49/55 
  Verifying  : perl-Test-Harness-3.28-4.fc20.noarch                       50/55 
  Verifying  : libicu-50.1.2-12.fc20.x86_64                               51/55 
  Verifying  : autoconf-2.69-15.fc20.noarch                               52/55 
  Verifying  : perl-Data-Dumper-2.154-1.fc20.x86_64                       53/55 
  Verifying  : perl-Carp-1.26-245.fc20.noarch                             54/55 
  Verifying  : 1:make-3.82-19.fc20.x86_64                                 55/55 

Installed:
  automake.noarch 0:1.13.4-6.fc20            gcc.x86_64 0:4.8.3-7.fc20          
  gcc-c++.x86_64 0:4.8.3-7.fc20              git.x86_64 0:1.9.3-2.fc20          
  kernel-devel.x86_64 0:3.19.8-100.fc20      libicu.x86_64 0:50.1.2-12.fc20     
  make.x86_64 1:3.82-19.fc20                 perl.x86_64 4:5.18.4-293.fc20      
  which.x86_64 0:2.20-6.fc20                

Dependency Installed:
  autoconf.noarch 0:2.69-15.fc20                                                
  binutils.x86_64 0:2.23.88.0.1-13.fc20                                         
  cpp.x86_64 0:4.8.3-7.fc20                                                     
  glibc-devel.x86_64 0:2.18-19.fc20                                             
  glibc-headers.x86_64 0:2.18-19.fc20                                           
  kernel-headers.x86_64 0:3.19.8-100.fc20                                       
  libgnome-keyring.x86_64 0:3.10.1-1.fc20                                       
  libgomp.x86_64 0:4.8.3-7.fc20                                                 
  libmpc.x86_64 0:1.0.1-2.fc20                                                  
  libstdc++-devel.x86_64 0:4.8.3-7.fc20                                         
  m4.x86_64 0:1.4.16-10.fc20                                                    
  mpfr.x86_64 0:3.1.2-5.fc20                                                    
  perl-Carp.noarch 0:1.26-245.fc20                                              
  perl-Data-Dumper.x86_64 0:2.154-1.fc20                                        
  perl-Encode.x86_64 1:2.54-4.fc20                                              
  perl-Error.noarch 1:0.17021-1.fc20                                            
  perl-Exporter.noarch 0:5.70-1.fc20                                            
  perl-File-Path.noarch 0:2.09-292.fc20                                         
  perl-File-Temp.noarch 0:0.23.01-4.fc20                                        
  perl-Filter.x86_64 1:1.54-1.fc20                                              
  perl-Getopt-Long.noarch 0:2.45-1.fc20                                         
  perl-Git.noarch 0:1.9.3-2.fc20                                                
  perl-HTTP-Tiny.noarch 0:0.034-4.fc20                                          
  perl-Module-CoreList.noarch 1:3.13-293.fc20                                   
  perl-PathTools.x86_64 0:3.40-291.fc20                                         
  perl-Pod-Escapes.noarch 1:1.04-293.fc20                                       
  perl-Pod-Perldoc.noarch 0:3.20-7.fc20                                         
  perl-Pod-Simple.noarch 1:3.29-1.fc20                                          
  perl-Pod-Usage.noarch 4:1.66-1.fc20                                           
  perl-Scalar-List-Utils.x86_64 0:1.31-293.fc20                                 
  perl-Socket.x86_64 1:2.019-1.fc20                                             
  perl-Storable.x86_64 0:2.51-1.fc20                                            
  perl-TermReadKey.x86_64 0:2.30-20.fc20                                        
  perl-Test-Harness.noarch 0:3.28-4.fc20                                        
  perl-Text-ParseWords.noarch 0:3.30-1.fc20                                     
  perl-Thread-Queue.noarch 0:3.02-291.fc20                                      
  perl-Time-HiRes.x86_64 0:1.9726-1.fc20                                        
  perl-Time-Local.noarch 0:1.2300-291.fc20                                      
  perl-constant.noarch 0:1.27-292.fc20                                          
  perl-libs.x86_64 4:5.18.4-293.fc20                                            
  perl-macros.x86_64 4:5.18.4-293.fc20                                          
  perl-parent.noarch 1:0.228-1.fc20                                             
  perl-podlators.noarch 0:2.5.1-291.fc20                                        
  perl-threads.x86_64 1:1.92-1.fc20                                             
  perl-threads-shared.x86_64 0:1.46-1.fc20                                      
  perl-version.x86_64 3:0.99.07-1.fc20                                          

Complete!
Cleaning repos: fedora updates
Cleaning up everything
 ---> 153db95c1a86
Removing intermediate container 9fa8e942a60e
Successfully built 153db95c1a86

```

Array of tests: `[]`

# Tested image `nodesource/vivid-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM ubuntu:vivid
vivid: Pulling from library/ubuntu
9502adfba7f1: Pulling fs layer
4332ffb06e4b: Pulling fs layer
2f937cc07b5f: Pulling fs layer
a3ed95caeb02: Pulling fs layer
2f937cc07b5f: Waiting
a3ed95caeb02: Waiting
9502adfba7f1: Waiting
4332ffb06e4b: Download complete
2f937cc07b5f: Download complete
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Download complete
9502adfba7f1: Verifying Checksum
9502adfba7f1: Download complete
9502adfba7f1: Pull complete
9502adfba7f1: Pull complete
4332ffb06e4b: Pull complete
4332ffb06e4b: Pull complete
2f937cc07b5f: Pull complete
2f937cc07b5f: Pull complete
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:16aaeb60ca8cee4ced9952fb89e020295a340e8507e25a9d7023265ece529018
Status: Downloaded newer image for ubuntu:vivid
 ---> d1b55fd07600
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 50fc5528e28d
 ---> 8a92e0953c03
Removing intermediate container 50fc5528e28d
Step 3 : RUN apt-get update  && apt-get install -y --force-yes --no-install-recommends      apt-transport-https       ssh-client       build-essential       curl       ca-certificates       git       libicu-dev       lsb-release       python-all       rlwrap  && rm -rf /var/lib/apt/lists/*;
 ---> Running in b4b21adc9707
Hit http://archive.ubuntu.com vivid InRelease
Get:1 http://archive.ubuntu.com vivid-updates InRelease [65.9 kB]
Get:2 http://archive.ubuntu.com vivid-security InRelease [65.9 kB]
Get:3 http://archive.ubuntu.com vivid/main Sources [1358 kB]
Get:4 http://archive.ubuntu.com vivid/restricted Sources [7100 B]
Get:5 http://archive.ubuntu.com vivid/universe Sources [8705 kB]
Get:6 http://archive.ubuntu.com vivid/main amd64 Packages [1766 kB]
Get:7 http://archive.ubuntu.com vivid/restricted amd64 Packages [22.8 kB]
Get:8 http://archive.ubuntu.com vivid/universe amd64 Packages [8393 kB]
Get:9 http://archive.ubuntu.com vivid-updates/main Sources [143 kB]
Get:10 http://archive.ubuntu.com vivid-updates/restricted Sources [4189 B]
Get:11 http://archive.ubuntu.com vivid-updates/universe Sources [62.3 kB]
Get:12 http://archive.ubuntu.com vivid-updates/main amd64 Packages [370 kB]
Get:13 http://archive.ubuntu.com vivid-updates/restricted amd64 Packages [20.8 kB]
Get:14 http://archive.ubuntu.com vivid-updates/universe amd64 Packages [179 kB]
Get:15 http://archive.ubuntu.com vivid-security/main Sources [73.4 kB]
Get:16 http://archive.ubuntu.com vivid-security/restricted Sources [3313 B]
Get:17 http://archive.ubuntu.com vivid-security/universe Sources [27.2 kB]
Get:18 http://archive.ubuntu.com vivid-security/main amd64 Packages [250 kB]
Get:19 http://archive.ubuntu.com vivid-security/restricted amd64 Packages [17.8 kB]
Get:20 http://archive.ubuntu.com vivid-security/universe amd64 Packages [97.3 kB]
Fetched 21.6 MB in 11s (1865 kB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
The following extra packages will be installed:
  binutils bzip2 cpp cpp-4.9 dh-python dpkg-dev g++ g++-4.9 gcc gcc-4.9
  git-man icu-devtools libasan1 libasn1-8-heimdal libatomic1 libc-dev-bin
  libc6-dev libcilkrts5 libcloog-isl4 libcurl3 libcurl3-gnutls libdpkg-perl
  libedit2 liberror-perl libexpat1 libffi6 libgcc-4.9-dev libgdbm3 libgmp10
  libgnutls-deb0-28 libgomp1 libgssapi-krb5-2 libgssapi3-heimdal
  libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal libhogweed2
  libhx509-5-heimdal libicu52 libidn11 libisl13 libitm1 libk5crypto3
  libkeyutils1 libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2
  liblsan0 libmpc3 libmpdec2 libmpfr4 libnettle4 libp11-kit0 libpython-stdlib
  libpython2.7-minimal libpython2.7-stdlib libpython3-stdlib
  libpython3.4-minimal libpython3.4-stdlib libquadmath0 libroken18-heimdal
  librtmp1 libsasl2-2 libsasl2-modules-db libsqlite3-0 libssl1.0.0
  libstdc++-4.9-dev libtasn1-6 libtimedate-perl libtsan0 libubsan0
  libwind0-heimdal linux-libc-dev make mime-support openssl patch perl
  perl-modules python python-minimal python2.7 python2.7-minimal python3
  python3-minimal python3.4 python3.4-minimal xz-utils
Suggested packages:
  binutils-doc bzip2-doc cpp-doc gcc-4.9-locales debian-keyring g++-multilib
  g++-4.9-multilib gcc-4.9-doc libstdc++6-4.9-dbg gcc-multilib manpages-dev
  autoconf automake libtool flex bison gdb gcc-doc gcc-4.9-multilib
  libgcc1-dbg libgomp1-dbg libitm1-dbg libatomic1-dbg libasan1-dbg
  liblsan0-dbg libtsan0-dbg libubsan0-dbg libcilkrts5-dbg libquadmath0-dbg
  gettext-base git-daemon-run git-daemon-sysvinit git-doc git-el git-email
  git-gui gitk gitweb git-arch git-cvs git-mediawiki git-svn glibc-doc
  gnutls-bin krb5-doc krb5-user icu-doc libstdc++-4.9-doc lsb make-doc
  ssh-askpass libpam-ssh keychain monkeysphere ed diffutils-doc perl-doc
  libterm-readline-gnu-perl libterm-readline-perl-perl libb-lint-perl
  libcpanplus-dist-build-perl libcpanplus-perl libfile-checktree-perl
  liblog-message-simple-perl liblog-message-perl libobject-accessor-perl
  python-doc python-tk python2.7-doc binfmt-support python3-doc python3-tk
  python3-venv python3.4-venv python3.4-doc
Recommended packages:
  fakeroot libalgorithm-merge-perl less rsync ssh-client
  libfile-fcntllock-perl krb5-locales libsasl2-modules file xauth netbase
  rename libarchive-extract-perl libmodule-pluggable-perl libpod-latex-perl
  libterm-ui-perl libtext-soundex-perl libcgi-pm-perl libmodule-build-perl
  libpackage-constants-perl
The following NEW packages will be installed:
  apt-transport-https binutils build-essential bzip2 ca-certificates cpp
  cpp-4.9 curl dh-python dpkg-dev g++ g++-4.9 gcc gcc-4.9 git git-man
  icu-devtools libasan1 libasn1-8-heimdal libatomic1 libc-dev-bin libc6-dev
  libcilkrts5 libcloog-isl4 libcurl3 libcurl3-gnutls libdpkg-perl libedit2
  liberror-perl libexpat1 libffi6 libgcc-4.9-dev libgdbm3 libgmp10
  libgnutls-deb0-28 libgomp1 libgssapi-krb5-2 libgssapi3-heimdal
  libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal libhogweed2
  libhx509-5-heimdal libicu-dev libicu52 libidn11 libisl13 libitm1
  libk5crypto3 libkeyutils1 libkrb5-26-heimdal libkrb5-3 libkrb5support0
  libldap-2.4-2 liblsan0 libmpc3 libmpdec2 libmpfr4 libnettle4 libp11-kit0
  libpython-stdlib libpython2.7-minimal libpython2.7-stdlib libpython3-stdlib
  libpython3.4-minimal libpython3.4-stdlib libquadmath0 libroken18-heimdal
  librtmp1 libsasl2-2 libsasl2-modules-db libsqlite3-0 libssl1.0.0
  libstdc++-4.9-dev libtasn1-6 libtimedate-perl libtsan0 libubsan0
  libwind0-heimdal linux-libc-dev lsb-release make mime-support openssh-client
  openssl patch perl perl-modules python python-all python-minimal python2.7
  python2.7-minimal python3 python3-minimal python3.4 python3.4-minimal rlwrap
  xz-utils
0 upgraded, 99 newly installed, 0 to remove and 0 not upgraded.
Need to get 77.1 MB of archives.
After this operation, 307 MB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libexpat1 amd64 2.1.0-6ubuntu1.1 [70.8 kB]
Get:2 http://archive.ubuntu.com/ubuntu/ vivid/main libffi6 amd64 3.2.1-2 [17.7 kB]
Get:3 http://archive.ubuntu.com/ubuntu/ vivid/main libgmp10 amd64 2:6.0.0+dfsg-6ubuntu1 [241 kB]
Get:4 http://archive.ubuntu.com/ubuntu/ vivid/main libnettle4 amd64 2.7.1-5 [107 kB]
Get:5 http://archive.ubuntu.com/ubuntu/ vivid/main libhogweed2 amd64 2.7.1-5 [125 kB]
Get:6 http://archive.ubuntu.com/ubuntu/ vivid/main libp11-kit0 amd64 0.20.7-1 [77.1 kB]
Get:7 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libtasn1-6 amd64 4.2-2ubuntu1.1 [42.4 kB]
Get:8 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libgnutls-deb0-28 amd64 3.3.8-3ubuntu3.2 [516 kB]
Get:9 http://archive.ubuntu.com/ubuntu/ vivid/main libmpdec2 amd64 2.4.1-1 [82.7 kB]
Get:10 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libssl1.0.0 amd64 1.0.1f-1ubuntu11.5 [850 kB]
Get:11 http://archive.ubuntu.com/ubuntu/ vivid/main libpython3.4-minimal amd64 3.4.3-3 [466 kB]
Get:12 http://archive.ubuntu.com/ubuntu/ vivid/main mime-support all 3.58ubuntu1 [31.6 kB]
Get:13 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libsqlite3-0 amd64 3.8.7.4-1ubuntu0.1 [371 kB]
Get:14 http://archive.ubuntu.com/ubuntu/ vivid/main libpython3.4-stdlib amd64 3.4.3-3 [2053 kB]
Get:15 http://archive.ubuntu.com/ubuntu/ vivid/main python3.4-minimal amd64 3.4.3-3 [1361 kB]
Get:16 http://archive.ubuntu.com/ubuntu/ vivid/main python3-minimal amd64 3.4.3-1 [23.4 kB]
Get:17 http://archive.ubuntu.com/ubuntu/ vivid/main python3.4 amd64 3.4.3-3 [178 kB]
Get:18 http://archive.ubuntu.com/ubuntu/ vivid/main libpython3-stdlib amd64 3.4.3-1 [6986 B]
Get:19 http://archive.ubuntu.com/ubuntu/ vivid/main dh-python all 1.20141111-2ubuntu1 [65.1 kB]
Get:20 http://archive.ubuntu.com/ubuntu/ vivid/main python3 amd64 3.4.3-1 [8830 B]
Get:21 http://archive.ubuntu.com/ubuntu/ vivid/main libroken18-heimdal amd64 1.6~rc2+dfsg-9 [41.2 kB]
Get:22 http://archive.ubuntu.com/ubuntu/ vivid/main libasn1-8-heimdal amd64 1.6~rc2+dfsg-9 [177 kB]
Get:23 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libkrb5support0 amd64 1.12.1+dfsg-18ubuntu0.1 [30.6 kB]
Get:24 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libk5crypto3 amd64 1.12.1+dfsg-18ubuntu0.1 [83.2 kB]
Get:25 http://archive.ubuntu.com/ubuntu/ vivid/main libkeyutils1 amd64 1.5.9-5ubuntu1 [9636 B]
Get:26 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libkrb5-3 amd64 1.12.1+dfsg-18ubuntu0.1 [270 kB]
Get:27 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libgssapi-krb5-2 amd64 1.12.1+dfsg-18ubuntu0.1 [120 kB]
Get:28 http://archive.ubuntu.com/ubuntu/ vivid/main libidn11 amd64 1.28-1ubuntu2 [93.0 kB]
Get:29 http://archive.ubuntu.com/ubuntu/ vivid/main libhcrypto4-heimdal amd64 1.6~rc2+dfsg-9 [86.1 kB]
Get:30 http://archive.ubuntu.com/ubuntu/ vivid/main libheimbase1-heimdal amd64 1.6~rc2+dfsg-9 [29.9 kB]
Get:31 http://archive.ubuntu.com/ubuntu/ vivid/main libwind0-heimdal amd64 1.6~rc2+dfsg-9 [48.3 kB]
Get:32 http://archive.ubuntu.com/ubuntu/ vivid/main libhx509-5-heimdal amd64 1.6~rc2+dfsg-9 [107 kB]
Get:33 http://archive.ubuntu.com/ubuntu/ vivid/main libkrb5-26-heimdal amd64 1.6~rc2+dfsg-9 [203 kB]
Get:34 http://archive.ubuntu.com/ubuntu/ vivid/main libheimntlm0-heimdal amd64 1.6~rc2+dfsg-9 [15.2 kB]
Get:35 http://archive.ubuntu.com/ubuntu/ vivid/main libgssapi3-heimdal amd64 1.6~rc2+dfsg-9 [94.6 kB]
Get:36 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libsasl2-modules-db amd64 2.1.26.dfsg1-13ubuntu0.1 [14.8 kB]
Get:37 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libsasl2-2 amd64 2.1.26.dfsg1-13ubuntu0.1 [49.5 kB]
Get:38 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libldap-2.4-2 amd64 2.4.31-1+nmu2ubuntu12.3 [155 kB]
Get:39 http://archive.ubuntu.com/ubuntu/ vivid/main librtmp1 amd64 2.4+20131018.git79459a2-5 [54.7 kB]
Get:40 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libcurl3-gnutls amd64 7.38.0-3ubuntu2.3 [172 kB]
Get:41 http://archive.ubuntu.com/ubuntu/ vivid/main libedit2 amd64 3.1-20140620-2 [81.4 kB]
Get:42 http://archive.ubuntu.com/ubuntu/ vivid/main libgdbm3 amd64 1.8.3-13.1 [16.9 kB]
Get:43 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libicu52 amd64 52.1-8ubuntu0.2 [6788 kB]
Get:44 http://archive.ubuntu.com/ubuntu/ vivid/main libasan1 amd64 4.9.2-10ubuntu13 [198 kB]
Get:45 http://archive.ubuntu.com/ubuntu/ vivid/main libatomic1 amd64 4.9.2-10ubuntu13 [9262 B]
Get:46 http://archive.ubuntu.com/ubuntu/ vivid/main libcilkrts5 amd64 4.9.2-10ubuntu13 [40.5 kB]
Get:47 http://archive.ubuntu.com/ubuntu/ vivid/main libisl13 amd64 0.14-1 [456 kB]
Get:48 http://archive.ubuntu.com/ubuntu/ vivid/main libcloog-isl4 amd64 0.18.2-3 [60.4 kB]
Get:49 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libcurl3 amd64 7.38.0-3ubuntu2.3 [180 kB]
Get:50 http://archive.ubuntu.com/ubuntu/ vivid/main libgomp1 amd64 4.9.2-10ubuntu13 [38.4 kB]
Get:51 http://archive.ubuntu.com/ubuntu/ vivid/main libitm1 amd64 4.9.2-10ubuntu13 [30.3 kB]
Get:52 http://archive.ubuntu.com/ubuntu/ vivid/main liblsan0 amd64 4.9.2-10ubuntu13 [94.3 kB]
Get:53 http://archive.ubuntu.com/ubuntu/ vivid/main libmpfr4 amd64 3.1.2-3 [184 kB]
Get:54 http://archive.ubuntu.com/ubuntu/ vivid/main libquadmath0 amd64 4.9.2-10ubuntu13 [130 kB]
Get:55 http://archive.ubuntu.com/ubuntu/ vivid/main libtsan0 amd64 4.9.2-10ubuntu13 [217 kB]
Get:56 http://archive.ubuntu.com/ubuntu/ vivid/main libubsan0 amd64 4.9.2-10ubuntu13 [84.0 kB]
Get:57 http://archive.ubuntu.com/ubuntu/ vivid-updates/main perl-modules all 5.20.2-2ubuntu0.1 [2493 kB]
Get:58 http://archive.ubuntu.com/ubuntu/ vivid-updates/main perl amd64 5.20.2-2ubuntu0.1 [2634 kB]
Get:59 http://archive.ubuntu.com/ubuntu/ vivid/main libpython2.7-minimal amd64 2.7.9-2ubuntu3 [338 kB]
Get:60 http://archive.ubuntu.com/ubuntu/ vivid/main python2.7-minimal amd64 2.7.9-2ubuntu3 [1353 kB]
Get:61 http://archive.ubuntu.com/ubuntu/ vivid/main python-minimal amd64 2.7.9-1 [28.2 kB]
Get:62 http://archive.ubuntu.com/ubuntu/ vivid/main libpython2.7-stdlib amd64 2.7.9-2ubuntu3 [1850 kB]
Get:63 http://archive.ubuntu.com/ubuntu/ vivid/main python2.7 amd64 2.7.9-2ubuntu3 [210 kB]
Get:64 http://archive.ubuntu.com/ubuntu/ vivid/main libpython-stdlib amd64 2.7.9-1 [7754 B]
Get:65 http://archive.ubuntu.com/ubuntu/ vivid/main python amd64 2.7.9-1 [137 kB]
Get:66 http://archive.ubuntu.com/ubuntu/ vivid/main libmpc3 amd64 1.0.3-1 [39.7 kB]
Get:67 http://archive.ubuntu.com/ubuntu/ vivid/main bzip2 amd64 1.0.6-7 [32.7 kB]
Get:68 http://archive.ubuntu.com/ubuntu/ vivid/main lsb-release all 4.1+Debian11ubuntu8 [11.6 kB]
Get:69 http://archive.ubuntu.com/ubuntu/ vivid-updates/main apt-transport-https amd64 1.0.9.7ubuntu4.2 [27.4 kB]
Get:70 http://archive.ubuntu.com/ubuntu/ vivid-updates/main openssl amd64 1.0.1f-1ubuntu11.5 [492 kB]
Get:71 http://archive.ubuntu.com/ubuntu/ vivid-updates/main ca-certificates all 20141019ubuntu0.15.04.1 [191 kB]
Get:72 http://archive.ubuntu.com/ubuntu/ vivid-updates/main openssh-client amd64 1:6.7p1-5ubuntu1.4 [585 kB]
Get:73 http://archive.ubuntu.com/ubuntu/ vivid/main binutils amd64 2.25-5ubuntu7 [2226 kB]
Get:74 http://archive.ubuntu.com/ubuntu/ vivid/main libc-dev-bin amd64 2.21-0ubuntu4 [68.6 kB]
Get:75 http://archive.ubuntu.com/ubuntu/ vivid-updates/main linux-libc-dev amd64 3.19.0-59.66 [805 kB]
Get:76 http://archive.ubuntu.com/ubuntu/ vivid/main libc6-dev amd64 2.21-0ubuntu4 [1967 kB]
Get:77 http://archive.ubuntu.com/ubuntu/ vivid/main cpp-4.9 amd64 4.9.2-10ubuntu13 [5194 kB]
Get:78 http://archive.ubuntu.com/ubuntu/ vivid/main cpp amd64 4:4.9.2-2ubuntu2 [27.6 kB]
Get:79 http://archive.ubuntu.com/ubuntu/ vivid/main libgcc-4.9-dev amd64 4.9.2-10ubuntu13 [2077 kB]
Get:80 http://archive.ubuntu.com/ubuntu/ vivid/main gcc-4.9 amd64 4.9.2-10ubuntu13 [5650 kB]
Get:81 http://archive.ubuntu.com/ubuntu/ vivid/main gcc amd64 4:4.9.2-2ubuntu2 [5232 B]
Get:82 http://archive.ubuntu.com/ubuntu/ vivid/main libstdc++-4.9-dev amd64 4.9.2-10ubuntu13 [1125 kB]
Get:83 http://archive.ubuntu.com/ubuntu/ vivid/main g++-4.9 amd64 4.9.2-10ubuntu13 [17.5 MB]
Get:84 http://archive.ubuntu.com/ubuntu/ vivid/main g++ amd64 4:4.9.2-2ubuntu2 [1590 B]
Get:85 http://archive.ubuntu.com/ubuntu/ vivid/main make amd64 4.0-8.1 [149 kB]
Get:86 http://archive.ubuntu.com/ubuntu/ vivid/main libtimedate-perl all 2.3000-2 [37.5 kB]
Get:87 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libdpkg-perl all 1.17.25ubuntu1.1 [189 kB]
Get:88 http://archive.ubuntu.com/ubuntu/ vivid/main xz-utils amd64 5.1.1alpha+20120614-2ubuntu2 [78.8 kB]
Get:89 http://archive.ubuntu.com/ubuntu/ vivid/main patch amd64 2.7.5-1 [90.4 kB]
Get:90 http://archive.ubuntu.com/ubuntu/ vivid-updates/main dpkg-dev all 1.17.25ubuntu1.1 [763 kB]
Get:91 http://archive.ubuntu.com/ubuntu/ vivid/main build-essential amd64 11.6ubuntu6 [4838 B]
Get:92 http://archive.ubuntu.com/ubuntu/ vivid-updates/main curl amd64 7.38.0-3ubuntu2.3 [129 kB]
Get:93 http://archive.ubuntu.com/ubuntu/ vivid/main liberror-perl all 0.17-1.1 [21.1 kB]
Get:94 http://archive.ubuntu.com/ubuntu/ vivid-updates/main git-man all 1:2.1.4-2.1ubuntu0.1 [701 kB]
Get:95 http://archive.ubuntu.com/ubuntu/ vivid-updates/main git amd64 1:2.1.4-2.1ubuntu0.1 [2817 kB]
Get:96 http://archive.ubuntu.com/ubuntu/ vivid-updates/main icu-devtools amd64 52.1-8ubuntu0.2 [164 kB]
Get:97 http://archive.ubuntu.com/ubuntu/ vivid-updates/main libicu-dev amd64 52.1-8ubuntu0.2 [7638 kB]
Get:98 http://archive.ubuntu.com/ubuntu/ vivid/main python-all amd64 2.7.9-1 [1030 B]
Get:99 http://archive.ubuntu.com/ubuntu/ vivid/universe rlwrap amd64 0.41-1 [74.2 kB]
[91mdebconf: delaying package configuration, since apt-utils is not installed
[0mFetched 77.1 MB in 46s (1666 kB/s)
Selecting previously unselected package libexpat1:amd64.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 7291 files and directories currently installed.)
Preparing to unpack .../libexpat1_2.1.0-6ubuntu1.1_amd64.deb ...
Unpacking libexpat1:amd64 (2.1.0-6ubuntu1.1) ...
Selecting previously unselected package libffi6:amd64.
Preparing to unpack .../libffi6_3.2.1-2_amd64.deb ...
Unpacking libffi6:amd64 (3.2.1-2) ...
Selecting previously unselected package libgmp10:amd64.
Preparing to unpack .../libgmp10_2%3a6.0.0+dfsg-6ubuntu1_amd64.deb ...
Unpacking libgmp10:amd64 (2:6.0.0+dfsg-6ubuntu1) ...
Selecting previously unselected package libnettle4:amd64.
Preparing to unpack .../libnettle4_2.7.1-5_amd64.deb ...
Unpacking libnettle4:amd64 (2.7.1-5) ...
Selecting previously unselected package libhogweed2:amd64.
Preparing to unpack .../libhogweed2_2.7.1-5_amd64.deb ...
Unpacking libhogweed2:amd64 (2.7.1-5) ...
Selecting previously unselected package libp11-kit0:amd64.
Preparing to unpack .../libp11-kit0_0.20.7-1_amd64.deb ...
Unpacking libp11-kit0:amd64 (0.20.7-1) ...
Selecting previously unselected package libtasn1-6:amd64.
Preparing to unpack .../libtasn1-6_4.2-2ubuntu1.1_amd64.deb ...
Unpacking libtasn1-6:amd64 (4.2-2ubuntu1.1) ...
Selecting previously unselected package libgnutls-deb0-28:amd64.
Preparing to unpack .../libgnutls-deb0-28_3.3.8-3ubuntu3.2_amd64.deb ...
Unpacking libgnutls-deb0-28:amd64 (3.3.8-3ubuntu3.2) ...
Selecting previously unselected package libmpdec2:amd64.
Preparing to unpack .../libmpdec2_2.4.1-1_amd64.deb ...
Unpacking libmpdec2:amd64 (2.4.1-1) ...
Selecting previously unselected package libssl1.0.0:amd64.
Preparing to unpack .../libssl1.0.0_1.0.1f-1ubuntu11.5_amd64.deb ...
Unpacking libssl1.0.0:amd64 (1.0.1f-1ubuntu11.5) ...
Selecting previously unselected package libpython3.4-minimal:amd64.
Preparing to unpack .../libpython3.4-minimal_3.4.3-3_amd64.deb ...
Unpacking libpython3.4-minimal:amd64 (3.4.3-3) ...
Selecting previously unselected package mime-support.
Preparing to unpack .../mime-support_3.58ubuntu1_all.deb ...
Unpacking mime-support (3.58ubuntu1) ...
Selecting previously unselected package libsqlite3-0:amd64.
Preparing to unpack .../libsqlite3-0_3.8.7.4-1ubuntu0.1_amd64.deb ...
Unpacking libsqlite3-0:amd64 (3.8.7.4-1ubuntu0.1) ...
Selecting previously unselected package libpython3.4-stdlib:amd64.
Preparing to unpack .../libpython3.4-stdlib_3.4.3-3_amd64.deb ...
Unpacking libpython3.4-stdlib:amd64 (3.4.3-3) ...
Selecting previously unselected package python3.4-minimal.
Preparing to unpack .../python3.4-minimal_3.4.3-3_amd64.deb ...
Unpacking python3.4-minimal (3.4.3-3) ...
Selecting previously unselected package python3-minimal.
Preparing to unpack .../python3-minimal_3.4.3-1_amd64.deb ...
Unpacking python3-minimal (3.4.3-1) ...
Selecting previously unselected package python3.4.
Preparing to unpack .../python3.4_3.4.3-3_amd64.deb ...
Unpacking python3.4 (3.4.3-3) ...
Selecting previously unselected package libpython3-stdlib:amd64.
Preparing to unpack .../libpython3-stdlib_3.4.3-1_amd64.deb ...
Unpacking libpython3-stdlib:amd64 (3.4.3-1) ...
Selecting previously unselected package dh-python.
Preparing to unpack .../dh-python_1.20141111-2ubuntu1_all.deb ...
Unpacking dh-python (1.20141111-2ubuntu1) ...
Setting up libssl1.0.0:amd64 (1.0.1f-1ubuntu11.5) ...
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.20.2 /usr/local/share/perl/5.20.2 /usr/lib/x86_64-linux-gnu/perl5/5.20 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl/5.20 /usr/share/perl/5.20 /usr/local/lib/site_perl .) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
debconf: falling back to frontend: Teletype
Setting up libpython3.4-minimal:amd64 (3.4.3-3) ...
Setting up libexpat1:amd64 (2.1.0-6ubuntu1.1) ...
Setting up python3.4-minimal (3.4.3-3) ...
Setting up python3-minimal (3.4.3-1) ...
Processing triggers for libc-bin (2.21-0ubuntu4) ...
Selecting previously unselected package python3.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 8301 files and directories currently installed.)
Preparing to unpack .../python3_3.4.3-1_amd64.deb ...
Unpacking python3 (3.4.3-1) ...
Selecting previously unselected package libroken18-heimdal:amd64.
Preparing to unpack .../libroken18-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libroken18-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libasn1-8-heimdal:amd64.
Preparing to unpack .../libasn1-8-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libasn1-8-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libkrb5support0:amd64.
Preparing to unpack .../libkrb5support0_1.12.1+dfsg-18ubuntu0.1_amd64.deb ...
Unpacking libkrb5support0:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Selecting previously unselected package libk5crypto3:amd64.
Preparing to unpack .../libk5crypto3_1.12.1+dfsg-18ubuntu0.1_amd64.deb ...
Unpacking libk5crypto3:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Selecting previously unselected package libkeyutils1:amd64.
Preparing to unpack .../libkeyutils1_1.5.9-5ubuntu1_amd64.deb ...
Unpacking libkeyutils1:amd64 (1.5.9-5ubuntu1) ...
Selecting previously unselected package libkrb5-3:amd64.
Preparing to unpack .../libkrb5-3_1.12.1+dfsg-18ubuntu0.1_amd64.deb ...
Unpacking libkrb5-3:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Selecting previously unselected package libgssapi-krb5-2:amd64.
Preparing to unpack .../libgssapi-krb5-2_1.12.1+dfsg-18ubuntu0.1_amd64.deb ...
Unpacking libgssapi-krb5-2:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Selecting previously unselected package libidn11:amd64.
Preparing to unpack .../libidn11_1.28-1ubuntu2_amd64.deb ...
Unpacking libidn11:amd64 (1.28-1ubuntu2) ...
Selecting previously unselected package libhcrypto4-heimdal:amd64.
Preparing to unpack .../libhcrypto4-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libhcrypto4-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libheimbase1-heimdal:amd64.
Preparing to unpack .../libheimbase1-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libheimbase1-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libwind0-heimdal:amd64.
Preparing to unpack .../libwind0-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libwind0-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libhx509-5-heimdal:amd64.
Preparing to unpack .../libhx509-5-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libhx509-5-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libkrb5-26-heimdal:amd64.
Preparing to unpack .../libkrb5-26-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libkrb5-26-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libheimntlm0-heimdal:amd64.
Preparing to unpack .../libheimntlm0-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libheimntlm0-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libgssapi3-heimdal:amd64.
Preparing to unpack .../libgssapi3-heimdal_1.6~rc2+dfsg-9_amd64.deb ...
Unpacking libgssapi3-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Selecting previously unselected package libsasl2-modules-db:amd64.
Preparing to unpack .../libsasl2-modules-db_2.1.26.dfsg1-13ubuntu0.1_amd64.deb ...
Unpacking libsasl2-modules-db:amd64 (2.1.26.dfsg1-13ubuntu0.1) ...
Selecting previously unselected package libsasl2-2:amd64.
Preparing to unpack .../libsasl2-2_2.1.26.dfsg1-13ubuntu0.1_amd64.deb ...
Unpacking libsasl2-2:amd64 (2.1.26.dfsg1-13ubuntu0.1) ...
Selecting previously unselected package libldap-2.4-2:amd64.
Preparing to unpack .../libldap-2.4-2_2.4.31-1+nmu2ubuntu12.3_amd64.deb ...
Unpacking libldap-2.4-2:amd64 (2.4.31-1+nmu2ubuntu12.3) ...
Selecting previously unselected package librtmp1:amd64.
Preparing to unpack .../librtmp1_2.4+20131018.git79459a2-5_amd64.deb ...
Unpacking librtmp1:amd64 (2.4+20131018.git79459a2-5) ...
Selecting previously unselected package libcurl3-gnutls:amd64.
Preparing to unpack .../libcurl3-gnutls_7.38.0-3ubuntu2.3_amd64.deb ...
Unpacking libcurl3-gnutls:amd64 (7.38.0-3ubuntu2.3) ...
Selecting previously unselected package libedit2:amd64.
Preparing to unpack .../libedit2_3.1-20140620-2_amd64.deb ...
Unpacking libedit2:amd64 (3.1-20140620-2) ...
Selecting previously unselected package libgdbm3:amd64.
Preparing to unpack .../libgdbm3_1.8.3-13.1_amd64.deb ...
Unpacking libgdbm3:amd64 (1.8.3-13.1) ...
Selecting previously unselected package libicu52:amd64.
Preparing to unpack .../libicu52_52.1-8ubuntu0.2_amd64.deb ...
Unpacking libicu52:amd64 (52.1-8ubuntu0.2) ...
Selecting previously unselected package libasan1:amd64.
Preparing to unpack .../libasan1_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libasan1:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libatomic1:amd64.
Preparing to unpack .../libatomic1_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libatomic1:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libcilkrts5:amd64.
Preparing to unpack .../libcilkrts5_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libcilkrts5:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libisl13:amd64.
Preparing to unpack .../libisl13_0.14-1_amd64.deb ...
Unpacking libisl13:amd64 (0.14-1) ...
Selecting previously unselected package libcloog-isl4:amd64.
Preparing to unpack .../libcloog-isl4_0.18.2-3_amd64.deb ...
Unpacking libcloog-isl4:amd64 (0.18.2-3) ...
Selecting previously unselected package libcurl3:amd64.
Preparing to unpack .../libcurl3_7.38.0-3ubuntu2.3_amd64.deb ...
Unpacking libcurl3:amd64 (7.38.0-3ubuntu2.3) ...
Selecting previously unselected package libgomp1:amd64.
Preparing to unpack .../libgomp1_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libgomp1:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libitm1:amd64.
Preparing to unpack .../libitm1_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libitm1:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package liblsan0:amd64.
Preparing to unpack .../liblsan0_4.9.2-10ubuntu13_amd64.deb ...
Unpacking liblsan0:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libmpfr4:amd64.
Preparing to unpack .../libmpfr4_3.1.2-3_amd64.deb ...
Unpacking libmpfr4:amd64 (3.1.2-3) ...
Selecting previously unselected package libquadmath0:amd64.
Preparing to unpack .../libquadmath0_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libquadmath0:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libtsan0:amd64.
Preparing to unpack .../libtsan0_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libtsan0:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package libubsan0:amd64.
Preparing to unpack .../libubsan0_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libubsan0:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package perl-modules.
Preparing to unpack .../perl-modules_5.20.2-2ubuntu0.1_all.deb ...
Unpacking perl-modules (5.20.2-2ubuntu0.1) ...
Selecting previously unselected package perl.
Preparing to unpack .../perl_5.20.2-2ubuntu0.1_amd64.deb ...
Unpacking perl (5.20.2-2ubuntu0.1) ...
Selecting previously unselected package libpython2.7-minimal:amd64.
Preparing to unpack .../libpython2.7-minimal_2.7.9-2ubuntu3_amd64.deb ...
Unpacking libpython2.7-minimal:amd64 (2.7.9-2ubuntu3) ...
Selecting previously unselected package python2.7-minimal.
Preparing to unpack .../python2.7-minimal_2.7.9-2ubuntu3_amd64.deb ...
Unpacking python2.7-minimal (2.7.9-2ubuntu3) ...
Selecting previously unselected package python-minimal.
Preparing to unpack .../python-minimal_2.7.9-1_amd64.deb ...
Unpacking python-minimal (2.7.9-1) ...
Selecting previously unselected package libpython2.7-stdlib:amd64.
Preparing to unpack .../libpython2.7-stdlib_2.7.9-2ubuntu3_amd64.deb ...
Unpacking libpython2.7-stdlib:amd64 (2.7.9-2ubuntu3) ...
Selecting previously unselected package python2.7.
Preparing to unpack .../python2.7_2.7.9-2ubuntu3_amd64.deb ...
Unpacking python2.7 (2.7.9-2ubuntu3) ...
Selecting previously unselected package libpython-stdlib:amd64.
Preparing to unpack .../libpython-stdlib_2.7.9-1_amd64.deb ...
Unpacking libpython-stdlib:amd64 (2.7.9-1) ...
Setting up libpython2.7-minimal:amd64 (2.7.9-2ubuntu3) ...
Setting up python2.7-minimal (2.7.9-2ubuntu3) ...
Linking and byte-compiling packages for runtime python2.7...
Setting up python-minimal (2.7.9-1) ...
Selecting previously unselected package python.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 10496 files and directories currently installed.)
Preparing to unpack .../python_2.7.9-1_amd64.deb ...
Unpacking python (2.7.9-1) ...
Selecting previously unselected package libmpc3:amd64.
Preparing to unpack .../libmpc3_1.0.3-1_amd64.deb ...
Unpacking libmpc3:amd64 (1.0.3-1) ...
Selecting previously unselected package bzip2.
Preparing to unpack .../bzip2_1.0.6-7_amd64.deb ...
Unpacking bzip2 (1.0.6-7) ...
Selecting previously unselected package lsb-release.
Preparing to unpack .../lsb-release_4.1+Debian11ubuntu8_all.deb ...
Unpacking lsb-release (4.1+Debian11ubuntu8) ...
Selecting previously unselected package apt-transport-https.
Preparing to unpack .../apt-transport-https_1.0.9.7ubuntu4.2_amd64.deb ...
Unpacking apt-transport-https (1.0.9.7ubuntu4.2) ...
Selecting previously unselected package openssl.
Preparing to unpack .../openssl_1.0.1f-1ubuntu11.5_amd64.deb ...
Unpacking openssl (1.0.1f-1ubuntu11.5) ...
Selecting previously unselected package ca-certificates.
Preparing to unpack .../ca-certificates_20141019ubuntu0.15.04.1_all.deb ...
Unpacking ca-certificates (20141019ubuntu0.15.04.1) ...
Selecting previously unselected package openssh-client.
Preparing to unpack .../openssh-client_1%3a6.7p1-5ubuntu1.4_amd64.deb ...
Unpacking openssh-client (1:6.7p1-5ubuntu1.4) ...
Selecting previously unselected package binutils.
Preparing to unpack .../binutils_2.25-5ubuntu7_amd64.deb ...
Unpacking binutils (2.25-5ubuntu7) ...
Selecting previously unselected package libc-dev-bin.
Preparing to unpack .../libc-dev-bin_2.21-0ubuntu4_amd64.deb ...
Unpacking libc-dev-bin (2.21-0ubuntu4) ...
Selecting previously unselected package linux-libc-dev:amd64.
Preparing to unpack .../linux-libc-dev_3.19.0-59.66_amd64.deb ...
Unpacking linux-libc-dev:amd64 (3.19.0-59.66) ...
Selecting previously unselected package libc6-dev:amd64.
Preparing to unpack .../libc6-dev_2.21-0ubuntu4_amd64.deb ...
Unpacking libc6-dev:amd64 (2.21-0ubuntu4) ...
Selecting previously unselected package cpp-4.9.
Preparing to unpack .../cpp-4.9_4.9.2-10ubuntu13_amd64.deb ...
Unpacking cpp-4.9 (4.9.2-10ubuntu13) ...
Selecting previously unselected package cpp.
Preparing to unpack .../cpp_4%3a4.9.2-2ubuntu2_amd64.deb ...
Unpacking cpp (4:4.9.2-2ubuntu2) ...
Selecting previously unselected package libgcc-4.9-dev:amd64.
Preparing to unpack .../libgcc-4.9-dev_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libgcc-4.9-dev:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package gcc-4.9.
Preparing to unpack .../gcc-4.9_4.9.2-10ubuntu13_amd64.deb ...
Unpacking gcc-4.9 (4.9.2-10ubuntu13) ...
Selecting previously unselected package gcc.
Preparing to unpack .../gcc_4%3a4.9.2-2ubuntu2_amd64.deb ...
Unpacking gcc (4:4.9.2-2ubuntu2) ...
Selecting previously unselected package libstdc++-4.9-dev:amd64.
Preparing to unpack .../libstdc++-4.9-dev_4.9.2-10ubuntu13_amd64.deb ...
Unpacking libstdc++-4.9-dev:amd64 (4.9.2-10ubuntu13) ...
Selecting previously unselected package g++-4.9.
Preparing to unpack .../g++-4.9_4.9.2-10ubuntu13_amd64.deb ...
Unpacking g++-4.9 (4.9.2-10ubuntu13) ...
Selecting previously unselected package g++.
Preparing to unpack .../g++_4%3a4.9.2-2ubuntu2_amd64.deb ...
Unpacking g++ (4:4.9.2-2ubuntu2) ...
Selecting previously unselected package make.
Preparing to unpack .../make_4.0-8.1_amd64.deb ...
Unpacking make (4.0-8.1) ...
Selecting previously unselected package libtimedate-perl.
Preparing to unpack .../libtimedate-perl_2.3000-2_all.deb ...
Unpacking libtimedate-perl (2.3000-2) ...
Selecting previously unselected package libdpkg-perl.
Preparing to unpack .../libdpkg-perl_1.17.25ubuntu1.1_all.deb ...
Unpacking libdpkg-perl (1.17.25ubuntu1.1) ...
Selecting previously unselected package xz-utils.
Preparing to unpack .../xz-utils_5.1.1alpha+20120614-2ubuntu2_amd64.deb ...
Unpacking xz-utils (5.1.1alpha+20120614-2ubuntu2) ...
Selecting previously unselected package patch.
Preparing to unpack .../patch_2.7.5-1_amd64.deb ...
Unpacking patch (2.7.5-1) ...
Selecting previously unselected package dpkg-dev.
Preparing to unpack .../dpkg-dev_1.17.25ubuntu1.1_all.deb ...
Unpacking dpkg-dev (1.17.25ubuntu1.1) ...
Selecting previously unselected package build-essential.
Preparing to unpack .../build-essential_11.6ubuntu6_amd64.deb ...
Unpacking build-essential (11.6ubuntu6) ...
Selecting previously unselected package curl.
Preparing to unpack .../curl_7.38.0-3ubuntu2.3_amd64.deb ...
Unpacking curl (7.38.0-3ubuntu2.3) ...
Selecting previously unselected package liberror-perl.
Preparing to unpack .../liberror-perl_0.17-1.1_all.deb ...
Unpacking liberror-perl (0.17-1.1) ...
Selecting previously unselected package git-man.
Preparing to unpack .../git-man_1%3a2.1.4-2.1ubuntu0.1_all.deb ...
Unpacking git-man (1:2.1.4-2.1ubuntu0.1) ...
Selecting previously unselected package git.
Preparing to unpack .../git_1%3a2.1.4-2.1ubuntu0.1_amd64.deb ...
Unpacking git (1:2.1.4-2.1ubuntu0.1) ...
Selecting previously unselected package icu-devtools.
Preparing to unpack .../icu-devtools_52.1-8ubuntu0.2_amd64.deb ...
Unpacking icu-devtools (52.1-8ubuntu0.2) ...
Selecting previously unselected package libicu-dev:amd64.
Preparing to unpack .../libicu-dev_52.1-8ubuntu0.2_amd64.deb ...
Unpacking libicu-dev:amd64 (52.1-8ubuntu0.2) ...
Selecting previously unselected package python-all.
Preparing to unpack .../python-all_2.7.9-1_amd64.deb ...
Unpacking python-all (2.7.9-1) ...
Selecting previously unselected package rlwrap.
Preparing to unpack .../rlwrap_0.41-1_amd64.deb ...
Unpacking rlwrap (0.41-1) ...
Setting up libffi6:amd64 (3.2.1-2) ...
Setting up libgmp10:amd64 (2:6.0.0+dfsg-6ubuntu1) ...
Setting up libnettle4:amd64 (2.7.1-5) ...
Setting up libhogweed2:amd64 (2.7.1-5) ...
Setting up libp11-kit0:amd64 (0.20.7-1) ...
Setting up libtasn1-6:amd64 (4.2-2ubuntu1.1) ...
Setting up libgnutls-deb0-28:amd64 (3.3.8-3ubuntu3.2) ...
Setting up libmpdec2:amd64 (2.4.1-1) ...
Setting up mime-support (3.58ubuntu1) ...
Setting up libsqlite3-0:amd64 (3.8.7.4-1ubuntu0.1) ...
Setting up libpython3.4-stdlib:amd64 (3.4.3-3) ...
Setting up python3.4 (3.4.3-3) ...
Setting up libpython3-stdlib:amd64 (3.4.3-1) ...
Setting up libroken18-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libasn1-8-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libkrb5support0:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Setting up libk5crypto3:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Setting up libkeyutils1:amd64 (1.5.9-5ubuntu1) ...
Setting up libkrb5-3:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Setting up libgssapi-krb5-2:amd64 (1.12.1+dfsg-18ubuntu0.1) ...
Setting up libidn11:amd64 (1.28-1ubuntu2) ...
Setting up libhcrypto4-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libheimbase1-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libwind0-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libhx509-5-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libkrb5-26-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libheimntlm0-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libgssapi3-heimdal:amd64 (1.6~rc2+dfsg-9) ...
Setting up libsasl2-modules-db:amd64 (2.1.26.dfsg1-13ubuntu0.1) ...
Setting up libsasl2-2:amd64 (2.1.26.dfsg1-13ubuntu0.1) ...
Setting up libldap-2.4-2:amd64 (2.4.31-1+nmu2ubuntu12.3) ...
Setting up librtmp1:amd64 (2.4+20131018.git79459a2-5) ...
Setting up libcurl3-gnutls:amd64 (7.38.0-3ubuntu2.3) ...
Setting up libedit2:amd64 (3.1-20140620-2) ...
Setting up libgdbm3:amd64 (1.8.3-13.1) ...
Setting up libicu52:amd64 (52.1-8ubuntu0.2) ...
Setting up libasan1:amd64 (4.9.2-10ubuntu13) ...
Setting up libatomic1:amd64 (4.9.2-10ubuntu13) ...
Setting up libcilkrts5:amd64 (4.9.2-10ubuntu13) ...
Setting up libisl13:amd64 (0.14-1) ...
Setting up libcloog-isl4:amd64 (0.18.2-3) ...
Setting up libcurl3:amd64 (7.38.0-3ubuntu2.3) ...
Setting up libgomp1:amd64 (4.9.2-10ubuntu13) ...
Setting up libitm1:amd64 (4.9.2-10ubuntu13) ...
Setting up liblsan0:amd64 (4.9.2-10ubuntu13) ...
Setting up libmpfr4:amd64 (3.1.2-3) ...
Setting up libquadmath0:amd64 (4.9.2-10ubuntu13) ...
Setting up libtsan0:amd64 (4.9.2-10ubuntu13) ...
Setting up libubsan0:amd64 (4.9.2-10ubuntu13) ...
Setting up perl-modules (5.20.2-2ubuntu0.1) ...
Setting up perl (5.20.2-2ubuntu0.1) ...
update-alternatives: using /usr/bin/prename to provide /usr/bin/rename (rename) in auto mode
Setting up libpython2.7-stdlib:amd64 (2.7.9-2ubuntu3) ...
Setting up python2.7 (2.7.9-2ubuntu3) ...
Setting up libpython-stdlib:amd64 (2.7.9-1) ...
Setting up python (2.7.9-1) ...
Setting up libmpc3:amd64 (1.0.3-1) ...
Setting up bzip2 (1.0.6-7) ...
Setting up apt-transport-https (1.0.9.7ubuntu4.2) ...
Setting up openssl (1.0.1f-1ubuntu11.5) ...
Setting up ca-certificates (20141019ubuntu0.15.04.1) ...
debconf: unable to initialize frontend: Dialog
debconf: (TERM is not set, so the dialog frontend is not usable.)
debconf: falling back to frontend: Readline
Setting up openssh-client (1:6.7p1-5ubuntu1.4) ...
Setting up binutils (2.25-5ubuntu7) ...
Setting up libc-dev-bin (2.21-0ubuntu4) ...
Setting up linux-libc-dev:amd64 (3.19.0-59.66) ...
Setting up libc6-dev:amd64 (2.21-0ubuntu4) ...
Setting up cpp-4.9 (4.9.2-10ubuntu13) ...
Setting up cpp (4:4.9.2-2ubuntu2) ...
Setting up libgcc-4.9-dev:amd64 (4.9.2-10ubuntu13) ...
Setting up gcc-4.9 (4.9.2-10ubuntu13) ...
Setting up gcc (4:4.9.2-2ubuntu2) ...
Setting up libstdc++-4.9-dev:amd64 (4.9.2-10ubuntu13) ...
Setting up g++-4.9 (4.9.2-10ubuntu13) ...
Setting up g++ (4:4.9.2-2ubuntu2) ...
update-alternatives: using /usr/bin/g++ to provide /usr/bin/c++ (c++) in auto mode
Setting up make (4.0-8.1) ...
Setting up libtimedate-perl (2.3000-2) ...
Setting up libdpkg-perl (1.17.25ubuntu1.1) ...
Setting up xz-utils (5.1.1alpha+20120614-2ubuntu2) ...
update-alternatives: using /usr/bin/xz to provide /usr/bin/lzma (lzma) in auto mode
Setting up patch (2.7.5-1) ...
Setting up dpkg-dev (1.17.25ubuntu1.1) ...
Setting up build-essential (11.6ubuntu6) ...
Setting up curl (7.38.0-3ubuntu2.3) ...
Setting up liberror-perl (0.17-1.1) ...
Setting up git-man (1:2.1.4-2.1ubuntu0.1) ...
Setting up git (1:2.1.4-2.1ubuntu0.1) ...
Setting up icu-devtools (52.1-8ubuntu0.2) ...
Setting up libicu-dev:amd64 (52.1-8ubuntu0.2) ...
Setting up python-all (2.7.9-1) ...
Setting up rlwrap (0.41-1) ...
update-alternatives: using /usr/bin/rlwrap to provide /usr/bin/readline-editor (readline-editor) in auto mode
Setting up python3 (3.4.3-1) ...
running python rtupdate hooks for python3.4...
running python post-rtupdate hooks for python3.4...
Setting up lsb-release (4.1+Debian11ubuntu8) ...
Setting up dh-python (1.20141111-2ubuntu1) ...
Processing triggers for libc-bin (2.21-0ubuntu4) ...
Processing triggers for ca-certificates (20141019ubuntu0.15.04.1) ...
Updating certificates in /etc/ssl/certs... 173 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d....done.
 ---> da86d208a53f
Removing intermediate container b4b21adc9707
Successfully built da86d208a53f

```

Array of tests: `[]`

# Tested image `nodesource/fedora21-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM fedora:21
21: Pulling from library/fedora
a3ed95caeb02: Pulling fs layer
93410896e1b1: Pulling fs layer
a3ed95caeb02: Waiting
93410896e1b1: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
93410896e1b1: Verifying Checksum
93410896e1b1: Download complete
93410896e1b1: Pull complete
93410896e1b1: Pull complete
Digest: sha256:8cbba7b8a7c499c18f102e3ec507437e18d85953bf3096e7fe64d38751e07646
Status: Downloaded newer image for fedora:21
 ---> c3f52f068a13
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 18b12f7f5cf2
 ---> 79e5cc9035d1
Removing intermediate container 18b12f7f5cf2
Step 3 : RUN yum install -y       automake       libicu       curl       gcc       gcc-c++       git       kernel-devel       make       perl       which  && yum clean all
 ---> Running in 841ba972667e
Package which-2.20-8.fc21.x86_64 already installed and latest version
Resolving Dependencies
--> Running transaction check
---> Package automake.noarch 0:1.14.1-5.fc21 will be installed
--> Processing Dependency: autoconf >= 2.65 for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(threads) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(constant) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(Thread::Queue) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(TAP::Parser) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(Getopt::Long) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(File::Spec) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(File::Path) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(Exporter) for package: automake-1.14.1-5.fc21.noarch
--> Processing Dependency: perl(Carp) for package: automake-1.14.1-5.fc21.noarch
---> Package curl.x86_64 0:7.37.0-9.fc21 will be updated
---> Package curl.x86_64 0:7.37.0-14.fc21 will be an update
--> Processing Dependency: libcurl = 7.37.0-14.fc21 for package: curl-7.37.0-14.fc21.x86_64
---> Package gcc.x86_64 0:4.9.2-6.fc21 will be installed
--> Processing Dependency: libgomp = 4.9.2-6.fc21 for package: gcc-4.9.2-6.fc21.x86_64
--> Processing Dependency: cpp = 4.9.2-6.fc21 for package: gcc-4.9.2-6.fc21.x86_64
--> Processing Dependency: libgcc >= 4.9.2-6.fc21 for package: gcc-4.9.2-6.fc21.x86_64
--> Processing Dependency: glibc-devel >= 2.2.90-12 for package: gcc-4.9.2-6.fc21.x86_64
--> Processing Dependency: binutils >= 2.24 for package: gcc-4.9.2-6.fc21.x86_64
--> Processing Dependency: libmpfr.so.4()(64bit) for package: gcc-4.9.2-6.fc21.x86_64
--> Processing Dependency: libmpc.so.3()(64bit) for package: gcc-4.9.2-6.fc21.x86_64
---> Package gcc-c++.x86_64 0:4.9.2-6.fc21 will be installed
--> Processing Dependency: libstdc++-devel = 4.9.2-6.fc21 for package: gcc-c++-4.9.2-6.fc21.x86_64
--> Processing Dependency: libstdc++ = 4.9.2-6.fc21 for package: gcc-c++-4.9.2-6.fc21.x86_64
---> Package git.x86_64 0:2.1.0-5.fc21 will be installed
--> Processing Dependency: perl-Git = 2.1.0-5.fc21 for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: rsync for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: perl(Term::ReadKey) for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: perl(Git) for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: perl(File::Temp) for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: perl(Error) for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: openssh-clients for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: less for package: git-2.1.0-5.fc21.x86_64
--> Processing Dependency: libgnome-keyring.so.0()(64bit) for package: git-2.1.0-5.fc21.x86_64
---> Package kernel-devel.x86_64 0:4.1.13-100.fc21 will be installed
---> Package libicu.x86_64 0:52.1-6.fc21 will be installed
---> Package make.x86_64 1:4.0-3.fc21 will be installed
---> Package perl.x86_64 4:5.18.4-310.fc21 will be installed
--> Processing Dependency: perl-libs = 4:5.18.4-310.fc21 for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Socket) >= 1.3 for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Scalar::Util) >= 1.10 for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl-macros for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl-libs for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(threads::shared) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Time::Local) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Time::HiRes) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Storable) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Socket) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Scalar::Util) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Pod::Simple::XHTML) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Pod::Simple::Search) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Module::CoreList) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: perl(Filter::Util::Call) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Processing Dependency: libperl.so.5.18()(64bit) for package: 4:perl-5.18.4-310.fc21.x86_64
--> Running transaction check
---> Package autoconf.noarch 0:2.69-17.fc21 will be installed
--> Processing Dependency: m4 >= 1.4.14 for package: autoconf-2.69-17.fc21.noarch
--> Processing Dependency: perl(Text::ParseWords) for package: autoconf-2.69-17.fc21.noarch
--> Processing Dependency: perl(Data::Dumper) for package: autoconf-2.69-17.fc21.noarch
---> Package binutils.x86_64 0:2.24-32.fc21 will be installed
---> Package cpp.x86_64 0:4.9.2-6.fc21 will be installed
---> Package glibc-devel.x86_64 0:2.20-8.fc21 will be installed
--> Processing Dependency: glibc-headers = 2.20-8.fc21 for package: glibc-devel-2.20-8.fc21.x86_64
--> Processing Dependency: glibc = 2.20-8.fc21 for package: glibc-devel-2.20-8.fc21.x86_64
--> Processing Dependency: glibc-headers for package: glibc-devel-2.20-8.fc21.x86_64
---> Package less.x86_64 0:471-4.fc21 will be installed
--> Processing Dependency: groff-base for package: less-471-4.fc21.x86_64
---> Package libcurl.x86_64 0:7.37.0-9.fc21 will be updated
---> Package libcurl.x86_64 0:7.37.0-14.fc21 will be an update
--> Processing Dependency: libssh2(x86-64) >= 1.5.0 for package: libcurl-7.37.0-14.fc21.x86_64
---> Package libgcc.x86_64 0:4.9.2-1.fc21 will be updated
---> Package libgcc.x86_64 0:4.9.2-6.fc21 will be an update
---> Package libgnome-keyring.x86_64 0:3.12.0-4.fc21 will be installed
---> Package libgomp.x86_64 0:4.9.2-1.fc21 will be updated
---> Package libgomp.x86_64 0:4.9.2-6.fc21 will be an update
---> Package libmpc.x86_64 0:1.0.2-3.fc21 will be installed
---> Package libstdc++.x86_64 0:4.9.2-1.fc21 will be updated
---> Package libstdc++.x86_64 0:4.9.2-6.fc21 will be an update
---> Package libstdc++-devel.x86_64 0:4.9.2-6.fc21 will be installed
---> Package mpfr.x86_64 0:3.1.2-8.fc21 will be installed
---> Package openssh-clients.x86_64 0:6.6.1p1-16.fc21 will be installed
--> Processing Dependency: openssh = 6.6.1p1-16.fc21 for package: openssh-clients-6.6.1p1-16.fc21.x86_64
--> Processing Dependency: libedit.so.0()(64bit) for package: openssh-clients-6.6.1p1-16.fc21.x86_64
---> Package perl-Carp.noarch 0:1.38-1.fc21 will be installed
---> Package perl-Error.noarch 1:0.17022-2.fc21 will be installed
---> Package perl-Exporter.noarch 0:5.70-2.fc21 will be installed
---> Package perl-File-Path.noarch 0:2.09-293.fc21 will be installed
---> Package perl-File-Temp.noarch 0:0.23.04-2.fc21 will be installed
--> Processing Dependency: perl(parent) >= 0.221 for package: perl-File-Temp-0.23.04-2.fc21.noarch
---> Package perl-Filter.x86_64 1:1.55-1.fc21 will be installed
---> Package perl-Getopt-Long.noarch 0:2.48-1.fc21 will be installed
--> Processing Dependency: perl(Pod::Usage) >= 1.14 for package: perl-Getopt-Long-2.48-1.fc21.noarch
---> Package perl-Git.noarch 0:2.1.0-5.fc21 will be installed
---> Package perl-Module-CoreList.noarch 1:3.13-310.fc21 will be installed
--> Processing Dependency: perl(version) for package: 1:perl-Module-CoreList-3.13-310.fc21.noarch
---> Package perl-PathTools.x86_64 0:3.47-3.fc21 will be installed
---> Package perl-Pod-Simple.noarch 1:3.29-1.fc21 will be installed
--> Processing Dependency: perl(Pod::Escapes) >= 1.04 for package: 1:perl-Pod-Simple-3.29-1.fc21.noarch
--> Processing Dependency: perl(Encode) for package: 1:perl-Pod-Simple-3.29-1.fc21.noarch
---> Package perl-Scalar-List-Utils.x86_64 1:1.42-1.fc21 will be installed
---> Package perl-Socket.x86_64 1:2.020-1.fc21 will be installed
---> Package perl-Storable.x86_64 0:2.51-2.fc21 will be installed
---> Package perl-TermReadKey.x86_64 0:2.32-2.fc21 will be installed
---> Package perl-Test-Harness.noarch 0:3.35-1.fc21 will be installed
---> Package perl-Thread-Queue.noarch 0:3.07-1.fc21 will be installed
---> Package perl-Time-HiRes.x86_64 0:1.9726-3.fc21 will be installed
---> Package perl-Time-Local.noarch 0:1.2300-292.fc21 will be installed
---> Package perl-constant.noarch 0:1.27-293.fc21 will be installed
---> Package perl-libs.x86_64 4:5.18.4-310.fc21 will be installed
---> Package perl-macros.x86_64 4:5.18.4-310.fc21 will be installed
---> Package perl-threads.x86_64 1:1.92-3.fc21 will be installed
---> Package perl-threads-shared.x86_64 0:1.46-4.fc21 will be installed
---> Package rsync.x86_64 0:3.1.1-3.fc21 will be installed
--> Running transaction check
---> Package glibc.x86_64 0:2.20-5.fc21 will be updated
--> Processing Dependency: glibc = 2.20-5.fc21 for package: glibc-common-2.20-5.fc21.x86_64
---> Package glibc.x86_64 0:2.20-8.fc21 will be an update
---> Package glibc-headers.x86_64 0:2.20-8.fc21 will be installed
--> Processing Dependency: kernel-headers >= 2.2.1 for package: glibc-headers-2.20-8.fc21.x86_64
--> Processing Dependency: kernel-headers for package: glibc-headers-2.20-8.fc21.x86_64
---> Package groff-base.x86_64 0:1.22.2-11.fc21 will be installed
---> Package libedit.x86_64 0:3.1-12.20150325cvs.fc21 will be installed
---> Package libssh2.x86_64 0:1.4.3-16.fc21 will be updated
---> Package libssh2.x86_64 0:1.5.0-1.fc21 will be an update
---> Package m4.x86_64 0:1.4.17-6.fc21 will be installed
---> Package openssh.x86_64 0:6.6.1p1-16.fc21 will be installed
---> Package perl-Data-Dumper.x86_64 0:2.154-1.fc21 will be installed
---> Package perl-Encode.x86_64 1:2.78-1.fc21 will be installed
---> Package perl-Pod-Escapes.noarch 1:1.04-310.fc21 will be installed
---> Package perl-Pod-Usage.noarch 4:1.67-1.fc21 will be installed
--> Processing Dependency: perl(Pod::Text) >= 3.15 for package: 4:perl-Pod-Usage-1.67-1.fc21.noarch
--> Processing Dependency: perl-Pod-Perldoc for package: 4:perl-Pod-Usage-1.67-1.fc21.noarch
---> Package perl-Text-ParseWords.noarch 0:3.30-1.fc21 will be installed
---> Package perl-parent.noarch 1:0.228-2.fc21 will be installed
---> Package perl-version.x86_64 3:0.99.12-1.fc21 will be installed
--> Running transaction check
---> Package glibc-common.x86_64 0:2.20-5.fc21 will be updated
---> Package glibc-common.x86_64 0:2.20-8.fc21 will be an update
---> Package kernel-headers.x86_64 0:4.1.13-100.fc21 will be installed
---> Package perl-Pod-Perldoc.noarch 0:3.23-2.fc21 will be installed
--> Processing Dependency: perl(HTTP::Tiny) for package: perl-Pod-Perldoc-3.23-2.fc21.noarch
---> Package perl-podlators.noarch 0:2.5.3-2.fc21 will be installed
--> Processing Dependency: perl(Term::ANSIColor) for package: perl-podlators-2.5.3-2.fc21.noarch
--> Running transaction check
---> Package perl-HTTP-Tiny.noarch 0:0.043-2.fc21 will be installed
---> Package perl-Term-ANSIColor.noarch 0:4.03-2.fc21 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package                  Arch     Version                      Repository
                                                                           Size
================================================================================
Installing:
 automake                 noarch   1.14.1-5.fc21                fedora    693 k
 gcc                      x86_64   4.9.2-6.fc21                 updates    18 M
 gcc-c++                  x86_64   4.9.2-6.fc21                 updates   8.3 M
 git                      x86_64   2.1.0-5.fc21                 updates   4.9 M
 kernel-devel             x86_64   4.1.13-100.fc21              updates   9.5 M
 libicu                   x86_64   52.1-6.fc21                  updates   7.4 M
 make                     x86_64   1:4.0-3.fc21                 fedora    446 k
 perl                     x86_64   4:5.18.4-310.fc21            updates   8.1 M
Updating:
 curl                     x86_64   7.37.0-14.fc21               updates   270 k
Installing for dependencies:
 autoconf                 noarch   2.69-17.fc21                 updates   708 k
 binutils                 x86_64   2.24-32.fc21                 updates   5.0 M
 cpp                      x86_64   4.9.2-6.fc21                 updates   6.9 M
 glibc-devel              x86_64   2.20-8.fc21                  updates   902 k
 glibc-headers            x86_64   2.20-8.fc21                  updates   489 k
 groff-base               x86_64   1.22.2-11.fc21               fedora    947 k
 kernel-headers           x86_64   4.1.13-100.fc21              updates   998 k
 less                     x86_64   471-4.fc21                   updates   127 k
 libedit                  x86_64   3.1-12.20150325cvs.fc21      updates   100 k
 libgnome-keyring         x86_64   3.12.0-4.fc21                fedora    114 k
 libmpc                   x86_64   1.0.2-3.fc21                 fedora     55 k
 libstdc++-devel          x86_64   4.9.2-6.fc21                 updates   1.6 M
 m4                       x86_64   1.4.17-6.fc21                fedora    264 k
 mpfr                     x86_64   3.1.2-8.fc21                 updates   209 k
 openssh                  x86_64   6.6.1p1-16.fc21              updates   439 k
 openssh-clients          x86_64   6.6.1p1-16.fc21              updates   645 k
 perl-Carp                noarch   1.38-1.fc21                  updates    29 k
 perl-Data-Dumper         x86_64   2.154-1.fc21                 fedora     54 k
 perl-Encode              x86_64   1:2.78-1.fc21                updates   1.5 M
 perl-Error               noarch   1:0.17022-2.fc21             fedora     39 k
 perl-Exporter            noarch   5.70-2.fc21                  fedora     29 k
 perl-File-Path           noarch   2.09-293.fc21                fedora     27 k
 perl-File-Temp           noarch   0.23.04-2.fc21               fedora     57 k
 perl-Filter              x86_64   1:1.55-1.fc21                updates    84 k
 perl-Getopt-Long         noarch   2.48-1.fc21                  updates    62 k
 perl-Git                 noarch   2.1.0-5.fc21                 updates    60 k
 perl-HTTP-Tiny           noarch   0.043-2.fc21                 fedora     45 k
 perl-Module-CoreList     noarch   1:3.13-310.fc21              updates   105 k
 perl-PathTools           x86_64   3.47-3.fc21                  fedora     91 k
 perl-Pod-Escapes         noarch   1:1.04-310.fc21              updates    58 k
 perl-Pod-Perldoc         noarch   3.23-2.fc21                  fedora     88 k
 perl-Pod-Simple          noarch   1:3.29-1.fc21                updates   222 k
 perl-Pod-Usage           noarch   4:1.67-1.fc21                updates    34 k
 perl-Scalar-List-Utils   x86_64   1:1.42-1.fc21                updates    64 k
 perl-Socket              x86_64   1:2.020-1.fc21               updates    55 k
 perl-Storable            x86_64   2.51-2.fc21                  fedora     84 k
 perl-Term-ANSIColor      noarch   4.03-2.fc21                  fedora     44 k
 perl-TermReadKey         x86_64   2.32-2.fc21                  fedora     33 k
 perl-Test-Harness        noarch   3.35-1.fc21                  updates   309 k
 perl-Text-ParseWords     noarch   3.30-1.fc21                  updates    17 k
 perl-Thread-Queue        noarch   3.07-1.fc21                  updates    22 k
 perl-Time-HiRes          x86_64   1.9726-3.fc21                fedora     50 k
 perl-Time-Local          noarch   1.2300-292.fc21              fedora     25 k
 perl-constant            noarch   1.27-293.fc21                fedora     19 k
 perl-libs                x86_64   4:5.18.4-310.fc21            updates   712 k
 perl-macros              x86_64   4:5.18.4-310.fc21            updates    50 k
 perl-parent              noarch   1:0.228-2.fc21               fedora     13 k
 perl-podlators           noarch   2.5.3-2.fc21                 fedora    114 k
 perl-threads             x86_64   1:1.92-3.fc21                fedora     55 k
 perl-threads-shared      x86_64   1.46-4.fc21                  fedora     44 k
 perl-version             x86_64   3:0.99.12-1.fc21             updates    94 k
 rsync                    x86_64   3.1.1-3.fc21                 fedora    409 k
Updating for dependencies:
 glibc                    x86_64   2.20-8.fc21                  updates   3.5 M
 glibc-common             x86_64   2.20-8.fc21                  updates    11 M
 libcurl                  x86_64   7.37.0-14.fc21               updates   242 k
 libgcc                   x86_64   4.9.2-6.fc21                 updates    89 k
 libgomp                  x86_64   4.9.2-6.fc21                 updates   127 k
 libssh2                  x86_64   1.5.0-1.fc21                 updates   145 k
 libstdc++                x86_64   4.9.2-6.fc21                 updates   299 k

Transaction Summary
================================================================================
Install  8 Packages (+52 Dependent packages)
Upgrade  1 Package  (+ 7 Dependent packages)

Total download size: 97 M
Downloading packages:
Delta RPMs disabled because /usr/bin/applydeltarpm not installed.
--------------------------------------------------------------------------------
Total                                              2.8 MB/s |  97 MB  00:34     
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Updating   : libgcc-4.9.2-6.fc21.x86_64                                  1/76 
  Updating   : glibc-2.20-8.fc21.x86_64                                    2/76 
  Updating   : glibc-common-2.20-8.fc21.x86_64                             3/76 
  Installing : mpfr-3.1.2-8.fc21.x86_64                                    4/76 
  Updating   : libstdc++-4.9.2-6.fc21.x86_64                               5/76 
  Installing : libmpc-1.0.2-3.fc21.x86_64                                  6/76 
  Installing : groff-base-1.22.2-11.fc21.x86_64                            7/76 
  Updating   : libssh2-1.5.0-1.fc21.x86_64                                 8/76 
  Updating   : libcurl-7.37.0-14.fc21.x86_64                               9/76 
  Installing : perl-Term-ANSIColor-4.03-2.fc21.noarch                     10/76 
  Installing : perl-HTTP-Tiny-0.043-2.fc21.noarch                         11/76 
  Installing : perl-podlators-2.5.3-2.fc21.noarch                         12/76 
  Installing : perl-Pod-Perldoc-3.23-2.fc21.noarch                        13/76 
  Installing : perl-Text-ParseWords-3.30-1.fc21.noarch                    14/76 
  Installing : 1:perl-Pod-Escapes-1.04-310.fc21.noarch                    15/76 
  Installing : 1:perl-Encode-2.78-1.fc21.x86_64                           16/76 
  Installing : 1:perl-parent-0.228-2.fc21.noarch                          17/76 
  Installing : 3:perl-version-0.99.12-1.fc21.x86_64                       18/76 
  Installing : 4:perl-Pod-Usage-1.67-1.fc21.noarch                        19/76 
  Installing : 4:perl-libs-5.18.4-310.fc21.x86_64                         20/76 
  Installing : 4:perl-macros-5.18.4-310.fc21.x86_64                       21/76 
  Installing : perl-constant-1.27-293.fc21.noarch                         22/76 
  Installing : 1:perl-Filter-1.55-1.fc21.x86_64                           23/76 
  Installing : perl-Exporter-5.70-2.fc21.noarch                           24/76 
  Installing : perl-Time-HiRes-1.9726-3.fc21.x86_64                       25/76 
  Installing : perl-File-Path-2.09-293.fc21.noarch                        26/76 
  Installing : perl-PathTools-3.47-3.fc21.x86_64                          27/76 
  Installing : 1:perl-Scalar-List-Utils-1.42-1.fc21.x86_64                28/76 
  Installing : perl-Time-Local-1.2300-292.fc21.noarch                     29/76 
  Installing : perl-Carp-1.38-1.fc21.noarch                               30/76 
  Installing : perl-Storable-2.51-2.fc21.x86_64                           31/76 
  Installing : 1:perl-threads-1.92-3.fc21.x86_64                          32/76 
  Installing : perl-File-Temp-0.23.04-2.fc21.noarch                       33/76 
  Installing : 1:perl-Socket-2.020-1.fc21.x86_64                          34/76 
  Installing : perl-threads-shared-1.46-4.fc21.x86_64                     35/76 
  Installing : 1:perl-Module-CoreList-3.13-310.fc21.noarch                36/76 
  Installing : 1:perl-Pod-Simple-3.29-1.fc21.noarch                       37/76 
  Installing : perl-Getopt-Long-2.48-1.fc21.noarch                        38/76 
  Installing : 4:perl-5.18.4-310.fc21.x86_64                              39/76 
  Installing : 1:perl-Error-0.17022-2.fc21.noarch                         40/76 
  Installing : perl-Data-Dumper-2.154-1.fc21.x86_64                       41/76 
  Installing : perl-Test-Harness-3.35-1.fc21.noarch                       42/76 
  Installing : perl-Thread-Queue-3.07-1.fc21.noarch                       43/76 
  Installing : perl-TermReadKey-2.32-2.fc21.x86_64                        44/76 
  Installing : less-471-4.fc21.x86_64                                     45/76 
  Installing : cpp-4.9.2-6.fc21.x86_64                                    46/76 
  Installing : libstdc++-devel-4.9.2-6.fc21.x86_64                        47/76 
  Installing : libgnome-keyring-3.12.0-4.fc21.x86_64                      48/76 
  Updating   : libgomp-4.9.2-6.fc21.x86_64                                49/76 
  Installing : m4-1.4.17-6.fc21.x86_64                                    50/76 
  Installing : autoconf-2.69-17.fc21.noarch                               51/76 
install-info: No such file or directory for /usr/share/info/autoconf.info
  Installing : libedit-3.1-12.20150325cvs.fc21.x86_64                     52/76 
  Installing : binutils-2.24-32.fc21.x86_64                               53/76 
  Installing : openssh-6.6.1p1-16.fc21.x86_64                             54/76 
  Installing : openssh-clients-6.6.1p1-16.fc21.x86_64                     55/76 
  Installing : rsync-3.1.1-3.fc21.x86_64                                  56/76 
  Installing : perl-Git-2.1.0-5.fc21.noarch                               57/76 
  Installing : git-2.1.0-5.fc21.x86_64                                    58/76 
  Installing : kernel-headers-4.1.13-100.fc21.x86_64                      59/76 
  Installing : glibc-headers-2.20-8.fc21.x86_64                           60/76 
  Installing : glibc-devel-2.20-8.fc21.x86_64                             61/76 
  Installing : gcc-4.9.2-6.fc21.x86_64                                    62/76 
  Installing : gcc-c++-4.9.2-6.fc21.x86_64                                63/76 
  Installing : automake-1.14.1-5.fc21.noarch                              64/76 
install-info: No such file or directory for /usr/share/info/automake.info.gz
  Installing : kernel-devel-4.1.13-100.fc21.x86_64                        65/76 
  Updating   : curl-7.37.0-14.fc21.x86_64                                 66/76 
  Installing : libicu-52.1-6.fc21.x86_64                                  67/76 
  Installing : 1:make-4.0-3.fc21.x86_64                                   68/76 
  Cleanup    : curl-7.37.0-9.fc21.x86_64                                  69/76 
  Cleanup    : libcurl-7.37.0-9.fc21.x86_64                               70/76 
  Cleanup    : libstdc++-4.9.2-1.fc21.x86_64                              71/76 
  Cleanup    : libssh2-1.4.3-16.fc21.x86_64                               72/76 
  Cleanup    : libgomp-4.9.2-1.fc21.x86_64                                73/76 
  Cleanup    : glibc-common-2.20-5.fc21.x86_64                            74/76 
  Cleanup    : glibc-2.20-5.fc21.x86_64                                   75/76 
  Cleanup    : libgcc-4.9.2-1.fc21.x86_64                                 76/76 
  Verifying  : groff-base-1.22.2-11.fc21.x86_64                            1/76 
  Verifying  : perl-PathTools-3.47-3.fc21.x86_64                           2/76 
  Verifying  : perl-HTTP-Tiny-0.043-2.fc21.noarch                          3/76 
  Verifying  : libicu-52.1-6.fc21.x86_64                                   4/76 
  Verifying  : openssh-clients-6.6.1p1-16.fc21.x86_64                      5/76 
  Verifying  : perl-Data-Dumper-2.154-1.fc21.x86_64                        6/76 
  Verifying  : perl-Text-ParseWords-3.30-1.fc21.noarch                     7/76 
  Verifying  : 1:perl-Filter-1.55-1.fc21.x86_64                            8/76 
  Verifying  : perl-constant-1.27-293.fc21.noarch                          9/76 
  Verifying  : libmpc-1.0.2-3.fc21.x86_64                                 10/76 
  Verifying  : automake-1.14.1-5.fc21.noarch                              11/76 
  Verifying  : perl-Test-Harness-3.35-1.fc21.noarch                       12/76 
  Verifying  : perl-File-Temp-0.23.04-2.fc21.noarch                       13/76 
  Verifying  : kernel-devel-4.1.13-100.fc21.x86_64                        14/76 
  Verifying  : libgnome-keyring-3.12.0-4.fc21.x86_64                      15/76 
  Verifying  : mpfr-3.1.2-8.fc21.x86_64                                   16/76 
  Verifying  : 1:make-4.0-3.fc21.x86_64                                   17/76 
  Verifying  : libcurl-7.37.0-14.fc21.x86_64                              18/76 
  Verifying  : 4:perl-Pod-Usage-1.67-1.fc21.noarch                        19/76 
  Verifying  : 4:perl-5.18.4-310.fc21.x86_64                              20/76 
  Verifying  : 1:perl-Module-CoreList-3.13-310.fc21.noarch                21/76 
  Verifying  : libstdc++-4.9.2-6.fc21.x86_64                              22/76 
  Verifying  : 1:perl-Encode-2.78-1.fc21.x86_64                           23/76 
  Verifying  : libgomp-4.9.2-6.fc21.x86_64                                24/76 
  Verifying  : perl-Term-ANSIColor-4.03-2.fc21.noarch                     25/76 
  Verifying  : perl-Thread-Queue-3.07-1.fc21.noarch                       26/76 
  Verifying  : glibc-common-2.20-8.fc21.x86_64                            27/76 
  Verifying  : libstdc++-devel-4.9.2-6.fc21.x86_64                        28/76 
  Verifying  : perl-Exporter-5.70-2.fc21.noarch                           29/76 
  Verifying  : 4:perl-libs-5.18.4-310.fc21.x86_64                         30/76 
  Verifying  : perl-Time-HiRes-1.9726-3.fc21.x86_64                       31/76 
  Verifying  : glibc-headers-2.20-8.fc21.x86_64                           32/76 
  Verifying  : libssh2-1.5.0-1.fc21.x86_64                                33/76 
  Verifying  : git-2.1.0-5.fc21.x86_64                                    34/76 
  Verifying  : perl-Pod-Perldoc-3.23-2.fc21.noarch                        35/76 
  Verifying  : perl-File-Path-2.09-293.fc21.noarch                        36/76 
  Verifying  : 1:perl-Pod-Escapes-1.04-310.fc21.noarch                    37/76 
  Verifying  : curl-7.37.0-14.fc21.x86_64                                 38/76 
  Verifying  : perl-TermReadKey-2.32-2.fc21.x86_64                        39/76 
  Verifying  : 1:perl-Error-0.17022-2.fc21.noarch                         40/76 
  Verifying  : autoconf-2.69-17.fc21.noarch                               41/76 
  Verifying  : m4-1.4.17-6.fc21.x86_64                                    42/76 
  Verifying  : gcc-c++-4.9.2-6.fc21.x86_64                                43/76 
  Verifying  : libedit-3.1-12.20150325cvs.fc21.x86_64                     44/76 
  Verifying  : 1:perl-Scalar-List-Utils-1.42-1.fc21.x86_64                45/76 
  Verifying  : perl-Time-Local-1.2300-292.fc21.noarch                     46/76 
  Verifying  : 1:perl-Pod-Simple-3.29-1.fc21.noarch                       47/76 
  Verifying  : perl-Git-2.1.0-5.fc21.noarch                               48/76 
  Verifying  : 4:perl-macros-5.18.4-310.fc21.x86_64                       49/76 
  Verifying  : libgcc-4.9.2-6.fc21.x86_64                                 50/76 
  Verifying  : glibc-2.20-8.fc21.x86_64                                   51/76 
  Verifying  : perl-Carp-1.38-1.fc21.noarch                               52/76 
  Verifying  : cpp-4.9.2-6.fc21.x86_64                                    53/76 
  Verifying  : kernel-headers-4.1.13-100.fc21.x86_64                      54/76 
  Verifying  : perl-Storable-2.51-2.fc21.x86_64                           55/76 
  Verifying  : perl-podlators-2.5.3-2.fc21.noarch                         56/76 
  Verifying  : binutils-2.24-32.fc21.x86_64                               57/76 
  Verifying  : glibc-devel-2.20-8.fc21.x86_64                             58/76 
  Verifying  : openssh-6.6.1p1-16.fc21.x86_64                             59/76 
  Verifying  : perl-Getopt-Long-2.48-1.fc21.noarch                        60/76 
  Verifying  : gcc-4.9.2-6.fc21.x86_64                                    61/76 
  Verifying  : less-471-4.fc21.x86_64                                     62/76 
  Verifying  : 1:perl-threads-1.92-3.fc21.x86_64                          63/76 
  Verifying  : 1:perl-parent-0.228-2.fc21.noarch                          64/76 
  Verifying  : 1:perl-Socket-2.020-1.fc21.x86_64                          65/76 
  Verifying  : perl-threads-shared-1.46-4.fc21.x86_64                     66/76 
  Verifying  : 3:perl-version-0.99.12-1.fc21.x86_64                       67/76 
  Verifying  : rsync-3.1.1-3.fc21.x86_64                                  68/76 
  Verifying  : curl-7.37.0-9.fc21.x86_64                                  69/76 
  Verifying  : libssh2-1.4.3-16.fc21.x86_64                               70/76 
  Verifying  : glibc-common-2.20-5.fc21.x86_64                            71/76 
  Verifying  : libstdc++-4.9.2-1.fc21.x86_64                              72/76 
  Verifying  : glibc-2.20-5.fc21.x86_64                                   73/76 
  Verifying  : libgcc-4.9.2-1.fc21.x86_64                                 74/76 
  Verifying  : libgomp-4.9.2-1.fc21.x86_64                                75/76 
  Verifying  : libcurl-7.37.0-9.fc21.x86_64                               76/76 

Installed:
  automake.noarch 0:1.14.1-5.fc21            gcc.x86_64 0:4.9.2-6.fc21         
  gcc-c++.x86_64 0:4.9.2-6.fc21              git.x86_64 0:2.1.0-5.fc21         
  kernel-devel.x86_64 0:4.1.13-100.fc21      libicu.x86_64 0:52.1-6.fc21       
  make.x86_64 1:4.0-3.fc21                   perl.x86_64 4:5.18.4-310.fc21     

Dependency Installed:
  autoconf.noarch 0:2.69-17.fc21                                                
  binutils.x86_64 0:2.24-32.fc21                                                
  cpp.x86_64 0:4.9.2-6.fc21                                                     
  glibc-devel.x86_64 0:2.20-8.fc21                                              
  glibc-headers.x86_64 0:2.20-8.fc21                                            
  groff-base.x86_64 0:1.22.2-11.fc21                                            
  kernel-headers.x86_64 0:4.1.13-100.fc21                                       
  less.x86_64 0:471-4.fc21                                                      
  libedit.x86_64 0:3.1-12.20150325cvs.fc21                                      
  libgnome-keyring.x86_64 0:3.12.0-4.fc21                                       
  libmpc.x86_64 0:1.0.2-3.fc21                                                  
  libstdc++-devel.x86_64 0:4.9.2-6.fc21                                         
  m4.x86_64 0:1.4.17-6.fc21                                                     
  mpfr.x86_64 0:3.1.2-8.fc21                                                    
  openssh.x86_64 0:6.6.1p1-16.fc21                                              
  openssh-clients.x86_64 0:6.6.1p1-16.fc21                                      
  perl-Carp.noarch 0:1.38-1.fc21                                                
  perl-Data-Dumper.x86_64 0:2.154-1.fc21                                        
  perl-Encode.x86_64 1:2.78-1.fc21                                              
  perl-Error.noarch 1:0.17022-2.fc21                                            
  perl-Exporter.noarch 0:5.70-2.fc21                                            
  perl-File-Path.noarch 0:2.09-293.fc21                                         
  perl-File-Temp.noarch 0:0.23.04-2.fc21                                        
  perl-Filter.x86_64 1:1.55-1.fc21                                              
  perl-Getopt-Long.noarch 0:2.48-1.fc21                                         
  perl-Git.noarch 0:2.1.0-5.fc21                                                
  perl-HTTP-Tiny.noarch 0:0.043-2.fc21                                          
  perl-Module-CoreList.noarch 1:3.13-310.fc21                                   
  perl-PathTools.x86_64 0:3.47-3.fc21                                           
  perl-Pod-Escapes.noarch 1:1.04-310.fc21                                       
  perl-Pod-Perldoc.noarch 0:3.23-2.fc21                                         
  perl-Pod-Simple.noarch 1:3.29-1.fc21                                          
  perl-Pod-Usage.noarch 4:1.67-1.fc21                                           
  perl-Scalar-List-Utils.x86_64 1:1.42-1.fc21                                   
  perl-Socket.x86_64 1:2.020-1.fc21                                             
  perl-Storable.x86_64 0:2.51-2.fc21                                            
  perl-Term-ANSIColor.noarch 0:4.03-2.fc21                                      
  perl-TermReadKey.x86_64 0:2.32-2.fc21                                         
  perl-Test-Harness.noarch 0:3.35-1.fc21                                        
  perl-Text-ParseWords.noarch 0:3.30-1.fc21                                     
  perl-Thread-Queue.noarch 0:3.07-1.fc21                                        
  perl-Time-HiRes.x86_64 0:1.9726-3.fc21                                        
  perl-Time-Local.noarch 0:1.2300-292.fc21                                      
  perl-constant.noarch 0:1.27-293.fc21                                          
  perl-libs.x86_64 4:5.18.4-310.fc21                                            
  perl-macros.x86_64 4:5.18.4-310.fc21                                          
  perl-parent.noarch 1:0.228-2.fc21                                             
  perl-podlators.noarch 0:2.5.3-2.fc21                                          
  perl-threads.x86_64 1:1.92-3.fc21                                             
  perl-threads-shared.x86_64 0:1.46-4.fc21                                      
  perl-version.x86_64 3:0.99.12-1.fc21                                          
  rsync.x86_64 0:3.1.1-3.fc21                                                   

Updated:
  curl.x86_64 0:7.37.0-14.fc21                                                  

Dependency Updated:
  glibc.x86_64 0:2.20-8.fc21            glibc-common.x86_64 0:2.20-8.fc21      
  libcurl.x86_64 0:7.37.0-14.fc21       libgcc.x86_64 0:4.9.2-6.fc21           
  libgomp.x86_64 0:4.9.2-6.fc21         libssh2.x86_64 0:1.5.0-1.fc21          
  libstdc++.x86_64 0:4.9.2-6.fc21      

Complete!
Cleaning repos: fedora updates
Cleaning up everything
 ---> 0d90ab0b1f82
Removing intermediate container 841ba972667e
Successfully built 0d90ab0b1f82

```

Array of tests: `[]`

# Tested image `nodesource/fedora22-base`

## Build Log

```
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM fedora:22
22: Pulling from library/fedora
a3ed95caeb02: Pulling fs layer
0967f2c8ac7a: Pulling fs layer
a3ed95caeb02: Waiting
0967f2c8ac7a: Waiting
a3ed95caeb02: Verifying Checksum
a3ed95caeb02: Pull complete
a3ed95caeb02: Pull complete
0967f2c8ac7a: Verifying Checksum
0967f2c8ac7a: Download complete
0967f2c8ac7a: Pull complete
0967f2c8ac7a: Pull complete
Digest: sha256:8308ee1bb51479ff8d1b5e10425eb84eee2df928f4e5656ce788c7e419b7038c
Status: Downloaded newer image for fedora:22
 ---> 8b5cf972e254
Step 2 : MAINTAINER William Blankenship <wblankenship@nodesource.com>
 ---> Running in 4e5fee84ea5f
 ---> a1a924a3eb9b
Removing intermediate container 4e5fee84ea5f
Step 3 : RUN yum install -y       automake       libicu       curl       gcc       gcc-c++       git       kernel-devel       make       perl       which  && yum clean all
 ---> Running in 94a9a713fe71
[91mYum command has been deprecated, redirecting to '/usr/bin/dnf install -y automake libicu curl gcc gcc-c++ git kernel-devel make perl which'.
See 'man dnf' and 'man yum2dnf' for more information.
To transfer transaction metadata from yum to DNF, run:
'dnf install python-dnf-plugins-extras-migrate && dnf-2 migrate'

[0mLast metadata expiration check performed 0:00:12 ago on Wed May 25 00:06:26 2016.
[91mPackage curl-7.40.0-8.fc22.x86_64 is already installed, skipping.
[0mDependencies resolved.
================================================================================
 Package                  Arch     Version                      Repository
                                                                           Size
================================================================================
Installing:
 autoconf                 noarch   2.69-20.fc22                 updates   709 k
 automake                 noarch   1.15-1.fc22                  fedora    694 k
 binutils                 x86_64   2.25-9.fc22                  updates   5.4 M
 cpp                      x86_64   5.3.1-6.fc22                 updates   8.3 M
 cronie                   x86_64   1.4.12-5.fc22                fedora    102 k
 cronie-anacron           x86_64   1.4.12-5.fc22                fedora     38 k
 crontabs                 noarch   1.11-9.20130830git.fc22      fedora     24 k
 emacs-filesystem         noarch   1:24.5-6.fc22                updates    64 k
 findutils                x86_64   1:4.5.14-6.fc22              updates   523 k
 fipscheck                x86_64   1.4.1-7.fc22                 fedora     26 k
 fipscheck-lib            x86_64   1.4.1-7.fc22                 fedora     15 k
 gcc                      x86_64   5.3.1-6.fc22                 updates    19 M
 gcc-c++                  x86_64   5.3.1-6.fc22                 updates   9.8 M
 git                      x86_64   2.4.11-1.fc22                updates   5.2 M
 glibc-devel              x86_64   2.21-13.fc22                 updates   904 k
 glibc-headers            x86_64   2.21-13.fc22                 updates   495 k
 groff-base               x86_64   1.22.3-3.fc22                fedora    950 k
 isl                      x86_64   0.14-3.fc22                  fedora    490 k
 kernel-devel             x86_64   4.4.9-200.fc22               updates    10 M
 kernel-headers           x86_64   4.4.9-200.fc22               updates   1.0 M
 less                     x86_64   481-1.fc22                   updates   153 k
 libedit                  x86_64   3.1-12.20150325cvs.fc22      fedora     99 k
 libgnome-keyring         x86_64   3.12.0-4.fc22                fedora    114 k
 libgomp                  x86_64   5.3.1-6.fc22                 updates   156 k
 libicu                   x86_64   54.1-4.fc22                  updates   8.4 M
 libmpc                   x86_64   1.0.2-3.fc22                 fedora     55 k
 libpipeline              x86_64   1.4.0-1.fc22                 fedora     50 k
 libstdc++-devel          x86_64   5.3.1-6.fc22                 updates   1.8 M
 m4                       x86_64   1.4.17-6.fc22                fedora    264 k
 make                     x86_64   1:4.0-3.1.fc22               fedora    446 k
 man-db                   x86_64   2.7.1-9.fc22                 updates   823 k
 mpfr                     x86_64   3.1.2-8.fc22                 fedora    209 k
 openssh                  x86_64   6.9p1-12.fc22                updates   446 k
 openssh-clients          x86_64   6.9p1-12.fc22                updates   646 k
 perl                     x86_64   4:5.20.3-330.fc22            updates   8.0 M
 perl-Carp                noarch   1.38-1.fc22                  updates    28 k
 perl-Data-Dumper         x86_64   2.154-1.fc22                 fedora     54 k
 perl-Encode              x86_64   2:2.80-1.fc22                updates   1.5 M
 perl-Error               noarch   1:0.17023-1.fc22             fedora     44 k
 perl-Exporter            noarch   5.70-311.fc22                fedora     33 k
 perl-File-Path           noarch   2.09-311.fc22                fedora     31 k
 perl-File-Temp           noarch   0.23.04-310.fc22             fedora     61 k
 perl-Getopt-Long         noarch   2.48-1.fc22                  updates    61 k
 perl-Git                 noarch   2.4.11-1.fc22                updates    61 k
 perl-HTTP-Tiny           noarch   0.056-1.fc22                 updates    52 k
 perl-PathTools           x86_64   3.47-312.fc22                updates    85 k
 perl-Pod-Escapes         noarch   1:1.06-330.fc22              updates    62 k
 perl-Pod-Perldoc         noarch   3.25-1.fc22                  fedora     85 k
 perl-Pod-Simple          noarch   1:3.29-1.fc22                fedora    207 k
 perl-Pod-Usage           noarch   4:1.67-1.fc22                fedora     33 k
 perl-Scalar-List-Utils   x86_64   1:1.42-1.fc22                updates    61 k
 perl-Socket              x86_64   2:2.021-1.fc22               updates    55 k
 perl-Storable            x86_64   1:2.51-4.fc22                fedora     84 k
 perl-Term-ANSIColor      noarch   4.03-3.fc22                  fedora     44 k
 perl-TermReadKey         x86_64   2.32-5.fc22                  fedora     38 k
 perl-Text-ParseWords     noarch   3.30-1.fc22                  fedora     17 k
 perl-Thread-Queue        noarch   3.09-1.fc22                  updates    22 k
 perl-Time-HiRes          x86_64   1.9728-1.fc22                updates    50 k
 perl-Time-Local          noarch   1.2300-310.fc22              fedora     29 k
 perl-constant            noarch   1.31-310.fc22                fedora     24 k
 perl-libs                x86_64   4:5.20.3-330.fc22            updates   749 k
 perl-macros              x86_64   4:5.20.3-330.fc22            updates    54 k
 perl-parent              noarch   1:0.231-1.fc22               fedora     17 k
 perl-podlators           noarch   2.5.3-3.fc22                 fedora    118 k
 perl-threads             x86_64   1:2.02-1.fc22                updates    57 k
 perl-threads-shared      x86_64   1.46-310.fc22                fedora     44 k
 rsync                    x86_64   3.1.1-7.fc22                 updates   392 k
 which                    x86_64   2.20-10.fc22                 fedora     46 k
Upgrading:
 glibc                    x86_64   2.21-13.fc22                 updates   3.5 M
 glibc-common             x86_64   2.21-13.fc22                 updates    12 M
 libgcc                   x86_64   5.3.1-6.fc22                 updates    92 k
 libstdc++                x86_64   5.3.1-6.fc22                 updates   429 k

Transaction Summary
================================================================================
Install  68 Packages
Upgrade   4 Packages

Total download size: 105 M
Downloading Packages:
--------------------------------------------------------------------------------
Total                                           501 kB/s | 105 MB     03:34     
Delta RPMs reduced 105.1 MB of updates to 104.7 MB (0.1% saved)
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Upgrading   : libgcc-5.3.1-6.fc22.x86_64                                 1/76 
warning: Unable to get systemd shutdown inhibition lock
  Upgrading   : glibc-common-2.21-13.fc22.x86_64                           2/76 
  Upgrading   : glibc-2.21-13.fc22.x86_64                                  3/76 
  Installing  : mpfr-3.1.2-8.fc22.x86_64                                   4/76 
  Upgrading   : libstdc++-5.3.1-6.fc22.x86_64                              5/76 
  Installing  : groff-base-1.22.3-3.fc22.x86_64                            6/76 
  Installing  : libmpc-1.0.2-3.fc22.x86_64                                 7/76 
  Installing  : fipscheck-1.4.1-7.fc22.x86_64                              8/76 
  Installing  : fipscheck-lib-1.4.1-7.fc22.x86_64                          9/76 
  Installing  : cronie-1.4.12-5.fc22.x86_64                               10/76 
  Installing  : crontabs-1.11-9.20130830git.fc22.noarch                   11/76 
  Installing  : cronie-anacron-1.4.12-5.fc22.x86_64                       12/76 
  Installing  : openssh-6.9p1-12.fc22.x86_64                              13/76 
  Installing  : cpp-5.3.1-6.fc22.x86_64                                   14/76 
  Installing  : perl-Term-ANSIColor-4.03-3.fc22.noarch                    15/76 
  Installing  : perl-HTTP-Tiny-0.056-1.fc22.noarch                        16/76 
  Installing  : perl-Pod-Perldoc-3.25-1.fc22.noarch                       17/76 
  Installing  : perl-podlators-2.5.3-3.fc22.noarch                        18/76 
  Installing  : perl-Text-ParseWords-3.30-1.fc22.noarch                   19/76 
  Installing  : perl-Encode-2:2.80-1.fc22.x86_64                          20/76 
  Installing  : perl-Pod-Usage-4:1.67-1.fc22.noarch                       21/76 
  Installing  : perl-Pod-Escapes-1:1.06-330.fc22.noarch                   22/76 
  Installing  : perl-parent-1:0.231-1.fc22.noarch                         23/76 
  Installing  : perl-libs-4:5.20.3-330.fc22.x86_64                        24/76 
  Installing  : perl-constant-1.31-310.fc22.noarch                        25/76 
  Installing  : perl-Time-Local-1.2300-310.fc22.noarch                    26/76 
  Installing  : perl-Storable-1:2.51-4.fc22.x86_64                        27/76 
  Installing  : perl-Carp-1.38-1.fc22.noarch                              28/76 
  Installing  : perl-File-Path-2.09-311.fc22.noarch                       29/76 
  Installing  : perl-File-Temp-0.23.04-310.fc22.noarch                    30/76 
  Installing  : perl-PathTools-3.47-312.fc22.x86_64                       31/76 
  Installing  : perl-Scalar-List-Utils-1:1.42-1.fc22.x86_64               32/76 
  Installing  : perl-Socket-2:2.021-1.fc22.x86_64                         33/76 
  Installing  : perl-Time-HiRes-1.9728-1.fc22.x86_64                      34/76 
  Installing  : perl-macros-4:5.20.3-330.fc22.x86_64                      35/76 
  Installing  : perl-threads-shared-1.46-310.fc22.x86_64                  36/76 
  Installing  : perl-threads-1:2.02-1.fc22.x86_64                         37/76 
  Installing  : perl-Getopt-Long-2.48-1.fc22.noarch                       38/76 
  Installing  : perl-Pod-Simple-1:3.29-1.fc22.noarch                      39/76 
  Installing  : perl-Exporter-5.70-311.fc22.noarch                        40/76 
  Installing  : perl-4:5.20.3-330.fc22.x86_64                             41/76 
  Installing  : perl-Error-1:0.17023-1.fc22.noarch                        42/76 
  Installing  : perl-TermReadKey-2.32-5.fc22.x86_64                       43/76 
  Installing  : perl-Data-Dumper-2.154-1.fc22.x86_64                      44/76 
  Installing  : perl-Thread-Queue-3.09-1.fc22.noarch                      45/76 
  Installing  : libstdc++-devel-5.3.1-6.fc22.x86_64                       46/76 
  Installing  : libgnome-keyring-3.12.0-4.fc22.x86_64                     47/76 
  Installing  : isl-0.14-3.fc22.x86_64                                    48/76 
  Installing  : libgomp-5.3.1-6.fc22.x86_64                               49/76 
  Installing  : findutils-1:4.5.14-6.fc22.x86_64                          50/76 
  Installing  : libedit-3.1-12.20150325cvs.fc22.x86_64                    51/76 
  Installing  : openssh-clients-6.9p1-12.fc22.x86_64                      52/76 
  Installing  : rsync-3.1.1-7.fc22.x86_64                                 53/76 
  Installing  : binutils-2.25-9.fc22.x86_64                               54/76 
  Installing  : m4-1.4.17-6.fc22.x86_64                                   55/76 
  Installing  : libpipeline-1.4.0-1.fc22.x86_64                           56/76 
  Installing  : less-481-1.fc22.x86_64                                    57/76 
  Installing  : man-db-2.7.1-9.fc22.x86_64                                58/76 
  Installing  : git-2.4.11-1.fc22.x86_64                                  59/76 
  Installing  : perl-Git-2.4.11-1.fc22.noarch                             60/76 
  Installing  : emacs-filesystem-1:24.5-6.fc22.noarch                     61/76 
  Installing  : autoconf-2.69-20.fc22.noarch                              62/76 
  Installing  : kernel-headers-4.4.9-200.fc22.x86_64                      63/76 
  Installing  : glibc-headers-2.21-13.fc22.x86_64                         64/76 
  Installing  : glibc-devel-2.21-13.fc22.x86_64                           65/76 
  Installing  : gcc-5.3.1-6.fc22.x86_64                                   66/76 
  Installing  : gcc-c++-5.3.1-6.fc22.x86_64                               67/76 
  Installing  : automake-1.15-1.fc22.noarch                               68/76 
  Installing  : kernel-devel-4.4.9-200.fc22.x86_64                        69/76 
  Installing  : libicu-54.1-4.fc22.x86_64                                 70/76 
  Installing  : make-1:4.0-3.1.fc22.x86_64                                71/76 
  Installing  : which-2.20-10.fc22.x86_64                                 72/76 
  Cleanup     : libstdc++-5.3.1-2.fc22.x86_64                             73/76 
  Cleanup     : glibc-common-2.21-11.fc22.x86_64                          74/76 
  Cleanup     : glibc-2.21-11.fc22.x86_64                                 75/76 
  Cleanup     : libgcc-5.3.1-2.fc22.x86_64                                76/76 
  Verifying   : automake-1.15-1.fc22.noarch                                1/76 
  Verifying   : make-1:4.0-3.1.fc22.x86_64                                 2/76 
  Verifying   : which-2.20-10.fc22.x86_64                                  3/76 
  Verifying   : perl-Exporter-5.70-311.fc22.noarch                         4/76 
  Verifying   : perl-File-Path-2.09-311.fc22.noarch                        5/76 
  Verifying   : perl-constant-1.31-310.fc22.noarch                         6/76 
  Verifying   : libicu-54.1-4.fc22.x86_64                                  7/76 
  Verifying   : gcc-5.3.1-6.fc22.x86_64                                    8/76 
  Verifying   : libmpc-1.0.2-3.fc22.x86_64                                 9/76 
  Verifying   : mpfr-3.1.2-8.fc22.x86_64                                  10/76 
  Verifying   : cpp-5.3.1-6.fc22.x86_64                                   11/76 
  Verifying   : gcc-c++-5.3.1-6.fc22.x86_64                               12/76 
  Verifying   : git-2.4.11-1.fc22.x86_64                                  13/76 
  Verifying   : libgnome-keyring-3.12.0-4.fc22.x86_64                     14/76 
  Verifying   : perl-Error-1:0.17023-1.fc22.noarch                        15/76 
  Verifying   : perl-File-Temp-0.23.04-310.fc22.noarch                    16/76 
  Verifying   : perl-TermReadKey-2.32-5.fc22.x86_64                       17/76 
  Verifying   : perl-Git-2.4.11-1.fc22.noarch                             18/76 
  Verifying   : perl-parent-1:0.231-1.fc22.noarch                         19/76 
  Verifying   : perl-Time-Local-1.2300-310.fc22.noarch                    20/76 
  Verifying   : perl-4:5.20.3-330.fc22.x86_64                             21/76 
  Verifying   : perl-Pod-Simple-1:3.29-1.fc22.noarch                      22/76 
  Verifying   : perl-Storable-1:2.51-4.fc22.x86_64                        23/76 
  Verifying   : perl-threads-shared-1.46-310.fc22.x86_64                  24/76 
  Verifying   : kernel-devel-4.4.9-200.fc22.x86_64                        25/76 
  Verifying   : isl-0.14-3.fc22.x86_64                                    26/76 
  Verifying   : glibc-devel-2.21-13.fc22.x86_64                           27/76 
  Verifying   : libgomp-5.3.1-6.fc22.x86_64                               28/76 
  Verifying   : perl-libs-4:5.20.3-330.fc22.x86_64                        29/76 
  Verifying   : libstdc++-devel-5.3.1-6.fc22.x86_64                       30/76 
  Verifying   : perl-Carp-1.38-1.fc22.noarch                              31/76 
  Verifying   : perl-PathTools-3.47-312.fc22.x86_64                       32/76 
  Verifying   : perl-Getopt-Long-2.48-1.fc22.noarch                       33/76 
  Verifying   : perl-Pod-Usage-4:1.67-1.fc22.noarch                       34/76 
  Verifying   : perl-Text-ParseWords-3.30-1.fc22.noarch                   35/76 
  Verifying   : perl-Pod-Perldoc-3.25-1.fc22.noarch                       36/76 
  Verifying   : perl-podlators-2.5.3-3.fc22.noarch                        37/76 
  Verifying   : groff-base-1.22.3-3.fc22.x86_64                           38/76 
  Verifying   : perl-Term-ANSIColor-4.03-3.fc22.noarch                    39/76 
  Verifying   : perl-Scalar-List-Utils-1:1.42-1.fc22.x86_64               40/76 
  Verifying   : perl-Socket-2:2.021-1.fc22.x86_64                         41/76 
  Verifying   : perl-Time-HiRes-1.9728-1.fc22.x86_64                      42/76 
  Verifying   : perl-macros-4:5.20.3-330.fc22.x86_64                      43/76 
  Verifying   : perl-threads-1:2.02-1.fc22.x86_64                         44/76 
  Verifying   : findutils-1:4.5.14-6.fc22.x86_64                          45/76 
  Verifying   : glibc-headers-2.21-13.fc22.x86_64                         46/76 
  Verifying   : less-481-1.fc22.x86_64                                    47/76 
  Verifying   : openssh-clients-6.9p1-12.fc22.x86_64                      48/76 
  Verifying   : fipscheck-lib-1.4.1-7.fc22.x86_64                         49/76 
  Verifying   : libedit-3.1-12.20150325cvs.fc22.x86_64                    50/76 
  Verifying   : openssh-6.9p1-12.fc22.x86_64                              51/76 
  Verifying   : fipscheck-1.4.1-7.fc22.x86_64                             52/76 
  Verifying   : rsync-3.1.1-7.fc22.x86_64                                 53/76 
  Verifying   : binutils-2.25-9.fc22.x86_64                               54/76 
  Verifying   : perl-Encode-2:2.80-1.fc22.x86_64                          55/76 
  Verifying   : perl-Pod-Escapes-1:1.06-330.fc22.noarch                   56/76 
  Verifying   : perl-HTTP-Tiny-0.056-1.fc22.noarch                        57/76 
  Verifying   : autoconf-2.69-20.fc22.noarch                              58/76 
  Verifying   : m4-1.4.17-6.fc22.x86_64                                   59/76 
  Verifying   : perl-Data-Dumper-2.154-1.fc22.x86_64                      60/76 
  Verifying   : perl-Thread-Queue-3.09-1.fc22.noarch                      61/76 
  Verifying   : man-db-2.7.1-9.fc22.x86_64                                62/76 
  Verifying   : crontabs-1.11-9.20130830git.fc22.noarch                   63/76 
  Verifying   : libpipeline-1.4.0-1.fc22.x86_64                           64/76 
  Verifying   : cronie-1.4.12-5.fc22.x86_64                               65/76 
  Verifying   : kernel-headers-4.4.9-200.fc22.x86_64                      66/76 
  Verifying   : emacs-filesystem-1:24.5-6.fc22.noarch                     67/76 
  Verifying   : cronie-anacron-1.4.12-5.fc22.x86_64                       68/76 
  Verifying   : libgcc-5.3.1-6.fc22.x86_64                                69/76 
  Verifying   : glibc-2.21-13.fc22.x86_64                                 70/76 
  Verifying   : glibc-common-2.21-13.fc22.x86_64                          71/76 
  Verifying   : libstdc++-5.3.1-6.fc22.x86_64                             72/76 
  Verifying   : libgcc-5.3.1-2.fc22.x86_64                                73/76 
  Verifying   : libstdc++-5.3.1-2.fc22.x86_64                             74/76 
  Verifying   : glibc-2.21-11.fc22.x86_64                                 75/76 
  Verifying   : glibc-common-2.21-11.fc22.x86_64                          76/76 

Installed:
  autoconf.noarch 2.69-20.fc22                                                  
  automake.noarch 1.15-1.fc22                                                   
  binutils.x86_64 2.25-9.fc22                                                   
  cpp.x86_64 5.3.1-6.fc22                                                       
  cronie.x86_64 1.4.12-5.fc22                                                   
  cronie-anacron.x86_64 1.4.12-5.fc22                                           
  crontabs.noarch 1.11-9.20130830git.fc22                                       
  emacs-filesystem.noarch 1:24.5-6.fc22                                         
  findutils.x86_64 1:4.5.14-6.fc22                                              
  fipscheck.x86_64 1.4.1-7.fc22                                                 
  fipscheck-lib.x86_64 1.4.1-7.fc22                                             
  gcc.x86_64 5.3.1-6.fc22                                                       
  gcc-c++.x86_64 5.3.1-6.fc22                                                   
  git.x86_64 2.4.11-1.fc22                                                      
  glibc-devel.x86_64 2.21-13.fc22                                               
  glibc-headers.x86_64 2.21-13.fc22                                             
  groff-base.x86_64 1.22.3-3.fc22                                               
  isl.x86_64 0.14-3.fc22                                                        
  kernel-devel.x86_64 4.4.9-200.fc22                                            
  kernel-headers.x86_64 4.4.9-200.fc22                                          
  less.x86_64 481-1.fc22                                                        
  libedit.x86_64 3.1-12.20150325cvs.fc22                                        
  libgnome-keyring.x86_64 3.12.0-4.fc22                                         
  libgomp.x86_64 5.3.1-6.fc22                                                   
  libicu.x86_64 54.1-4.fc22                                                     
  libmpc.x86_64 1.0.2-3.fc22                                                    
  libpipeline.x86_64 1.4.0-1.fc22                                               
  libstdc++-devel.x86_64 5.3.1-6.fc22                                           
  m4.x86_64 1.4.17-6.fc22                                                       
  make.x86_64 1:4.0-3.1.fc22                                                    
  man-db.x86_64 2.7.1-9.fc22                                                    
  mpfr.x86_64 3.1.2-8.fc22                                                      
  openssh.x86_64 6.9p1-12.fc22                                                  
  openssh-clients.x86_64 6.9p1-12.fc22                                          
  perl.x86_64 4:5.20.3-330.fc22                                                 
  perl-Carp.noarch 1.38-1.fc22                                                  
  perl-Data-Dumper.x86_64 2.154-1.fc22                                          
  perl-Encode.x86_64 2:2.80-1.fc22                                              
  perl-Error.noarch 1:0.17023-1.fc22                                            
  perl-Exporter.noarch 5.70-311.fc22                                            
  perl-File-Path.noarch 2.09-311.fc22                                           
  perl-File-Temp.noarch 0.23.04-310.fc22                                        
  perl-Getopt-Long.noarch 2.48-1.fc22                                           
  perl-Git.noarch 2.4.11-1.fc22                                                 
  perl-HTTP-Tiny.noarch 0.056-1.fc22                                            
  perl-PathTools.x86_64 3.47-312.fc22                                           
  perl-Pod-Escapes.noarch 1:1.06-330.fc22                                       
  perl-Pod-Perldoc.noarch 3.25-1.fc22                                           
  perl-Pod-Simple.noarch 1:3.29-1.fc22                                          
  perl-Pod-Usage.noarch 4:1.67-1.fc22                                           
  perl-Scalar-List-Utils.x86_64 1:1.42-1.fc22                                   
  perl-Socket.x86_64 2:2.021-1.fc22                                             
  perl-Storable.x86_64 1:2.51-4.fc22                                            
  perl-Term-ANSIColor.noarch 4.03-3.fc22                                        
  perl-TermReadKey.x86_64 2.32-5.fc22                                           
  perl-Text-ParseWords.noarch 3.30-1.fc22                                       
  perl-Thread-Queue.noarch 3.09-1.fc22                                          
  perl-Time-HiRes.x86_64 1.9728-1.fc22                                          
  perl-Time-Local.noarch 1.2300-310.fc22                                        
  perl-constant.noarch 1.31-310.fc22                                            
  perl-libs.x86_64 4:5.20.3-330.fc22                                            
  perl-macros.x86_64 4:5.20.3-330.fc22                                          
  perl-parent.noarch 1:0.231-1.fc22                                             
  perl-podlators.noarch 2.5.3-3.fc22                                            
  perl-threads.x86_64 1:2.02-1.fc22                                             
  perl-threads-shared.x86_64 1.46-310.fc22                                      
  rsync.x86_64 3.1.1-7.fc22                                                     
  which.x86_64 2.20-10.fc22                                                     

Upgraded:
  glibc.x86_64 2.21-13.fc22           glibc-common.x86_64 2.21-13.fc22         
  libgcc.x86_64 5.3.1-6.fc22          libstdc++.x86_64 5.3.1-6.fc22            

Complete!
[91mYum command has been deprecated, redirecting to '/usr/bin/dnf clean all'.
See 'man dnf' and 'man yum2dnf' for more information.
To transfer transaction metadata from yum to DNF, run:
'dnf install python-dnf-plugins-extras-migrate && dnf-2 migrate'

[0mCleaning repos: fedora updates
Cleaning up Everything
 ---> 38a3d3db9f0b
Removing intermediate container 94a9a713fe71
Successfully built 38a3d3db9f0b

```

Array of tests: `[]`

# Conclusion

all tests passed.

# Tagging Aliases


# Conclusion

all aliases succeeded.

%!(EXTRA int=0)