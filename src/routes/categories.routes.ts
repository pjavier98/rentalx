import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/createCategory.controller';
import { FindAllCategoriesController } from '../modules/cars/useCases/findAllCategories/findAllCategories.controller';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/importCategory.controller';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', findAllCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
