import { projectsManager } from './js/projects';
import { UiModule } from './js/ui';
import './css/styles.css';

const projectsList = document.querySelector('.projects-list');
const notesContainer = document.querySelector('.notes-container');
const ui = new UiModule(projectsList, notesContainer);

ui.renderProjectsList(projectsManager.projectsList);
