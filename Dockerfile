FROM nginx:alpine

LABEL maintainer="Flavien PERIER <perier@flavien.cc>"
LABEL version="1.0"
LABEL description="Flavien website"

RUN apk add nodejs npm python2 make gcc g++

WORKDIR /tmp/app
COPY . . 
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -Rf node_modules
RUN npm install
RUN npm run build

RUN apk del nodejs npm python2 make gcc g++

RUN mkdir /var/www
RUN mv ./dist/* /var/www

WORKDIR /var/www

RUN rm -Rf /tmp/app /root/.npm
