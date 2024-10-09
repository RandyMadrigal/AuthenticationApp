import { Router } from "express";
import { login, logout, createUser } from "../controllers/auth.controllers";
import { validate } from "../middlewares/validate.middleware";
import { validToken } from "../middlewares/verifyJwt.middleware";
import { createUserSchema, LoginSchema } from "../utils/schemas";

const router = Router();

router.post("/login", validate(LoginSchema), login);
router.post("/logout", validToken, logout);
router.post("/register", validate(createUserSchema), createUser);

export default router;
