import { IUpdateAddress } from '../../interfaces/user';
import { prisma } from '../../prisma';

export const updateUserAddressService = async (data: IUpdateAddress, id: string) => {
  const user = await prisma.user.update({
    data: {
      address: {
        update: {
          ...data,
        },
      },
    },
    where: {
      id,
    },
    include: {
      address: true,
    },
  });

  return user;
};
