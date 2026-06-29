import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);
const isAuthRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

const isClerkConfigured = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('mock-clerk-url') &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_test_bW9jay')
);

// Initialize Clerk middleware only if configured to prevent startup crashes when keys are empty
const clerkHandler = isClerkConfigured 
  ? clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) auth().protect();
    })
  : null;

export default function middleware(request: NextRequest, event: any) {
  if (!isClerkConfigured) {
    // Local development/sandbox bypass mode
    const { pathname } = request.nextUrl;
    if (isAuthRoute(request)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // Execute actual Clerk auth protection
  return clerkHandler!(request, event);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)$).*)',
  ],
};
