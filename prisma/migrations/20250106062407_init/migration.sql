/*
  Warnings:

  - You are about to alter the column `value` on the `Coins` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `coinsId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Points` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_coinsId_fkey";

-- DropIndex
DROP INDEX "User_coinsId_key";

-- AlterTable
ALTER TABLE "Coins" ADD COLUMN     "userId" TEXT,
ALTER COLUMN "value" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "coinsId";

-- CreateIndex
CREATE UNIQUE INDEX "Points_name_key" ON "Points"("name");

-- AddForeignKey
ALTER TABLE "Coins" ADD CONSTRAINT "Coins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
