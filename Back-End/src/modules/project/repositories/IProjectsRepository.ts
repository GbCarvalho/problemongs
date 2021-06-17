import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { Project } from "../entities/Project";

interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<void>;
  list(): Promise<Project[]>;
  findByName(name: string): Promise<Project[]>;
}

export { IProjectsRepository }
