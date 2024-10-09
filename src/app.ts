import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.ts";
import authRoutes from "./routes/auth.routes.ts";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", authRoutes);

app.use("/", (req: Request, res: Response) => {
  res.status(404).send("bad request");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`SERVER ON PORT ${process.env.PORT || 8080} ....`);
});
