import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddColaboratorUseCase } from "./AddColaboratorUseCase";

class AddColaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, projectId} = request.body;

    const addColaboratorUsecase = container.resolve(AddColaboratorUseCase);


    await addColaboratorUsecase.execute({
      userId,
      projectId
    });

    return response.status(201).send();
  }
}

export { AddColaboratorController }
