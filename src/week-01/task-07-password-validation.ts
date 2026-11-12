export {};

const passwordInput = process.argv[2];

const MSG_UNDEFINED_INPUT = '';
const MSG_INVALID_INPUT = '';
const EXIT_FAILURE = 1;
const MSG_PASSWORD_VALID = '';

if (passwordInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (passwordInput.length < 8) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let numberCheckCompleted = false;
let letterCheckCompleted = false;
for (const char of passwordInput) {
    if (!letterCheckCompleted && char >= 'A' && char <= 'Z') {
        letterCheckCompleted = true;
    }
    if (!numberCheckCompleted && char >= '0' && char <= '9') {
        numberCheckCompleted = true;
    }
}

if (letterCheckCompleted && numberCheckCompleted) {
    console.log(MSG_PASSWORD_VALID);
} else if (letterCheckCompleted) {

} else if (numberCheckCompleted) {

} else {

}