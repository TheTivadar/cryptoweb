import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)
    const chainId = searchParams.get('chainId');
    const tokenAddress = searchParams.get('tokenAddress');

    if (!chainId || !tokenAddress) {
        return NextResponse.json(
            { error: 'Missing chainId or tokenAddress' },
            { status: 400 }
        );
    }

     const pairResponse = await fetch(
        `https://api.dexscreener.com//token-pairs/v1/${chainId}/${tokenAddress}`,
        { cache: 'no-store' }
    );
    
    if (!pairResponse.ok) {
        return NextResponse.json(
            { error: 'Failed to fetch data from DexScreener' },
            { status: pairResponse.status }
        );
    }
    const pairData = await pairResponse.json();
    return NextResponse.json(pairData); 
}