// App/middlewares/paymentMiddleware.js

const dotenv = require("dotenv");
dotenv.config();

/**
 * Payment Middleware
 * Ye middleware har /api/payment route se pehle chalega.
 * - Request method, URL aur timestamp console me log karega
 * - Future me authentication / validation add ki ja sakti hai
 */

const paymentMiddleware = (req, res, next) => {
  try {
    console.log("💰 [Payment Middleware Triggered]");
    console.log("➡️ Request Method:", req.method);
    console.log("➡️ Request URL:", req.originalUrl);
    console.log("➡️ Time:", new Date().toLocaleString());
    console.log("----------------------------------------");

    // Example: Authentication placeholder
    // if (!req.headers.authorization) {
    //   return res.status(401).json({ message: "Unauthorized Access" });
    // }

    next(); // Continue to next middleware / route
  } catch (error) {
    console.error("❌ Middleware Error:", error.message);
    res.status(500).json({ message: "Middleware Error", error: error.message });
  }
};

module.exports = paymentMiddleware;
