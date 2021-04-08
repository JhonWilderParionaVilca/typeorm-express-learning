import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import userRoutes from "./routes/user.routes";

dotenv.config();
console.log(process.env.TYPEORM_CONNECTION);
const app = express();
createConnection()
  .then(() => console.log("✔️ connectado a la base de datos"))
  .catch(console.log);

/* Configs */
app.set("PORT", process.env.PORT || 3333);

/* middlewares */
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/* routes */
app.use(userRoutes);

app.listen(app.get("PORT"), () =>
  console.log(`🔼 server on port ${app.get("PORT")}`)
);
