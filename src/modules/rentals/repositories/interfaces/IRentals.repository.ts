import { CreateRentalDto } from 'modules/rentals/dtos/createRental.dto';
import { Rental } from 'modules/rentals/infra/typeorm/entities/rental.entity';

interface IRentalsRepository {
  create(data: CreateRentalDto): Promise<Rental>;
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
