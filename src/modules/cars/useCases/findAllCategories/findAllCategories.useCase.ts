import { inject, injectable } from 'tsyringe';

import { Category } from '../../infra/typeorm/entities/category.entity';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategories.repository';

@injectable()
class FindAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  execute(): Promise<Category[]> {
    return this.categoriesRepository.findAll();
  }
}

export { FindAllCategoriesUseCase };
