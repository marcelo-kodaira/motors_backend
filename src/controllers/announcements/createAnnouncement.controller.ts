import { Request, Response } from 'express';
import { createAnnouncementService } from '../../services/announcements/createAnnouncement.service';

export const createAnnouncementController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id, is_buyer } = req.user;

  /**
   * Se is_buyer for true significa que o usuario é comprador e apenas anunciantes podem criar um anúncio
   */
  if (is_buyer) {
    return res.status(401).json({ message: 'Only advertiser can create announcement' });
  }

  const announcement = await createAnnouncementService(data, id);

  return res.status(201).json(announcement);
};
