const express = require("express");
const router = express.Router();
const { loginUser, getAllLoginUsers } = require("../../controllers/web/loginController");
const { validateLogin } = require("../../middleware/web/loginMiddleware");

router.post("/insertLogin", validateLogin, loginUser);

router.get("/getAllLoginUsers", getAllLoginUsers);

module.exports = router;
