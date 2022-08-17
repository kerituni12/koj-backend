/*
  Warnings:

  - You are about to drop the column `acceptedLanguages` on the `challenge` table. All the data in the column will be lost.
  - You are about to drop the column `functionName` on the `challenge` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "challenge" DROP COLUMN "acceptedLanguages",
DROP COLUMN "functionName",
ADD COLUMN     "accepted_languages" INTEGER[],
ADD COLUMN     "function_name" TEXT;
