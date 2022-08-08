-- CreateTable
CREATE TABLE "submission-statistic" (
    "id" SERIAL NOT NULL,
    "challenge_id" INTEGER,
    "total_score" INTEGER NOT NULL DEFAULT 0,
    "submitCount" INTEGER NOT NULL DEFAULT 0,
    "info" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,

    CONSTRAINT "submission-statistic_pkey" PRIMARY KEY ("id")
);
