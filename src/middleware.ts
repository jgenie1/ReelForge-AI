import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes qui nécessitent une authentification
const PROTECTED_ROUTES = ['/dashboard'];
const AUTH_ROUTES = ['/sign-in', '/sign-up'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isClerkConfigured = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('mock-clerk-url') &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_test_bW9jay');

  // En mode développement local sans Clerk, bypass l'authentification
  if (!isClerkConfigured) {
    // Si l'utilisateur tente d'accéder à /sign-in ou /sign-up sans Clerk, le rediriger vers /dashboard
    if (AUTH_ROUTES.some(route => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // TODO: Ici on ajouterait la vraie vérification Clerk une fois les clés configurées
  // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
  // const isProtectedRoute = createRouteMatcher(PROTECTED_ROUTES.map(r => r + '(.*)'));
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)$).*)',
  ],
};
