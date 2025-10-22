const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./App/config/database");

// Import routes
const loginRoutes = require("./App/routes/web/loginRoutes");
const registerRoutes = require("./App/routes/web/registerRoutes");
const paymentRoutes = require("./App/routes/web/paymentRoutes");
const userProfileRoutes = require("./App/routes/web/userProfileRoutes");
const certificateRoutes = require("./App/routes/web/certificateRoutes");
const paymentInfoRoutes = require("./App/routes/admin/paymentInfoRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const uploadsPath = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsPath));
console.log("📂 Serving uploads from:", uploadsPath);


// ✅ Use routes
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/userprofile", userProfileRoutes);
app.use("/api/certificate", certificateRoutes);
app.use("/api/paymentInfo", paymentInfoRoutes);

app.get("/", (req, res) => res.send("🚀 API is running..."));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
