-- CreateTable
CREATE TABLE "submission" (
    "id" SERIAL NOT NULL,
    "language" TEXT,
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

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission-constest" (
    "id" SERIAL NOT NULL,
    "contest_id" INTEGER,
    "total_score" INTEGER NOT NULL DEFAULT 0,
    "info" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,

    CONSTRAINT "submission-constest_pkey" PRIMARY KEY ("id")
);
