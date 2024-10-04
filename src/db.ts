import pg from "pg";

interface PoolConfig {
  user: string;
  host: string;
  password: string;
  database: string;
  port: number;
}

export const pool = new pg.Pool({
  user: process.env.USER as string,
  host: process.env.HOST as string,
  password: process.env.PASSWORD as string,
  database: process.env.DATABASE as string,
  port: Number(process.env.DBPORT),
} as PoolConfig);
