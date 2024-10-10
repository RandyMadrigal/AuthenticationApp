import { verifyToken } from "../utils/jsonWebToken";
import { Request, Response, NextFunction } from "express";

export const validToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.access_token;
  const SECRET = process.env.SECRET_JWT || "use-a-long-secret-text";

  if (!token) {
    res.status(401).json({ message: "Access token is missing" });
    return;
  }

  try {
    const isValid = verifyToken(token, SECRET);
    if (isValid) {
      next();
    } else {
      res.status(403).json({ message: "Invalid token" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
