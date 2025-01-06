-- CreateTable
CREATE TABLE "CoinMileStone" (
    "id" TEXT NOT NULL,
    "objType" TEXT NOT NULL,
    "objId" TEXT NOT NULL,
    "mileStone" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoinMileStone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Views" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reelId" TEXT NOT NULL,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Views_userId_reelId_key" ON "Views"("userId", "reelId");

-- AddForeignKey
ALTER TABLE "Views" ADD CONSTRAINT "Views_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Views" ADD CONSTRAINT "Views_reelId_fkey" FOREIGN KEY ("reelId") REFERENCES "Reel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
