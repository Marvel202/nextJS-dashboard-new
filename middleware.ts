

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 /*
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|customers|.png).*)'],
};


*/
// /middleware.ts


export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/((?!api|_next/static|_next/image|customers|.*\\.(?:png|jpg|jpeg|gif|svg)).*)',
  ],
};