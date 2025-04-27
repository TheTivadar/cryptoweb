// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'as-needed' // This is the key option
});

const supportedLocales = ['en', 'hu', 'de', 'fr', 'it', 'es'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;



  
  const [maybeLocale] = pathname.slice(1).split('/');
  
  const hasLocale = supportedLocales.includes(maybeLocale);
  
  
  const pathWithoutLocale = hasLocale
  ? pathname.split('/').slice(2).join('/')
  : pathname.slice(1);
  
  const isDashboardRoute = pathWithoutLocale.startsWith('/dashboard');
  const isLoginPage = pathWithoutLocale === '/login';
  
  if (pathWithoutLocale.startsWith('/api') || pathWithoutLocale.includes('.')) {
    return NextResponse.next();
  }
  
  if (isDashboardRoute) {
    const session = await auth();
    if (!session) {
      const loginUrl = hasLocale
        ? `/${maybeLocale}/login`
        : '/login';
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }
  }

  if (isLoginPage) {
    const session = await auth();
    if (session) {
      const dashboardUrl = hasLocale
        ? `/${maybeLocale}/dashboard`
        : '/dashboard';
      return NextResponse.redirect(new URL(dashboardUrl, request.url));
    }
  }

  return intlMiddleware(request);
}



export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};