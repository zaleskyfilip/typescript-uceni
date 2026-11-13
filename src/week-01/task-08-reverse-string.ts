export {};

const EXIT_FAILURE = 1;
const MSG_UNDEFINED_INPUT = 'Input for text is mandatory.';
const MSG_INVALID_INPUT = 'Input text cannot be empty or consist only of whitespace.';

const textInput = process.argv[2];

if (textInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (textInput.trim() === "") {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let reverseText = '';
for (let i = textInput.length - 1; i >= 0; i--) {
    reverseText += textInput[i];
}
console.log(reverseText);

