/*
  Warnings:

  - You are about to drop the column `mostInvestedAsset` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `totalInvested` on the `Analytics` table. All the data in the column will be lost.
  - Added the required column `date` to the `Analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "mostInvestedAsset",
DROP COLUMN "totalInvested",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
