export {};
const baseInput: string | undefined = process.argv[2];
const MSG_UNDEFINED_INPUT: string = 'You have to enter input for base, as it is required.';
const MSG_INVALID_INPUT: string = 'Base input must be a non-negative number.';
const EXIT_FAILURE: number = 1;

if (baseInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

const base: number = Number(baseInput);

if (isNaN(base) || base < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let baseFactorial: number = 1;
for (let i = 1; i <= base; i++) {
    baseFactorial *= i;
}

console.log(`Factorial is ${baseFactorial}.`);