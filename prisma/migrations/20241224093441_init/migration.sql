/*
  Warnings:

  - You are about to drop the column `shopId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Jun_Product_order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_userId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "shopId";

-- DropTable
DROP TABLE "Jun_Product_order";

-- DropTable
DROP TABLE "Shop";

-- CreateTable
CREATE TABLE "Jun_Product_Order" (
    "id" TEXT NOT NULL,
    "no" SERIAL NOT NULL,

    CONSTRAINT "Jun_Product_Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jun_Product_WishList" (
    "id" TEXT NOT NULL,
    "no" SERIAL NOT NULL,

    CONSTRAINT "Jun_Product_WishList_pkey" PRIMARY KEY ("id")
);
