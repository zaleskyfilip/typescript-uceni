export {};
const ageInput: undefined | string = process.argv[2];
const grossIncomeInput: undefined | string = process.argv[3];
const MSG_UNDEFINED_INPUT: string = 'You have to enter all required inputs.';
const MSG_INVALID_INPUT: string = 'You have to enter all inputs properly.';
const MSG_TOO_YOUNG_FOR_TAXES: string = 'You are under 18, so you have no obligation to pay taxes.';
const EXIT_FAILURE: number = 1;
const THRESHOLD_TAX_AGE: number = 18;
const TAX_RATE_STANDARD: number = 0.15;
const TAX_RATE_INCREASED: number = 0.23;
const INCOME_TAX_THRESHOLD: number = 30000;

if (ageInput === undefined || grossIncomeInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

const age: number = Number(ageInput);
const grossIncome: number = Number(grossIncomeInput);

if (isNaN(age) || isNaN(grossIncome) || age < 0 || grossIncome < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
} 

if (age < THRESHOLD_TAX_AGE) {
    console.error(MSG_TOO_YOUNG_FOR_TAXES);
    process.exit(EXIT_FAILURE);
} 

let netIncome: number;
let taxes: number;

if (grossIncome <= INCOME_TAX_THRESHOLD) {
    taxes = grossIncome * TAX_RATE_STANDARD;
    netIncome = grossIncome - taxes;
} else {
    taxes = (INCOME_TAX_THRESHOLD * TAX_RATE_STANDARD) + ((grossIncome - INCOME_TAX_THRESHOLD) * TAX_RATE_INCREASED);
    netIncome = grossIncome - taxes;
}

console.log(`You are obligated to pay ${taxes} in your this year's taxes. And your net income for this year is ${netIncome}.`)