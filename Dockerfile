FROM    debian:jessie

RUN     apt-get update && apt-get install -y curl

RUN     curl -sL https://deb.nodesource.com/setup | bash -

RUN     apt-get install -y nodejs

RUN     apt-get install -y mongodb

COPY    . /src

RUN     npm install -g gulp

RUN     cd /src; npm install

RUN     cd /src/www; npm install

RUN     cd /src/www; gulp build

EXPOSE  8001

CMD     ["/bin/bash", "/src/start.sh"]