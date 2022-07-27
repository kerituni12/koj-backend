import { PathLike } from 'fs';
import { readdir, readFile } from 'fs/promises';

export async function loopFiles(dir: PathLike): Promise<Array<object>> {
  try {
    const files = await readdir(dir);
    const promisesToKeep: Array<Promise<object>> = [];
    files.forEach((file) =>
      promisesToKeep.push(
        readFile(`${dir}/${file}`, { encoding: 'utf8' }).then(JSON.parse),
      ),
    );
    const result = await Promise.all(promisesToKeep);
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function getOutput(Path: string, type: string): Promise<any> {
  switch (type) {
    case 'show':
      return loopFiles(`${Path}/result/show`);
    case 'hide':
      return loopFiles(`${Path}/result/hide`);
    default:
      return Promise.all([
        loopFiles(`${Path}/result/show`),
        loopFiles(`${Path}/result/hide`),
      ]);
  }
}
