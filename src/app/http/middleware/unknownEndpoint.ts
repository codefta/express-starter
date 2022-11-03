import { Request } from "express";
import { responseError } from "../../../util/responseJson";
const { notFoundError } = require("../../../util/customError");

/**
 * Block unknown requests
 *
 * @param {*} req
 * @param {*} res
 */
export const unknownEndpoint = (_req: any, res: any): any => {
  return responseError(res, notFoundError("Unknown endpoint"));
};
