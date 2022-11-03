import http from "./http";
import express from "express";
const app = express();

http(app);

module.exports = app;
