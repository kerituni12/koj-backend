/*
  Warnings:

  - A unique constraint covering the columns `[username,email,domain_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_email_key";

-- DropIndex
DROP INDEX "user_username_domain_id_key";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "email" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "user_username_email_domain_id_key" ON "user"("username", "email", "domain_id");
