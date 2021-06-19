import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateProjectController } from '../modules/project/useCases/createProjects/CreateProjectController';
import { ListProjectsController } from '../modules/project/useCases/listProjects/ListProjectsController';
import { AddColaboratorController } from '../modules/project/useCases/addColaborator/AddColaboratorController';

const projectsRoutes = Router();
const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();
const addNewColaborator = new AddColaboratorController();

projectsRoutes.use(ensureAuthenticated);
projectsRoutes.post('/', createProjectController.handle);
projectsRoutes.get('/', listProjectsController.handle);
projectsRoutes.patch('/', addNewColaborator.handle);

export { projectsRoutes }
