/* eslint-disable @typescript-eslint/indent */
import Docker from "dockerode";
import { performance } from "perf_hooks";
// import del from 'del';
import { Worker as NodeWorker } from "worker_threads";
import logger from "./utils/logger";
import { Result, RunnerOpts } from "./types";
import getOutput from "./utils/getOutput";
import saveCode from "./utils/saveCode";
import streams from "memory-streams";
import { RUN_ALL, RUN_SUBMIT, RUN_TEST } from "@koj/common/constants";

export default class Runner {
  private docker: Docker;
  private worker: NodeWorker;

  constructor(docker: Docker, workerPath) {
    this.docker = docker;
    this.worker = new NodeWorker(
      workerPath || `${__dirname}/transform-worker.js`
    );
  }

  async run({
    id,
    tag,
    code,
    language,
    timeout = 2,
    userSolvePath,
    challengePath,
    type = RUN_TEST
  }: RunnerOpts): Promise<Result> {
    await saveCode(userSolvePath, code, language);

    logger.info(`Starting process ${id}`);
    const t0 = performance.now();
    const testcaseType = type === RUN_TEST ? "show" : "all";

    const stdout = new streams.WritableStream();
    const stderr = new streams.WritableStream();
    const { error } = await this.docker
      .run(
        tag,
        ["bash", "/start.sh", `${timeout}`, `${type}`],
        [stdout, stderr],
        {
          Tty: false,
          HostConfig: {
            AutoRemove: true,
            Mounts: [
              {
                Source: challengePath,
                Target: "/app",
                Type: "bind"
              },
              {
                Source: userSolvePath,
                Target: "/user-solve",
                Type: "bind"
              }
            ]
          }
        }
      )
      .then(function (data) {
        const error = stderr.toString();
        return { error: error || null };
      })
      .catch(function (error) {
        return { error };
      });

    if (error) {
      return { id, error };
    }

    const t1 = performance.now();
    logger.info(`Process ${id} completed in ${(t1 - t0) / 1000} seconds`);
    logger.info(language);

    if (["cplusplus"].includes(language.toLowerCase())) {
      const userOutputs = [];
      const outputs = await this.getOutPut(userSolvePath, testcaseType);

      outputs.forEach((element: any, index: number) => {
        if (!element.error) {
          return userOutputs.push({
            id: index,
            value: element.output.split("\n")
          });
        }
        element.result = false;
      });

      const transformResult = await this.workerTransform(
        userOutputs,
        challengePath
      );

      transformResult.forEach((element) => {
        outputs[element.id].output = element.value;
      });

      const info = this.modifyAndGetInfoResult(outputs);
      return { id, result: outputs, info };
    }

    const userOutputs = [];
    const outputs = await this.getOutPut(userSolvePath, testcaseType);

    outputs.forEach((element: any, index: number) => {
      if (!element.error) {
        return userOutputs.push({
          id: index,
          value: element.output.split("\n")
        });
      }
      element.result = false;
    });

    console.log("result ", outputs);
    const info = this.modifyAndGetInfoResult(outputs);
    return { id, result: outputs, info };
  }

  // Mutate data
  modifyAndGetInfoResult(outputs) {
    const testcaseCount = outputs.length;
    let testcasePassCount = 0;
    let score = 0;
    let totalScore = 0;

    outputs.forEach((element, index) => {
      totalScore += element.totalScore || 0;
      if (element.output === element.expectedOutput) {
        element.result = true;
        testcasePassCount++;
        score += element.score || 0;
      } else {
        element.message = "wrong";
        element.result = false;
      }

      if (element.hidden) {
        element.expectedOutput = "";
        element.message = "";
      }
    });

    return { testcaseCount, testcasePassCount, score, totalScore };
  }

  async getOutPut(userSolvePath, testcaseType) {
    const outPutPromises = [];

    outPutPromises.push(getOutput(userSolvePath, "show"));
    if (testcaseType === "all") {
      outPutPromises.push(getOutput(userSolvePath, "hide"));
    }

    const result = await Promise.all(outPutPromises);
    return result.flat(1);
  }

  workerTransform(outputs: any[], challengePath): any {
    return new Promise((resolve, reject) => {
      this.worker.on("message", (result) => {
        resolve(result);
      });
      this.worker.on("error", (error: any) => {
        reject(error);
      });
      this.worker.on("exit", (exitCode: any) => {
        console.log(exitCode);
      });
      this.worker.postMessage({
        outputs: outputs,
        path: challengePath
      });
    });
  }
}
