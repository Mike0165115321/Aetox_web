import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['th', 'en'];
const defaultLocale = 'th';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // We should skip internal Next.js files and API routes
    if (
        pathname.startsWith('/_next') || 
        pathname.startsWith('/api') || 
        pathname.includes('.') // for files like favicon.ico, images, etc.
    ) {
      return;
    }

    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\.).*)',
    // Optional: only run on root (/)
    '/'
  ],
};
