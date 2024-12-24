const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  topics: [
    {
      title: String,
      description: String,
      videoURL: String,
      notesLink: String,
      type: { type: String, enum: ["video", "tutorial", "notes"] },
    },
  ],
});

module.exports = mongoose.model("Subject", subjectSchema);
