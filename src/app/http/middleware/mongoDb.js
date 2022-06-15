const config = require("../../../config");
const mongodb = require("../../../service/mongodb");
const { internalServerError } = require("../../../util/customError");
const responseError = require("../../../util/responseError");

module.exports = async (req, res, next) => {
  try {
    if (!req.db) {
      req.mongoDb = await mongodb();
      req.mainDb = config.mongodb.db;
    }

    return next();
  } catch (err) {
    return responseError(
      res,
      internalServerError("Error connecting to database")
    );
  }
};
