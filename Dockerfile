FROM node:lts-alpine as builder

LABEL maintainer="Flavien PERIER <perier@flavien.io>"
LABEL version="1.0"
LABEL description="Flavien website"

WORKDIR /opt/flavien
COPY . .

RUN apk add --no-cache build-base g++ python libpng-dev jpeg-dev giflib-dev pango-dev cairo-dev

RUN apk --no-cache add ca-certificates wget  && \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk && \
    apk add glibc-2.29-r0.apk

RUN rm -Rf node_modules
RUN npm install && \
    npm run build && \
    npm run clean-css && \
    chmod -R 750 /opt/flavien
RUN rm -Rf node_modules
RUN npm install --production

FROM node:lts-alpine

ARG DOCKER_UID=500
ARG DOCKER_GID=500

WORKDIR /opt/flavien

RUN apk add --no-cache libpng-dev jpeg-dev giflib-dev pango-dev cairo-dev

COPY --from=builder /opt/flavien .

RUN addgroup -g $DOCKER_GID flavien && \
    adduser -G flavien -D -H -h /opt/flavien -u $DOCKER_UID flavien && \
    chown -R flavien:flavien /opt/flavien

USER flavien
EXPOSE 8080

CMD npm start
