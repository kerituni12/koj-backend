import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';

import slugify from 'slugify';
import { Challenge, Prisma } from '@koj-prisma/challenge';
import { PinoLogger } from 'nestjs-pino';
import { performance } from 'perf_hooks';
import { HttpStatus } from '@nestjs/common';
import { PrismaService } from '../challenge.prisma.service';

import { Input } from '@koj/code-gen';
import { CodeExecutor } from '@koj/code-executor';
import { ChallengeSubmitInput } from '@koj/common/dto';
import { FindManyChallengeArgs } from '@koj/common/dto';
import { KChallengeWhereUniqueInput } from '@koj/common/dto';
import { ChallengeCreateInput } from '@koj/generated/challenge/challenge-create.input';
import { ChallengeUpdateInput } from '@koj/generated/challenge/challenge-update.input';

import saveFolder from '../utils/save-folder.util';
import saveTestcases from '../utils/save-testcase.util';
import { languageConfigs } from '../utils/language.config';

const codeExecutor = new CodeExecutor('myExecutor', process.env.REDIS_URL);
export interface ChallengeWhereCondition {
  id?: number;
  slug_domainId: { slug: string; domainId: number };
}

@Injectable()
export class ChallengeService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: PinoLogger
  ) {}
  async create(data: ChallengeCreateInput, select: object) {
    const { domainId, title } = data;
    const slug = slugify(title).toLowerCase();
    console.log(
      '🚀 ~ file: challenge.service.ts ~ line 42 ~ ChallengeService ~ create ~ slug',
      slug
    );

    data.slug = slug;

    await this.saveCode(data, domainId, slug);

    return this.prisma.challenge.create({ data, ...select });
  }

  findMany(args: FindManyChallengeArgs, select: object) {
    return this.prisma.challenge.findMany({ ...args, select });
  }

  async findUniquePublic(where: KChallengeWhereUniqueInput, select: object) {
    const whereCondition = this.getChallengeWhereUnique(where, where.domainId);
    const data = (await this.prisma.challenge.findUnique({
      where: whereCondition,
      select
    })) as Challenge;

    if (!data) {
      throw new NotFoundException({
        message: 'Challenge not exists',
        statusCode: HttpStatus.NOT_FOUND
      });
    }

    (data.testcases as any).forEach(({ id, hidden }, index) => {
      if (hidden) data.testcases[index] = { id, hidden };
    });

    console.log(data.testcases);

    return data;
  }

  async findUnique(where: KChallengeWhereUniqueInput, select: object) {
    const whereCondition = this.getChallengeWhereUnique(where, where.domainId);

    return this.prisma.challenge
      .findUnique({ where: whereCondition, select })
      .then((data) => {
        if (!data) {
          throw new NotFoundException({
            message: 'Challenge not exists',
            statusCode: HttpStatus.NOT_FOUND
          });
        }
        return data;
      });
  }

  async update(
    data: ChallengeUpdateInput,
    where: KChallengeWhereUniqueInput,
    select: object
  ) {
    const { domainId, title } = data;
    const slug = slugify(title).toLowerCase();

    data.updatedAt = new Date().toISOString();

    const checkExistResult = await this.prisma.challenge.findFirst({
      where: {
        NOT: where.id ? { id: where.id } : { slug: where.slug },
        slug,
        domainId
      },
      select: { id: true, title: true, inputs: true, structs: true }
    });

    if (checkExistResult) {
      throw new ConflictException({
        message: 'Challenge is exists',
        statusCode: HttpStatus.CONFLICT
      });
    }

    await this.saveCode(data, domainId, slug);

    const whereCondition = this.getChallengeWhereUnique(where, domainId);
    return this.prisma.challenge.update({
      data,
      where: whereCondition,
      select
    });
  }

  async remove(where: KChallengeWhereUniqueInput, select: object) {
    return this.prisma.challenge.delete({ where, select }).catch((error) => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException();
        }
      }
      throw error;
    });
  }

  // Todo convert to microservice
  async saveCode(data, domainId, slug) {
    const inputSchema = {
      name: data.functionName,
      inputs: data.inputs || [],
      structs: data.structs || [],
      output: { type: data.output }
    };
    const inputData = Input.formJson(<any>inputSchema);

    try {
      const basePath = '/mnt/Data/code1/code-executor1';
      const path = `${basePath}/challenges/${domainId}/${slug}`;
      await saveFolder(path);

      const promiseWriteCode = data.languages
        .filter((language) => ['cplusplus', 'javascript'].includes(language.id))
        .map((language) =>
          languageConfigs[language.id].gen({ inputData, domainId, slug, path })
        );
      promiseWriteCode.push(
        languageConfigs['output'].gen({ inputData, domainId, slug, path })
      );
      const promiseWriteTestCase = (data.testcases || []).map(
        (testcase, index) => {
          return saveTestcases({
            inputSchema: inputData,
            path,
            testcase,
            index
          });
        }
      );

      await Promise.all([...promiseWriteCode, ...promiseWriteTestCase]);
    } catch (error) {
      console.log(
        '🚀 ~ file: challenge.service.ts ~ line 135 ~ ChallengeService ~ saveCode ~ error',
        error
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  async submit(data: ChallengeSubmitInput) {
    const { content, functionName, languageId, challengeId, type, domainId } =
      data;
    console.log(
      '🚀 ~ file: challenge.service.ts ~ line 190 ~ ChallengeService ~ submit ~ type',
      type
    );
    try {
      const basePath = process.env.BASE_PATH;
      const userId = 'hieunguyen-123';
      const challengePath = `${basePath}/challenges/${domainId}/${challengeId}`;
      const userSolvePath = `${basePath}/user-solve/${challengeId}/${userId}`;
      const time = performance.now();
      const result = await codeExecutor.runCode({
        type,
        userSolvePath,
        challengePath,
        language: languageId,
        code: languageConfigs[languageId].genSolution(content, functionName)
      });
      if (result.error) {
        return {
          result: null,
          error: result.error
        };
      }
      this.logger.info(result);
      this.logger.info(`time take : ${(performance.now() - time) / 1000}s`);

      return { result: result.data.tests };
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  private getChallengeWhereUnique(
    { id, slug }: KChallengeWhereUniqueInput,
    domainId: number
  ) {
    if (id) return { id };
    return { slug_domainId: { slug, domainId } };
  }
}
