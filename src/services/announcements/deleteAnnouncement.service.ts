import { prisma } from "../../prisma";

export const deleteAnnouncementService = async (id: string) => {
  const announcement = await prisma.announcement.delete({
    where: { id },
  });
};
