import { app } from "./app";
import { sequelize } from "./config/db/db";
import { env } from "./config/env";
import { logger } from "./config/logger";

let server: any;

sequelize
  .sync()
  .then(() => {
    logger.info("synced");
    server = app.listen(env.serverPort);
  })
  .catch(() => {
    process.exit(1);
  });

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server Closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (err: any) => {
  logger.error(err);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
