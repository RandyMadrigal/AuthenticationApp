import { Request, Response } from "express";

import { pool } from "../db";
import { IUSER } from "../utils/interface";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query<IUSER>("SELECT * FROM users");
    res.status(200).json(rows);
    console.log(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query<IUSER>(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );

    if (rows.length === 0) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    res.status(200).json(rows);
    console.log(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query<IUSER>(
      "INSERT INTO users (name,email) VALUES ($1, $2)",
      [name, email]
    );
    res.status(201).json({ message: "User created" });
    console.log(result);
  } catch (err) {
    console.log(err);
    if (err.code === "23505") {
      res.status(409).json({ error: "User with email already exists" });
      return;
    }
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query<IUSER>(
      "DELETE FROM users WHERE id = $1",
      [id]
    );

    if (rowCount === 0) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
};
