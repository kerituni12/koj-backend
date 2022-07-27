/*
  Warnings:

  - You are about to drop the column `code` on the `submission` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `submission-contest` table. All the data in the column will be lost.
  - Added the required column `content` to the `submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `submission-contest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "submission" DROP COLUMN "code",
ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "languageId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "submission-contest" DROP COLUMN "code",
ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "languageId" SET DATA TYPE TEXT;
