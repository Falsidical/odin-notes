import { ProjectController } from './controllers/ProjectController.js';
import { UIController } from './controllers/UIController.js';
import './css/styles.css';

const projectController = new ProjectController();
const uiController = new UIController(projectController);

// projectController.createProject('Default');
// projectController.projects[0].createSimpleNote('Mi Nota', 'Hola soy una nota');
// projectController.projects[0].createSimpleNote('Mi Nota 2', 'Hola soy la segunda nota');

// projectController.createProject('Other Notes');
// projectController.projects[1].createSimpleNote('Mi Nota 3', 'Estoy en otro projecto');
// projectController.projects[1].createSimpleNote('Mi Nota 4', 'Estoy en otro projecto');
// projectController.projects[1].createSimpleNote('Mi Nota 5', 'Estoy en otro projecto');

uiController.createProjectList();
