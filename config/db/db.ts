import { Sequelize } from "sequelize";
import { env } from "../env";

export const sequelize = new Sequelize(
  env.dbName,
  env.dbUsername,
  env.dbPassword,
  { host: "localhost", dialect: "postgres" }
);
