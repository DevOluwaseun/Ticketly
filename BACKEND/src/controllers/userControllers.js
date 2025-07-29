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
      status: "Success",
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
