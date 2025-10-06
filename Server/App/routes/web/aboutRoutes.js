const express = require("express");
const { contactInsert, getAbout } = require("../../controllers/web/aboutController");

const aboutRouter = express.Router();

// POST route → http://localhost:5000/api/about/insertAbout
aboutRouter.post("/insertAbout", contactInsert);

// GET route → http://localhost:5000/api/about/getAbout
aboutRouter.get("/getAbout", getAbout);

module.exports = aboutRouter;
