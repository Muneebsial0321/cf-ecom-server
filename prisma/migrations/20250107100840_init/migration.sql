/*
  Warnings:

  - A unique constraint covering the columns `[objId,objType]` on the table `CoinMileStone` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CoinMileStone_objId_objType_key" ON "CoinMileStone"("objId", "objType");
