import { container } from 'tsyringe';

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/categories.repository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/specifications.repository';
import { ICategoriesRepository } from '../../modules/cars/repositories/interfaces/ICategories.repository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/interfaces/ISpecifications.repository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
