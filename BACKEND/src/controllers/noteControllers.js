const addNote = (req, res) => {
  const noteData = req.body;

  if (!noteData.note || !noteData.noteHeading) {
    res.status(400).json("Missing mandatory informaitions to add note");
  }
};

module.exports = { addNote };
