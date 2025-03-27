"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Meteors = ({
    number,
    className,
}: {
    number?: number;
    className?: string;
}) => {
    const meteors = new Array(number || 20).fill(true);
    const [delays, setDelays] = useState<string[]>([]);
    const [durations, setDurations] = useState<string[]>([]);

    useEffect(() => {
        const meteorCount = number || 20;
        setDelays(
            Array(meteorCount)
                .fill(0)
                .map(() => Math.random() * 5 + "s") // 0-5s delay
        );
        setDurations(
            Array(meteorCount)
                .fill(0)
                .map(() => Math.floor(Math.random() * (10 - 5) + 5) + "s") // 5-10s duration
        );
    }, [number]);

    if (delays.length === 0 || durations.length === 0) {
        return null; // Avoid rendering mismatches
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {meteors.map((el, idx) => {
                const meteorCount = number || 20;
                // Calculate position to evenly distribute meteors across container width
                const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered

                return (
                    <span
                        key={"meteor" + idx}
                        className={cn(
                            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                            className,
                        )}
                        style={{
                            top: 0, // Start above the container
                            left: position + "px",
                            animationDelay: delays[idx],
                            animationDuration: durations[idx],
                        }}
                    ></span>
                );
            })}
        </motion.div>
    );
};
