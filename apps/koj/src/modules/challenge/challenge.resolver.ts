import { Inject } from "@nestjs/common";
import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { ClientNats } from "@nestjs/microservices";
import { Resolver, Query, Mutation, Args, Info } from "@nestjs/graphql";

import { RPCTraceClientProxy } from "@koj/instrumentation";
import { KChallengeWhereUniqueInput } from "@koj/common/dto";
import { Challenge } from "@koj/generated/challenge/challenge.model";
import {
  CHALLENGE_FIND_UNIQUE,
  CHALLENGE_FIND_MANY,
  CHALLENGE_FIND_MANY_PUBLIC,
  CHALLENGE_FIND_UNIQUE_PUBLIC
} from "@koj/common/constants";
import { FindManyChallengeArgs } from "@koj/generated/challenge/find-many-challenge.args";

import { DomainId } from "@/decorators/gql-domain-id.decorator";

import { ChallengeMutations } from "./challenge.type";
import { GqlContext } from "@/decorators/gql-context.decorator";

@Resolver(() => Challenge)
export class ChallengeResolver {
  constructor(
    private traceClient: RPCTraceClientProxy,
    @Inject("CHALLENGE_SERVICE") private readonly challengeClient: ClientNats
  ) {}

  @Mutation(() => ChallengeMutations, { name: "challenge", nullable: true })
  challengeMutations() {
    return {};
  }

  @Query(() => [Challenge], { name: "challenges" })
  findMany(
    @Args() args: FindManyChallengeArgs,
    @Info() info: GraphQLResolveInfo,
    @DomainId() domainId
  ) {
    const { select } = new PrismaSelect(info).value;
    args.where = args.where || {};
    args.where.domainId = domainId;
    return this.traceClient.send(this.challengeClient, CHALLENGE_FIND_MANY, {
      args,
      select
    });
  }

  @Query(() => Challenge, { name: "challenge" })
  findUnique(
    @Args("where") where: KChallengeWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
    @DomainId() domainId
  ) {
    const { select } = new PrismaSelect(info).value;
    where.domainId = domainId;
    return this.traceClient.send(this.challengeClient, CHALLENGE_FIND_UNIQUE, {
      where,
      select
    });
  }

  @Query(() => Challenge, { name: "challenge_public" })
  findUniquePublic(
    @Args("where") where: KChallengeWhereUniqueInput,
    @Info() info: GraphQLResolveInfo,
    @DomainId() domainId
  ) {
    console.log(
      "🚀 ~ file: challenge.resolver.ts ~ line 70 ~ ChallengeResolver ~ domainId",
      domainId
    );
    const { select } = new PrismaSelect(info).value;
    where.domainId = domainId;
    return this.traceClient.send(
      this.challengeClient,
      CHALLENGE_FIND_UNIQUE_PUBLIC,
      {
        where,
        select
      }
    );
  }
}
