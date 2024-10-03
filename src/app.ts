import express from "express";
import { PORT } from "./config.ts";

const app = express();

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}....`);
});
