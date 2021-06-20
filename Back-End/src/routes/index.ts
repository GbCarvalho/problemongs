import { Router } from "express";
import { projectsRoutes } from "./projects.routes";
import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/projects", projectsRoutes);
routes.use("/users", userRoutes);

export { routes };
