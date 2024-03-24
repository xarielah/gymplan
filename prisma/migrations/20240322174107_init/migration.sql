/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "GymPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "GymPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcerciseGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "ExcerciseGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcesriceItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "excerciseGroupId" TEXT NOT NULL,

    CONSTRAINT "ExcesriceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemFields" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "excerciseItemId" TEXT NOT NULL,

    CONSTRAINT "ItemFields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExcerciseGroupToGymPlan" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ExcerciseGroupToGymPlan_AB_unique" ON "_ExcerciseGroupToGymPlan"("A", "B");

-- CreateIndex
CREATE INDEX "_ExcerciseGroupToGymPlan_B_index" ON "_ExcerciseGroupToGymPlan"("B");

-- AddForeignKey
ALTER TABLE "GymPlan" ADD CONSTRAINT "GymPlan_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExcerciseGroup" ADD CONSTRAINT "ExcerciseGroup_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExcesriceItem" ADD CONSTRAINT "ExcesriceItem_excerciseGroupId_fkey" FOREIGN KEY ("excerciseGroupId") REFERENCES "ExcerciseGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemFields" ADD CONSTRAINT "ItemFields_excerciseItemId_fkey" FOREIGN KEY ("excerciseItemId") REFERENCES "ExcesriceItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExcerciseGroupToGymPlan" ADD CONSTRAINT "_ExcerciseGroupToGymPlan_A_fkey" FOREIGN KEY ("A") REFERENCES "ExcerciseGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExcerciseGroupToGymPlan" ADD CONSTRAINT "_ExcerciseGroupToGymPlan_B_fkey" FOREIGN KEY ("B") REFERENCES "GymPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
