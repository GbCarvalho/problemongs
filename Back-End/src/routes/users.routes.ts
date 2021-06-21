import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { GetUserByEmailController } from "../modules/accounts/useCases/getUserByUsername/GetUserByEmailController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const getUSerByEmailController = new GetUserByEmailController();

//userRoutes.use(ensureAuthenticated);
userRoutes.post("/", createUserController.handle);
userRoutes.get("/email/:email", getUSerByEmailController.handle);

export { userRoutes };
