const User = require("../../models/web/registerModel");
const Login = require("../../models/web/loginModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔹 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ status: 0, message: "User not found" });

    // 🔹 2. Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ status: 0, message: "Invalid password" });

    // 🔹 3. Save login activity (optional)
    await Login.create({
      email,
      password,
      loginTime: new Date(),
      userId: user._id,
    });

    // 🔹 4. Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    // 🔹 5. Response (✅ _id fix)
    res.status(200).json({
      status: 1,
      message: "Login successful",
      token,
      user: {
        _id: user._id,       // ✅ must be _id
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ status: 0, message: "Server error" });
  }
};

exports.getAllLoginUsers = async (req, res) => {
  try {
    const users = await Login.find({}, "-password");
    res.status(200).json({ status: 1, users });
  } catch (err) {
    console.error("Error fetching login users:", err);
    res.status(500).json({ status: 0, message: "Server error" });
  }
};
