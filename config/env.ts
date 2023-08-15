import "dotenv/config";

type Env = {
  serverPort: string;
  dbName: string;
  dbUsername: string;
  dbPassword: string;
};

export const env: Env = {
  serverPort: process.env.SERVER_PORT as string,
  dbName: process.env.DATABASE_NAME as string,
  dbUsername: process.env.DATABASE_USERNAME as string,
  dbPassword: process.env.DATABASE_PASSWORD as string,
};
