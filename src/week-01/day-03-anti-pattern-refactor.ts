export {};

const operation = process.argv[2];
const valueInput = process.argv[3];
let result = 0;

const MSG_UNDEFINED_INPUT = 'Input for value is mandatory.';
const MSG_INVALID_INPUT = 'Input for value must be a valid number.';
const MSG_UNKNOWN_OPERATION = 'Unknown operation';
const DOUBLE_OPTION = 'double';
const TRIPLE_OPTION = 'triple';
const EXIT_FAILURE = 1;

if (valueInput === undefined || valueInput.trim() === '') {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

const value = Number(valueInput);

if (isNaN(value)) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

switch(operation) {
    case DOUBLE_OPTION:
        result = value * 2;
        break;
    case TRIPLE_OPTION:
        result = value * 3;
        break;
    default:
        console.error(MSG_UNKNOWN_OPERATION);
        process.exit(EXIT_FAILURE);
}
for (let i = 1; i <= 3; i++) {
    result += i;
    console.log(`Adding ${i}, current result: ${result}`);
}