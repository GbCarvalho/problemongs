import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { projectsRoutes } from './projects.routes';
import { userRoutes } from './users.routes';

const routes = Router();

routes.use('/project', projectsRoutes);
routes.use('/users', userRoutes);
routes.use(authenticateRoutes);

export { routes }
