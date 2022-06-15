const { notFoundError } = require("../../../util/customError");
const responseError = require("../../../util/responseError");

/**
 * Block unknown requests
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = (req, res) => {
  return responseError(res, notFoundError("Unknown endpoint"));
};
