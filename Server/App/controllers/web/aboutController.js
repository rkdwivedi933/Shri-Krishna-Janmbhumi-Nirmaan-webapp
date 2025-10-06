const AboutModel = require("../../models/web/aboutForm");

// Insert About data
const contactInsert = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const about = new AboutModel({
      title,
      description,
      image,
    });

    await about.save();

    res.status(201).json({ status: 1, message: "✅ About Saved Successfully" });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "❌ Error While Saving About",
      error: err.message,
    });
  }
};

// Get all About data
const getAbout = async (req, res) => {
  try {
    const aboutData = await AboutModel.find();
    res.json(aboutData);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching data", error: err });
  }
};

module.exports = { contactInsert, getAbout };
