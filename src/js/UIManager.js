class UIManager {
  constructor(projectsList, notesContainer) {
    this.projectsList = projectsList;
    this.notesContainer = notesContainer;
  }

  createProjectList(projects) {
    projects.forEach((project) => {
      const listItem = document.createElement('li');
      listItem.textContent = project.title;
      listItem.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        listItem.classList.add('active');
        this.displayNotes(project.notes);
      });
      projectsList.appendChild(listItem);
    });
  }

  displayNotes(notes) {
    notesContainer.replaceChildren();
    notes.forEach((note) => {
      const noteContainer = document.createElement('div');
      noteContainer.classList.add('note');
      const title = document.createElement('h2');
      title.textContent = note.title;
      noteContainer.appendChild(title);
      const content = document.createElement('p');
      content.textContent = note.content;
      noteContainer.appendChild(content);
      notesContainer.appendChild(noteContainer);
    });
  }
}

const projectsList = document.querySelector('.projects-list');
const notesContainer = document.querySelector('.notes-container');
export const uiManager = new UIManager(projectsList, notesContainer);
