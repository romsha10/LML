const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware"); // Assuming you will create authMiddleware

// Sample protected route for admin to add a subject
router.post("/add-subject", authMiddleware, (req, res) => {
  const { subjectName } = req.body;

  if (!subjectName) {
    return res.status(400).json({ message: "Subject name is required" });
  }

  // Here you would add the logic to add a subject to the database.
  res
    .status(200)
    .json({ message: `Subject ${subjectName} added successfully!` });
});

module.exports = router;
