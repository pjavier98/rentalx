import { Router } from 'express';
import { CreateCategoryController } from 'modules/cars/useCases/createCategory/createCategory.controller';
import { FindAllCategoriesController } from 'modules/cars/useCases/findAllCategories/findAllCategories.controller';
import { ImportCategoryController } from 'modules/cars/useCases/importCategory/importCategory.controller';
import multer from 'multer';
import { ensureAdmin } from 'shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticatedMiddleware } from 'shared/infra/http/middlewares/ensureAuthenticated.middleware';
import { carsRoutes } from 'shared/infra/http/routes/cars.routes';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post(
  '/',
  ensureAuthenticatedMiddleware,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoutes.get('/', findAllCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  ensureAuthenticatedMiddleware,
  ensureAdmin,
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
