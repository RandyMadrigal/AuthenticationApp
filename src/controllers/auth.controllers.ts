import { Request, Response } from "express";
import { createToken } from "../utils/jsonWebToken";
import * as authService from "../services/auth.services";
import { IUSER } from "../utils/interface";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: IUSER = await authService.login(email, password);
    if (user) {
      //create token
      const token = createToken(user);
      res.cookie("access_token", token, { httpOnly: true });
      res.status(201).json({ message: `Login successful, Hi ${user.name}` });
    }
  } catch (err) {
    res.status(401).json({ message: err.message }); // Manejo del error
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("access_token").json({ message: "logout successful" });
};

export const createUser = async (req: Request, res: Response) => {
  const userData = req.body;

  try {
    const result = await authService.createUser(userData);
    if (result) {
      res.status(201).json({ message: "User created" });
    }
  } catch (err) {
    console.log(err.message);

    if (err?.message === "User with email already exists") {
      res.status(409).json({ error: "User with email already exists" });
      return;
    }

    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};
