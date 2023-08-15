import { NextFunction, Request, Response } from "express";
import { Errors } from "../enums/Errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.message === Errors.ServerError) {
    res.status(500).json({ msg: Errors.ServerError });
  }
};
