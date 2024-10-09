import jwt from "jsonwebtoken";
import { IUSER } from "./interface";

export const createToken = (userData: IUSER) => {
  const { name, email } = userData;
  const SECRET = process.env.SECRET_JWT || "use-a-long-secret-text";

  return jwt.sign({ name: name, email: email }, SECRET, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};
