import { Request, Response } from "express";
import { updateAddressService } from "../../services/address/updateAddress.service";

export const updateAddressController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;

  const result = await updateAddressService(data, id);

  return res.json(result);
};
