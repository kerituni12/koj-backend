import Bull from "bull";
import { v4 as uuid } from "uuid";

import logger from "./utils/logger";
import { extension } from "./utils/findExtension";
import { RunnerOpts, ResponseData } from "./types";

const languages = Object.keys(extension);

export default class CodeExecutor {
  private queue: Bull.Queue;

  private jobs: Map<string, { resolve; reject }>;

  constructor(name: string, redis: string) {
    this.queue = new Bull(name, redis);

    this.jobs = new Map();

    this.queue.on("global:completed", (_job: Bull.Job, result: string) => {
      const parseResult = <ResponseData>JSON.parse(result);

      logger.info(`Running on complete for id: ${parseResult.data.id}`);

      const currentJob = this.jobs.get(parseResult.data.id);
      if (currentJob) {
        currentJob.resolve(parseResult);
        this.jobs.delete(parseResult.data.id);
      }
    });
  }

  async runCode(codeOptions: RunnerOpts): Promise<{ data: any; error: any }> {
    const id = uuid();
    const codeObject = { ...codeOptions, id };
    logger.info(`Running code with id: ${id}`);

    return new Promise((resolve, reject) => {
      this.jobs.set(id, { resolve, reject });
      this.queue.add(codeObject);
    });
  }

  stop() {
    this.queue.close();
  }
}

export { default as Worker } from "./Worker";

export { languages };
