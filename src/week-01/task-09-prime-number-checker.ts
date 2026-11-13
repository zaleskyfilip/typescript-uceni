export {};

const testedNumberInput = process.argv[2];

const EXIT_FAILURE = 1;
const MSG_UNDEFINED_INPUT = 'Input for tested number is mandatory.';
const MSG_INVALID_INPUT = 'Input for tested number must be a valid positive whole number greater than 1.';
const MSG_NUM_NOT_PRIME = `Number ${testedNumberInput} is not a prime number.`;
const MSG_NUM_IS_PRIME = `Number ${testedNumberInput} is indeed a prime number.`;


if (testedNumberInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (testedNumberInput.trim() === '') {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

const testedNumber = Number(testedNumberInput);

if (!Number.isInteger(testedNumber) || testedNumber <= 1) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let dividersCount = 0;
for (let i = 1; i <= testedNumber; i++) {
    if (testedNumber % i === 0) {
        dividersCount++;
    }
    if (dividersCount === 3) {
        console.log(MSG_NUM_NOT_PRIME);
        break;
    }
    if (i === testedNumber) {
        console.log(MSG_NUM_IS_PRIME);
        break;
    }
}