import { NextResponse } from 'next/server';

export async function GET() {

        try {

                const response = await fetch('https://api.dexscreener.com/token-boosts/top/v1', {
                        cache: 'no-store',
                });
                if (!response.ok) {
                        throw new Error('Failed to fetch token profiles');
                }

                const data = await response.json();
                const enrichedData = await Promise.all(
                        data.map(async (profile: any) => {
                                const { chainId, tokenAddress } = profile;
                                const pairResponse = await fetch(
                                        `https://api.dexscreener.com//tokens/v1/${chainId}/${tokenAddress}`,
                                        { cache: 'no-store' }
                                );
                                const pairData = await pairResponse.json();
                                return {
                                        ...profile,
                                        pairData: pairData[0],
                                };
                        })
                );
                return NextResponse.json(enrichedData);
        } catch (error) {
                console.error(error);
                return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }
}