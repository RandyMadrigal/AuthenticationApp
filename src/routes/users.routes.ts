import { Router, Request, Response } from "express";
import { pool } from "../db";

const router = Router();

//TODO realizar operaciones en los controllers
import { user } from "../utils/interface";

//get users
router.get("/users", async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query<user>("SELECT * FROM users");
    res.status(200).json(rows);
    console.log(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
});

//get user:id
router.get("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query<user>(
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
});

//create user TODO: validar si el email existe en la bd
router.post("/user", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query<user>(
      "INSERT INTO users (name,email) VALUES ($1, $2)",
      [name, email]
    );
    res.status(201).json({ message: "User created" });
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" }); // Manejo del error
  }
});

//delete user
router.delete("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query<user>(
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
});

export default router;
