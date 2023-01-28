import connectToMongoDB from "@/lib/db";
import { NextApiResponse, NextApiRequest } from "next";
import User from "./userModel/Model";
export interface IGetUserAuthInfoRequest extends NextApiRequest {
  user?: string; // or any other type
}
const userData = async (req: IGetUserAuthInfoRequest, res: NextApiResponse) => {
  try {
    connectToMongoDB();
    const userId: string | undefined = req.user;
    const user = await User.findById(userId).select("-password");
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
export default userData;
