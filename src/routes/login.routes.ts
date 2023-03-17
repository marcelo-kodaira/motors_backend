import { Router } from 'express';
import { loginController } from '../controllers/login/login.controller';

const routes = Router();

export const loginRoutes = () => {
  routes.post('', loginController);

  return routes;
};
