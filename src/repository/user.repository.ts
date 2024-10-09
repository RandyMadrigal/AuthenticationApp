import { QueryResult } from "pg";
import { pool } from "../db";
import { IUSER } from "../utils/interface";

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

export const deleteUser = async (id: string): Promise<number | null> => {
  const { rowCount } = await pool.query<IUSER>(
    "DELETE FROM users WHERE id = $1 ",
    [id]
  );
  return rowCount;
};
