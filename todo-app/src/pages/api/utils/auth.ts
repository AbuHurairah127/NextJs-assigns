import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { IGetUserAuthInfoRequest } from "../auth/userData";
const JWT_SECRET_KEY: string | undefined = process.env.SECRET_KEY;

export interface Data extends JwtPayload {
  user: {
    id: string;
  };
}
export const authUser = (
  req: IGetUserAuthInfoRequest,
  res: NextApiResponse
) => {
  try {
    let data: JwtPayload | string;
    const token: string | undefined = req.headers["token"];
    if (!token) {
      res.status(401).send("Access Denied");
    } else {
      if (typeof JWT_SECRET_KEY === "string") {
        data = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
        req.user = data.user.id;
      }
    }
  } catch (error) {
    res.status(401).send("Access Denied");
  }
};
