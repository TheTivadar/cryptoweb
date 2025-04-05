"use client"

import { toast } from "sonner";

export const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        toast("Sikeresen vágólapra másolva")
    });
};

import React from 'react'
import { cn } from "@/lib/utils";
import { FaCopy } from "react-icons/fa";

const CopyButton = ({ text, className }: { text: string, className?: string }) => {
    return (
        <button className={ cn(`text-sm text-white cursor-pointer flex flex-row gap-2 items-center`, className)} onClick={() => handleCopy(text)}>
            {text} <FaCopy />
        </button>
    )
}

export default CopyButton