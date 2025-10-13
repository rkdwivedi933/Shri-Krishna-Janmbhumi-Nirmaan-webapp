const UserProfile = require("../../models/web/userProfileModels");

// Create or update profile (email immutable)
exports.saveOrUpdateProfile = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload || !payload.email)
      return res.status(400).json({ success: false, message: "Email required" });

    const filter = { email: payload.email.toLowerCase().trim() };

    // Fetch existing profile
    const existing = await UserProfile.findOne(filter);

    const update = {
      ...payload,
      email: filter.email,
    };

    // Keep fullName immutable if exists
    if (existing && existing.fullName) {
      update.fullName = existing.fullName;
    }

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const saved = await UserProfile.findOneAndUpdate(filter, update, options);

    return res.status(200).json({ success: true, data: saved });
  } catch (err) {
    console.error("saveOrUpdateProfile error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get profile by email
exports.getProfile = async (req, res) => {
  try {
    const email = (req.params.email || "").toLowerCase().trim();
    if (!email) return res.status(400).json({ success: false, message: "Email required" });

    const profile = await UserProfile.findOne({ email });
    if (!profile) return res.status(404).json({ success: false, message: "Profile not found" });

    return res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.error("getProfile error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all profiles (admin)
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await UserProfile.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: profiles });
  } catch (err) {
    console.error("getAllProfiles error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
