-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL DEFAULT E'',
    "username" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL DEFAULT E'',
    "firstname" TEXT NOT NULL DEFAULT E'',
    "lastname" TEXT NOT NULL DEFAULT E'',
    "status" TEXT NOT NULL DEFAULT E'disabled',
    "role" TEXT NOT NULL DEFAULT E'user',
    "avatar" TEXT,
    "provider" TEXT NOT NULL DEFAULT E'koj',
    "domain_id" INTEGER NOT NULL DEFAULT 0,
    "created_by_id" INTEGER,
    "created_by_username" TEXT,
    "created_by_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "extend_data" JSONB,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_domain_id_key" ON "user"("username", "domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_domain_id_key" ON "user"("email", "domain_id");
