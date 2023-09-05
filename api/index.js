import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Conectado");
});
