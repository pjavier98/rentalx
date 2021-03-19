import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';
import { CreateSpecificationController } from './createSpecification.controller';
import { CreateSpecificationUseCase } from './createSpecification.useCase';

const categoriesRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  categoriesRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
