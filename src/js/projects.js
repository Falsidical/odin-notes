class ProjectsModule {
  projectsList = [];

  createProject(title) {
    const newProject = new Project(title);
    this.projectsList.push(newProject);
  }

  deleteProject(index) {
    if (index === 0) return;
    this.projectsList.splice(index, 1);
  }

  get projectsList() {
    return this.projectsList;
  }
}

class Project {
  constructor(title) {
    this.title = title;
  }

  rename(newTitle) {
    this.title = newTitle;
  }
}

const projectsManager = new ProjectsModule();
projectsManager.createProject('Default');
projectsManager.createProject('My First Project');

export { projectsManager };
