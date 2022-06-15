const { addUserHandler } = require("./handler");
const { unknownEndpointMiddleware } = require("../../app/http/middleware");

const router = require("express").Router();

module.exports = async function (app) {
  const groupPath = "/user";
  const adminRouter = router;

  // Add user
  app.post("/add", addUserHandler);

  app.use(unknownEndpointMiddleware);
  router.use(`${groupPath}`, adminRouter);
};
