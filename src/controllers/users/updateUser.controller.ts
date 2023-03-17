import { Request, Response } from "express";
import { updatedUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) =>{

    const data = req.body
    const {id} = req.params
    const updatedUser = await updatedUserService(data,id)
    return res.status(201).json(updatedUser)
}