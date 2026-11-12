export {};

const textInput = process.argv[2];

const MSG_UNDEFINED_INPUT = 'Text input is mandatory to enter.';
const EXIT_FAILURE = 1;
const LETTER_A_UPPER = 'A';
const LETTER_A_LOWER = 'a';


if (textInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

let aCounter = 0;
for (const letter of textInput) {
    if (letter === LETTER_A_UPPER || letter === LETTER_A_LOWER) {
        aCounter++;
    }
}
console.log(`In your text input there are ${aCounter} a's`);  