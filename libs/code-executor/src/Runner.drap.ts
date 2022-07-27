/* eslint-disable @typescript-eslint/indent */
import Docker from "dockerode";
import { performance } from "perf_hooks";
// import del from 'del';
import path from "path";
import { readFile } from "fs/promises";
import { Worker as NodeWorker } from "worker_threads";
import { decodeBase64 } from "@koj/common/utils";
import logger from "./utils/logger";
import { TestCase, Result, Tests } from "./types";
import getOutput from "./utils/getOutput";
import saveCode from "./utils/saveCode";
import { languages } from "./CodeExecutor";

const worker = new NodeWorker(path.resolve(`${__dirname}/transform-worker.js`));
const workerTransform = (output: any[]): any =>
  new Promise((resolve, reject) => {
    worker.on("message", (result) => {
      console.log(
        "🚀 ~ file: Runner.ts ~ line 18 ~ worker.on ~ result",
        result
      );
      resolve(result);
    });
    worker.on("error", (error: any) => {
      reject(error);
    });

    worker.on("exit", (exitCode: any) => {
      console.log(exitCode);
    });
    worker.postMessage(output);
  });
interface RunnerOpts {
  id: string;
  tag: string;
  code: string;
  testCases: TestCase[];
  base64: boolean;
  folderPath: string;
  language: string;
  timeout: number;
}
export default class Runner {
  private docker: Docker;

  constructor(docker: Docker) {
    this.docker = docker;
  }

  async run({
    id,
    tag,
    // code,
    // testCases,
    // base64,
    // folderPath,
    language,
    timeout
  }: RunnerOpts): Promise<Result> {
    // const Paths = await saveCode(folderPath, code, testCases, base64, language);
    const basePath = "/mnt/Data/code1/code-executor1";
    const problemId = "123";
    const userId = "hieunguyen-123";
    const ChallengePaths = `${basePath}/problems/${problemId}`;
    const UserSolvePaths = `${basePath}/user-solve/${problemId}/${userId}`;

    logger.info(`Starting process ${id}`);
    const t0 = performance.now();
    await this.docker.run(
      tag,
      ["bash", "/start.sh", `${timeout}`, "run_test"],
      null,
      {
        HostConfig: {
          // AutoRemove: true,
          Mounts: [
            {
              Source: ChallengePaths,
              Target: "/app",
              Type: "bind"
            },
            {
              Source: UserSolvePaths,
              Target: "/user-solve",
              Type: "bind"
            }
          ]
        }
      }
    );

    const t1 = performance.now();
    logger.info(`Process ${id} completed in ${(t1 - t0) / 1000} seconds`);

    logger.info(language);
    const promisesResult = [];
    promisesResult.push(getOutput(UserSolvePaths, "show"));
    if (["c++"].includes(language.toLocaleLowerCase())) {
      promisesResult.push(
        readFile(`${ChallengePaths}/schema`, { encoding: "utf-8" })
      );
    }
    const [result, schema] = await Promise.all(promisesResult);
    // console.log('🚀 ~ file: Runner.ts ~ line 80 ~ Runner ~ result', result);
    // Paths.forEach((Path) => {
    //   del(Path, {
    //     force: true,
    //   });
    // });
    if (["python"].includes(language.toLocaleLowerCase())) {
      const outputs: any[] = [];
      result.forEach((element: any) => {
        // outputs.push(element.output.split('\n'));
        outputs.push(["2", "2", "2 2", "2", "2 2"]);
      });
      console.log(
        "🚀 ~ file: Runner.ts ~ line 101 ~ Runner ~ outputs",
        outputs
      );

      const transformResult = await workerTransform(outputs);
      console.log(
        "🚀 ~ file: Runner.ts ~ line 107 ~ Runner ~ transformResult",
        transformResult[0]
      );
    }
    result.forEach((element: any) => {
      if (element.hidden === false) {
        // eslint-disable-next-line no-param-reassign
        //  element.expectedOutput = '';
      }
    });

    // console.log(result);
    // const test = ['2', '2', '2 2', '2', '2 2'];
    // const builder = await import('./output');
    // console.log(builder.default(test));
    // const tests: Tests[] = [];
    // for (let i = 0; i < testCases.length; i += 1) {
    //   const expectedOutput = base64
    //     ? decodeBase64(testCases[i].output)
    //     : testCases[i].output;
    //   const obtainedOutput = output[i].toString();
    //   const time = runTime[i].toString().split('\n');
    //   const exitCode = parseInt(exitCodes[i].toString(), 10);

    //   let remarks;
    //   if (exitCode === 124) {
    //     remarks = 'Time limit exceeded';
    //   } else if (exitCode === 0) {
    //     remarks = expectedOutput === obtainedOutput ? 'Pass' : 'Fail';
    //   } else {
    //     remarks = 'Error';
    //   }

    //   tests.push({
    //     input: testCases[i].input,
    //     expectedOutput,
    //     obtainedOutput,
    //     remarks,
    //     exitCode,
    //     error: error[i].toString(),
    //     runTime: (parseInt(time[1], 10) - parseInt(time[0], 10)) / 1000000000,
    //   });
    // }

    const resulta = {
      id,
      tests: []
    } as any;

    return resulta;
  }
}
