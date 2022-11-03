import { Response } from "express";
import { CustomError } from "./customError";

export const responseSuccess = (res: Response, data: any) => {
  return res.status(200).json({
    sucess: true,
    code: 200,
    data,
  });
};

export const responseError = (res: Response, error: CustomError): void => {
  res.status(error.code || 500).json({
    success: false,
    code: error.code || 500,
    message: error.code !== 500 ? error.message : "Internal server error",
  });
};
