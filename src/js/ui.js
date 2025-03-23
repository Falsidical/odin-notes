export class UiModule {
  constructor(projectsList, notesContainer) {
    this.projectsList = projectsList;
    this.notesContainer = notesContainer;
  }

  createProjectListItem(project) {
    const listItem = document.createElement('li');
    listItem.textContent = project.title;
    return listItem;
  }

  renderProjectsList(projects) {
    projects.forEach(project => {
      const listItem = this.createProjectListItem(project);
      this.projectList.appendChild(listItem);
    });
  }
}

// const projectsList = document.querySelector('.projects-list');
// const notesContainer = document.querySelector('.notes-container');
// export const uiManager = new UiModule(projectsList, notesContainer);
