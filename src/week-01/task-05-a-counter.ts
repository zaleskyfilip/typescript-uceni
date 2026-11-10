export {};
const textInput: string | undefined = process.argv[2];
const MSG_UNDEFINED_INPUT: string = 'Text input is mandatory to enter.';
const EXIT_FAILURE: number = 1;
const BIG_A_Validation: string = 'A';
const SMALL_A_Validation: string = 'a';


if (textInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);

}

let aCounter: number = 0;
for (const char of textInput) {
    if (char === BIG_A_Validation || char === SMALL_A_Validation) {
        aCounter += 1;
    }
}
console.log(`In your text input there are ${aCounter} as`);