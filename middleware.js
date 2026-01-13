import { NextScript } from "next/document";
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  NextResponse.next();
}
export const config = {
  matcher: "/news",
};
