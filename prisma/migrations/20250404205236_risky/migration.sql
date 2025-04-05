/*
  Warnings:

  - You are about to drop the column `normalShare` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `riskyBalance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `safeShare` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "normalShare",
DROP COLUMN "riskyBalance",
DROP COLUMN "safeShare";
