import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateProjectController } from '../modules/project/useCases/createProjects/CreateProjectController';
import { ListProjectsController } from '../modules/project/useCases/listProjects/ListProjectsController';

const projectsRoutes = Router();
const createProjectController = new CreateProjectController();
const listProjectsController = new ListProjectsController();

projectsRoutes.use(ensureAuthenticated);
projectsRoutes.post('/', createProjectController.handle);
projectsRoutes.get('/', listProjectsController.handle);

export { projectsRoutes }
