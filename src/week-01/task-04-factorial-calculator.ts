export {};

const baseInput = process.argv[2];

const MSG_UNDEFINED_INPUT = 'You have to enter input for base, as it is required.';
const MSG_INVALID_INPUT = 'Base input must be a non-negative whole number.';
const EXIT_FAILURE = 1;

if (baseInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (baseInput.trim() === "") {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

const base = Number(baseInput);

if (isNaN(base) || base < 0 || !Number.isInteger(base)) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let baseFactorial = 1;
for (let i = 1; i <= base; i++) {
    baseFactorial *= i;
}

console.log(`Factorial is ${baseFactorial}.`);