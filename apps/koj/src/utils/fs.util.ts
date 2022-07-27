import fs from 'fs/promises'; // promise version of require('fs');

export async function cleanDirectory(directory) {
  return fs
    .readdir(directory)
    .then((files) => Promise.all(files.map((file) => fs.unlink(`${directory}/${file}`))));
}
