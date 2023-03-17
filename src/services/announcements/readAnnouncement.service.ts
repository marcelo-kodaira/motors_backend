import { prisma } from '../../prisma';

export const readAnnouncementService = async () => {
  const announcements = await prisma.announcement.findMany({
    include: {
      images: true,
      user: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });

  return announcements;
};
