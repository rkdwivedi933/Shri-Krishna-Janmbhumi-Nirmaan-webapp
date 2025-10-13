const express = require("express");
const router = express.Router();

const {
  saveOrUpdateProfile,
  getProfile,
  getAllProfiles,
} = require("../../controllers/web/userProfileController");

const { validateUserProfile } = require("../../middleware/web/userProfileMiddleware");

// POST /api/userprofile/save
router.post("/save", validateUserProfile, saveOrUpdateProfile);

// GET /api/userprofile/all
router.get("/all", getAllProfiles);

// GET /api/userprofile/:email
router.get("/:email", getProfile);

module.exports = router;
