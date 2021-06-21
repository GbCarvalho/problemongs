import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class GetUserByEmailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(email: string): Promise<User> {
    const userNotExists = !(await this.usersRepository.findByEmail(email));

    if (userNotExists) {
      throw new AppError("User does not exists");
    }

    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}

export { GetUserByEmailUseCase };
