export {};
const iterationCeilingInput: string | undefined = process.argv[2];
const EXIT_ERROR: number = 1;
const MSG_INVALID_INPUT: string = "You have to enter all inputs properly.";
const MSG_UNDEFINED_INPUT: string = "You have to enter all requiered inputs.";


if (iterationCeilingInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_ERROR);
}

const iterationCeiling: number = Number(iterationCeilingInput);

if (isNaN(iterationCeiling) || iterationCeiling < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_ERROR);
}

let iterationCounter: number = 0;
do {
    iterationCounter ++
    if (iterationCounter % 2 !== 0) {
        continue
    }
    console.log(iterationCounter);

}while (iterationCounter < iterationCeiling);