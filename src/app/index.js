const http = require("./http");
const express = require("express");
const app = express();

http(app);

module.exports = app;
