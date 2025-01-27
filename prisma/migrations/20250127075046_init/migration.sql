-- DropForeignKey
ALTER TABLE "Jun_Product_Order" DROP CONSTRAINT "Jun_Product_Order_productId_fkey";

-- AddForeignKey
ALTER TABLE "Jun_Product_Order" ADD CONSTRAINT "Jun_Product_Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
