import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  res.send("login ");
});

router.post("/logout", (req: Request, res: Response) => {
  res.send("logout ");
});

export default router;
