"use strict";

const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

const PORT = 8080;

app.use(helmet());
app.use((req, res, next) => {
    console.log(`${new Date()} => ${req.method}: ${req.originalUrl}`);
    next();
});
app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(PORT);
