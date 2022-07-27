/*
  Warnings:

  - You are about to drop the column `params` on the `challenge` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "challenge" DROP COLUMN "params",
ADD COLUMN     "inputs" JSONB[];
