/*
  Warnings:

  - Added the required column `colour` to the `Jun_Product_Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Jun_Product_Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jun_Product_Order" ADD COLUMN     "colour" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
