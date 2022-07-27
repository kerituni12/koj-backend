'use strict';
const custom = require('./solution');

function main(stdin) {
  let line = 0;

  const size = Number(stdin[line++]);
  const aStruct = {};
  aStruct.listt = stdin[line++].split(' ', -1).map(Number);
  const sizex = Number(stdin[line++]);
  const listSize = Number(stdin[line++]);
  const list = [];
  for (let i = 0; i < listSize; i++) {
    const j = stdin[line++].split(' ', -1).map(Number);
    list.push(j);
  }

  const output = custom(size, aStruct, sizex, list);
  console.log('@result@');
  console.log(JSON.stringify(output));
}

let stdin = '';
process.stdin
  .on('data', (data) => (stdin += data.toString()))
  .on('end', () => main(stdin.split('\n')));
