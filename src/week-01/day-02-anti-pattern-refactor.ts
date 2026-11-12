export {};

const inputArg = process.argv[2];

const MSG_INVALID_INPUT = 'Invalid input.';
const EXIT_FAILURE = 1;
const INPUT_VALIDATION = '100';
const CRITICAL_HIT_VALUE = 3;
const MSG_CRITICAL_HIT = `Critical hit at ${CRITICAL_HIT_VALUE}!`;

if (inputArg !== INPUT_VALIDATION){
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let isHighlight: boolean;
for (let i = 0; i <= 5; i++) {
    isHighlight = false;
    if (i === CRITICAL_HIT_VALUE) {
        isHighlight = true;
    }
    if (isHighlight) {
        console.log(MSG_CRITICAL_HIT);
    } else {
        console.log(`Iteration: ${i}`);
    }
}