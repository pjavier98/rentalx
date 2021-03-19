import { Request, Response } from 'express';

import { FindAllCategoriesUseCase } from './findAllCategories.useCase';

class FindAllCategoriesController {
  constructor(private findAllCategoriesUseCase: FindAllCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.findAllCategoriesUseCase.execute();

    return response.json(categories);
  }
}

export { FindAllCategoriesController };
