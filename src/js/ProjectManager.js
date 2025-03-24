import { Project } from '../models/Project.js';
import { SimpleNote } from '../models/SimpleNote.js';

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

const projectManager = new ProjectManager();
projectManager.createProject('Default');
const nota1 = new SimpleNote('Mi Nota', 'Hola soy una nota');
const nota2 = new SimpleNote('Mi Nota 2', 'Hola soy otra nota');
const nota3 = new SimpleNote('Mi Nota 3', 'Hola soy una nota bien larga. <h1>Tan larga</h1> que por ejemplo no se que mas poner aca. Ya es lo suficientemente larga? Lo veremos.');
projectManager.projects[0].addNote(nota1);
projectManager.projects[0].addNote(nota2);
projectManager.projects[0].addNote(nota3);
projectManager.createProject('Other Notes');
const nota4 = new SimpleNote('Mi Nota 4', 'Estoy en otro projecto');
projectManager.projects[1].addNote(nota4);

export { projectManager };
