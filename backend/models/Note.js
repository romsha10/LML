const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  googleDriveLink: String,
  type: { type: String, enum: ["notes", "numerical"] },
});

module.exports = mongoose.model("Note", noteSchema);
