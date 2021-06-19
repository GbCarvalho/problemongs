import { getRepository, Repository } from "typeorm";
import { User } from "../../../accounts/entities/User";
import { IAddColaboratorDTO } from "../../dtos/IAddColaboratorDTO";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../IProjectsRepository";


class ProjectsRepository implements IProjectsRepository {
  private repository: Repository<Project>
  private userRepository: Repository<User>

  constructor() {
    this.repository = getRepository(Project);
    this.userRepository = getRepository(User);
  }



  async create({name , description ,userId,ongProblemId, github }: ICreateProjectDTO): Promise<void> {

    const get_user = await this.userRepository.findOne({id: userId});

    const project = this.repository.create({
      name, description, github, ongProblemId,
    });

    project.users=[get_user];

    await this.repository.save(project);
  }

  async addUser({userId, projectId}:IAddColaboratorDTO){

    const user = await this.userRepository.findOne({id: userId});

    const project = await this.repository.findOne({id:projectId});

    project.users.push(user);

    this.repository.create(project)

  }

  async findByName(name: string): Promise<Project[]> {
    const projects = await this.repository.find({ name });

    return projects;
  }

  async findById(id: string): Promise<Project> {
    const project = await this.repository.findOne({ id });

    return project;
  }

  async list(): Promise<Project[]>{
    const projects = await this.repository.find();

    return projects;
  }
}

export { ProjectsRepository }
