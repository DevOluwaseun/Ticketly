import Ticket from "../models/ticketModel.js";
import User from "../models/userModel.js";

export const unassignedTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ agentID: null });

    res.status(200).json({
      status: "success",
      data: {
        tickets,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const assignTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res
        .status(404)
        .json({ status: "fail", message: "Ticket not found" });
    }

    if (ticket.agentID) {
      return res
        .status(400)
        .json({ status: "fail", message: "Ticket already assigned" });
    }

    ticket.agentID = req.user._id;
    await ticket.save();

    res.status(200).json({
      status: "success",
      data: {
        ticket,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getAssignedTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ agentID: req.user._id });

    res.status(200).json({
      status: "success",
      data: {
        tickets,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
