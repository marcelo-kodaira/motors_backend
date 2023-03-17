import { prisma } from '../../prisma';

export const profileService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      announcements: {
        orderBy: { created_at: 'asc' },
        include: {
          user: true,
          images: true,
          comments: {
            include: {
              user: true,
            },
          },
        },
      },
      address: true,
    },
  });

  const { password, ...rest } = user!;

  return rest;
};
