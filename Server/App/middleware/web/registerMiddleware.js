module.exports = (req, res, next) => {
  const { name, email, password, role, phone } = req.body;
  const errors = [];

  if (!name) errors.push("Name required");
  if (!email) errors.push("Email required");
  if (!password || password.length < 6)
    errors.push("Password must be 6+ characters");
  if (!phone) errors.push("Phone required");
  if (!role || !["indian", "foreign"].includes(role.toLowerCase()))
    errors.push("Role must be 'indian' or 'foreign'");

  if (errors.length)
    return res.status(400).json({ status: 0, errors, message: "Validation failed" });
  next();
};
