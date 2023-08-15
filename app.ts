import express, { json } from "express";
import cors from "cors";
import { router as signupRoute } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

export const app = express();

app.use(cors());
app.use(signupRoute);
app.use(json());
app.use(errorHandler);
