import express from "express";
import {
  assignTicket,
  getAssignedTickets,
  unassignedTickets,
} from "../controllers/agentControllers.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.get("/tickets/unassigned", protect, unassignedTickets);
router.get("/tickets/assigned", protect, getAssignedTickets);
router.post("/tickets/:id/assign", protect, assignTicket);

export default router;
