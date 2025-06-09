import express from "express";
import { userUpdateTemplate } from "../nodemailer.js";

const router = express.Router();

// Send Message
router.post("/", async (req, res) => {
  try {
    const { subject, message, email, name } = req.body;

    if (!message) {
      return res.status(400).json({
        status: "error",
        message: "Message is required.",
      });
    }
    await userUpdateTemplate({ subject, message, email, name });
    res.json({
      status: "success",
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({
      status: "error",
      message: error.message || "Internal server error",
    });
  }
});

export default router;
