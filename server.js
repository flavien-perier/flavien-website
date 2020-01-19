"use strict";

const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

const PORT = 8080;

app.use(helmet());
app.use((req, res, next) => {
    const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
    const userAgent = req.get("User-Agent");
    const date = new Date().toISOString();

    console.log(`[${date}] [${ip}] [${userAgent}] ${req.method}: ${req.originalUrl}`);
    next();
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(PORT);
