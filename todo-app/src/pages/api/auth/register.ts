import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./userModel/Model";
import connectToMongoDB from "lib/db";
let JWT_SECRET_KEY: string;
if (typeof process.env.SECRET_KEY === "string") {
  JWT_SECRET_KEY = process.env.SECRET_KEY;
}
export type userID = {
  user: {
    id: string;
  };
};
export type Response = {
  authToken: string;
};
export type ReqTesting = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  userName: string;
};
const register = async (
  req: NextApiRequest,
  res: NextApiResponse<Response | string>
) => {
  try {
    connectToMongoDB();

    /* This is checking if the email address already exists in the database. If it does, it will return a
      400 status code with the message "Sorry a user with this email address already exists." */
    let isEmail: ReqTesting | null = await User.findOne({
      email: req.body.email,
    });
    if (isEmail) {
      return res
        .status(400)
        .send("Sorry a user with this email address already exists.");
    }
    /* This is checking if the username already exists in the database. If it does, it will return a
       400 status code with the message "Sorry a user with this username already exists." */
    let isUserName: ReqTesting | null = await User.findOne({
      userName: req.body.userName,
    });
    if (isUserName) {
      return res
        .status(400)
        .send("Sorry a user with this username already exists.");
    }
    const salt: string = await bcrypt.genSaltSync(10);
    let secPass: string = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: secPass,
      email: req.body.email,
    });
    const data: userID = {
      user: { id: newUser.id },
    };
    const authToken: string = jwt.sign(data, JWT_SECRET_KEY);
    res.json({ authToken });
  } catch (error) {
    res.status(500).json("Some error occurred");
  }
};

export default register;
