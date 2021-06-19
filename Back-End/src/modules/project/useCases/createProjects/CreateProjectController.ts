import { Request, Response } from "express";
import { container } from "tsyringe";
import { User } from "../../../accounts/entities/User";
import { CreateProjectUseCase } from "./CreatProjectUseCase";

class CreateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, userId, ongProblemId, description, github } = request.body;

    const createProjectUseCase = container.resolve(CreateProjectUseCase);



    await createProjectUseCase.execute({
      name,
      userId,
      ongProblemId,
      description,
      github
    });

    return response.status(201).send();
  }
}

export { CreateProjectController }
