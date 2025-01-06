-- CreateTable
CREATE TABLE "Points" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Points_pkey" PRIMARY KEY ("id")
);
