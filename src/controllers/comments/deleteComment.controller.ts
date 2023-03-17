import { Request, Response } from 'express';
import { deleteCommentService } from '../../services/comments/deleteComment.service';

export const deleteCommentController = async (req: Request, res: Response) => {
  const { id: commentId } = req.params;

  await deleteCommentService(commentId);

  return res.status(204).json();
};
