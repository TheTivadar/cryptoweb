/*
  Warnings:

  - The values [RISKY] on the enum `BalanceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BalanceType_new" AS ENUM ('NORMAL', 'SAFE');
ALTER TABLE "UserBalance" ALTER COLUMN "type" TYPE "BalanceType_new" USING ("type"::text::"BalanceType_new");
ALTER TABLE "Transaction" ALTER COLUMN "balanceType" TYPE "BalanceType_new" USING ("balanceType"::text::"BalanceType_new");
ALTER TYPE "BalanceType" RENAME TO "BalanceType_old";
ALTER TYPE "BalanceType_new" RENAME TO "BalanceType";
DROP TYPE "BalanceType_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "riskyBalance" DOUBLE PRECISION NOT NULL DEFAULT 0;
