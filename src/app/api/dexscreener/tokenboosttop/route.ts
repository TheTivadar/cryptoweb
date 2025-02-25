import { NextResponse } from 'next/server';

export async function GET() {
        console.log('1')
        try {
                console.log('2')
                const response = await fetch('https://api.dexscreener.com/token-boosts/top/v1', {
                        cache: 'no-store',
                });
                if (!response.ok) {
                        throw new Error('Failed to fetch token profiles');
                }
                console.log('3')
                const data = await response.json();
                console.log('4')
                const enrichedData = await Promise.all(
                        data.map(async (profile: any) => {
                                console.log('5')
                                console.log(profile,"profile")
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
                console.log('6')
                return NextResponse.json(enrichedData);
        } catch (error) {
                console.error(error);
                return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }
}