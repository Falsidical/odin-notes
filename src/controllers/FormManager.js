import { createElement } from './Utils';

export class FormManager {
  constructor(formElement) {
    this.form = formElement;
  }

  createNewProjectForm() {
    const h2 = createElement('h2', 'New Project');
    const titleLabel = createElement('label', 'Project Title');
    const titleInput = createElement('input');
    this.form.appendChild(h2);
    this.form.appendChild(titleLabel);
    this.form.appendChild(titleInput);
  }

  createNewNoteForm() {
    const h2 = createElement('h2', 'New Note');
    const titleLabel = createElement('label', 'Note Title');
    const titleInput = createElement('input');
    const contentLabel = createElement('label', 'Note Content');
    const contentInput = createElement('input');
    this.form.appendChild(h2);
    this.form.appendChild(titleLabel);
    this.form.appendChild(titleInput);
    this.form.appendChild(contentLabel);
    this.form.appendChild(contentInput);
  }
}
