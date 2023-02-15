import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ErrorHttp from '../../errors/errorHttp';
import { prisma } from '../../prisma';
import { ILoginRequest } from '../../interfaces/login';

export const loginService = async ({ email, password }: ILoginRequest) => {
  const account = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!account) {
    throw new ErrorHttp('Wrong email/password', 403);
  }

  const passwordMatch = bcrypt.compareSync(password, account.password);

  if (!passwordMatch) {
    throw new ErrorHttp('Wrong email/password', 403);
  }

  const token = jwt.sign(
    { id: account.id, is_buyer: account.is_buyer },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '15m',
    }
  );

  return token;
};