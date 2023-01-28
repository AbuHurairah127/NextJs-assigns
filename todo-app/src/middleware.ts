import { type NextRequest, NextResponse } from "next/server";
const SECRET_KEY = process.env.SECRET_KEY;
import jwt from "jsonwebtoken";
export const config = {
  matcher: ["/api/protected", "/protected"],
};

// verify function that will verify that if the auth token is true or false
async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  if (!token) throw new Error("Missing user token");

  try {
    if (SECRET_KEY) {
      const verified = await jwt.verify(token, SECRET_KEY);
      return verified;
    }
  } catch (err) {
    throw new Error("Your token has expired.");
  }
}

const middleware = async (req: NextRequest) => {
  const { cookies } = req;
  const token = cookies.get("authToken");
  const url = req.url;
  console.log("Middleware workoing");

  // If user is logged in and wanna go to login page
  if (url.includes("/auth")) {
    if (token?.value) {
      try {
        await verifyAuth(req);
        return NextResponse.redirect("/home");
      } catch (error) {
        return NextResponse.next();
      }
    }
  }
  // If user is not logged in
  try {
    if (url.includes("/home")) {
      console.log(token?.value);
      if (!token?.value) {
        console.log(token?.value);
        return NextResponse.redirect("/auth/login");
      }
      await verifyAuth(req);
      return NextResponse.redirect("/home");
    }
  } catch (error) {
    return NextResponse.redirect("login");
  }
};
console.log("midlewate");

export default middleware;
