import { Request, Response } from "express";
import { deleteAnnouncementService } from "../../services/announcements/deleteAnnouncement.service";

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await deleteAnnouncementService(id);

  return res.status(204).json("Deleted");
};
