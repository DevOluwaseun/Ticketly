import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/userRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/agent", agentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
  connectDB();
});

export default app;
