import { Request, Response } from "express";
import { QueryResult } from "pg";
import { IUSER } from "../utils/interface";
import { pool } from "../db";

export const insertUser = async (
  userData: IUSER
): Promise<QueryResult<IUSER>> => {
  const { name, email, password } = userData;

  const result = await pool.query<IUSER>(
    "INSERT INTO users (name,email,password) VALUES ($1, $2, $3)",
    [name, email, password]
  );

  return result;
};

export const findByEmail = async (email: string): Promise<IUSER | null> => {
  const { rows } = await pool.query<IUSER>(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return rows.length > 0 ? rows[0] : null;
};
