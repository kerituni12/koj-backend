import { writeFile } from "fs/promises";

import { transformInput } from "./transform-input.util";

export default async function saveTestcases({
  path,
  index,
  testcase,
  inputSchema
}) {
  const type = testcase.hidden ? "hide" : "show";
  const inputPath = `${path}/input/${type}/${index}.in`;
  const outputPath = `${path}/output/${type}/${index}.out`;
  const transformInputResult = transformInput(inputSchema, testcase);

  return Promise.all([
    writeFile(inputPath, transformInputResult),
    writeFile(outputPath, testcase.expectedOutput)
  ]);
}
