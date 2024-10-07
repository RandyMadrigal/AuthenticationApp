import { QueryResult } from "pg";
import { pool } from "../db";
import { IUSER } from "../utils/interface";
import { error } from "console";

export const findUsers = async (): Promise<IUSER[]> => {
  const { rows } = await pool.query<IUSER>("SELECT * FROM users");
  return rows;
};

export const findUserById = async (id: string): Promise<IUSER> => {
  const { rows } = await pool.query<IUSER>(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return rows[0];
};

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

export const deleteUser = async (id: string): Promise<number | null> => {
  const { rowCount } = await pool.query<IUSER>(
    "DELETE FROM users WHERE id = $1 ",
    [id]
  );
  return rowCount;
};

export const findByEmail = async (email: string): Promise<QueryResult> => {
  const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  return rows[0];
};
