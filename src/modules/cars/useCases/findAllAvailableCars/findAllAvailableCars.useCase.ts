import { IFindAllCarsDto } from 'modules/cars/dtos/IFindAllCars.dto';
import { Car } from 'modules/cars/infra/typeorm/entities/car.entity';
import { ICarsRepository } from 'modules/cars/repositories/interfaces/ICars.repository';
import { injectable, inject } from 'tsyringe';

@injectable()
class FindAllAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute(filters?: IFindAllCarsDto): Promise<Car[]> {
    return this.carsRepository.findAvailable(filters);
  }
}

export { FindAllAvailableCarsUseCase };
