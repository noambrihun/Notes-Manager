const express = require('express');
const router = express.Router();
const NoteModel = require('../models/Note');


router.get("/", async (req, res) => {
    try {
      const notes = await NoteModel.find();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const newNote = await NoteModel.create(req.body);
      res.status(201).json(newNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      await NoteModel.findByIdAndDelete(req.params.id);
      res.json({ message: "Note deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const updatedNote = await NoteModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
