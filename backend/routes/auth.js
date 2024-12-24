const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { ADMIN_PASSWORD, JWT_SECRET } = process.env; // Import the admin password from .env file

router.post("/login", async (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    // Compare the entered password with the one in .env
    const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(403).json({ message: "Invalid password" }); // If incorrect password, return error
  }
});

module.exports = router;
