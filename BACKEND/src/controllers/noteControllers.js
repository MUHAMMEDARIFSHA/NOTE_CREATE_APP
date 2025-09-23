const Note = require("../models/noteSchema");
const addNote = (req, res) => {
  const noteData = req.body;

  if (!noteData.note || !noteData.noteHeading) {
    return res.status(400).json("Missing mandatory informaitions to add note");
  }

  const note = new Note({
    noteHeading: noteData.noteHeading,
    note: noteData.note,
    updatedAt: Date.now()
  });
  note.save()
  return res.status(201).json({message : "Note added successfully"})
};

module.exports = { addNote };
