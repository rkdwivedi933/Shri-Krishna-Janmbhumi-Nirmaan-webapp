const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // now accepts string directly
  fullName: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  type: { type: String, enum: ["joining", "appreciation", "donation"], required: true },
  imagePath: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Certificate", certificateSchema);
