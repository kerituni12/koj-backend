export function template(strings, ...keys) {
  return function (...values) {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach(function (key, i) {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  };
}

export const jsTemplate = template`
"use strict";
const ${'functionName'} =  require('/user-solve/solution');

function main(stdin) {
${'ind'}let line = 0;

${'parser'}

${'ind'}const ${'outputName'} = ${'call'}
${'ind'}console.log('@result@');
${'ind'}console.log(JSON.stringify(${'outputName'}));

}

let stdin = "";
process.stdin.on("data", data => stdin += data.toString())
             .on("end", () => main(stdin.split("\\n")));
`;

export const jsTemplateOutput = template`
function main(stdin) {
${'ind'}let line = 0;
${'parser'}
${'ind'}return JSON.stringify(${'outputName'})
}
module.exports = { main };
`;

export const jsTemplateBackup = template`
"use strict";

${'placeholder'}

function main(stdin) {
${'ind'}let line = 0;

${'parser'}
${'ind'}${'placeholderCall'}
}

let stdin = "";
process.stdin.on("data", data => stdin += data.toString())
             .on("end", () => main(stdin.split("\\n")));
`;
