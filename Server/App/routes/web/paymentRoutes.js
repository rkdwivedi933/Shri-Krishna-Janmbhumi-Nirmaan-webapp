const express = require("express");
const router = express.Router();
const paymentController = require("../../controllers/web/paymentController");
const paymentMiddleware = require("../../middleware/web/paymentMiddlewere");

// ✅ Apply middleware
router.use(paymentMiddleware);

// ✅ POST: insert payment
router.post("/insertPayment", paymentController.createPayment);

// ✅ GET: get all payments
router.get("/getAllPayments", paymentController.getAllPayments); // must exist in controller

module.exports = router;
