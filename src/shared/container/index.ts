import { container } from 'tsyringe';

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/categories.repository';
import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/ICategories.repository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
