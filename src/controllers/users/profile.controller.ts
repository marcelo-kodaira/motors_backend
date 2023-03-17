import { Request, Response } from 'express';
import { profileService } from '../../services/users/profile.service';

export const profileController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const user = await profileService(id);

  return res.status(200).json(user);
};
