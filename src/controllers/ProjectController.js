import { Project } from '../models/Project.js';
import { saveProjects, restoreProjects } from './dataController.js';

export class ProjectController {
  projects = [];
  constructor() {
    this.projects = restoreProjects();
  }

  createProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
    this.saveProjects();
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
    this.saveProjects();
  }

  get projects() {
    return this.projects;
  }

  saveProjects() {
    saveProjects(this.projects);
  }
}
