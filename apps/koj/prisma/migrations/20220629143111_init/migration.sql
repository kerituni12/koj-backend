/*
  Warnings:

  - A unique constraint covering the columns `[username,domain_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,domain_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_username_email_domain_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "user_username_domain_id_key" ON "user"("username", "domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_domain_id_key" ON "user"("email", "domain_id");
