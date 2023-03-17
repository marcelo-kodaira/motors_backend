import { Router } from "express";
import { updateAddressController } from "../controllers/address/updateAddress.controller";
import isOwnerResource from "../middlewares/isOwnerResource.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import { prisma } from "../prisma";

const routes = Router();

export const addressRoutes = () => {
  routes.patch(
    "/:id",
    verifyAuthTokenMiddleware,
    isOwnerResource(prisma.address),
    updateAddressController
  );

  return routes;
};
