const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  noteHeading: {
    type: String,
    require: true,
  },
  note: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
