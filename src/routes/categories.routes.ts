import { Request, Response, Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { findAllCategoriesController } from '../modules/cars/useCases/findAllCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return findAllCategoriesController.handle(request, response);
});

export { categoriesRoutes };
