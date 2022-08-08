/*
  Warnings:

  - You are about to drop the column `example_testcases` on the `challenge` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username,domain_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "challenge" DROP COLUMN "example_testcases",
ADD COLUMN     "testcases" JSONB[];

-- CreateIndex
CREATE UNIQUE INDEX "user_username_domain_id_key" ON "user"("username", "domain_id");
