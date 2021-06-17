import { getRepository, Repository } from "typeorm";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../IProjectsRepository";


class ProjectsRepository implements IProjectsRepository {
  private repository: Repository<Project>

  constructor() {
    this.repository = getRepository(Project);
  }

  async create({ id,name , description ,userId,ongProblemId, github }: ICreateProjectDTO): Promise<void> {
    const project = this.repository.create({
      description, github , id , name , ongProblemId , userId
    });

    await this.repository.save(project);
  }

  async findByName(name: string): Promise<Project[]> {
    const projects = await this.repository.find({ name });

    return projects;
  }

  async list(): Promise<Project[]>{
    const projects = await this.repository.find();

    return projects;
  }
}

export { ProjectsRepository }
