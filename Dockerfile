FROM node:22-alpine AS builder

WORKDIR /opt/website

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine

LABEL org.opencontainers.image.title="Flavien website" \
      org.opencontainers.image.description="Flavien website" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.vendor="flavien.io" \
      org.opencontainers.image.maintainer="Flavien PERIER <perier@flavien.io>" \
      org.opencontainers.image.url="https://github.com/flavien-perier/flavien-website" \
      org.opencontainers.image.source="https://github.com/flavien-perier/flavien-website" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /opt/website

COPY --from=builder /opt/website/.output/ ./

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/opt/website/server/index.mjs"]
