import Ticket from "../models/ticketModel.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTicket = await Ticket.create({
      title,
      description,
      userID: req.user._id,
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
