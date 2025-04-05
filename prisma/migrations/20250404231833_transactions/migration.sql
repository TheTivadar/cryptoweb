/*
  Warnings:

  - You are about to drop the column `balanceType` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `potType` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Investment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `direction` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INTERNAL_TRANSFER', 'DEPOSIT', 'WITHDRAWAL');

-- CreateEnum
CREATE TYPE "Direction" AS ENUM ('INCOMING', 'OUTGOING');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('BANK_TRANSFER', 'CRYPTO', 'MANUAL_ADJUSTMENT');

-- DropForeignKey
ALTER TABLE "Investment" DROP CONSTRAINT "Investment_userId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "balanceType",
DROP COLUMN "description",
DROP COLUMN "potType",
ADD COLUMN     "completedAt" TIMESTAMP(3),
ADD COLUMN     "direction" "Direction" NOT NULL,
ADD COLUMN     "method" "PaymentMethod" NOT NULL,
ADD COLUMN     "reference" VARCHAR(255),
ADD COLUMN     "sourceType" "BalanceType",
ADD COLUMN     "targetType" "BalanceType",
DROP COLUMN "type",
ADD COLUMN     "type" "TransactionType" NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "Investment";

-- CreateIndex
CREATE INDEX "Transaction_userId_type_idx" ON "Transaction"("userId", "type");
