const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Loads environment variables from .env file

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors()); // Enable cross-origin requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import and use routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Listen for requests on port 5000
app.listen(5000, () => console.log("Server is running on port 5000"));
