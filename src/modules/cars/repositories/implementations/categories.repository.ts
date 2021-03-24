import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/category.model';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../interfaces/ICategories.repository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findByName(name: string): Promise<Category> {
    return this.repository.findOne({ name });
  }
}

export { CategoriesRepository };
