import { IAddressRequest } from "../../interfaces/address";
import { prisma } from "../../prisma";

export const updateAddressService = async (
  data: IAddressRequest,
  id: string
) => {
  const { ...rest } = data;

  const announcement = await prisma.address.update({
    data: {
      ...rest,
    },
    where: {
      id,
    },
  });

  return announcement;
};
