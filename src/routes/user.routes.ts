import { Router } from "express";
import { getUsers, getUser, deleteUser } from "../controllers/user.controllers";
import { validToken } from "../middlewares/verifyJwt.middleware";

const router = Router();

router.get("/users", validToken, getUsers);
router.get("/user/:id", validToken, getUser);
router.delete("/user/:id", validToken, deleteUser);

export default router;
