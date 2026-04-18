import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./core/i18n/config";

function getLocale(request: NextRequest) {
  // In a full implementation, you could parse 'Accept-Language' headers here.
  // For now, SEO best practice is simple redirection to the explicit language path.
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the target pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale in the url
  const locale = getLocale(request);

  // e.g. incoming request is /news
  // The new URL is now /en/news
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
