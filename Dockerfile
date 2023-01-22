FROM node:lts-alpine as builder

WORKDIR /opt/flavien

COPY --chown=root:root . .

RUN apk add --no-cache build-base g++ python3 libpng-dev jpeg-dev giflib-dev pango-dev cairo-dev git ca-certificates wget && \
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
