import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";

@injectable()
class CreateProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private usersRepository: IProjectsRepository
  ) { }

  async execute({ name, userId ,ongProblemId ,description ,github}: ICreateProjectDTO): Promise<void> {
    const projectAlreadyExists = (await this.usersRepository.findByName(name))[0].ongProblemId === ongProblemId;

    if (projectAlreadyExists) {
      throw new AppError('Project already exists!');
    }

    await this.usersRepository.create({
      name,
      userId,
      ongProblemId,
      description,
      github
    });
  }
}

export { CreateProjectUseCase }
