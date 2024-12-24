const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  title: { type: String, required: true },
  description: String,
  videoURL: String,
  notesLink: String,
  type: { type: String, enum: ["video", "tutorial", "notes"], required: true },
});

module.exports = mongoose.model("Topic", topicSchema);
