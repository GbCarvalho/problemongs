import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase";

class GetUserByEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const getUserByEmailUseCase = container.resolve(GetUserByEmailUseCase);

    const user = await getUserByEmailUseCase.execute(email);

    return response.status(200).json(user);
  }
}

export { GetUserByEmailController };
