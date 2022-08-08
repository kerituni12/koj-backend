/*
  Warnings:

  - The `languages` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `contributors` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `structs` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `solutions` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `types` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `inputs` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `testcases` column on the `challenge` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "challenge" DROP COLUMN "languages",
ADD COLUMN     "languages" JSONB,
DROP COLUMN "contributors",
ADD COLUMN     "contributors" JSONB,
DROP COLUMN "structs",
ADD COLUMN     "structs" JSONB,
DROP COLUMN "solutions",
ADD COLUMN     "solutions" JSONB,
DROP COLUMN "types",
ADD COLUMN     "types" JSONB,
DROP COLUMN "inputs",
ADD COLUMN     "inputs" JSONB,
DROP COLUMN "testcases",
ADD COLUMN     "testcases" JSONB;
