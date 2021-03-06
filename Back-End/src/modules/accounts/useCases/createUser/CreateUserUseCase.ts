import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, username }: ICreateUserDTO): Promise<User> {
    const userAlreadyExistsEmail = await this.usersRepository.findByEmail(
      email
    );

    if (userAlreadyExistsEmail) {
      return userAlreadyExistsEmail;
    }

    const user = await this.usersRepository.create({
      name,
      email,
      username,
    });

    return user;
  }
}

export { CreateUserUseCase };
