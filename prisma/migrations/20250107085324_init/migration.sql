/*
  Warnings:

  - You are about to drop the column `count` on the `Reel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reelId,userId]` on the table `Comments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CoinMileStone" ALTER COLUMN "mileStone" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Reel" DROP COLUMN "count",
ADD COLUMN     "commentsCount" INTEGER DEFAULT 0,
ADD COLUMN     "likeCount" INTEGER DEFAULT 0,
ADD COLUMN     "viewCount" INTEGER DEFAULT 0;

-- CreateTable
CREATE TABLE "Likes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reelId" TEXT NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Likes_userId_reelId_key" ON "Likes"("userId", "reelId");

-- CreateIndex
CREATE UNIQUE INDEX "Comments_reelId_userId_key" ON "Comments"("reelId", "userId");

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_reelId_fkey" FOREIGN KEY ("reelId") REFERENCES "Reel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
