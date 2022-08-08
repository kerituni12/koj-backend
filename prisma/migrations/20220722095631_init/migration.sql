-- AlterTable
ALTER TABLE "submission-statistic" ADD COLUMN     "last_submit_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
