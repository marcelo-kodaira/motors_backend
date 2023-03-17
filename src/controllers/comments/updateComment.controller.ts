import { Request, Response } from 'express';
import { updateCommentService } from '../../services/comments/updateComment.service';

export const updateCommentController = async (req: Request, res: Response) => {
  const { id: commentId } = req.params;
  const { comment } = req.body;

  const updatedComment = await updateCommentService({ comment, commentId });

  return res.status(200).json(updatedComment);
};
