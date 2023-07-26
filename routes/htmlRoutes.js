// import express and path modules
const html = require("express").Router();
const path = require("path");

// Grabs the notes from the notes.html file
html.get("/notes", (req, res) => {
    //Sends to client
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Grabs the index.html file
html.get("*", (req, res) => {
    //sends to client
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = html;