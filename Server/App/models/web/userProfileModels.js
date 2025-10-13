const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  adhar: { type: String },
  address: { type: String },
  landmark: { type: String },
  pincode: { type: String },
  district: { type: String },
  state: { type: String },
  profilePic: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("UserProfile", userProfileSchema);
