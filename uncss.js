"use strict";

const express = require("express");
const uncss = require("uncss");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = 8080;
const IGNORE_CSS = [/#bot-chat.*/];

const files = [
    `http://127.0.0.1:${PORT}/`, 
    `http://127.0.0.1:${PORT}/competences`,
    `http://127.0.0.1:${PORT}/experiences`,
    `http://127.0.0.1:${PORT}/projects`
];

const options = {
    timeout: 5000,
    ignore: IGNORE_CSS
};

app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const server = app.listen(PORT, () => {
    uncss(files, options, (error, output) => {
        fs.writeFile("./dist/css/app.css", output, () => {
            server.close();
        });
    });
});
