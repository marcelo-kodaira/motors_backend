import ErrorHttp from '../../errors/errorHttp';
import { ICommentRequest } from '../../interfaces/comment';
import { prisma } from '../../prisma';

export const createCommentService = async ({
  comment,
  userId,
  announcementId,
}: ICommentRequest) => {
  const announcement = await prisma.announcement.findUnique({
    where: {
      id: announcementId,
    },
  });

  if (!announcement) {
    throw new ErrorHttp('Announcement not found!', 404);
  }

  const newComment = await prisma.comment.create({
    data: {
      comment,
      user: {
        connect: {
          id: userId,
        },
      },
      announcement: {
        connect: {
          id: announcementId,
        },
      },
    },
  });

  return newComment;
};
