export {};
const limitInput: string | undefined = process.argv[2];
const mode: string | undefined = process.argv[3];
const MSG_HIT: string = 'Hit';
const MSG_UNDEFINED_INPUT: string = 'You have to enter limit input as it is required.';
const MSG_INVALID_INPUT: string = 'Input limit must be a valid non-negative number.'; 
const EXIT_ERROR: number = 1;
const FAST_MODE: string = 'fast';
const HIT_GOAL: number = 314;
const HIT_COEFFICIENT: number = 3.14;
const STEP_FAST: number = 2;
const STEP_STANDARD: number = 1;
const ITERATION_STOP: number = 100;



if (limitInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_ERROR);
}

const limit: number = Number(limitInput);

if (isNaN(limit) || limit < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_ERROR);
}

let counter: number = 0;
const computed: number = limit * HIT_COEFFICIENT;
while (counter < ITERATION_STOP) {
    if (computed === HIT_GOAL) {
        console.log(MSG_HIT);
        break;
    }
    
    if (mode === FAST_MODE) {
        counter += STEP_FAST;
    } else {
        counter += STEP_STANDARD;
    }
}

