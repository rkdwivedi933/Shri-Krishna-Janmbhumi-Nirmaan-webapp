const User = require("../../models/web/registerModel");
const Login = require("../../models/web/loginModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ status: 0, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ status: 0, message: "Invalid password" });

    // ✅ Save login info (email + hashed password + time)
    const hashedAttempt = await bcrypt.hash(password, 5);
    await Login.create({
      email,
      password: hashedAttempt,
      time: new Date(),
    });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      status: 1,
      message: "Login success",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ status: 0, message: "Server error" });
  }
};
