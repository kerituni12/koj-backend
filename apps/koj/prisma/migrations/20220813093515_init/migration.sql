-- CreateTable
CREATE TABLE "domain" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL DEFAULT E'none',
    "domainId" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT E'disabled',

    CONSTRAINT "domain_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "casbin_role" (
    "id" SERIAL NOT NULL,
    "ptype" TEXT NOT NULL DEFAULT E'g',
    "role" TEXT,
    "rule" TEXT,
    "domain_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "casbin_role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "casbin_policy_created_by_username_idx" ON "casbin_policy"("created_by_username");

-- CreateIndex
CREATE INDEX "group_created_by_username_idx" ON "group"("created_by_username");

-- CreateIndex
CREATE INDEX "role_created_by_username_idx" ON "role"("created_by_username");
