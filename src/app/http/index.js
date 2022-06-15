const express = require("express");
const {
  unknownEndpointMiddleware,
  mongoDbMiddleware,
} = require("./middleware");
const routes = require("./routes");

/**
 * HTTP server, put middleware and routes here.
 *
 * @param {*} app
 */
module.exports = function (app) {
  app.use(express.json());

  app.use(mongoDbMiddleware);

  routes(app);

  app.use(unknownEndpointMiddleware);
};
