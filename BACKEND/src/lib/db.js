import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
