import express from "express";
import { createTicket } from "../controllers/userControllers.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.post("/ticket", protect, createTicket);

export default router;
