export {};

const passwordInput = process.argv[2];

const MSG_UNDEFINED_INPUT = '';
const MSG_INVALID_INPUT = '';
const EXIT_FAILURE = '';

if (passwordInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (passwordInput.length < 8) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

for (const char of passwordInput) {
    if (true) {

    }

}
