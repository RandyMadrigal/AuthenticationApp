import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} from "../controllers/users.controllers";

const router = Router();

router.get("/users", getUsers);

router.get("/user/:id", getUser);

router.post("/user", createUser);

router.delete("/user/:id", deleteUser);

export default router;
