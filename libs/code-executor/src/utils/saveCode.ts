import path from 'path';
import { mkdir } from 'fs/promises';

import writeToFile from './writeToFile';
import findExtension from './findExtension';

export default async function saveCode(
  folderPath: string,
  code: string,
  language: string
) {
  console.log('solve path');
  const folderPromises: Array<Promise<string>> = [];
  const folders = ['result', 'error', 'output'];
  const status = ['show', 'hide'];

  folders.flatMap((d) =>
    status.forEach((v) =>
      folderPromises.push(mkdir(`${folderPath}/${d}/${v}`, { recursive: true }))
    )
  );

  await Promise.all(folderPromises).catch((error) =>
    console.log('write solution fail', error)
  );
  const extension = findExtension(language);

  await writeToFile(path.join(folderPath, `solution.${extension}`), code);
}
