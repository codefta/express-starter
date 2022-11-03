/**
 * Handling bad request error
 *
 * @param {string} message
 * @returns object with code and message
 */
export function badRequestError(message: string): CustomError {
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
export function unAuthorizedError(message: string): CustomError {
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
export function forbiddenError(message: string): CustomError {
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
export function notFoundError(message: string): CustomError {
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
export function internalServerError(message: string): CustomError {
  return {
    code: 500,
    name: "InternalServerError",
    message: message || "Internal server error",
  };
}

export interface CustomError {
  code: number;
  name: string;
  message: string;
}
