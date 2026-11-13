export {};

const inputStatus = process.argv[2];
const inputValue = process.argv[3];

const EXIT_FAILURE = 1;
const MSG_UNDEFINED_INPUT = 'Both inputs are mandatory.';
const MSG_EMPTY_STATUS = 'Status input must not be empty.';
const MSG_INVALID_VALUE = 'Input value must be a valid positive number.';  

if (inputStatus === undefined || inputValue === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (inputStatus.trim() === '') {
    console.error(MSG_EMPTY_STATUS);
    process.exit(EXIT_FAILURE);
}

const value = Number(inputValue);

if (isNaN(value) || value <= 0) {
    console.error(MSG_INVALID_VALUE);
    process.exit(EXIT_FAILURE);
}

console.log(`Status: ${inputStatus}, Value: ${inputValue}`);