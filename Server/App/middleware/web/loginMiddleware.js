const { body, validationResult } = require("express-validator");

exports.validateLogin = [
  body("email").notEmpty().isEmail().withMessage("Valid email required"),
  body("password").notEmpty().isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ status: 0, errors: errors.array() });
    next();
  },
];
