import { logger } from "../config/logger";
import { Errors } from "../enums/Errors";
import { User } from "../models/user";

export const signupService = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      throw new Error(Errors.UserExists);
    }
    const newUser = await User.create({ email, name, password });
    return newUser;
  } catch (err) {
    logger.error(err);
    throw new Error(Errors.ServerError);
  }
};
