import { Request, Response } from 'express';
import { createCommentService } from '../../services/comments/createComment.service';

export const createCommentController = async (req: Request, res: Response) => {
  const { id: userId } = req.user;
  const { id: announcementId } = req.params;
  const { comment } = req.body;

  const newComment = await createCommentService({ comment, userId, announcementId });

  return res.status(201).json(newComment);
};
