const Note = require("../models/Note.models");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({
    user: req.user._id,
  });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please enter all fields");
  } else {
    try {
      const note = new Note({ user: req.user._id, title, content, category });
      const createNote = await note.save();
      res.status(201).json(createNote);
    } catch (error) {
      console.log("CreateNote error: (Note Controller) " + error);
    }
  }
});

const getnoteById = asyncHandler(async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "No notes found" });
    }
  } catch (error) {
    console.log("GetNote By ID error: (Note Controller) " + error);
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Fields Error");
  }
  try {
    const note = await Note.findById(req.params.id);
    // console.log("Note: " + note);
    //   If the login user is not owner of this note
    if (note.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You cannot perform this action");
    }

    //   if user is owner of this note
    if (note) {
      note.title = title;
      note.content = content;
      note.category = category;

      const updatedNote = await note.save();

      res.status(201).json(updatedNote);
    } else {
      throw new Error("Note not found");
    }
  } catch (error) {
    console.log("Update error: (Note Controller) " + error);
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  try {
    const deleteId = req.params.id;
    // Find the note first
    const note = await Note.findById(deleteId);

    //   If the login user is not owner of this note
    if (note.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You cannot perform this action");
    }

    //   if user is owner of this note
    if (note) {
      const result = await Note.deleteOne({
        _id: deleteId,
        user: req.user._id,
      });

      if (result.deletedCount > 0) {
        res.status(201).json({ message: "Note removed successfully" });
      } else {
        res.status(404).json({ message: "Note not found" });
      }
    } else {
      throw new Error("Note not found");
    }
  } catch (error) {
    console.log("Delete error: (Note Controller) " + error);
  }
});

module.exports = { getNotes, createNote, getnoteById, updateNote, deleteNote };
