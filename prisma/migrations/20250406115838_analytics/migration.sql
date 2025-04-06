/*
  Warnings:

  - You are about to drop the column `totalBalance` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `totalProfit` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Analytics` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[date]` on the table `Analytics` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_userId_fkey";

-- DropIndex
DROP INDEX "Analytics_userId_date_key";

-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "totalBalance",
DROP COLUMN "totalProfit",
DROP COLUMN "userId",
ADD COLUMN     "normalBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "riskyBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "safeBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "date" SET DATA TYPE DATE;

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_date_key" ON "Analytics"("date");

-- CreateIndex
CREATE INDEX "Analytics_date_idx" ON "Analytics"("date");
