import { NextFunction, Request, Response } from "express";

export const isOwnUserMiddleware = (req: Request, res: Response, next: NextFunction) =>{

    const {id} = req.params
    const userId = req.user.id

    if(id === userId){
       return next()
    }

    return res.status(403).json({ message: "You cannot change this user!" })
}