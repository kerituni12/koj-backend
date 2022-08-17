import { Worker, languages } from '@koj/code-executor';
import logger from './logger';

/**
 * name, redis, folderPath, default folderPath is /tmp/code-exec
 * (folderPath will be mounted in container,
 * the code and testcases will be saved here)
 */
const worker = new Worker(
  'oj-executor',
  process.env.REDIS_URL,
  './transform-worker.js'
);

async function main() {
  logger.info(languages);

  /* array of languages is optional argument */
  const buildLanguages = process.env.LANGUAGES.split(/,\s*/);
  const ignoreBuild = process.env.IGNORE_BUILD;

  if (!ignoreBuild) {
    await worker.build(buildLanguages, process.env.BUILD_ARCHITECT);
  }

  worker.start();

  worker.pause();

  worker.resume();

  // worker.stop();
}

main();
