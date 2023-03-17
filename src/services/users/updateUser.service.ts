import { IUpdateUserRequest } from "../../interfaces/user";
import { prisma } from "../../prisma";

export const updatedUserService = async (data:IUpdateUserRequest, id: string) =>{

    const user = await prisma.user.update({
        data:{
            ...data
        },
        where: {
            id
          }
    })

    return user
};