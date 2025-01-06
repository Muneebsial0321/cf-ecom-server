-- CreateEnum
CREATE TYPE "Transaction" AS ENUM ('earn', 'spend');

-- AlterTable
ALTER TABLE "Coins" ADD COLUMN     "type" "Transaction" NOT NULL DEFAULT 'earn';
