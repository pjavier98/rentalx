import { Request, Response, Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/createCategory.controller';
import findAllCategoriesController from '../modules/cars/useCases/findAllCategories';
import importCategoryController from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return findAllCategoriesController().handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCategoryController().handle(request, response);
  },
);

export { categoriesRoutes };
