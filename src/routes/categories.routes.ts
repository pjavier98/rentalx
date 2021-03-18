import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  categories.push({
    id: uuidv4(),
    name,
    description,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
