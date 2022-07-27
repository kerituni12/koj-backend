/*
  Warnings:

  - You are about to drop the column `problem_id` on the `submission` table. All the data in the column will be lost.
  - You are about to drop the column `problem_id` on the `submission-contest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "submission" DROP COLUMN "problem_id",
ADD COLUMN     "challenge_id" INTEGER;

-- AlterTable
ALTER TABLE "submission-contest" DROP COLUMN "problem_id",
ADD COLUMN     "challenge_id" INTEGER;
