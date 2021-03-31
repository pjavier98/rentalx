import { Router } from 'express';
import { CreateCarController } from 'modules/cars/useCases/createCar/createCar.controller';
import { ensureAdmin } from 'shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticatedMiddleware } from 'shared/infra/http/middlewares/ensureAuthenticated.middleware';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  '/',
  ensureAuthenticatedMiddleware,
  ensureAdmin,
  createCarController.handle,
);

export { carsRoutes };
