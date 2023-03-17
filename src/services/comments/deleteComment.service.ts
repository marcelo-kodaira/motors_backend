import { prisma } from '../../prisma';

export const deleteCommentService = async (commentId: string) => {
  await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });

  return;
};
