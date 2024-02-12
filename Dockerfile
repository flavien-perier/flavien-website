FROM node:hydrogen-alpine as builder

WORKDIR /opt/flavien

COPY --chown=root:root . .

RUN npm ci && \
    npm run build && \
    chmod -R 750 /opt/flavien && \
    rm -Rf node_modules && \
    npm install --production && \
    rm -Rf src public postcss.config.js vue.config.js tsconfig.json .env*

FROM nginx:alpine

LABEL maintainer="Flavien PERIER <perier@flavien.io>" \
    version="1.0.0" \
    description="Flavien website"

WORKDIR /opt/flavien

COPY --chown=nginx:nginx --from=builder /opt/flavien/dist .

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
