import { Injectable } from "@nestjs/common";

import { PrismaService } from "nestjs-prisma";

import { FindManySubmissionStatisticArgs } from "@koj/generated/submission-statistic/find-many-submission-statistic.args";

export interface SubmissionStatisticWhereCondition {
  id?: number;
  slug_domainId: { slug: string; domainId: number };
}

@Injectable()
export class SubmissionStatisticService {
  constructor(private prisma: PrismaService) {}

  async findMany(args: FindManySubmissionStatisticArgs, select: object) {
    return this.prisma.submissionStatistic.findMany({ ...args, select });
  }
}
