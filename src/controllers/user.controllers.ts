import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.services";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser();

    if (users?.length === 0) {
      res.status(200).json({ message: "not users in db" });
      return;
    }
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);

    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const rowCount = await userService.deleteUser(id);

    if (rowCount) {
      res.status(200).json({ message: "User deleted" });
      return;
    }

    res.status(404).json({ message: "user not found" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};
