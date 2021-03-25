import { ICreateUserDTO } from '../../dtos/ICreateUser.dto';
import { User } from '../../entities/user.entity';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
