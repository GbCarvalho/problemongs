import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";

@injectable()
class CreateProjectUseCase {
  constructor(
    @inject("ProjectsRepository")
    private projectsRepository: IProjectsRepository
  ) {}

  async execute({
    name,
    usersId,
    ongProblemId,
    description,
    github,
  }: ICreateProjectDTO): Promise<void> {
    const projects = await await this.projectsRepository.findByName(name);

    const filteredProjects = projects.filter((proj) => {
      return proj.ongProblemId === ongProblemId;
    });

    const projectAlreadyExists = filteredProjects.length !== 0;

    console.log(projects);

    if (projectAlreadyExists) {
      throw new AppError("Project name already exists for this Ong!");
    }

    if (!name) {
      throw new AppError("Project must have a name");
    }

    if (!usersId.length) {
      throw new AppError("No valid amount of users selected for this project");
    }

    await this.projectsRepository.create({
      name,
      usersId,
      ongProblemId,
      description,
      github,
    });
  }
}

export { CreateProjectUseCase };
