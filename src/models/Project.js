import { SimpleNote } from '../models/SimpleNote.js';

export class Project {
  notes = [];

  constructor(title) {
    this.title = title;
  }

  rename(newTitle) {
    this.title = newTitle;
  }

  addNote(note) {
    this.notes.push(note);
  }

  createSimpleNote(title, content) {
    const newNote = new SimpleNote(title, content);
    this.addNote(newNote);
  }

  get notes() {
    return this.notes;
  }
}
