/*
  Warnings:

  - You are about to drop the column `productId` on the `Reel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reel" DROP CONSTRAINT "Reel_productId_fkey";

-- AlterTable
ALTER TABLE "Reel" DROP COLUMN "productId";
