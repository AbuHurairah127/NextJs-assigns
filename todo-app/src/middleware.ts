// import { verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const SECRET_KEY = process.env.SECRET_KEY;

const middleware = (req: NextRequest) => {
  //   // console.log("Middleware working");
  //   const { cookies } = req;
  //   const jwt = cookies.get("authToken");
  //   const url = req.url;
  //   // If user is logged in and wanna go to login page
  //   if (url.includes("/login")) {
  //     try {
  //       if (jwt && SECRET_KEY) {
  //         verify(jwt.value, SECRET_KEY);
  //         return NextResponse.redirect("/");
  //       }
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  //   // If user is not logged in
  //   if (url.includes("/")) {
  //     if (jwt === undefined) {
  //       return NextResponse.redirect("/login");
  //     }
  //     try {
  //       if (jwt && SECRET_KEY) {
  //         verify(jwt.value, SECRET_KEY);
  //         return NextResponse.next();
  //       }
  //     } catch (error) {
  //       return NextResponse.redirect("login");
  //     }
  //   }
};

console.log("Middleware");
export default middleware;
