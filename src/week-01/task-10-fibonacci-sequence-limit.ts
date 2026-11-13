export {};

const sequenceLimitInput = process.argv[2];

const EXIT_FAILURE = 1;
const MSG_UNDEFINED_INPUT = 'Input for sequence limit is mandatory.';
const MSG_INVALID_INPUT = 'Input for sequence limit must be a non-negative whole number.';

if(sequenceLimitInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (sequenceLimitInput.trim() === '') {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

const sequenceLimit = Number(sequenceLimitInput);    

if (!Number.isInteger(sequenceLimit) || sequenceLimit < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let penultimateNumOfSequence = 0;
let lastNumOfSequence = 1;

console.log(penultimateNumOfSequence);

if (sequenceLimit === 0) {
    process.exit(0);
}

for (; sequenceLimit >= lastNumOfSequence ;) {
    console.log(lastNumOfSequence)
    lastNumOfSequence = lastNumOfSequence + penultimateNumOfSequence;
    penultimateNumOfSequence = lastNumOfSequence - penultimateNumOfSequence;
}