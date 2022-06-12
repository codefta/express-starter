/**
 * Handling bad request error
 *
 * @param {string} message
 * @returns object with code and message
 */
function badRequestError(message) {
  return {
    code: 400,
    name: "BadRequestError",
    message: message || "Bad Request",
  };
}

/**
 * Handling unAuthorized error
 *
 * @param {string} message
 * @returns object with code and message
 */
function unAuthorizedError(message) {
  return {
    code: 401,
    name: "UnAuthorizedError",
    message: message || "Unauthorized",
  };
}

/**
 * Handling forbidden error
 *
 * @param {string} message
 * @returns object with code and message
 */
function forbiddenError(message) {
  return {
    code: 403,
    name: "ForbiddenError",
    message: message || "Forbidden",
  };
}

/**
 * Handling not found error
 *
 * @param {string} message
 * @returns object with code and message
 */
function notFoundError(message) {
  return {
    code: 404,
    name: "NotFoundError",
    message: message || "Not found",
  };
}

/**
 * Handling internal server error
 *
 * @param {string} message
 * @returns object with code and message
 */
function internalServerError(message) {
  return {
    code: 500,
    name: "InternalServerError",
    message: message || "Internal server error",
  };
}

module.exports = {
  badRequestError,
  unAuthorizedError,
  forbiddenError,
  notFoundError,
  internalServerError,
};
