/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Analytics` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Analytics_userId_date_key";

-- CreateIndex
CREATE UNIQUE INDEX "Analytics_date_key" ON "Analytics"("date");
