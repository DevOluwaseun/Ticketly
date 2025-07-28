import express from "express";
import { createTicket } from "../controllers/userControllers";

const router = express.Router();

router.post("/user/ticket", createTicket);

export default router;
