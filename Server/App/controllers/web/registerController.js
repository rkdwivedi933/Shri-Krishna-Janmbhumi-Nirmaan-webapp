const User = require("../../models/web/registerModel");
const bcrypt = require("bcryptjs");

// 🟢 Insert Register User
exports.insertRegister = async (req, res) => {
  try {
    const { name, email, password, role, phone, message } = req.body;

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ status: 0, message: "User already exists" });

    // Hash password
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
    res
      .status(201)
      .json({ status: 1, message: "User registered successfully", data: newUser });
  } catch (err) {
    console.error("❌ Register Error:", err);
    res.status(500).json({ status: 0, message: "Server error", error: err.message });
  }
};

// 🟢 Get all users
exports.getAllRegisterUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};
