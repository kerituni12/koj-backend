/*
  Warnings:

  - You are about to drop the column `submitCount` on the `submission-statistic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "submission-statistic" DROP COLUMN "submitCount",
ADD COLUMN     "language_id" TEXT,
ADD COLUMN     "submit_count" INTEGER NOT NULL DEFAULT 0;
