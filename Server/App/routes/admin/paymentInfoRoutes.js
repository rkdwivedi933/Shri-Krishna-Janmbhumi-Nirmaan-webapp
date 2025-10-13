const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/paymentInfoController");

// POST: create/update + file upload
router.post("/createOrUpdate", controller.upload, controller.createOrUpdatePaymentInfo);

// GET: fetch all payment info
router.get("/getAll", controller.getAllPaymentInfo);

module.exports = router;
