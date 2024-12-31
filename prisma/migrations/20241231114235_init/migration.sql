-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_catagoryId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "catagoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "Catagory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
