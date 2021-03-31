import { CarsRepositoryInMemory } from 'modules/cars/repositories/in-memory/cars.repository.inMemory';
import { FindAllAvailableCarsUseCase } from 'modules/cars/useCases/findAllAvailableCars/findAllAvailableCars.useCase';

let findAllAvailableCarsUseCase: FindAllAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Find All Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    findAllAvailableCarsUseCase = new FindAllAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to find all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car 1 Description',
      daily_rate: 140,
      license_plate: 'DEF-1234',
      fine_amount: 100,
      brand: 'Car 1 Brand',
      category_id: 'category_id',
    });

    const cars = await findAllAvailableCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });

  it('should be able to find all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car 1 Description',
      daily_rate: 140,
      license_plate: 'DEF-1234',
      fine_amount: 100,
      brand: 'Car 1 Brand',
      category_id: 'category_id',
    });

    await carsRepositoryInMemory.create({
      name: 'Car with different name',
      description: 'Car Description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 100,
      brand: 'Car Brand',
      category_id: 'category_id',
    });

    const cars = await findAllAvailableCarsUseCase.execute({
      name: 'Car 1',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to find all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car 1 Description',
      daily_rate: 140,
      license_plate: 'DEF-1234',
      fine_amount: 100,
      brand: 'Car 1 Brand',
      category_id: 'category_id',
    });

    await carsRepositoryInMemory.create({
      name: 'Car with different name',
      description: 'Car Description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 100,
      brand: 'Car with different Brand',
      category_id: 'category_id',
    });

    const cars = await findAllAvailableCarsUseCase.execute({
      brand: 'Car 1 Brand',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to find all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car 1 Description',
      daily_rate: 140,
      license_plate: 'DEF-1234',
      fine_amount: 100,
      brand: 'Car 1 Brand',
      category_id: 'car 1 category_id',
    });

    await carsRepositoryInMemory.create({
      name: 'Car with different name',
      description: 'Car Description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 100,
      brand: 'Car with different Brand',
      category_id: 'car with different category_id',
    });

    const cars = await findAllAvailableCarsUseCase.execute({
      category_id: 'car 1 category_id',
    });

    expect(cars).toEqual([car]);
  });
});
