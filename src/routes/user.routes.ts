import { Router } from "express";
import { getUsers, getUser, deleteUser } from "../controllers/user.controllers";

const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);

export default router;
