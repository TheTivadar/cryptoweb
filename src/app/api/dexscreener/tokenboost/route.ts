import { NextResponse } from "next/server";



export async function GET() {
    const response = await fetch('https://api.dexscreener.com/token-boosts/latest/v1')
    const data = await response.json();
    return NextResponse.json(data);
}