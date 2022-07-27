function solution(stdin) {
    let line = 0;
    const outputZSize = Number(stdin[line++]);
    const outputZ = [];
    for (let i = 0; i < outputZSize; i++) {
        const structOutput = {};
        const structOutputListtSize = Number(stdin[line++]);
        structOutput.listt = stdin[line++].split(' ', structOutputListtSize).map(Number);
        outputZ.push(structOutput);
    }
    return (1);
}

module.exports = { solution };
