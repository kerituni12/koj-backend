-- AlterTable
ALTER TABLE "user" ADD COLUMN     "picture" TEXT,
ADD COLUMN     "provider" TEXT NOT NULL DEFAULT 'koj';
