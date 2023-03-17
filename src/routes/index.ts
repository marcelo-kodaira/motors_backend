import { Express } from "express";
import { addressRoutes } from "./address.routes";
import { announcementRoutes } from "./announcement.routes";
import { commentRoutes } from "./comment.routes";
import { loginRoutes } from "./login.routes";
import { profileRoutes } from "./profile.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/login", loginRoutes());
  app.use("/announcements", announcementRoutes());
  app.use("/users", userRoutes());
  app.use("/profile", profileRoutes());
  app.use("/comments", commentRoutes());
  app.use("/address", addressRoutes());
};
