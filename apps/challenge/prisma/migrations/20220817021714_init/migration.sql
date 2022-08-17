/*
  Warnings:

  - You are about to drop the column `categoryId` on the `challenge` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "challenge" DROP COLUMN "categoryId",
ADD COLUMN     "category_id" INTEGER;
