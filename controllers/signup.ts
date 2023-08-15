import { NextFunction, Request, Response } from "express";
import { signupService } from "../services/signup";
import { Errors } from "../enums/Errors";
import { logger } from "../config/logger";

export const signupController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = signupService(name, email, password);
  try {
    res.status(201).json({ newUser });
  } catch (err) {
    logger.error(err);
    throw new Error(Errors.ServerError);
  }
};
