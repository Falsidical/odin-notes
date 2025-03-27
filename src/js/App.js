import { ProjectManager } from './ProjectManager';
import { UIManager } from './UIManager';

const projectManager = new ProjectManager();
const uiManager = new UIManager(projectManager);

projectManager.createProject('Default');
projectManager.projects[0].createSimpleNote('Mi Nota', 'Hola soy una nota');

projectManager.createProject('Other Notes');
projectManager.projects[1].createSimpleNote('Mi Nota 4', 'Estoy en otro projecto');

uiManager.createProjectList();
