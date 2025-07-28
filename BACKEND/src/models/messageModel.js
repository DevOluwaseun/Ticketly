import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    agentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    ticketID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    content: { type: String, required: true },
    type: {
      type: String,
      enum: ["text", "image", "file"],
      default: "text",
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
