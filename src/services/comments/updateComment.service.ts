import { IUpdateCommentRequest } from '../../interfaces/comment';
import { prisma } from '../../prisma';

export const updateCommentService = async ({ comment, commentId }: IUpdateCommentRequest) => {
  const updatedComment = await prisma.comment.update({
    data: {
      comment,
    },
    where: {
      id: commentId,
    },
  });

  return updatedComment;
};
