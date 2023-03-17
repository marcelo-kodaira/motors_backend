import { Request, Response } from 'express';
import { updateUserAddressService } from '../../services/users/updateUserAddress.service';

export const updateUserAddressController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const user = await updateUserAddressService(data, id);

  return res.status(200).json(user);
};
