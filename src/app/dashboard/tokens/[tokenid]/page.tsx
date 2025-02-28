"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaBell, FaCircleArrowDown, FaCircleArrowUp, FaRegClock, FaRegCopy, FaRegStar, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineWeb } from 'react-icons/md';
import { IoCloseSharp } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import { toast } from "sonner"
import { CiClock1 } from "react-icons/ci";
import CreatedAt from '@/components/createdAt';
import { IoIosArrowForward } from 'react-icons/io';
import BoostedTokens from '@/components/boostedTokens';
import CryptoSearch from '@/components/cryptoSearch';

const TokenId = () => {
    const pathname = usePathname();
    const lastPart = pathname.split('/').pop();
    const [chainId, tokenAddress] = lastPart?.split('=') || [];
    const [pairData, setPairData] = useState<any>(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [selectedTime, setSelectedTime] = useState('m5');
    const [copied, setCopied] = useState(false);
    // Function to handle time selection

    const chartUrl = `https://dexscreener.com/${chainId}/${tokenAddress}?embed=1&theme=dark&info=0`;

    useEffect(() => {
        const fetchPairData = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const url = `${process.env.NEXT_PUBLIC_URL}/api/dexscreener/pairaddress?chainId=${chainId}&tokenAddress=${tokenAddress}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                
                setPairData(data);
            } catch (error: any) {
                console.error("Error:", error.message);
            } finally {
                setLoading(false); // Set loading to false after fetching (success or error)
            }
        };

        if (chainId && tokenAddress) {
            fetchPairData();
        }
    }, [chainId, tokenAddress]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }


    if (!pairData || !pairData[0]) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>No data available.</p>
            </div>
        );
    }

    const handleTime = (time: string) => {
        setSelectedTime(time);
    };

    const truncateMiddle = (str: string, startChars = 4, endChars = 4) => {
        if (str.length <= startChars + endChars) return str;
        return `${str.slice(0, startChars)}...${str.slice(-endChars)}`;
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            toast("Sikeresen vágólapra másolva")
            setTimeout(() => setCopied(false), 2000);
        });
    };
    const createdNumber = CreatedAt(pairData[0].pairCreatedAt)

    return (
        <div className='flex flex-col h-full w-full'>
            <div className='flex flex-row'>
                <CryptoSearch />
                <BoostedTokens />
            </div>
            <div className='flex flex-col md:flex-row h-full  order'>
                <div className='order-2 md:order-1 h-full w-full'>
                    <iframe
                        src={chartUrl}
                        width="1000"
                        height="1000"
                        className='w-full h-screen md:h-full'
                        title="Token Chart"
                    />
                </div>
                <div className='order-1 md:order-2 w-full md:w-[400px] h-full bg-gray-950/80'>
                    <div className='flex flex-row py-1 items-center justify-between pr-4 bg-[#242429]'>
                        <div className='flex flex-row items-center'>
                            {pairData[0].info?.imageUrl && (
                                <Image
                                    src={pairData[0].info.imageUrl}
                                    alt='Token'
                                    width={100}
                                    height={100}
                                    className='size-8 rounded-full'
                                />
                            )}
                            <p className='pl-2 truncate'>{pairData[0].baseToken.name}</p>
                        </div>
                        <Link href={`${process.env.NEXT_PUBLIC_URL}/dashboard/tokens`} className='border-2 border-white/20 rounded-md'>
                            <IoCloseSharp className='text-white size-6' />
                        </Link>
                    </div>
                    <div className='py-2 w-full '>
                        <div className='flex flex-row justify-center items-center' >
                            <p className='flex flex-row items-center gap-1 pr-2' onClick={() => handleCopy(pairData[0].baseToken?.name)} >{pairData[0].baseToken?.name}<FaRegCopy className='text-white/60 size-3' /></p>/{pairData[0].quoteToken?.symbol}
                            <div className='flex flex-row pl-2 items-center gap-1 text-purple'>
                                <FaRegClock className='font-bold' />
                                {createdNumber}
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            {pairData[0].chainId}<IoIosArrowForward />{pairData[0].dexId}
                        </div>
                    </div>
                    {pairData[0].info?.header && (
                        <Image
                            src={pairData[0].info.header}
                            alt='HeaderImage'
                            width={400}
                            height={400}
                            className='w-full max-h-48'
                        />
                    )}
                    <div className='px-2'>
                        <div className='h-6 w-[95%] rounded-md bg-gray-700 mx-auto flex flex-row  mt-2'>
                            {pairData[0].info?.websites?.[0] && (
                                <Link href={pairData[0].info.websites[0].url} className='flex flex-row w-full items-center space-x-1 px-1 text-white'>
                                    <MdOutlineWeb />
                                    <p className='font-[300] 2xl:font-medium'>Website</p>
                                    <div className='h-full w-[1px] bg-black' />
                                </Link>
                            )}
                            {pairData[0].info?.socials?.[0] && (
                                <Link href={pairData[0].info.socials[0].url} className='flex flex-row items-center space-x-1 px-1 text-white'>
                                    <FaXTwitter />
                                    <p className='font-[300] 2xl:font-medium'>Twitter</p>
                                    <div className='h-full w-[1px] bg-black' />
                                </Link>
                            )}
                            {pairData[0].info?.socials?.[1] && (
                                <Link href={pairData[0].info.socials[1].url} className='flex flex-row items-center space-x-1 px-1 text-white'>
                                    <PiTelegramLogo />
                                    <p className='font-[300] 2xl:font-medium'>Telegram</p>
                                </Link>
                            )}
                        </div>
                        <div className='flex flex-row justify-between gap-2 py-2'>
                            <div className='flex flex-col border border-white/20 p-1 py-2 rounded-lg w-full'>
                                <p className='text-xs text-white/70 text-center'>PRICE USD</p>
                                <p className='text-sm text-center'>${pairData[0].priceUsd}</p>
                            </div>
                            <div className='flex flex-col border border-white/20 p-1 py-2 rounded-lg w-full'>
                                <p className='text-xs text-white/70 text-center'>PRICE</p>
                                <p className='text-sm text-center truncate'>{pairData[0].priceNative} SOL</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-2 py-2'>
                            <div className='flex flex-col border border-white/20 p-1 py-2 rounded-lg w-full'>
                                <p className='text-xs text-white/70 text-center'>LIQUIDITY</p>
                                <p className='text-sm text-center'> ${Math.floor(pairData[0].liquidity?.usd / 1000)}K</p>
                            </div>
                            <div className='flex flex-col border border-white/20 p-1 py-2 rounded-lg w-full'>
                                <p className='text-xs text-white/70 text-center'>FDV</p>
                                {
                                    Math.floor(pairData[0].marketCap / 1000) > 1000 ?
                                        <p className='text-sm text-center'>${Math.floor(pairData[0].fdv / 1000000)}M</p>
                                        : <p className='text-sm text-center'>${Math.floor(pairData[0].fdv / 1000)}K</p>
                                }
                            </div>
                            <div className='flex flex-col border border-white/20 p-1 py-2 rounded-lg w-full'>
                                <p className='text-xs text-white/70 text-center'>MKT CAP</p>
                                {
                                    Math.floor(pairData[0].marketCap / 1000) > 1000 ?
                                        <p className='text-sm text-center'>${Math.floor(pairData[0].marketCap / 1000000)}M</p>
                                        : <p className='text-sm text-center'>${Math.floor(pairData[0].marketCap / 1000)}K</p>
                                }
                            </div>
                        </div>
                        <div className='flex flex-row w-full  border border-b-0 border-white/20   rounded-lg rounded-b-none'>
                            <button className=' p-2 h-full w-full border-r-2 flex flex-col ' onClick={() => handleTime("m5")}>
                                <p className='text-xs text-white/40' >M5</p>
                                <p className={`${pairData[0].priceChange.m5 > 0 ? "text-green-500" : pairData[0].priceChange.m5 < 0 ? "text-red-500" : "text-white"}`}>{pairData[0].priceChange.m5}%</p>
                            </button>
                            <button className=' p-2 h-full w-full border-r-2' onClick={() => handleTime("h1")}>
                                <p className='text-xs text-white/40' >H1</p>
                                <p className={`${pairData[0].priceChange.h1 > 0 ? "text-green-500" : pairData[0].priceChange.h1 < 0 ? "text-red-500" : "text-white"}`}>{pairData[0].priceChange.h1}%</p>
                            </button>
                            <button className=' p-2 h-full w-full border-r-2' onClick={() => handleTime("h6")}>
                                <p className='text-xs text-white/40'>H6</p>
                                <p className={`${pairData[0].priceChange.h6 > 0 ? "text-green-500" : pairData[0].priceChange.h6 < 0 ? "text-red-500" : "text-white"}`}>{pairData[0].priceChange.h6}%</p>
                            </button>
                            <button className=' p-2 h-full w-full border-r-2' onClick={() => handleTime("h24")}>
                                <p className='text-xs text-white/40'>H24</p>
                                <p className={`${pairData[0].priceChange.h24 > 0 ? "text-green-500" : pairData[0].priceChange.h24 < 0 ? "text-red-500" : "text-white"}`}>{pairData[0].priceChange.h24}%</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-3 border border-white/20 p-2 pl-0 rounded-lg rounded-t-none gap-y-4'>
                            <div className='col-span-1 flex flex-col border-r-2 border-white/20 mr-2'>
                                <p className='text-xs text-white/70 text-center'>Volume</p>
                                <p className='text-sm text-center'>${Math.floor(pairData[0].volume[selectedTime] / 1000)}K</p>
                            </div>
                            <div className='col-span-2' />
                            <div className='col-span-1 border-r-2 border-white/20 mr-2'>
                                <p className='text-xs text-white/70 text-center '>TXNS</p>
                                <p className='text-sm text-center'>{pairData[0].txns[selectedTime].buys + pairData[0].txns[selectedTime].sells}</p>
                            </div>
                            <div className=' col-span-2 flex flex-row items-center justify-between relative'>
                                <div>
                                    <p className='text-xs text-white/70 text-start pb-1'>BUYS</p>
                                    <p className='text-sm text-start pb-1'>{pairData[0].txns[selectedTime].buys}</p>
                                </div>
                                <div>
                                    <p className='text-xs text-white/70 text-end pb-1'>SELLS</p>
                                    <p className='text-sm text-end pb-1'>{pairData[0].txns[selectedTime].sells} </p>
                                </div>
                                <div className='absolute bottom-0 left-0 right-0 h-1 flex'>
                                    <div
                                        className='h-full bg-green-500 rounded mr-[2px]'
                                        style={{
                                            width: `${(pairData[0].txns[selectedTime].buys /
                                                (pairData[0].txns[selectedTime].buys + pairData[0].txns[selectedTime].sells)
                                            ) * 100
                                                }%`,
                                        }}
                                    />
                                    <div
                                        className='h-full bg-red-500 rounded'
                                        style={{
                                            width: `${(pairData[0].txns[selectedTime].sells /
                                                (pairData[0].txns[selectedTime].buys + pairData[0].txns[selectedTime].sells)
                                            ) * 100
                                                }%`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col pt-2'>
                            <div className='flex flex-row w-full  gap-3'>
                                <button className='w-full flex flex-row items-center justify-center gap-2 bg-[#242429] rounded-md py-1'>
                                    <FaRegStar className='font-[300]' />
                                    <p className='font-[300]'>WatchList</p>
                                </button>
                                <button className='w-full flex flex-row items-center justify-center gap-2 bg-[#242429] rounded-md py-1'>
                                    <FaBell className='font-[300]' />
                                    <p className='font-[300]'>Alerts</p>
                                </button>
                            </div>
                            <div className='flex flex-row w-full py-2'>
                                <button className='w-full flex flex-row items-center justify-center gap-2 bg-[#242429] rounded-l-md py-3'>
                                    <FaCircleArrowUp className='text-green-500' />
                                    <p className='font-semibold text-sm'>BUY</p>
                                </button>
                                <button className='w-full flex flex-row items-center justify-center gap-2 bg-[#242429] rounded-r-md border-l border-l-white/20 py-1'>
                                    <FaCircleArrowDown className='text-red-500' />
                                    <p className='font-semibold text-sm'>SELL</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <ul className='text-white w-full pt-6 space-y-2 '>
                                <li className='flex flex-row justify-between'><p>Pair created</p><p>{pairData[0].pairCreatedAt}</p></li>
                                <li><div className='w-full h-[1px] bg-gray-300/20' /></li>
                                <li className='flex flex-row justify-between'><p>Pooled SOL</p><p>{Number(pairData[0].liquidity?.quote).toFixed(2)}</p></li>
                                <li><div className='w-full h-[1px] bg-gray-300/20' /></li>
                                <li className='flex flex-row justify-between'><p>Pooled {pairData[0].baseToken.name}</p><p>{pairData[0].liquidity?.base}</p></li>
                                <li><div className='w-full h-[1px] bg-gray-300/20' /></li>
                                <li className='flex flex-row justify-between'><p>Pair</p><div className='flex flex-row items-center gap-2'><p className='truncate flex flex-row items-center gap-1 bg-[#242429] rounded px-1 cursor-pointer' onClick={() => handleCopy(pairData[0].pairAddress)} ><FaRegCopy />{truncateMiddle(pairData[0].pairAddress, 4, 4)}</p><Link href={`https://solscan.io/token/${pairData[0].pairAddress}`}><FaExternalLinkAlt /></Link></div></li>
                                <li><div className='w-full h-[1px] bg-gray-300/20' /></li>
                                <li className='flex flex-row justify-between'><p>{pairData[0].baseToken.name}</p><div className='flex flex-row items-center gap-2'><p className='truncate flex flex-row items-center gap-1 bg-[#242429] rounded px-1 cursor-pointer' onClick={() => handleCopy(pairData[0].baseToken.address)}><FaRegCopy />{truncateMiddle(pairData[0].baseToken.address, 4, 4)}</p><Link href={`https://solscan.io/token/${pairData[0].baseToken.address}`}><FaExternalLinkAlt /></Link></div></li>
                                <li><div className='w-full h-[1px] bg-gray-300/20' /></li>
                                <li className='flex flex-row justify-between'><p>{pairData[0].quoteToken.symbol}</p><div className='flex flex-row items-center gap-2'><p className='truncate flex flex-row items-center gap-1 bg-[#242429] rounded px-1 cursor-pointer' onClick={() => handleCopy(pairData[0].quoteToken.address)}><FaRegCopy />{truncateMiddle(pairData[0].quoteToken.address, 4, 4)}</p><Link href={`https://solscan.io/token/${pairData[0].quoteToken.address}`}><FaExternalLinkAlt /></Link></div></li>
                                <li><div className='w-full h-[1px] bg-gray-300/20' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenId;
