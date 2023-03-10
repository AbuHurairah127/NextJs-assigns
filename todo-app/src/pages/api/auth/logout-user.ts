import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const logoutUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies } = req;
  try {
    const jwt = cookies.authToken;
    console.log("🚀 ~ file: logout-user.ts:9 ~ logoutUser ~ jwt:", jwt);
    if (!jwt) {
      return res.status(200).send("You are already not logged in!");
    } else {
      const serialized: string | undefined = serialize("authToken", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      res.status(200).send("You have successfully logged out.");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.log(error);
  }
};

export default logoutUser;
