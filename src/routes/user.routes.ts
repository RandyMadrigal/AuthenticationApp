import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} from "../controllers/user.controllers";

import validateUser from "../middlewares/createUser.middleware";

const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", validateUser, createUser);
router.delete("/user/:id", deleteUser);

export default router;
