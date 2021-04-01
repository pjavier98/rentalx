import { ICreateCarSpecificationDto } from 'modules/cars/dtos/ICreateCarSpecification.dto';
import { ICarsRepository } from 'modules/cars/repositories/interfaces/ICars.repository';
import { AppError } from 'shared/errors/app.error';

class CreateCarSpecificationUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({
    car_id,
    specifications_id,
  }: ICreateCarSpecificationDto): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError('Car does not exists');
    }
  }
}

export { CreateCarSpecificationUseCase };
