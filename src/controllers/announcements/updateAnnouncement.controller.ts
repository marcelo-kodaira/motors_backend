import { Request, Response } from "express";
import { updateAnnouncementService } from "../../services/announcements/updateAnnouncement.service";

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  const { id } = req.params;

  const announcement = await updateAnnouncementService(data, id);

  return res.json(announcement);
};
