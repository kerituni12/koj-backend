import Docker from 'dockerode';
import Bull from 'bull';

import Runner from './Runner';
import Builder from './Builder';

import { RunnerOpts, Result } from './types';
import logger from './utils/logger';
import { ResponseData } from './types';

export default class Worker {
  private runner: Runner;

  private docker: Docker;

  private builder: Builder;

  private queue: Bull.Queue;

  private folderPath?: string;

  constructor(
    name: string,
    redis: string,
    folderPath?: string,
    transformWorkerPath?: string
  ) {
    this.docker = new Docker({ socketPath: '/var/run/docker.sock' });
    this.runner = new Runner(this.docker, transformWorkerPath);
    this.builder = new Builder(this.docker);
    this.queue = new Bull(name, redis, {
      defaultJobOptions: { attempts: 3, timeout: 60000 }
    });
    this.folderPath = folderPath || '/tmp/code-exec';
  }

  private async work(codeOptions: RunnerOpts): Promise<ResponseData> {
    const tag = `${codeOptions.language.toLowerCase()}-runnerx`;

    try {
      const result = await this.runner.run({
        tag,
        ...codeOptions
      });

      return { data: result, error: result.error || null };
    } catch (error) {
      return {
        data: { id: codeOptions.id },
        error
      };
    }
  }

  async build(langs?: Array<string>, architect?: string) {
    await this.builder.build(langs, architect);
  }

  start() {
    this.queue.process(async (job, done) => {
      logger.info(`Received: ${job.data.id}`);
      const result = await this.work(job.data);

      logger.debug(JSON.stringify(result));
      done(null, result);
    });
  }

  pause() {
    this.queue.pause();
  }

  resume() {
    this.queue.resume();
  }

  stop() {
    this.queue.close();
  }
}
