import { IAnnouncementUpdate } from '../../interfaces/announcement';
import { prisma } from '../../prisma';

export const updateAnnouncementService = async (data: IAnnouncementUpdate, id: string) => {
  const { images, ...rest } = data;

  if (images) {
    const announcement = await prisma.announcement.update({
      data: {
        ...rest,
        images: {
          deleteMany: {},
          create: data.images,
        },
      },
      where: {
        id,
      },
      include: {
        images: true,
      },
    });

    return announcement;
  } else {
    const announcement = await prisma.announcement.update({
      data: {
        ...rest,
      },
      where: {
        id,
      },
      include: {
        images: true,
      },
    });

    return announcement;
  }
};
