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

  get notes() {
    return this.notes;
  }
}
