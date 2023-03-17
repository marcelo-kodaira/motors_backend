import { Router } from 'express';
import { profileController } from '../controllers/users/profile.controller';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';

const routes = Router();

export const profileRoutes = () => {
  routes.get('', verifyAuthTokenMiddleware, profileController);

  return routes;
};
