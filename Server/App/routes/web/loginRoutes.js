const express = require("express");
const router = express.Router();
const { loginUser } = require("../../controllers/web/loginController");
const { validateLogin } = require("../../middleware/web/loginMiddleware");

router.post("/insertLogin", validateLogin, loginUser);

module.exports = router;
