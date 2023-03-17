import { Request, Response } from "express";
import { deleteuserService } from "../../services/users/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) =>{

    const {id} = req.params
    await deleteuserService(id)
    return res.status(204).json("Deleted")
}