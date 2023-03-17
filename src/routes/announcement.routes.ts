import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcements/createAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncement.constroller";
import { readAnnouncementController } from "../controllers/announcements/readAnnouncement.controller";
import { readAnnouncementIdController } from "../controllers/announcements/readAnnouncementId.controller";
import { readAnnouncementUserController } from "../controllers/announcements/readAnnouncementUser.controller";
import { updateAnnouncementController } from "../controllers/announcements/updateAnnouncement.controller";
import { createCommentController } from "../controllers/comments/createComment.controller";
import isOwnerResource from "../middlewares/isOwnerResource.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import { prisma } from "../prisma";
const routes = Router();

export const announcementRoutes = () => {
  routes.get("", readAnnouncementController);
  routes.get("/:id", readAnnouncementIdController);
  routes.get("/user/:id", readAnnouncementUserController);
  routes.post("", verifyAuthTokenMiddleware, createAnnouncementController);
  routes.patch(
    "/:id",
    verifyAuthTokenMiddleware,
    isOwnerResource(prisma.announcement),
    updateAnnouncementController
  );
  routes.delete(
    "/:id",
    verifyAuthTokenMiddleware,
    isOwnerResource(prisma.announcement),
    deleteAnnouncementController
  );

  routes.post(
    "/:id/comment",
    verifyAuthTokenMiddleware,
    createCommentController
  );

  return routes;
};
