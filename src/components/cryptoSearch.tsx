"use client";

import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { debounce } from "lodash"; // Import debounce to optimize API calls
import CryptoImageIcon from "./cryptoImageIcon";
import CreatedAt from "./createdAt";
import { FaRegClock, FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import { TruncateMiddle } from "./truncateMiddle";
import CryptoMarketCap from "./cryptoMarketCap";
import { FaSearch } from "react-icons/fa";

const CryptoSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch token data
    const fetchTokenData = async (tokenName: string) => {
        if (!tokenName) {
            setData([]); // Clear data if input is empty
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dexscreener/searchToken?tokenName=${tokenName}`);
            const result = await res.json();
            setData(result.pairs || []); // Store the pairs data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    // Debounced version of fetchTokenData to prevent excessive API calls
    const debouncedFetch = debounce(fetchTokenData, 500);

    // Handle input change and trigger debounced fetch
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        debouncedFetch(e.target.value);
    };
    return (
        <div >
            <Dialog>
                <DialogTrigger className="  text-white rounded w-[300px] ">
                    <p className="border-2 border-white/20 w-full py-4 text-lg flex flex-row  justify-center items-center gap-3 hover:border-white/50 duration-200">
                        Keresés<FaSearch />
                    </p>
                </DialogTrigger>
                <DialogContent className="w-[1200px]">
                    <DialogHeader>
                        <DialogTitle> </DialogTitle>
                        <DialogDescription>
                            <input
                                className="w-full h-20 text-xl pl-6"
                                placeholder="Tokenek közötti keresés..."
                                value={searchTerm}
                                onChange={handleInputChange}

                            />
                        </DialogDescription>
                        <div className="h-[600px] overflow-y-auto p-2 px-3 space-y-1">
                            {loading && <div>
                                <Image
                                    src={"/logowhite.png"}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-40 w-auto"
                                />
                            </div>}
                            {!loading && data.length === 0 && searchTerm && <div>
                                <Image
                                    src={"/logowhite.png"}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-40 w-auto"
                                />
                            </div>}
                            {!loading ?
                                data.map((item, index) => {
                                    const time = CreatedAt(item.pairCreatedAt)
                                    return (
                                        <div key={index} className="p-2 bg-[#121214] hover:border border-purple flex flex-row rounded-lg ">
                                            <div className=" h-full flex flex-col items-center justify-between  gap-2 py-1 pr-2 "  >
                                                <CryptoImageIcon src={item.chainId} />
                                                <CryptoImageIcon src={item.dexId} />
                                            </div>{
                                                item.info?.imageUrl &&
                                                < Image
                                                    src={item.info.imageUrl}
                                                    alt={"Icon"}
                                                    width={200}
                                                    height={200}
                                                    className="size-14 rounded"
                                                />
                                            }
                                            <div className="flex flex-col pl-2 w-full">
                                                <div className="flex flex-row items-center justify-between">
                                                    <div className="flex flex-row items-center">
                                                        <p className="text-lg font-semibold pr-1">{item.baseToken.symbol}</p>
                                                        <p className="text-white/40 font-[300] pr-2">/{item.quoteToken.symbol}</p>
                                                        <p className="text-lg font-semibold">{item.baseToken.name}</p>
                                                    </div>
                                                    <div className="flex flex-row ">
                                                        <p className="font-semibold">${item.priceUsd} </p>
                                                        <p className={`${item.priceChange.h1 > 0 ? "text-green-500" : item.priceChange.h1 < 0 ? "text-red-500" : "text-white"} font-bold`}><span className="text-white/30 text-sm pl-2 font-[300]">1H: </span>{item.priceChange.h1}% </p>
                                                        <p className={`${item.priceChange.h24 > 0 ? "text-green-500" : item.priceChange.h24 < 0 ? "text-red-500" : "text-white"} font-bold`}><span className="text-white/30 text-sm pl-2 font-[300]">24H: </span>{item.priceChange.h24}% </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-between w-full pt-2 gap-4">
                                                    <div className="border border-white/20 px-3 rounded-sm text-white/80 font-semibold flex flex-row w-full justify-center">
                                                        <p className=" text-white/50 font-[300] pr-1">
                                                            Mkt Cap:
                                                        </p>
                                                        $<CryptoMarketCap number={item.marketCap ?? 0} />
                                                    </div>
                                                    <div className="border border-white/20 px-3 rounded-sm text-white/80 font-semibold flex flex-row w-full justify-center">
                                                        <p className=" text-white/50 font-[300] pr-1">
                                                            Liquidity:
                                                        </p>
                                                        $<CryptoMarketCap number={item.liquidity?.usd ?? 0} />
                                                    </div>
                                                    <div className="border border-white/20 px-3 rounded-sm text-white/80 font-semibold flex flex-row w-full justify-center">
                                                        <p className=" text-white/50 font-[300] pr-1">
                                                            24H Vol:
                                                        </p>
                                                        $<CryptoMarketCap number={item.volume.h24 ?? 0} />
                                                    </div>
                                                    <div className="border border-white/20 px-3 rounded-sm text-white/80 font-semibold flex flex-row w-full justify-center items-center">
                                                        <p className=" text-white/50 font-[300] pr-1">
                                                            <FaRegClock />
                                                        </p>
                                                        {time}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col pl-6 py-2 gap-2">
                                                <p className="flex flex-row text-white/30 font-[200]">Pair: <span className="pl-3 text-white/50 font-medium"><TruncateMiddle str={item.pairAddress} startChars={4} endChars={4} /></span></p>
                                                <p className="flex flex-row text-white/30 font-[200]">Pair: <span className="pl-3 text-white/50 font-medium"> <TruncateMiddle str={item.baseToken.address} startChars={4} endChars={4} /></span></p>
                                            </div>
                                            <div className="h-full flex justify-center items-center py-2">
                                                <FaRegStar className="size-14 p-4 " />
                                            </div>

                                        </div>
                                    )
                                }) : <div>
                                    <Image
                                        src={"/logowhite.png"}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-40 w-auto"
                                    />
                                </div>
                            }
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CryptoSearch;
