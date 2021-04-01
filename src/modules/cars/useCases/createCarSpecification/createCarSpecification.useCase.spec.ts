import { CarsRepositoryInMemory } from 'modules/cars/repositories/in-memory/cars.repository.inMemory';
import { CreateCarSpecificationUseCase } from 'modules/cars/useCases/createCarSpecification/createCarSpecification.useCase';
import { AppError } from 'shared/errors/app.error';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const specifications_id = ['123', '456'];

    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });
  });

  it('should not be able to add a new specification to a non-existent car', async () => {
    await expect(async () => {
      const request = {
        car_id: 'non-existent-car-id',
        specifications_id: ['456'],
      };

      await createCarSpecificationUseCase.execute(request);
    }).rejects.toBeInstanceOf(AppError);
  });
});
