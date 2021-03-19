import { CategoriesRepository } from '../../repositories/implementations/categories.repository';
import { ImportCategoryController } from './importCategory.controller';
import { ImportCategoryUseCase } from './importCategory.useCase';

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
