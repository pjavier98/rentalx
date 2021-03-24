import { ICreateUserDTO } from '../../dtos/ICreateUser.dto';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
