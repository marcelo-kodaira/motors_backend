import bcrypt from "bcrypt";
import { ICreateUserRequest } from "../../interfaces/user";
import { prisma } from "../../prisma";

export const createUserService = async (data: ICreateUserRequest) => {
  const passwordHash = bcrypt.hashSync(data.password, 10);

  const { password, address, ...userInfo } = data;
  const user = await prisma.user.create({
    data: {
      ...userInfo,
      password: passwordHash,
      address: {
        create: address,
      },
    },
    include: {
      address: true,
    },
  });

  const { password: pwd, ...rest } = user;

  return rest;
};
