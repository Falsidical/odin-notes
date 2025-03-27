import { icons } from '../icons';

export class UIManager {
  constructor(projectManager) {
    this.projectsList = document.querySelector('.projects-list');
    this.notesContainer = document.querySelector('.notes-container');
    this.projectManager = projectManager;
    this.newNoteBtn = document.querySelector('#new-note');
    document.querySelector('#new-project').addEventListener('click', () => {
      this.createNewProject();
    });
  }

  createNewProject() {
    let title = prompt('Project Name?');
    this.projectManager.createProject(title);
    this.createProjectListItem(this.projectManager.projects[this.projectManager.projects.length - 1]);
  }

  createProjectList() {
    this.projectsList.replaceChildren();
    this.projectManager.projects.forEach((project, index) => {
      this.createProjectListItem(project, index);
    });
  }

  createProjectListItem(project, index) {
    const listItem = document.createElement('li');
    listItem.textContent = project.title;
    listItem.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      listItem.classList.add('active');
      this.displayNotes(project.notes);
      this.newNoteBtn.onclick = this.createNoteDialog.bind(this, project);
    });

    const deleteIcon = document.createElement('img');
    deleteIcon.src = icons.minusCircle;
    deleteIcon.addEventListener('click', () => {
      const result = confirm('Seguro que desea eleminar este projecto?');
      if (result) {
        this.projectManager.deleteProject(index);
        this.createProjectList();
      }
    });
    listItem.appendChild(deleteIcon);

    this.projectsList.appendChild(listItem);
  }

  displayNotes(notes) {
    this.notesContainer.replaceChildren();
    notes.forEach((note) => {
      const noteContainer = document.createElement('div');
      noteContainer.classList.add('note');
      const title = document.createElement('h2');
      title.textContent = note.title;
      noteContainer.appendChild(title);
      const content = document.createElement('p');
      content.textContent = note.content;
      noteContainer.appendChild(content);
      this.notesContainer.appendChild(noteContainer);
    });
  }

  createNoteDialog(project) {
    console.log(project);
    const title = prompt('Note title');
    const content = prompt('Note content');
    project.createSimpleNote(title, content);
    this.displayNotes(project.notes);
  }
}
