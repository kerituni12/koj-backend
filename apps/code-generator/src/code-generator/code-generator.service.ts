import { Input } from '@koj/code-gen';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { languageConfigs } from '../utils/language.config';
import saveFolder from '../utils/save-folder.util';
import saveTestcases from '../utils/save-testcase.util';
import { PinoLogger } from 'nestjs-pino';

import { CodeExecutor } from '@koj/code-executor';
import { ChallengeSubmitInput } from '../interfaces/code-submit.interface';

const codeExecutor = new CodeExecutor('oj-executor', process.env.REDIS_URL);

@Injectable()
export class CodeGeneratorService {
  constructor(private readonly logger: PinoLogger) {}
  async saveCode(data, domainId, slug) {
    const inputSchema = {
      name: data.functionName,
      inputs: data.inputs.set,
      structs: data.structs.set,
      output: { type: data.output }
    };
    const inputData = Input.formJson(<any>inputSchema);

    try {
      const basePath = process.env.BASE_PATH;
      const path = `${basePath}/challenges/${domainId}/${slug}`;
      await saveFolder(path);

      const promiseWriteCode = data.languages.set
        .filter((language) => ['cplusplus', 'javascript'].includes(language.id))
        .map((language) =>
          languageConfigs[language.id].gen({ inputData, domainId, slug, path })
        );
      promiseWriteCode.push(
        languageConfigs['output'].gen({ inputData, domainId, slug, path })
      );
      const promiseWriteTestCase = (data.testcases?.set || []).map(
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
      throw new InternalServerErrorException(error.message);
    }
  }

  async submit(data: ChallengeSubmitInput) {
    const { content, functionName, languageId, slug, domainId } = data;
    try {
      const basePath = process.env.BASE_PATH;
      const userId = 'hieunguyen-123';
      const challengePath = `${basePath}/challenges/${domainId}/${slug}`;
      const userSolvePath = `${basePath}/user-solve/${slug}/${userId}`;
      const time = performance.now();
      const result = await codeExecutor.runCode({
        code: languageConfigs[languageId].genSolution(content, functionName),
        language: languageId,
        userSolvePath,
        challengePath
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
}
