FROM node:lts-alpine as builder

WORKDIR /opt/flavien

COPY --chown=root:root . .

RUN apk add --no-cache build-base g++ python3 libpng-dev jpeg-dev giflib-dev pango-dev cairo-dev git ca-certificates wget && \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk && \
    apk add glibc-2.29-r0.apk && \
    rm glibc-2.29-r0.apk && \
    npm ci && \
    npm run build && \
    chmod -R 750 /opt/flavien && \
    rm -Rf node_modules && \
    npm install --production && \
    rm -Rf src public postcss.config.js vue.config.js tsconfig.json .env*

FROM node:lts-alpine

LABEL maintainer="Flavien PERIER <perier@flavien.io>" \
    version="1.0.0" \
    description="Flavien website"

ARG DOCKER_UID="500" \
    DOCKER_GID="500"

WORKDIR /opt/flavien

RUN apk add --no-cache libpng-dev jpeg-dev giflib-dev pango-dev cairo-dev && \
    addgroup -g $DOCKER_GID flavien && \
    adduser -G flavien -D -H -h /opt/flavien -u $DOCKER_UID flavien && \
    mkdir /var/log/flavien && \
    chown flavien:flavien /var/log/flavien

COPY --chown=flavien:flavien --from=builder /opt/flavien .

USER flavien

EXPOSE 8080

CMD yarn start
