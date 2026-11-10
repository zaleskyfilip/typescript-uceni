export {};
const iterationCeilingInput: string | undefined = process.argv[2];
const EXIT_FAILURE: number = 1;
const MSG_INVALID_INPUT: string = 'Input must be valid non-negative number.';
const MSG_UNDEFINED_INPUT: string = 'You have to enter all required inputs.';


if (iterationCeilingInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

const iterationCeiling: number = Number(iterationCeilingInput);

if (isNaN(iterationCeiling) || iterationCeiling < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let iterationCounter: number = 0;

while (iterationCounter <= iterationCeiling) {
    if (iterationCounter % 2 !== 0) {
        iterationCounter++;
        continue;
    }
    console.log(iterationCounter);
    iterationCounter++;
}