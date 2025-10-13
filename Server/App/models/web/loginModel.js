const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: false }, // 🔒 hashed version
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Login", loginSchema);
