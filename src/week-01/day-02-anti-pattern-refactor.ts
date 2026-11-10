export {};
const inputArg: undefined | string = process.argv[2];
const MSG_INVALID_INPUT: string = 'Invalid input.';
const EXIT_FAILURE: number = 1;
const INPUT_VALIDATION: string = '100';
const CRITICAL_HIT_VALUE: number = 3;
const MSG_CRITICAL_HIT: string = `Critical hit at ${CRITICAL_HIT_VALUE}!`;

if (inputArg !== INPUT_VALIDATION){
    console.log(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let isHighlight: boolean = false;
for (let i = 0; i <= 5; i++) {
    if (i == CRITICAL_HIT_VALUE) {
        isHighlight = true;
    }
    if (isHighlight == true) {
        console.log(MSG_CRITICAL_HIT);
    } else {
        console.log(`Iteration: ${i}`);
    }
}