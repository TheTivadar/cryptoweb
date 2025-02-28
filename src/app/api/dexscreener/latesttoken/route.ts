import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Step 1: Fetch token profiles
        const tokenProfilesResponse = await fetch('https://api.dexscreener.com/token-profiles/latest/v1');
        if (!tokenProfilesResponse.ok) {
            throw new Error('Failed to fetch token profiles');
        }
        const tokenProfiles = await tokenProfilesResponse.json();
        const enrichedData = await Promise.all(
            tokenProfiles.map(async (profile:any) => {
                const { chainId, tokenAddress } = profile;
                const pairResponse = await fetch(
                    `https://api.dexscreener.com//token-pairs/v1/${chainId}/${tokenAddress}`
                    
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