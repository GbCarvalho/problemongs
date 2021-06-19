import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";

@injectable()
class CreateProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository
  ) { }

  async execute({ name, userId ,ongProblemId ,description ,github}: ICreateProjectDTO): Promise<void> {
    const projectAlreadyExists = (await this.projectsRepository.findByName(name))[0].ongProblemId === ongProblemId;

    if (projectAlreadyExists) {
      throw new AppError('Project already exists!');
    }

    await this.projectsRepository.create({
      name,
      userId,
      ongProblemId,
      description,
      github
    });
  }
}

export { CreateProjectUseCase }
