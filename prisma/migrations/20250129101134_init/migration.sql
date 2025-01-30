/*
  Warnings:

  - You are about to drop the column `icon` on the `Catagory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catagory" DROP COLUMN "icon",
ADD COLUMN     "desc" TEXT;
