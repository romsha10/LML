const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware for auth
function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Token required" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
}

// Admin login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Replace with DB-based user validation
  const isValidUser = username === "admin" && password === "password";
  if (!isValidUser)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Add subject
router.post("/subjects", authMiddleware, async (req, res) => {
  const { name, type } = req.body;

  try {
    const subject = new Subject({ name, type });
    await subject.save();
    res.json(subject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add topic
router.post("/topics", authMiddleware, async (req, res) => {
  const { subjectId, title, description, videoURL, pdfLink, type } = req.body;

  try {
    const topic = new Topic({
      subject: subjectId,
      title,
      description,
      videoURL,
      pdfLink,
      type,
    });
    await topic.save();
    res.json(topic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all subjects
router.get("/subjects", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get topics by subject
router.get("/topics/:subjectId", async (req, res) => {
  try {
    const topics = await Topic.find({ subject: req.params.subjectId });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
