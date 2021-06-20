import { inject, injectable } from "tsyringe";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";

@injectable()
class ListProjectsUseCase {
  constructor(
    @inject("ProjectsRepository")
    private projectsRepository: IProjectsRepository
  ) {}

  async execute(userId?: string): Promise<Project[]> {
    const projectsList = await this.projectsRepository.list(userId);

    return projectsList;
  }
}

export { ListProjectsUseCase };
