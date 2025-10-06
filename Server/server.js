const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./App/config/database");

const loginRoutes = require("./App/routes/web/loginRoutes");
const registerRoutes = require("./App/routes/web/registerRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);

app.get("/", (req, res) => res.send("🚀 API is running..."));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
