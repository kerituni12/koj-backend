-- CreateTable
CREATE TABLE "challenge" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "acceptedLanguages" INTEGER[],
    "languages" JSONB,
    "rate" REAL,
    "audience" TEXT NOT NULL DEFAULT E'onlyme',
    "functionName" TEXT,
    "comment_count" INTEGER,
    "contest_id" INTEGER,
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "categoryId" INTEGER,
    "description" TEXT,
    "company_tags" INTEGER[],
    "contributors" JSONB,
    "examples" JSONB,
    "inputs" JSONB,
    "structs" JSONB,
    "types" JSONB,
    "output" TEXT NOT NULL,
    "highlight_solution_count" INTEGER,
    "hint" JSONB,
    "is_favorited" BOOLEAN NOT NULL DEFAULT false,
    "offical_solution_count" INTEGER,
    "testcases" JSONB,
    "difficulty" TEXT NOT NULL DEFAULT E'easy',
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "solutions" JSONB,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topic_tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "domain_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "topic_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChallengeToTopicTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "challenge_slug_domain_id_key" ON "challenge"("slug", "domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ChallengeToTopicTag_AB_unique" ON "_ChallengeToTopicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ChallengeToTopicTag_B_index" ON "_ChallengeToTopicTag"("B");

-- AddForeignKey
ALTER TABLE "_ChallengeToTopicTag" ADD CONSTRAINT "_ChallengeToTopicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "challenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeToTopicTag" ADD CONSTRAINT "_ChallengeToTopicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "topic_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
