-- AlterEnum
ALTER TYPE "BalanceType" ADD VALUE 'RISKY';

-- AlterTable
ALTER TABLE "UserBalance" ADD COLUMN     "share" DOUBLE PRECISION NOT NULL DEFAULT 0;
