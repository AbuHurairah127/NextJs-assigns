import { type NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("authToken")?.value;
  console.log(req.cookies);

  const verifiedToken =
    token && (await verifyAuth(token).catch((err) => console.log(err)));

  if (req.nextUrl.pathname.startsWith("/auth/login") && !verifiedToken) {
    return NextResponse.next();
  }
  if (
    req.url.includes("/auth/login") ||
    (req.url.includes("/auth/signup") && verifiedToken)
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!verifiedToken) {
    if (req.nextUrl.pathname.startsWith("/api")) {
      return new NextResponse(
        JSON.stringify({ error: { message: "authentication required" } }),
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
};
export default middleware;
export const config = {
  matcher: ["/", "/auth/login"],
};
