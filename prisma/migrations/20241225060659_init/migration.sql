/*
  Warnings:

  - The `totalPrice` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `orderId` to the `Jun_Product_Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Jun_Product_Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "User_Role" AS ENUM ('admin', 'buyer', 'subAdmin');

-- CreateEnum
CREATE TYPE "Order_Status" AS ENUM ('pending', 'processing', 'refunding', 'refunded', 'rejecting', 'delivered');

-- AlterTable
ALTER TABLE "Jun_Product_Order" ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "Order_Status" NOT NULL DEFAULT 'pending',
DROP COLUMN "totalPrice",
ADD COLUMN     "totalPrice" DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "Jun_Product_Order" ADD CONSTRAINT "Jun_Product_Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jun_Product_Order" ADD CONSTRAINT "Jun_Product_Order_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
