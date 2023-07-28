//Imports data file and express router
const Data = require('../db/Data');
const api = require('express').Router();

//Get Route for retrieving notes from database
api.get('/notes', (req, res) => {
    //Calls getNotes function from Data.js
    Data
    //Returns notes as a json object
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });

//Post Route for adding notes to database
api.post("/notes", (req, res) => {
  // this is the addNote function from store.js
  Data
    // req.body is the new note that is being added -- Make sure to Have!! 
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
//Delete Route for deleting notes from database
api.delete('/notes/:id', (req, res) => {
    //Calls removeNotes function from Data.js
    Data
    // req.params.id is the id of the note that is being deleted
    .removeNotes(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = api;
