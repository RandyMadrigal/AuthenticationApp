import { Router, Request, Response } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  res.send("Todos los usuarios");
});

router.get("/user/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("Un usuario " + id);
});

router.post("/user", (req: Request, res: Response) => {
  res.send("create user");
});

export default router;
