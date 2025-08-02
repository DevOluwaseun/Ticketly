import Ticket from "../models/ticketModel.js";
import Message from "../models/messageModel.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTicket = await Ticket.create({
      title,
      description,
      userID: req.user._id,
    });

    await Message.create({
      userID: req.user._id,
      ticketID: newTicket._id,
      content: description,
      type: "text",
    });

    res.status(201).json({
      status: "success",
      data: {
        ticket: newTicket,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ userID: req.user._id });
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

export const getChat = async (req, res) => {
  try {
    const chat = await Message.find({ ticketID: req.params.id });
    res.status(200).json({
      status: "success",
      data: {
        chat,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { content, type = "text" } = req.body;
    const ticketID = req.params.id;
    const message = await Message.create({
      userID: req.user._id,
      ticketID,
      content,
      type,
    });
    res.status(201).json({
      status: "success",
      data: { message },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
