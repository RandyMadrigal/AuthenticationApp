import { Request, Response } from "express";
import { pool } from "../db";

export const login = async (req: Request, res: Response) => {
  const { email, passwod } = req.params;

  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, passwod]
  );
};
