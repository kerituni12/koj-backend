-- CreateTable
CREATE TABLE "submission" (
    "id" SERIAL NOT NULL,
    "languageId" TEXT,
    "challenge_id" INTEGER,
    "content" TEXT NOT NULL,
    "result" JSONB,
    "info" JSONB,
    "ip" TEXT,
    "shared" BOOLEAN NOT NULL DEFAULT false,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission-contest" (
    "id" SERIAL NOT NULL,
    "languageId" TEXT,
    "contest_id" INTEGER,
    "challenge_id" INTEGER,
    "content" TEXT NOT NULL,
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
CREATE TABLE "submission-statistic" (
    "id" SERIAL NOT NULL,
    "challenge_id" INTEGER,
    "language_id" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "submit_count" INTEGER NOT NULL DEFAULT 0,
    "info" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "last_submit_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submission-statistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission-contest-statistic" (
    "id" SERIAL NOT NULL,
    "contest_id" INTEGER,
    "info" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,

    CONSTRAINT "submission-contest-statistic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "submission-statistic_created_by_id_challenge_id_key" ON "submission-statistic"("created_by_id", "challenge_id");
