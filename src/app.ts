import express, { Application, Request, Response } from "express";
import userRoutes from "./routes/users.routes.ts";
import authenticationRoutes from "./routes/authentication.routes.ts";

const app: Application = express();

app.use("/api", userRoutes);
app.use("/api", authenticationRoutes);

app.use("/", (req: Request, res: Response) => {
  res.status(404).send("bad request");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`SERVER ON PORT ${process.env.PORT || 8080} ....`);
});
