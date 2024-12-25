// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiresAt: { type: Date },
});

const User = mongoose.model("User", userSchema);

// Mail transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  },
});

// Generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Signup route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // Expires in 15 minutes

    // Save user to DB
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpiresAt,
    });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}. It will expire in 15 minutes.`,
    });

    res.status(201).json({ success: true, message: "OTP sent to your email." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Signup failed." });
  }
});

// Verify OTP route
app.post("/api/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    if (user.otp !== otp || user.otpExpiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    // Verify user
    user.isVerified = true;
    user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    // Send welcome email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to Little More Learning!",
      text: `Hi ${user.name}, welcome to Little More Learning! We're excited to have you.`,
    });

    res
      .status(200)
      .json({ success: true, message: "OTP verified. Welcome email sent." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "OTP verification failed." });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });

    if (!user || !user.isVerified) {
      return res
        .status(400)
        .json({ message: "User not found or not verified." });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate token
    const token = generateToken(user);

    res
      .status(200)
      .json({
        success: true,
        user: { name: user.name, email: user.email },
        token,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Login failed." });
  }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
