import { Router } from 'express';
import { deleteCommentController } from '../controllers/comments/deleteComment.controller';
import { updateCommentController } from '../controllers/comments/updateComment.controller';
import isOwnerResource from '../middlewares/isOwnerResource.middleware';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';
import { prisma } from '../prisma';

const route = Router();

export const commentRoutes = () => {
  route.patch(
    '/:id',
    verifyAuthTokenMiddleware,
    isOwnerResource(prisma.comment),
    updateCommentController
  );
  route.delete(
    '/:id',
    verifyAuthTokenMiddleware,
    isOwnerResource(prisma.comment),
    deleteCommentController
  );

  return route;
};
