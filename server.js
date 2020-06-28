"use strict";

const express = require("express");
const helmet = require("helmet");
const NodeCache = require("node-cache");
const { JSDOM } = require("jsdom");
const fs = require("fs");

const JS_LOCATION = "./dist/js";
const PORT = 8080;
const TTL = 1800;

const app = express();
const htmlCache = new NodeCache();
const html = fs.readFileSync("./dist/index.html", "utf8");
const jsFiles = fs.readdirSync(JS_LOCATION)
                .map(name => `${JS_LOCATION}/${name}`)
                .map(file => fs.readFileSync(file, "utf8"));

function loadPage(req, res) {
    const { originalUrl } = req;

    if (htmlCache.has(originalUrl)) {
        res.send(htmlCache.get(originalUrl));
        htmlCache.ttl(originalUrl, TTL);
    } else {
        const dom = new JSDOM(html, {
            url: `http://127.0.0.1${originalUrl}`,
            referrer: `http://127.0.0.1${originalUrl}`,
            contentType: "text/html",
            strictSSL: false,
            includeNodeLocations: true,
            runScripts: "outside-only"
        });
        
        jsFiles.forEach(js => dom.window.eval(js));

        setTimeout(() => {
            const computedHtml = dom.window.document.documentElement.outerHTML;

            htmlCache.set(originalUrl, computedHtml, TTL);
            res.send(computedHtml);
        }, 1000);
    }
}

app.use(helmet());
app.use((req, res, next) => {
    const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
    const userAgent = req.get("User-Agent");
    const date = new Date().toISOString();

    console.log(`[${date}] [${ip}] [${userAgent}] ${req.method}: ${req.originalUrl}`);
    next();
});

app.use(express.static("dist"));
app.get("*", loadPage);

app.listen(PORT);
