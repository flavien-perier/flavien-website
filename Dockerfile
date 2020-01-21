FROM node:lts-alpine

LABEL maintainer="Flavien PERIER <perier@flavien.cc>"
LABEL version="1.0"
LABEL description="Flavien website"

WORKDIR /app
COPY . .

RUN apk add --no-cache build-base g++ libpng libpng-dev jpeg-dev pango-dev cairo-dev giflib-dev python

RUN apk --no-cache add ca-certificates wget  && \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk && \
    apk add glibc-2.29-r0.apk

RUN rm -Rf node_modules
RUN npm install
RUN npm run build
RUN npm run clean-css
RUN rm -Rf node_modules
RUN npm install --production

EXPOSE 80

CMD npm start
