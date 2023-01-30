import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "./userModel/Model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectToMongoDB from "@/lib/db";
import { Response } from "./register";
import { serialize } from "cookie";
let JWT_SECRET_KEY: string;
if (typeof process.env.SECRET_KEY === "string") {
  JWT_SECRET_KEY = process.env.SECRET_KEY;
}
const login = async (
  req: NextApiRequest,
  res: NextApiResponse<Response | string>
) => {
  try {
    connectToMongoDB();
    const { email, password } = req.query;

    let user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send("Sorry you are not the user of our platform. Please register!");
    }
    if (typeof password === "string") {
      const passwordCompare: boolean = await bcrypt.compare(
        password,
        user.password
      );
      if (!passwordCompare) {
        return res.status(400).send("Password is incorrect.");
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      const serialized: string | undefined = serialize("authToken", authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      res.json({
        authToken: authToken,
      });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
export default login;
