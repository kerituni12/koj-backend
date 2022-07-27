// function main(stdin) {
//     let line = 0;
//     const outputSize = Number(stdin[line++]);
//     const output = [];
//     for (let i = 0; i < outputSize; i++) {
//         const j = stdin[line++].split(" ",).map(Number);
//         output.push(j);
//     };
//     return JSON.stringify(output)
// }

// module.exports = { main };

function main(stdin) {
    let line = 0;
    const output = {};
    output.listt = stdin[line++].split(" ",).map(Number);
    return JSON.stringify(output)
}
module.exports = { main };