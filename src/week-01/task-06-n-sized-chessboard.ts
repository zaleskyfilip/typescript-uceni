export {};

const boardSizeInput = process.argv[2];

const MSG_UNDEFINED_INPUT = '';
const MSG_INVALID_INPUT = '';
const EXIT_FAILURE = '';


if (boardSizeInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

if (boardSizeInput.trim() === "") {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

const boardSize = Number(boardSizeInput);

if (isNaN(boardSize) || boardSize < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}

let boardRow: string;
for (let i = 0; i < boardSize; i++) {
    for (let i = 0; i < boardSize; i++) {

    }

}