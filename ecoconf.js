module.exports = {
    port: 8080,
    cacheCycle: 1800,
    distDir: "dist",
    cacheDir: "/tmp/eco-webserver",
    logDir: "/tmp/eco-webserver.log",
    enableIsomorphic: true,
    header: {
        "Cache-Control": "max-age=604800",
        "X-XSS-Protection": "1;mode=block",
        "X-Frame-Options": "DENY"
    },
    contentType: {},
    proxy : {}
}
