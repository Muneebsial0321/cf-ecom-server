-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discountPercent" INTEGER DEFAULT 0,
ADD COLUMN     "isOnSale" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "saleEndDate" TIMESTAMP(3),
ADD COLUMN     "salePrice" INTEGER;
