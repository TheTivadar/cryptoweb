import { BalanceType, User } from "@/types/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBalancePercentage(user: User, type: BalanceType): number {
  const balance = user.userBalances!.find(b => b.type === type)?.amount || 0;
  return Math.round((balance / user.balance) * 100);
}

export function calculateInvestedMoney(user: User) {
  // Filter and sum all deposit transactions
  const totalInvested = user.transactions!
    .filter(tx => tx.type === 'DEPOSIT')
    .reduce((sum, tx) => sum + tx.amount, 0);

  return totalInvested
}