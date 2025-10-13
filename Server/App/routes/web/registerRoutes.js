const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/web/registerController");
const registerMiddleware = require("../../middleware/web/registerMiddleware");

router.post("/insertRegister", registerMiddleware, registerController.insertRegister);


router.get("/getAllRegisterUsers", registerController.getAllRegisterUsers);

module.exports = router;
