const Payment = require("../../models/web/paymentModel");

// ✅ Create Payment
exports.createPayment = async (req, res) => {
  try {
    const { fullName, phone, email, date, pincode, amount, coverFee, receivePrasadam, transactionId } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ message: "❌ Amount is required and must be greater than 0." });
    }

    const newPayment = await Payment.create({
      fullName,
      phone,
      email,
      date,
      pincode,
      amount: Number(amount),
      coverFee,
      receivePrasadam,
      transactionId,
    });

    res.status(201).json({ message: "✅ Payment saved successfully!", data: newPayment });
  } catch (error) {
    console.error("❌ Error saving payment:", error);
    res.status(500).json({ message: "Failed to save payment", error: error.message });
  }
};

// ✅ Get All Payments (for admin)
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(payments);
  } catch (error) {
    console.error("❌ Error fetching payments:", error);
    res.status(500).json({ message: "Failed to fetch payments", error: error.message });
  }
};


