import { Request, Response } from "express";
import { resetPasswordService } from "../../services/users/resetPassword.service";

export const resetPasswordController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.user;

  const updated = await resetPasswordService(data, id);

  return res.json(updated);
};
