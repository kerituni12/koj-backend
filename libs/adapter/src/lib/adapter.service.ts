/* eslint-disable @typescript-eslint/no-empty-function */
import { Adapter, Helper, Model } from 'casbin';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Prisma, PrismaClient } from '@koj-prisma/koj';

@Injectable()
export class AdapterService implements Adapter {
  option?: Prisma.PrismaClientOptions;
  prisma: PrismaClient;

  /**
   * @param option It should be PrismaClientOptions or PrismaClient.
   * You should later call open() to activate it.
   */
  constructor(option?: Prisma.PrismaClientOptions | PrismaClient) {
    if (option instanceof PrismaClient) {
      this.prisma = option;
    } else {
      this.option = option;
    }
  }

  async loadPolicy(model: Model): Promise<void> {
    const [policies, roles] = await Promise.all([
      this.prisma.policy.findMany(),
      this.prisma.roleGroup.findMany()
    ]);

    for (const policy of policies) {
      this.loadPolicyLine(policy, model);
    }
    for (const role of roles) {
      this.loadRoleLine(role, model);
    }
  }

  async close(): Promise<unknown> {
    return this.prisma.$disconnect();
  }

  static async newAdapter(
    option?: Prisma.PrismaClientOptions | PrismaClient
  ): Promise<AdapterService> {
    const a = new AdapterService(option);

    try {
      await a.open();
      return a;
    } catch (error) {
      console.log(error);
      // throw new Error('Init Adapter with prisma failed');
    }
  }

  open = async (): Promise<void> => {
    if (!this.option) {
      this.option = {};
    }
    if (!this.prisma) {
      this.prisma = new PrismaClient(this.option);
    }
    await this.prisma.$connect();
  };

  loadPolicyLine = (line: Prisma.PolicyCreateInput, model: Model): void => {
    const result =
      line.ptype +
      ', ' +
      [
        line.subject,
        line.object,
        line.action,
        line.effect,
        line.effectWith,
        line.condition,
        line.domainId
      ].join(', ');
    Helper.loadPolicyLine(result, model);
  };

  loadRoleLine = (line: Prisma.RoleGroupCreateInput, model: Model): void => {
    const result =
      line.ptype +
      ', ' +
      [line.role, line.rule, line.domainId].filter((n) => n).join(', ');
    Helper.loadPolicyLine(result, model);
  };

  //Place holder

  async addPolicy() {}
  async addPolicies() {}
  async updatePolicy() {}
  async updatePolicies() {}
  async removePolicy() {}
  async removeFilteredPolicy() {}

  async savePolicy(): Promise<boolean> {
    return;
  }
}
