import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProjectUseCase } from "./CreatProjectUseCase";

class CreateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, usersId, ongProblemId, description, github } = request.body;

    const createProjectUseCase = container.resolve(CreateProjectUseCase);

    await createProjectUseCase.execute({
      name,
      usersId,
      ongProblemId,
      description,
      github,
    });

    return response.status(201).send();
  }
}

export { CreateProjectController };
