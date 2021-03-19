import { Request, Response, Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/specifications.repository';
import { CreateSpecificationService } from '../modules/cars/services/createSpecification.service';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateSpecificationService(
    specificationRepository,
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
