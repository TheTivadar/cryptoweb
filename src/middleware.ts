import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";


export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = await auth();
  /* console.log(session) */
  const isLoggedIn = !!session; 
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isLoginPage = pathname === "/login";

  if (isDashboardRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && isLoginPage) {
    const dashboardUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(dashboardUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
