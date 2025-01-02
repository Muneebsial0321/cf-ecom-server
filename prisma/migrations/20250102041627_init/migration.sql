/*
  Warnings:

  - You are about to drop the column `reelsId` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the `Reels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_reelsId_fkey";

-- DropForeignKey
ALTER TABLE "Reels" DROP CONSTRAINT "Reels_productId_fkey";

-- DropForeignKey
ALTER TABLE "Reels" DROP CONSTRAINT "Reels_userId_fkey";

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "reelsId",
ADD COLUMN     "reelId" TEXT;

-- DropTable
DROP TABLE "Reels";

-- CreateTable
CREATE TABLE "Reel" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "productId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Reel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reel" ADD CONSTRAINT "Reel_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reel" ADD CONSTRAINT "Reel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_reelId_fkey" FOREIGN KEY ("reelId") REFERENCES "Reel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
