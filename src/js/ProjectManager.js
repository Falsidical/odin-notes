import { Project } from '../models/Project.js';

export class ProjectManager {
  projects = [];

  createProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
  }

  get projects() {
    return this.projects;
  }
}
