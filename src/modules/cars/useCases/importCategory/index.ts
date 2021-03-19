import { ImportCategoryController } from './importCategory.controller';
import { ImportCategoryUseCase } from './importCategory.useCase';

const importCategoryUseCase = new ImportCategoryUseCase();

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
