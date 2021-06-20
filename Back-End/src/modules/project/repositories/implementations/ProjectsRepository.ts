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
    userId,
    ongProblemId,
    github,
  }: ICreateProjectDTO): Promise<void> {
    const get_user = await this.userRepository.findOne({ id: userId });

    if (!get_user.id) {
      throw new AppError("UserId does not exists!");
    }

    const project = this.repository.create({
      name,
      description,
      github,
      ongProblemId,
      usersId: [get_user],
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

  async list(userId?: string): Promise<Project[]> {
    const projects = (
      await this.repository.find({
        relations: ["usersId"],
      })
    ).filter((project) => {
      return project.usersId.map((user) => {
        return user.id === userId;
      });
    });

    return projects;
  }
}

export { ProjectsRepository };
