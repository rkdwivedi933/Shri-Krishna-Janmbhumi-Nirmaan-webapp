const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true,trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["indian", "foreign"], required: true },
    phone: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", registerSchema);
