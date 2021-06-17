import { inject, injectable } from "tsyringe";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";

@injectable()
class ListProjectsUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository
  ) { }

  async execute(): Promise<Project[]> {

    const projectsList = await this.projectsRepository.list();

    return projectsList;
  }
}

export { ListProjectsUseCase }
