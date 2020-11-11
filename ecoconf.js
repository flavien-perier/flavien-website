module.exports = {
    port: 8080,
    cacheCycle: 1800,
    distDir: "dist",
    logDir: "/tmp/eco-webserver.log",
    enableIsomorphic: true,
    header: {
        "Cache-Control": "max-age=86400",
        "X-XSS-Protection": "1;mode=block",
        "X-Frame-Options": "DENY"
    },
    contentType: {},
    proxy : {}
}
