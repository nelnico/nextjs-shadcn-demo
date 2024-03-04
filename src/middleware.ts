import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    '/',
    '/join-us',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/forum',
    '/blog',
    '/(api|trpc)(.*)',
  ],
  // Routes that can always be accessed, and have  no authentication information
  ignoredRoutes: ['/(api|trpc)(.*)'],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  //matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/'],
};
