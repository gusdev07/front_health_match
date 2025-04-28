import { type MiddlewareConfig, type NextRequest, NextResponse } from 'next/server';

const publicRoutes = [
  { path: '/signin', whenAuthenticated: 'redirect' },
  { path: '/signup', whenAuthenticated: 'redirect' },
  { path: '/prescricoes', whenAuthenticated: 'next' }, // somente teste
  { path: '/pacientes', whenAuthenticated: 'next' }, // somente teste
  { path: '/ativos', whenAuthenticated: 'next' }, // somente teste
  { path: '/formulas', whenAuthenticated: 'next' }, // somente teste
  { path: '/vitrines', whenAuthenticated: 'next' }, // somente teste
  { path: '/developers', whenAuthenticated: 'next' }, // somente teste
  { path: '/', whenAuthenticated: 'next' }, // somente teste
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/signin';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);
  const authToken = request.cookies.get('healthmatch.accessToken');

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = '/';

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)'],
};
