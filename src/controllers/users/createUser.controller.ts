import { Request, Response } from 'express';
import { createUserService } from '../../services/users/createUser.service';

export const createUserController = async (req: Request, res: Response) => {
  const data = req.body;

  const user = await createUserService(data);

  return res.status(201).json(user);
};
