FROM node:hydrogen-alpine as builder

WORKDIR /opt/flavien

COPY --chown=root:root --chmod=550 . .

RUN npm ci && npm run build && \
    chmod -R 750 /opt/flavien && \
    rm -Rf node_modules && \
    npm install --production && \
    rm -Rf src public postcss.config.js vue.config.js tsconfig.json .env*

FROM nginx:alpine

LABEL org.opencontainers.image.title="Flavien website" \
      org.opencontainers.image.description="Flavien website" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.vendor="flavien.io" \
      org.opencontainers.image.maintainer="Flavien PERIER <perier@flavien.io>" \
      org.opencontainers.image.url="https://github.com/flavien-perier/flavien-website" \
      org.opencontainers.image.source="https://github.com/flavien-perier/flavien-website" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /opt/flavien

COPY --chown=nginx:nginx --chmod=550 --from=builder /opt/flavien/dist .
COPY --chown=root:root --chmod=400 ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
