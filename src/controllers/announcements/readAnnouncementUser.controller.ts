import { Request, Response } from "express";
import { readAnnouncementUserService } from "../../services/announcements/readAnnouncementUser.service";

export const readAnnouncementUserController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const announcement = await readAnnouncementUserService(id);

  return res.json(announcement);
};
