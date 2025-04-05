import prisma from "@/lib/prisma"
import { BalanceType, PaymentMethod, TransactionType } from "@/types/types";


export async function createInternalTransactions(userId:string, amount:number, sourceType:BalanceType, targetType: BalanceType) {
    await prisma.transaction.create({
        data: {
          userId: userId,
          type: "INTERNAL_TRANSFER",
          amount: amount,
          sourceType: sourceType,
          targetType: targetType,
          method: "MANUAL_ADJUSTMENT",

          completedAt: new Date(), 
        }
      });
}  
export async function createExternalTransactions(userId:string,type:TransactionType, amount:number, method:PaymentMethod) {
    await prisma.transaction.create({
        data: {
          userId: userId,
          type: type,
          amount: amount,
          method: method,
          completedAt: new Date(), 
        }
      });
}  