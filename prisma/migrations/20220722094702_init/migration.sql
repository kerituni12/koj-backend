/*
  Warnings:

  - You are about to drop the column `total_score` on the `submission-contest-statistic` table. All the data in the column will be lost.
  - You are about to drop the column `total_score` on the `submission-statistic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[created_by_id,challenge_id]` on the table `submission-statistic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "submission-contest-statistic" DROP COLUMN "total_score";

-- AlterTable
ALTER TABLE "submission-statistic" DROP COLUMN "total_score",
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "submission-statistic_created_by_id_challenge_id_key" ON "submission-statistic"("created_by_id", "challenge_id");
