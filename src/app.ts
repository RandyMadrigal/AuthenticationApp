import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.ts";
import authenticationRoutes from "./routes/authentication.routes.ts";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", userRoutes);
app.use("/api", authenticationRoutes);

app.use("/", (req: Request, res: Response) => {
  res.status(404).send("bad request");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`SERVER ON PORT ${process.env.PORT || 8080} ....`);
});
