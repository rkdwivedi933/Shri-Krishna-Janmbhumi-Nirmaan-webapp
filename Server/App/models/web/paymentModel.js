const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String },
    pincode: { type: String },
    amount: { type: Number, required: true },
    coverFee: { type: Boolean, default: false },
    receivePrasadam: { type: Boolean, default: false },
    transactionId: { type: String,  }, // ✅ New field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
