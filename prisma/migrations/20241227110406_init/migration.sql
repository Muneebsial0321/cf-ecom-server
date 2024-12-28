/*
  Warnings:

  - You are about to drop the column `itemId` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `ratings` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `no` on the `User` table. All the data in the column will be lost.
  - Added the required column `catagoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brandId" TEXT,
ADD COLUMN     "catagoryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "itemId",
DROP COLUMN "ratings";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "no";

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "picUrl" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catagory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Catagory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reels" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "productId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Reels_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "Catagory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reels" ADD CONSTRAINT "Reels_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reels" ADD CONSTRAINT "Reels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
