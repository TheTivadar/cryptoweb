"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import CreatedAt from './createdAt';
import Link from 'next/link';
import { FaFireFlameCurved, FaRegClock } from 'react-icons/fa6';

const BoostedTokens = () => {
    const [data, setData] = useState<any[]>()
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Handle mouse down event
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    // Handle mouse move event
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse leave event
    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Add event listeners for smoother dragging
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            container.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dexscreener/tokenboost`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const res = await response.json();
                setData(res)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])

    if (!data || !data[0]) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>No data available.</p>
            </div>
        );
    }
    return (
        <div className='w-full overflow-hidden flex justify-end'>
            <div
                ref={containerRef}
                className={`flex overflow-x-auto scrollbar-hide w-[80vw] md:w-[70vw] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
            >
                {data.map((item, index) => {
                    const time = CreatedAt(item.pairData.pairCreatedAt)
                    return (
                        <Link href={"/"} key={index} className='flex-shrink-0 flex flex-row items-center gap-1 p-4'> {/* Prevent wrapping and add spacing */}
                            <p>{index + 1}#</p>
                            {item.pairData?.info?.imageUrl ? (
                                <Image
                                    width={24}
                                    height={24}
                                    src={item.pairData.info.imageUrl}
                                    alt="itemicon"
                                    className="size-6 rounded"
                                />
                            ) : (
                                <div className="size-5 border-2 rounded-md border-gray-800 ml-2 place-content-center">?</div>
                            )}
                            <p className='font-semibold'>{item.pairData.baseToken.symbol}</p>
                            <FaFireFlameCurved className='text-yellow-500' />
                            <p className='font-bold text-yellow-500'>{item.totalAmount}</p>
                            <p className={`${item.pairData.priceChange.h1 > 0 ? "text-green-500" : item.pairData.priceChange.h1 < 0 ? "text-red-500" : "text-white"}`}>{item.pairData.priceChange.h1}%</p>
                            <FaRegClock className='ml-1' />{time}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}


export default BoostedTokens;