import { Router } from "express";
import { Routes } from "../enums/Routes";
import { signupController } from "../controllers/signup";

export const router = Router();

router.post(Routes.Signup, signupController);
