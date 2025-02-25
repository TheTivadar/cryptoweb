"use client"
import BoostedTokens from '@/components/boostedTokens'
import CryptoSearch from '@/components/cryptoSearch'
import { CryptoTable } from '@/components/table/CryptoTable'
import { useEffect, useState } from 'react'


const Tokens = () => {
    const [tokenProfiles, setTokenProfiles] = useState<any>([])
    const [tokenSmall, setTokenSmall] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchTokenProfiles() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dexscreener/latesttoken`)

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json()

                setTokenProfiles(data)

            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchTokenProfiles()
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <div className='pt-20'>
                <div className='flex flex-row'>
                    <CryptoSearch />
                    <BoostedTokens />
                </div>
                <CryptoTable data={tokenProfiles} />
            </div>
        </div>
    )
}

export default Tokens