FROM centos:7

RUN curl -sL https://rpm.nodesource.com/setup_6.x | /bin/bash

RUN yum install -y gcc-c++ make \
  && yum install -y git \
  && yum install -y nodejs npm

RUN npm install -g pm2

RUN mkdir -p /var/www/catalogue

ADD ./entrypoint.sh /var/www/catalogue/entrypoint.sh
RUN chmod +x /var/www/catalogue/entrypoint.sh


