import { Request, Response } from 'express';
import { loginService } from '../../services/login/login.service';

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { token, rest: user } = await loginService({ email, password });

  return res.status(200).json({ token, user });
};
