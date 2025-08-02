import express from "express";
import {
  createTicket,
  getChat,
  getTickets,
  sendMessage,
} from "../controllers/userControllers.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.post("/ticket", protect, createTicket);
router.get("/tickets", protect, getTickets);
router.get("/tickets/:id/chat", protect, getChat);
router.post("/tickets/:id/message", protect, sendMessage);

export default router;
