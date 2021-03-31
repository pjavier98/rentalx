import { Router } from 'express';
import { CreateSpecificationController } from 'modules/cars/useCases/createSpecification/createSpecification.controller';
import { ensureAdmin } from 'shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticatedMiddleware } from 'shared/infra/http/middlewares/ensureAuthenticated.middleware';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post(
  '/',
  ensureAuthenticatedMiddleware,
  ensureAdmin,
  createSpecificationController.handle,
);

export { specificationsRoutes };
