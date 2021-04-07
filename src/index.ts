import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import userRoutes from "./routes/user.routes";

const app = express();
createConnection()
  .then(() => console.log("✔️ connectado a la base de datos"))
  .catch(console.log);

/* middlewares */
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/* routes */
app.use(userRoutes);

app.listen(3333, () => console.log("🔼 server on port 3333"));
