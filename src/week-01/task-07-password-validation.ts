export {};

const passwordInput = process.argv[2];

const MSG_UNDEFINED_INPUT = 'Input for password is mandatory.';
const EXIT_FAILURE = 1;
const MSG_PSW_VALID = 'Password is valid.';
const MSG_PSW_INV_MIN_8_CHAR = 'Password is invalid. Password must contain at least 8 characters.';
const MSG_PSW_INV_NO_UPR_LTR = 'Password is invalid. Password must contain at least one upper letter (A-Z).';
const MSG_PSW_INV_NO_NUM = 'Password is invalid. Password must contain at least one number (0-9).';
const MSG_PSW_INV_NO_UPR_LTR_AND_NO_NUM = 'Password is invalid. Password must contain at least one upper letter (A-Z) and one number (0-9).';

if (passwordInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (passwordInput.length < 8) {
    console.error(MSG_PSW_INV_MIN_8_CHAR);
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
    if (numberCheckCompleted && letterCheckCompleted) {
        break;
    }
}


if (letterCheckCompleted && numberCheckCompleted) {
    console.log(MSG_PSW_VALID);
} else if (letterCheckCompleted) {
    console.error(MSG_PSW_INV_NO_NUM);
    process.exit(EXIT_FAILURE);
} else if (numberCheckCompleted) {
    console.error(MSG_PSW_INV_NO_UPR_LTR);
    process.exit(EXIT_FAILURE);
} else {
    console.error(MSG_PSW_INV_NO_UPR_LTR_AND_NO_NUM);
    process.exit(EXIT_FAILURE);
}