const express = require("express");
const { unknownEndpoint } = require("./middleware");
const routes = require("./routes");

/**
 * HTTP server, put middleware and routes here.
 *
 * @param {*} app
 */
module.exports = function (app) {
  app.use(express.json());

  routes(app);

  app.use(unknownEndpoint);
};
