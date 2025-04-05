/*
  Warnings:

  - You are about to drop the column `currency` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `share` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "BalancePotType" AS ENUM ('SAFE', 'NORMAL');

-- CreateEnum
CREATE TYPE "BalanceType" AS ENUM ('NORMAL', 'SAFE', 'RISKY');

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "currency",
ADD COLUMN     "balanceType" "BalanceType",
ADD COLUMN     "potType" "BalancePotType";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "share",
ADD COLUMN     "normalShare" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "safeShare" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "BalancePot" (
    "id" TEXT NOT NULL,
    "type" "BalancePotType" NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BalancePot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBalance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "BalanceType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserBalance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BalancePot_type_key" ON "BalancePot"("type");

-- CreateIndex
CREATE UNIQUE INDEX "UserBalance_userId_type_key" ON "UserBalance"("userId", "type");

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
