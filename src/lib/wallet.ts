import prisma from "@/lib/prisma";
import { PublicKey } from "@solana/web3.js";




function isValidSolanaAddress(address: string): boolean {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  }

  export async function getWallet(userId: string) {
    if (!userId) throw new Error("User ID is required.");
  
    try {
      return await prisma.wallet.findMany({
        where: { userId },
      });
    } catch (error) {
      console.error("Failed to fetch wallet:", error);
      throw new Error("Database error while fetching wallet.");
    }
  }

  export async function createWallet(data: { address: string; userId: string }) {
    const { address, userId } = data;
  
    if (!address || !userId) {
      throw new Error("Address and User ID are required.");
    }
  
    if (!isValidSolanaAddress(address)) {
      throw new Error("Invalid Solana wallet address.");
    }
  
    try {
      const existingWallet = await prisma.wallet.findFirst({
        where: { OR: [{ address }, { userId }] },
      });
  
      if (existingWallet) {
        throw new Error("Wallet already exists for this user or address.");
      }
  
      return prisma.wallet.create({
        data: { address, userId },
      });
    } catch (error) {
      console.error("Failed to create wallet:", error);
      throw new Error("Database error while creating wallet.");
    }
  }
  
  // Usage example
  export async function addWallet(userId: string, address: string) {
    if (!userId) throw new Error("User not authenticated.");
  
    try {
      await createWallet({ address, userId });
    } catch (error) {
      console.error("Failed to add wallet:", error);
      throw error; // Or handle gracefully
    }
  }