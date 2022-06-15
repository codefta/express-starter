const responseSuccess = require("../../../util/responseSuccess");
const responseError = require("../../../util/responseError");
const { addUserRequest } = require("../request");
const { addUserService } = require("../service");

module.exports = async function (req, res) {
  try {
    const body = await addUserRequest(req.body);

    const result = await addUserService(req, body);
    responseSuccess(res, result);
  } catch (e) {
    responseError(res, e);
  }
};
