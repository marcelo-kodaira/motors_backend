import { IAnnouncementRequest } from '../../interfaces/announcement';
import { prisma } from '../../prisma';

export const createAnnouncementService = async (data: IAnnouncementRequest, id: string) => {
  const { images, ...announcementInfo } = data;

  const announcement = await prisma.announcement.create({
    data: {
      ...announcementInfo,
      images: {
        create: images,
      },
      user: {
        connect: { id },
      },
    },
    include: {
      images: true,
      user: true,
    },
  });

  return announcement;
};
