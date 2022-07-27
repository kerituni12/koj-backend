/*
  Warnings:

  - You are about to drop the column `contest_id` on the `submission` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `submission` table. All the data in the column will be lost.
  - You are about to drop the `submission-constest` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "submission" DROP COLUMN "contest_id",
DROP COLUMN "language",
ADD COLUMN     "languageId" INTEGER;

-- DropTable
DROP TABLE "submission-constest";

-- CreateTable
CREATE TABLE "submission-contest" (
    "id" SERIAL NOT NULL,
    "languageId" INTEGER,
    "contest_id" INTEGER,
    "problem_id" INTEGER,
    "code" TEXT NOT NULL,
    "result" JSONB,
    "ip" TEXT,
    "shared" BOOLEAN NOT NULL DEFAULT false,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submission-contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission-constest-statistic" (
    "id" SERIAL NOT NULL,
    "contest_id" INTEGER,
    "total_score" INTEGER NOT NULL DEFAULT 0,
    "info" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,

    CONSTRAINT "submission-constest-statistic_pkey" PRIMARY KEY ("id")
);
