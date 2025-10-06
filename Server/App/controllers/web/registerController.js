const User = require("../../models/web/registerModel");
const bcrypt = require("bcryptjs");

exports.insertRegister = async (req, res) => {
  try {
    const { name, email, password, role, phone, message } = req.body;

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ status: 0, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      message,
    });

    await newUser.save();
    res.status(201).json({ status: 1, message: "User registered", data: newUser });
  } catch (err) {
    console.error("❌ Register Error:", err);
    res.status(500).json({ status: 0, message: "Server error" });
  }
};
