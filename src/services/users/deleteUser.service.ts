import { prisma } from "../../prisma"

export const deleteuserService = async (id: string):Promise<void> =>{

    await prisma.user.delete({
        where: {
            id
        }})
}