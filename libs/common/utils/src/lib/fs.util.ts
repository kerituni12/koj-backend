import fs from 'fs/promises';
import PATH from 'path';

const getDirName = PATH.dirname;

export async function cleanDirectory(directory) {
  return fs
    .readdir(directory)
    .then((files) => Promise.all(files.map((file) => fs.unlink(`${directory}/${file}`))));
}

export async function writeFile(path, contents) {
  await fs.mkdir(getDirName(path), { recursive: true });
  await fs.writeFile(path, contents);
}
