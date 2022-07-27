import path from 'path';

import { mkdir, writeFile } from 'fs/promises';

import decodeBase64 from './decode-base64';

export default async function saveCode(
  folderPath: string,
  fileName: string,
  code: string,
  base64: boolean,
) {
  const folderPromises: Array<Promise<string>> = [];
  folderPromises.push(mkdir(`${folderPath}`, { recursive: true }));
  const folders = ['input', 'output'];
  const status = ['show', 'hide'];
  folders.flatMap((d) =>
    status.forEach((v) =>
      folderPromises.push(mkdir(`${folderPath}/${d}/${v}`, { recursive: true })),
    ),
  );

  await Promise.all(folderPromises);
  const promisesToKeep = [];
  promisesToKeep.push(
    base64
      ? writeFile(path.join(folderPath, fileName), decodeBase64(code))
      : writeFile(path.join(folderPath, fileName), code),
  );

  await Promise.all(promisesToKeep);
  Promise.resolve();
}
