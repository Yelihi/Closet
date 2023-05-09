import { NextFetchEvent, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest, ev: NextFetchEvent) {
  if (request.cookies.has('connect.sid')) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/userlogin', request.url));
}

export const config = {
  matcher: ['/closet/:path*'],
};
