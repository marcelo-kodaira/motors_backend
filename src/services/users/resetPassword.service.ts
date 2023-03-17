import { prisma } from "../../prisma";
import bcrypt from "bcrypt";

export const resetPasswordService = async (data: any, id: string) => {
  const passwordHash = bcrypt.hashSync(data.password, 10);

  const user = await prisma.user.update({
    data: {
      password: passwordHash,
    },
    where: {
      id,
    },
  });

  return user;
};
