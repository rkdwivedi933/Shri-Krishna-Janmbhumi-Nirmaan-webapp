const mongoose = require("mongoose");

const paymentInfoSchema = new mongoose.Schema({
  type: { type: String, enum: ["UPI", "BANK"], required: true },
  qrFile: { type: String }, // image/pdf path
  upiId: { type: String },
  accountName: { type: String },
  accountNumber: { type: String },
  bankName: { type: String },
  ifsc: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("PaymentInfo", paymentInfoSchema);
