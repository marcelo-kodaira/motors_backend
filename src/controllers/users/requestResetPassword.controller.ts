import { Request, Response } from "express";
import { requestResetPasswordService } from "../../services/users/requestResetPassword.service";

export const requestResetPasswordController = async (
  req: Request,
  res: Response
) => {
  const email = req.body.email;

  const result = await requestResetPasswordService(email);

  return res.json({ token: result, message: "email enviado" });
};
