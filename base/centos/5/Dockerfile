FROM centos:5
MAINTAINER William Blankenship <wblankenship@nodesource.com>

RUN yum install -y \
      automake \
      libicu \
      curl \
      gcc \
      gcc-c++ \
      git \
      kernel-devel \
      make \
      perl \
      which \
 && yum clean all

RUN rpm -ivh $(curl http://dl.fedoraproject.org/pub/epel/5/x86_64/repoview/epel-release.html | grep -oE "epel-release-[0-9-]+.noarch.rpm" | sed "s/^/http:\/\/dl.fedoraproject.org\/pub\/epel\/5\/x86_64\//") \
 && yum install -y python26 git\
 && yum clean all

ENV PYTHON python2.6

