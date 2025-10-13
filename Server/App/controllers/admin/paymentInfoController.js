const PaymentInfo = require("../../models/admin/paymentInfoModel");
const multer = require("multer");
const path = require("path");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

exports.upload = upload.single("qrFile");

exports.createOrUpdatePaymentInfo = async (req, res) => {
  try {
    const { type, upiId, accountName, accountNumber, bankName, ifsc } = req.body;
    let qrFile = req.file ? `/uploads/${req.file.filename}` : null;

    let existing = await PaymentInfo.findOne({ type });
    if (existing) {
      existing.qrFile = qrFile || existing.qrFile;
      existing.upiId = upiId || existing.upiId;
      existing.accountName = accountName || existing.accountName;
      existing.accountNumber = accountNumber || existing.accountNumber;
      existing.bankName = bankName || existing.bankName;
      existing.ifsc = ifsc || existing.ifsc;
      await existing.save();
      return res.json({ message: "Payment info updated!", data: existing });
    }

    const newInfo = await PaymentInfo.create({ type, qrFile, upiId, accountName, accountNumber, bankName, ifsc });
    res.status(201).json({ message: "Payment info created!", data: newInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAllPaymentInfo = async (req, res) => {
  try {
    const infos = await PaymentInfo.find();
    res.json(infos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
