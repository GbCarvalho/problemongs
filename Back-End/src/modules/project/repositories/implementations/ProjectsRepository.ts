import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppErrors";
import { User } from "../../../accounts/entities/User";
import { IAddColaboratorDTO } from "../../dtos/IAddColaboratorDTO";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../IProjectsRepository";

class ProjectsRepository implements IProjectsRepository {
  private repository: Repository<Project>;
  private userRepository: Repository<User>;

  constructor() {
    this.repository = getRepository(Project);
    this.userRepository = getRepository(User);
  }

  async create({
    name,
    description,
    usersId,
    ongProblemId,
    github,
  }: ICreateProjectDTO): Promise<void> {
    const get_users = await this.userRepository.findByIds(usersId);

    if (get_users.length !== usersId.length) {
      const invalidUsers = get_users.filter((user) => {
        return !usersId.includes(user.id);
      });
      throw new AppError(`Can't find users ${invalidUsers}!`);
    }

    const project = this.repository.create({
      name,
      description,
      github,
      ongProblemId,
      usersId: get_users,
    });

    await this.repository.save(project);
  }

  async addUser({ userId, projectId }: IAddColaboratorDTO) {
    const user = await this.userRepository.findOne({ id: userId });

    const project = await this.repository.findOne(
      { id: projectId },
      { relations: ["usersId"] }
    );

    project.usersId.push(user);

    await this.repository.save(project);
  }

  async findByName(name: string): Promise<Project[]> {
    const projects = await this.repository.find({
      relations: ["usersId"],
      where: {
        name,
      },
    });

    return projects;
  }

  async findById(id: string): Promise<Project> {
    const project = await this.repository.findOne(
      { id },
      { relations: ["usersId"] }
    );

    return project;
  }

  async list(userId?: string, ongProblemId?: string): Promise<Project[]> {
    var projects = await this.repository.find({
      relations: ["usersId"],
    });

    if (userId) {
      projects = projects.filter((proj) => {
        return proj.usersId
          .map((p) => {
            return p.id;
          })
          .includes(userId);
      });
    }

    if (ongProblemId) {
      projects = projects.filter((proj) => {
        return proj.ongProblemId === ongProblemId;
      });
    }

    return projects;
  }
}

export { ProjectsRepository };
