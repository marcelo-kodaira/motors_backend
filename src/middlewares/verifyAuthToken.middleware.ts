import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  const [_, token] = auth.split(" ");

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Invalid token!" });
      }

      req.user = {
        id: decoded.id,
        is_buyer: decoded.is_buyer,
      };

      next();
    }
  );
};

export default verifyAuthTokenMiddleware;
