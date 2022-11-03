import express from "express";
import { unknownEndpointMiddleware, mongoDbMiddleware } from "./middleware";
import routes from "./routes";

/**
 * HTTP server, put middleware and routes here.
 *
 * @param {*} app
 */
module.exports = function (app: Express) {
  app.use(express.json());

  app.use(mongoDbMiddleware);

  routes(app);

  app.use(unknownEndpointMiddleware);
};
