const express = require("express");
const router = express.Router();
const certificateController = require("../../controllers/web/certificateController");

router.post("/send-certificate", certificateController.sendCertificate);
router.get("/user-certificates/:userId", certificateController.getUserCertificates);

module.exports = router;
