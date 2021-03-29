import { ICreateUserDTO } from '../../dtos/ICreateUser.dto';
import { User } from '../../entities/user.entity';
import { IUsersRepository } from '../interfaces/IUsers.repository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, data);

    this.users.push(user);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }
}

export { UsersRepositoryInMemory };
