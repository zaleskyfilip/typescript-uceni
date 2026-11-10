export {};
const operatorInput: string | undefined = process.argv[2];
const operand1Input: string | undefined = process.argv[3];
const operand2Input: string | undefined = process.argv[4];
const MSG_UNDEFINED_INPUT: string = 'You must enter all inputs.';
const MSG_INVALID_INPUT: string = 'You must enter all inputs properly. Operand 1 and 2 must be valid numbers and operator must be filled with these and only with these options: (add, sub, mul, div)';
const EXIT_FAILURE: number = 1;
const MSG_DIVIDING_BY_ZERO: string = 'You can not divide any number with zero. Therefore operand2 can not be a 0, if chosen operation is division.';



if (operatorInput === undefined || operand1Input === undefined || operand2Input === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

const operand1: number = Number(operand1Input); 
const operand2: number = Number(operand2Input); 

if (isNaN(operand1) || isNaN(operand2)) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}
let operationResult: number;
switch (operatorInput) {
    case 'add': {
        operationResult = operand1 + operand2;
        break;
    }
    case 'sub': {
        operationResult = operand1 - operand2;
        break;
    }
    case 'mul': {
        operationResult = operand1 * operand2;
        break;
    }
    case 'div': {
        if (operand2 === 0) {
            console.error(MSG_DIVIDING_BY_ZERO);
            process.exit(EXIT_FAILURE);
        }
        operationResult = operand1 / operand2;
        break;
    }
    default: {
        console.error(MSG_INVALID_INPUT);
        process.exit(EXIT_FAILURE);
    }
}
console.log(`Result is ${operationResult}.`);