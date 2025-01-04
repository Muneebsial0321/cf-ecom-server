-- CreateTable
CREATE TABLE "Coins" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Coins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coins_userId_key" ON "Coins"("userId");

-- AddForeignKey
ALTER TABLE "Coins" ADD CONSTRAINT "Coins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
