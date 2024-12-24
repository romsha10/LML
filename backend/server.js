const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Import and configure dotenv
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken"); // For JWT authentication
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;

  // Log the received password and the password from the .env
  console.log("Received password: ", password);
  console.log("Stored password: ", process.env.ADMIN_PASSWORD);

  if (password === process.env.ADMIN_PASSWORD) {
    // If the password is correct, generate a JWT token
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    return res.json({ token });
  } else {
    return res.status(403).json({ error: "Invalid password" });
  }
});



// Route to verify JWT token (for frontend authentication check)
app.get("/api/admin/verifyToken", (req, res) => {
  const token = req.headers["authorization"]; // Get the token from the request header

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied. No token provided." });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid token." });
    }
    return res.status(200).json({ message: "Token is valid" }); // Token is valid
  });
});

// Your existing Contact Us form submission route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Outlook, Yahoo, etc.
    auth: {
      user: process.env.EMAIL_USER, // Access email user from .env
      pass: process.env.EMAIL_PASS, // Access email password from .env
    },
  });

  // Email details
  const mailOptions = {
    from: email, // Sender's email address
    to: process.env.EMAIL_USER, // Your email address from .env
    subject: `New Contact Us Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send the message. Please try again." });
  }
});

// Admin Panel setup
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use("/admin", adminRoutes); // Your existing admin routes

// Server listening on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
