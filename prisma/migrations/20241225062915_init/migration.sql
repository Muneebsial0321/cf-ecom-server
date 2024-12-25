/*
  Warnings:

  - Added the required column `quantity` to the `Jun_Product_Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jun_Product_Order" ADD COLUMN     "quantity" INTEGER NOT NULL;
