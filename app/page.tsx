// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const user = req.cookies.get("user")?.value; 

  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    if (user) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.redirect(new URL("/catalog", req.url));
  }

  return NextResponse.next();
}