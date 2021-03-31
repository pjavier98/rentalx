import { Router } from 'express';
import { CreateCarController } from 'modules/cars/useCases/createCar/createCar.controller';
import { FindAllAvailableCarsController } from 'modules/cars/useCases/findAllAvailableCars/findAllAvailableCars.controller';
import { ensureAdmin } from 'shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticatedMiddleware } from 'shared/infra/http/middlewares/ensureAuthenticated.middleware';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const findAllAvailableCarsController = new FindAllAvailableCarsController();

carsRoutes.post(
  '/',
  ensureAuthenticatedMiddleware,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', findAllAvailableCarsController.handle);

export { carsRoutes };
