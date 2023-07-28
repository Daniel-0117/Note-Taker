//Imports fs and util modules 
const fs = require('fs');
const util =require('util');
//this module is used to create unique ids for each note. 
const uuidv1 = require("uuid/v1");


const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

//This is the class that will be used to store and retrieve notes from the database
class Data {
    read() {
      return read('db/db.json', 'utf8');
    }
  
    write(note) {
      return write('db/db.json', JSON.stringify(note));
    }
    //Gets notes from database
    getNotes() {
      return this.read().then((notes) => {
        let parsedNotes;
  
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parsedNotes = [];
        }
  
        return parsedNotes;
      });
    }
    addNote(note) {
      const { title, text } = note;
      // Checks if title and text are blank
      if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
      }
      // Adds a unique id to each note
      const newNote = { title, text, id: uuidv1() };
      return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }
  //Deletes notes from database
    removeNote(id) {
      return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
    }
  }
  
  module.exports = new Data();
  