import {
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';

import { Prisma } from '@koj-prisma/submission';
import { PinoLogger } from 'nestjs-pino';
import { performance } from 'perf_hooks';
import { HttpStatus } from '@nestjs/common';
import { PrismaService } from '../submission.prisma.service';

import { Input } from '@koj/code-gen';
import { CodeExecutor } from '@koj/code-executor';
import { ChallengeSubmitInput, ChallengeSubmitResult } from '@koj/common/dto';
import { SubmissionCreateInput } from '@koj/generated/submission/submission-create.input';
import { FindManySubmissionArgs } from '@koj/generated/submission/find-many-submission.args';

import saveFolder from '../utils/save-folder.util';
import saveTestcases from '../utils/save-testcase.util';
import { languageConfigs } from '../utils/language.config';
import { KSubmissionWhereUniqueInput } from '../dto/submission-where-unique.input';
import { RUN_SUBMIT, RUN_TEST } from '@koj/common/constants';
import { decodeBase64, encodeBase64 } from '@koj/common/utils';

const codeExecutor = new CodeExecutor('oj-executor', process.env.REDIS_URL);
export interface SubmissionWhereCondition {
  id?: number;
  slug_domainId: { slug: string; domainId: number };
}

@Injectable()
export class SubmissionService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: PinoLogger
  ) {}

  async create(data: SubmissionCreateInput, select: object) {
    const { domainId, challengeId } = data;
    await this.saveCode(data, domainId, challengeId);
    return this.prisma.submission.create({ data, ...select });
  }

  findManyByUser(args: FindManySubmissionArgs, select: object) {
    return this.prisma.submission.findMany({ ...args, select });
  }

  async findUnique(where: KSubmissionWhereUniqueInput, select: object) {
    return this.prisma.submission.findUnique({ where, select }).then((data) => {
      if (!data) {
        throw new NotFoundException({
          message: 'Submission not exists',
          statusCode: HttpStatus.NOT_FOUND
        });
      }
      return data;
    });
  }

  async remove(where: KSubmissionWhereUniqueInput, select: object) {
    return this.prisma.submission.delete({ where, select }).catch((error) => {
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
        '🚀 ~ file: submission.service.ts ~ line 135 ~ SubmissionService ~ saveCode ~ error',
        error
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  // async runTest(data: ChallengeSubmitInput) {
  //   const { content, functionName, languageId, slug, domainId } = data;
  //   try {
  //     const basePath = process.env.BASE_PATH;
  //     const userId = "hieunguyen-123";
  //     const challengePath = `${basePath}/challenges/${domainId}/${slug}`;
  //     const userSolvePath = `${basePath}/user-solve/${domainId}/${slug}/${userId}`;
  //     const time = performance.now();
  //     const result = await codeExecutor.runCode({
  //       code: languageConfigs[languageId].genSolution(content, functionName),
  //       language: languageId,
  //       userSolvePath,
  //       challengePath,
  //       type: RUN_TEST
  //     });
  //     if (result.error) {
  //       return {
  //         result: null,
  //         error: result.error
  //       };
  //     }
  //     this.logger.info(result);
  //     this.logger.info(`time take : ${(performance.now() - time) / 1000}s`);

  //     return { result: result.data.tests };
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // }

  async submit(data: ChallengeSubmitInput, context) {
    const { content, functionName, languageId, challengeId, slug, type } = data;
    const { createdById, createdByUsername, domainId } = context.data;

    try {
      const basePath = process.env.BASE_PATH;
      const challengePath = `${basePath}/challenges/${domainId}/${slug}`;
      const userSolvePath = `${basePath}/user-solve/${domainId}/${slug}/${createdByUsername}`;
      const code = languageConfigs[languageId].genSolution(
        decodeBase64(content),
        functionName
      );
      const time = performance.now();
      const result = await codeExecutor.runCode({
        code,
        type,
        userSolvePath,
        challengePath,
        language: languageId
      });
      const response: ChallengeSubmitResult = { result: null, error: null };

      if (result.error) {
        response.error = result.error;
      } else {
        response.result = result.data.result;
        response.info = result.data.info;
      }

      if (type === RUN_SUBMIT) {
        const data = {
          content,
          domainId,
          languageId,
          createdById,
          challengeId,
          result: response,
          createdByUsername,
          info: response.info || {}
        };

        this.saveSubmit(data);
        this.saveStatistic(data);
      }

      this.logger.info(result);
      this.logger.info(`time take : ${(performance.now() - time) / 1000}s`);

      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async saveSubmit(data) {
    await this.prisma.submission.create({ data });
  }

  async saveStatistic(data) {
    const { result, info, content, ...baseData } = data;
    baseData.submitCount = 1;
    await this.prisma.submissionStatistic.upsert({
      where: {
        createdById_challengeId: {
          createdById: baseData.createdById,
          challengeId: baseData.challengeId
        }
      },
      update: {
        score: info.score,
        submitCount: { increment: 1 },
        languageId: baseData.languageId,
        lastSubmitTime: new Date().toISOString()
      },
      create: baseData
    });
  }
}
