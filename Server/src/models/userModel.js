import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    role: {
      type: String,
      enum: ["user", "agent", "admin"],
      default: "user",
      required: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "passwords are not same",
      },
    },
    avatar: String,
    isActive: Boolean,
    tags: {
      type: String,
      enum: [
        "Technical lead",
        "Escalation specialist",
        "Senior agent",
        "Level 1 agent",
        "Level 2 agent",
      ],
      default: "Level 1 agent",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

const User = mongoose.model("User", userSchema);

export default User;
