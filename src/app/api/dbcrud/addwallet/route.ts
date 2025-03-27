// File: `app/api/wallet/route.ts`
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PublicKey } from "@solana/web3.js";

export async function POST(req: Request) {
  try {
    const { address, userId } = await req.json();

    if (!address || !userId) {
      return NextResponse.json(
        { error: "Address and User ID are required." },
        { status: 400 }
      );
    }

    // Check if address is valid Solana
    try {
      new PublicKey(address);
    } catch {
      return NextResponse.json(
        { error: "Invalid Solana wallet address." },
        { status: 400 }
      );
    }

    
    const existingWallet = await prisma.wallet.findFirst({
      where: { OR: [{ address }, { userId }] },
    });

    if (existingWallet) {
      return NextResponse.json(
        { error: "Wallet already exists for this user or address." },
        { status: 409 }
      );
    }

    // Create wallet
    const wallet = await prisma.wallet.create({
      data: { address, userId },
    });

    return NextResponse.json(wallet);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to create wallet." },
      { status: 500 }
    );
  }
}