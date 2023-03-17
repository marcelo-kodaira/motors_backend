import { Request, Response } from "express";
import { readAnnouncementService } from "../../services/announcements/readAnnouncement.service";

export const readAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcements = await readAnnouncementService();

  return res.json(announcements);
};
