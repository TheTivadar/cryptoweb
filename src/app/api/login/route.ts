// src/app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
    try {

        const loginResponse = await fetch('https://gatium.hu/api/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:"emelospec_web", password:"wMev5398sgVzpAc8"}),
        });

        if (!loginResponse.ok) {
            const errorData = await loginResponse.json();
            return NextResponse.json({
                error: errorData.detail.map((err: { msg: string }) => err.msg).join(', '),
            }, { status: 401 });
        }

        const { access_token, token_type } = await loginResponse.json();

        // Set the session cookie
        const cookie = serialize('emelospec_session', access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600*24*7, 
            path: '/',
        });

        const headers = new Headers();
        headers.set('Set-Cookie', cookie);

        return NextResponse.json({ message: 'Login successful' }, { status: 200, headers });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
