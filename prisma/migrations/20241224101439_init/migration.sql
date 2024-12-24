/*
  Warnings:

  - You are about to drop the column `wishlistId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_wishlistId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "wishlistId",
ADD COLUMN     "tags" TEXT[];
