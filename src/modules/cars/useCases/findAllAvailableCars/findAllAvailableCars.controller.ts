import { Request, Response } from 'express';
import { FindAllAvailableCarsUseCase } from 'modules/cars/useCases/findAllAvailableCars/findAllAvailableCars.useCase';
import { container } from 'tsyringe';

class FindAllAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, category_id } = request.query;

    const findAllAvailableCars = container.resolve(FindAllAvailableCarsUseCase);

    const cars = await findAllAvailableCars.execute({
      name: name as string,
      brand: brand as string,
      category_id: category_id as string,
    });

    return response.json(cars);
  }
}

export { FindAllAvailableCarsController };
