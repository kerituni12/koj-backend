/*
  Warnings:

  - You are about to drop the `submission-constest-statistic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "submission-constest-statistic";

-- CreateTable
CREATE TABLE "submission-contest-statistic" (
    "id" SERIAL NOT NULL,
    "contest_id" INTEGER,
    "total_score" INTEGER NOT NULL DEFAULT 0,
    "info" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,

    CONSTRAINT "submission-contest-statistic_pkey" PRIMARY KEY ("id")
);
