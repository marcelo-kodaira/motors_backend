import { Request, Response, NextFunction } from 'express';

const isOwnerResource = (model: any) => async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const resource = await model.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  if (!resource) {
    return res.status(404).json({ message: 'Resource not found!' });
  }

  if (resource.user.id !== userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

export default isOwnerResource;
