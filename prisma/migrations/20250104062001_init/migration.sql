/*
  Warnings:

  - You are about to drop the column `userId` on the `Coins` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coinsId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Coins" DROP CONSTRAINT "Coins_userId_fkey";

-- DropIndex
DROP INDEX "Coins_userId_key";

-- AlterTable
ALTER TABLE "Coins" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "coinsId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_coinsId_key" ON "User"("coinsId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coinsId_fkey" FOREIGN KEY ("coinsId") REFERENCES "Coins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
