import { template } from '@/utils/common.util';

export const jsTemplate = template`
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
