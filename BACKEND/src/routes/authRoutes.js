import express from "express";
import { login, protect, signup } from "../controllers/authController.js";

const router = express.Router();

// Agent
router.post("/signup", signup);
router.post("/login", protect, login);

export default router;
