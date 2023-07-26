const data = require('../db/Data');
const api = require('express').Router();

//Get Route for retrieving notes from database
api.get('/notes', (req, res) => {
    store
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });

api.post('/', (req, res) => {
    store
    .addNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

api.delete('/notes/:id', (req, res) => {
    store
    .removeNotes()
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = api;
