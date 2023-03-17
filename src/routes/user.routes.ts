import { Router } from 'express';
import { createUserController } from '../controllers/users/createUser.controller';
import { deleteUserController } from '../controllers/users/deleteUser.controller';
import { requestResetPasswordController } from '../controllers/users/requestResetPassword.controller';
import { resetPasswordController } from '../controllers/users/resetPassword.controller';
import { updateUserController } from '../controllers/users/updateUser.controller';
import { updateUserAddressController } from '../controllers/users/updateUserAddress.controller';
import { isOwnUserMiddleware } from '../middlewares/isOwnUser.middleware';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';
import verifyAuthTokenPasswordMiddleware from '../middlewares/verifyAuthTokenPassword.middlewere';

const routes = Router();

export const userRoutes = () => {
  routes.post('', createUserController);
  routes.patch(
    '/:id/address',
    verifyAuthTokenMiddleware,
    isOwnUserMiddleware,
    updateUserAddressController
  );
  routes.patch('/:id', verifyAuthTokenMiddleware, isOwnUserMiddleware, updateUserController);

  routes.delete('/:id', verifyAuthTokenMiddleware, isOwnUserMiddleware, deleteUserController);
  routes.post('/request-password', requestResetPasswordController);
  routes.post('/reset-password', verifyAuthTokenPasswordMiddleware, resetPasswordController);

  return routes;
};
