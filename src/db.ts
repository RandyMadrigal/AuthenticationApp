import pg from "pg";

export const pool = new pg.Pool({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: Number(process.env.DBPORT),
});
