
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get('emelospec_session');
  if (sessionCookie) {
    return NextResponse.next();
  }
  try {
    const loginResponse = await fetch('https://gatium.hu/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'emelospec_web', password: 'wMev5398sgVzpAc8' }),
    });

    if (!loginResponse.ok) {
      return NextResponse.redirect(new URL('/error', req.url)); // Hiba esetén irányíts máshova
    }

    const { access_token } = await loginResponse.json();

    const response = NextResponse.next();
    response.cookies.set('emelospec_session', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 * 24 * 7, // 7 nap
    });

    return response;
  } catch (error) {
    return NextResponse.redirect(new URL('/error', req.url)); // Hibakezelés
  }
}
