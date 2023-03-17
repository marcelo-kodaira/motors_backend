import { Request, Response } from "express";
import { readAnnouncementIdService } from "../../services/announcements/readAnnouncementId.service";

export const readAnnouncementIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const announcements = await readAnnouncementIdService(id);

  return res.json(announcements);
};
