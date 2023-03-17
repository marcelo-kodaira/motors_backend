import { log } from "console";
import jwt from "jsonwebtoken";
import ErrorHttp from "../../errors/errorHttp";
import { prisma } from "../../prisma";

const nodemailer = require("nodemailer");

export const requestResetPasswordService = async (email: string) => {
  const account = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!account) {
    throw new ErrorHttp("Email not found", 404);
  }

  const token = jwt.sign(
    { id: account.id, is_buyer: account.is_buyer },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1h",
    }
  );

  const link = `http://localhost:5173/reset-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    service: "gmail",
    secure: false,
    auth: {
      user: "motorsshop4@gmail.com",
      pass: "wrkdeaoubmqfrblk",
    },
  });
  const mailOptions = {
    from: "motorsshop4@gmail.com",
    to: email,
    subject: "Redefinir senha",
    text: `Copie a o token: ${token} \nAcesse esse site para redefinir sua senha: ${link}`,
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p><strong>Clique aqui para redefinir sua senha:</strong> ${link}</p>`,
      `</div>`,
    ].join("\n"),
  };

  await transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("E-mail enviado: " + info.response);
    }
  });

  return token;
};
