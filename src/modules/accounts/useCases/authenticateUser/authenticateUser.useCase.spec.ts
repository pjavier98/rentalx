import { AppError } from '../../../../errors/app.error';
import { ICreateUserDTO } from '../../dtos/ICreateUser.dto';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/users.repository.inMemory';
import { CreateUserUseCase } from '../createUser/createUser.useCase';
import { AuthenticateUserUseCase } from './authenticateUser.useCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();

    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@test.com',
      password: '1234',
      name: 'User test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an non-existent user', async () => {
    await expect(async () => {
      const result = await authenticateUserUseCase.execute({
        email: 'non-existent-user@email.com',
        password: 'non-existent-password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', async () => {
    await expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '000123',
        email: 'user@test.com',
        password: '1234',
        name: 'User test',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'invalid-password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
