// test/agentControllers.test.js
import request from "supertest";
import app from "../src/index.js";
import Ticket from "../src/models/ticketModel.js";
import User from "../src/models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

let agentToken, agentId, ticketId;

beforeAll(async () => {
  const agent = await User.create({
    fullName: "Agent Smith",
    email: "agent@example.com",
    password: "password123",
    passwordConfirm: "password123",
    role: "agent",
  });
  agentId = agent._id;
  agentToken = jwt.sign({ id: agent._id }, process.env.JWT_SECRET);

  const ticket = await Ticket.create({
    title: "Unassigned Ticket",
    description: "Needs help",
    userID: agent._id,
  });
  ticketId = ticket._id;
});

afterAll(async () => {
  await User.deleteMany({});
  await Ticket.deleteMany({});
  await mongoose.connection.close();
});

describe("Agent Controllers", () => {
  it("should get unassigned tickets", async () => {
    const res = await request(app)
      .get("/api/agent/tickets/unassigned")
      .set("Authorization", `Bearer ${agentToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.tickets.length).toBeGreaterThan(0);
  });

  it("should assign a ticket to the agent", async () => {
    const res = await request(app)
      .post(`/api/agent/tickets/${ticketId}/assign`)
      .set("Authorization", `Bearer ${agentToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.ticket.agentID).toBe(String(agentId));
  });

  it("should get assigned tickets for the agent", async () => {
    const res = await request(app)
      .get("/api/agent/tickets/assigned")
      .set("Authorization", `Bearer ${agentToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.tickets.some((t) => t._id === String(ticketId))).toBe(
      true
    );
  });
});
