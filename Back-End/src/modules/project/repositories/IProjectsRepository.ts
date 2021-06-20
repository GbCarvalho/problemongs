import { IAddColaboratorDTO } from "../dtos/IAddColaboratorDTO";
import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { Project } from "../entities/Project";

interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<void>;
  addUser(addUser: IAddColaboratorDTO): Promise<void>;
  list(userId?: string): Promise<Project[]>;
  findByName(name: string): Promise<Project[]>;
  findById(id: string): Promise<Project>;
}

export { IProjectsRepository };
