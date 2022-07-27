import { writeFile } from 'fs/promises';

import { transformInput } from './transform-input.util';

export default async function saveTestcases({ inputSchema, path, testcase, index }) {
  console.log('save testcase');
  const transformInputResult = transformInput(inputSchema, testcase);

  const inputPath = `${path}/input/${testcase.type || 'show'}/${index}.in`;
  const outputPath = `${path}/output/${testcase.type || 'show'}/${index}.out`;

  return Promise.all([
    writeFile(inputPath, transformInputResult),
    writeFile(outputPath, testcase.expectedOutput),
  ]);
}
