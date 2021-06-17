import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ProjectsRepository } from '../../modules/project/repositories/implementations/ProjectsRepository';
import { IProjectsRepository } from '../../modules/project/repositories/IProjectsRepository';


container.registerSingleton<IUsersRepository>(
  'UsersRepository', UsersRepository
);


container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository', ProjectsRepository
);
