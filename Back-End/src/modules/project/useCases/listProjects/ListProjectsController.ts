import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

class ListProjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;

    const listProjectsUseCase = container.resolve(ListProjectsUseCase);

    const projectsList = await listProjectsUseCase.execute(userId);

    return response.status(201).json(projectsList);
  }
}

export { ListProjectsController };
