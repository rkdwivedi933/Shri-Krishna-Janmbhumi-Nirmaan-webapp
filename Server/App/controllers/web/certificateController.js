const Certificate = require("../../models/web/certificateModel");
const path = require("path");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

// 🖼️ Generate certificate image
async function generateCertificateImage(user, type) {
const templatePath = path.join(__dirname, "../../certificate_template/CERTIFICATE-TEMPLATE.jpg");




  if (!fs.existsSync(templatePath)) {
    throw new Error("Certificate template not found at " + templatePath);
  }

  const baseImage = await loadImage(templatePath);
  const canvas = createCanvas(baseImage.width, baseImage.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height);

  ctx.font = "28px Arial";
  ctx.fillStyle = "#000";
  ctx.textBaseline = "top";

  ctx.fillText(user.fullName || "-", 180, 210);
  ctx.fillText(user.address || "-", 180, 255);
  ctx.fillText(user.phone || "-", 180, 300);

  ctx.font = "bold 26px Arial";
  ctx.fillText(`(${type.toUpperCase()})`, 830, 140);

  ctx.font = "20px Arial";
  ctx.fillText(new Date().toLocaleDateString(), 950, 450);

  const uploadsDir = path.join(__dirname, "../../../uploads/certificates");
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  const fileName = `certificate-${user._id}-${Date.now()}.png`;
  const filePath = path.join(uploadsDir, fileName);

  fs.writeFileSync(filePath, canvas.toBuffer("image/png"));

  return `/uploads/certificates/${fileName}`;
}

// POST /api/certificate/send-certificate
exports.sendCertificate = async (req, res) => {
  try {
    const { user, type } = req.body;

    if (!user || !type) return res.status(400).json({ message: "User and type required" });

    const imagePath = await generateCertificateImage(user, type);

    const cert = new Certificate({
      userId: user._id,
      fullName: user.fullName,
      address: user.address,
      phone: user.phone,
      type,
      imagePath,
    });

    await cert.save();

    res.status(201).json({ success: true, message: "Certificate generated", cert });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /api/certificate/user-certificates/:userId
exports.getUserCertificates = async (req, res) => {
  try {
    const { userId } = req.params;
    const certificates = await Certificate.find({ userId }).sort({ createdAt: -1 });
    res.json(certificates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
