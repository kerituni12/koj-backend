export const extension = {
    python: 'py', bash: 'sh', c: 'c', cplusplus: 'cpp', golfscript: 'gs', ruby: 'rb', javascript: 'js', java: 'java', perl: 'pl', swift: 'swift', rust: 'rs', brainfuck: 'bf', o5AB1E: 'abe',
};
export default function findExtension(language: string) {
    let fileExtension = '';
    Object.entries(extension).forEach((entry) => {
        const [key, value] = entry;
        if (key.toLowerCase() === language.toLowerCase()) {
            fileExtension = value;
        }
    });
    return fileExtension;
}
