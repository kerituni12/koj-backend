-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL DEFAULT E'',
    "firstname" TEXT NOT NULL DEFAULT E'',
    "lastname" TEXT NOT NULL DEFAULT E'',
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "role" TEXT NOT NULL DEFAULT E'user',
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "extend_data" JSONB,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "domain" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL DEFAULT E'none',
    "status" TEXT NOT NULL DEFAULT E'disabled',

    CONSTRAINT "domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    "domain_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "challenge" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "acceptedLanguages" INTEGER[],
    "languages" JSONB[],
    "rate" REAL,
    "audience" TEXT NOT NULL DEFAULT E'onlyme',
    "functionName" TEXT,
    "comment_count" INTEGER,
    "contest_id" INTEGER,
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "categoryId" INTEGER,
    "description" TEXT,
    "company_tags" INTEGER[],
    "contributors" JSONB[],
    "examples" JSONB,
    "params" JSONB[],
    "structs" JSONB[],
    "output" TEXT NOT NULL,
    "highlight_solution_count" INTEGER,
    "hint" JSONB,
    "is_favorited" BOOLEAN NOT NULL DEFAULT false,
    "offical_solution_count" INTEGER,
    "example_testcases" JSONB[],
    "difficulty" TEXT NOT NULL DEFAULT E'easy',
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "solutions" JSONB[],
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "domain_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "language" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "status_id" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT E'common',

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'none',
    "key" TEXT NOT NULL DEFAULT E'none',
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "description" TEXT,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL DEFAULT E'none',
    "name" TEXT NOT NULL DEFAULT E'none',
    "description" TEXT,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casbin_policy" (
    "id" SERIAL NOT NULL,
    "ptype" TEXT NOT NULL DEFAULT E'p',
    "subject" TEXT NOT NULL DEFAULT E'none',
    "object" TEXT NOT NULL DEFAULT E'none',
    "action" TEXT NOT NULL DEFAULT E'none',
    "effect" TEXT NOT NULL DEFAULT E'allow',
    "effect_with" TEXT NOT NULL DEFAULT E'organize',
    "condition" TEXT,
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "casbin_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casbin_role" (
    "id" SERIAL NOT NULL,
    "ptype" TEXT NOT NULL DEFAULT E'g',
    "role" TEXT,
    "rule" TEXT,
    "domain_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "casbin_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChallengeToTopicTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "challenge_slug_domain_id_key" ON "challenge"("slug", "domain_id");

-- CreateIndex
CREATE INDEX "group_created_by_username_idx" ON "group"("created_by_username");

-- CreateIndex
CREATE INDEX "role_created_by_username_idx" ON "role"("created_by_username");

-- CreateIndex
CREATE INDEX "casbin_policy_created_by_username_idx" ON "casbin_policy"("created_by_username");

-- CreateIndex
CREATE UNIQUE INDEX "_ChallengeToTopicTag_AB_unique" ON "_ChallengeToTopicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ChallengeToTopicTag_B_index" ON "_ChallengeToTopicTag"("B");

-- AddForeignKey
ALTER TABLE "_ChallengeToTopicTag" ADD CONSTRAINT "_ChallengeToTopicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "challenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeToTopicTag" ADD CONSTRAINT "_ChallengeToTopicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "topic_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
