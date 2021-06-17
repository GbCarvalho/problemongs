import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

class ListProjectsController {
  async handle(request: Request, response: Response): Promise<Response> {

    const listProjectsUseCase = container.resolve(ListProjectsUseCase);

    const projectsList = await listProjectsUseCase.execute();

    return response.status(201).json(projectsList);
  }
}

export { ListProjectsController }
