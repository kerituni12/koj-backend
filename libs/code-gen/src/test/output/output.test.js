process.stdin.on("data", data => stdin += data.toString())
    .on("end", () => main(stdin.split("\n")));

function main(stdin) {
    let line = 0;
    const outputSize = Number(stdin[line++]);
    const output = [];
    for (let i = 0; i < outputSize; i++) {
        const j = stdin[line++].split(" ",).map(Number);
        output.push(j);
    };
    console.log(JSON.stringify(output))
    return JSON.stringify(output)
}
let stdin = "";

module.exports = { main };