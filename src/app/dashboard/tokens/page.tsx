"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const Tokens = () => {
    const [tokenProfiles, setTokenProfiles] = useState<any[]>([])
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
            <h1 className='text-5xl text-white'>Token Profiles</h1>
            <ul>
                {tokenProfiles.map((profile) =>(
                    <li key={profile.url}>
                        <h2>{profile.chainId}</h2>
                        <p>tokenAddress: {profile.tokenAddress}</p>
                        <p>icon: {profile.icon}</p>
                        <Image 
                        src={profile.icon}
                        alt={"asd"}
                        width={200}
                        height={200}
                        />
                        <p>header: {profile.header}</p>
                        <Image 
                        src={profile.header || "/aistock.webp"}
                        alt={"asd"}
                        width={200}
                        height={200}
                        />
                        <p>description: {profile.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tokens