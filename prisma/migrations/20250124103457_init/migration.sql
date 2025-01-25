-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('stripe', 'paypal', 'cod');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "extraInfo" TEXT,
ADD COLUMN     "postalCode" TEXT;
