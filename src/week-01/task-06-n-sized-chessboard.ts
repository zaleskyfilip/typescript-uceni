export {};

const boardSizeInput = process.argv[2];

const MSG_UNDEFINED_INPUT = 'Input for board size is mandatory.';
const MSG_INVALID_INPUT = 'Input for board size must be a valid positive whole number.';
const EXIT_FAILURE = 1;
const CHAR_EVEN_SQUARE = '#';
const CHAR_ODD_SQUARE = '.';


if (boardSizeInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_FAILURE);
}

const boardSize = Number(boardSizeInput);

if (!Number.isInteger(boardSize) || boardSize <= 0 ) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_FAILURE);
}


for (let i = 0; i < boardSize; i++) {
    let boardRow = '';
    for (let j = 0; j < boardSize; j++) {
            if ((i + j) % 2 === 0) {
                boardRow += CHAR_EVEN_SQUARE;
            } else {
                boardRow += CHAR_ODD_SQUARE;
            }
    }
    console.log(boardRow);
}