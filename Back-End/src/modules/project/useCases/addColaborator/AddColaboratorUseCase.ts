import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { IAddColaboratorDTO } from "../../dtos/IAddColaboratorDTO";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";

@injectable()
class AddColaboratorUseCase {
  constructor(
    @inject("ProjectsRepository")
    private projectsRepository: IProjectsRepository
  ) {}

  async execute({ userId, projectId }: IAddColaboratorDTO): Promise<void> {
    const project = await this.projectsRepository.findById(projectId);

    const userAlreadyInProject = project.usersId.find((fuser) => {
      return fuser.id === userId;
    });

    if (userAlreadyInProject) {
      throw new AppError("User already in this project!");
    }
    await this.projectsRepository.addUser({ userId, projectId });
  }
}

export { AddColaboratorUseCase };
