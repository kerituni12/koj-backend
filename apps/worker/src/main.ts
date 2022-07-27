import { Worker, languages } from "@koj/code-executor";
import logger from "./logger";

/**
 * name, redis, folderPath, default folderPath is /tmp/code-exec
 * (folderPath will be mounted in container,
 * the code and testcases will be saved here)
 */
const worker = new Worker(
  "myExecutor",
  "redis://127.0.0.1:6379",
  "./transform-worker.js"
);

async function main() {
  logger.info(languages);

  /* array of languages is optional argument */
  await worker.build(["Cplusplus", "Javascript"]);

  worker.start();

  worker.pause();

  worker.resume();

  // worker.stop();
}

main();
