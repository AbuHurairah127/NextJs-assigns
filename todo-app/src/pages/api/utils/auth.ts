import jwt, { JwtPayload } from "jsonwebtoken";
import connectToMongoDB from "@/lib/db";
import { NextApiResponse } from "next";
import { IGetUserAuthInfoRequest } from "../auth/user-data";
const JWT_SECRET_KEY: string | undefined = process.env.SECRET_KEY;
import cookie, { parse } from "cookie";
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
    connectToMongoDB();
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.authToken;

    let data: JwtPayload | string;
    if (!token) {
      res.status(401).send("Access Denied");
    } else {
      if (typeof JWT_SECRET_KEY === "string" && typeof token === "string") {
        data = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
        req.user = data.user.id;
      }
    }
  } catch (error) {
    res.status(401).send("Access Denied");
  }
};
