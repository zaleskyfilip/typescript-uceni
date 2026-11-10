export{};
const limitInput: string | undefined = process.argv[2];
const mode: string | undefined = process.argv[3];
const MSG_HIT: string = "Hit";
const MSG_UNDEFINED_INPUT: string = "You have to enter all required inputs";
const MSG_INVALID_INPUT: string = "You have to enter all inputs properly"; 
const EXIT_ERROR: number = 1;
const FAST_MODE: string = "fast";
const HIT_GOAL: number = 314;
const HIT_COEFICIENT: number = 3.14;


if (limitInput === undefined) {
    console.error(MSG_UNDEFINED_INPUT);
    process.exit(EXIT_ERROR);
}

const limit: number = Number(limitInput);

if (isNaN(limit) || limit < 0) {
    console.error(MSG_INVALID_INPUT);
    process.exit(EXIT_ERROR);
}
let counter: number = 0;
let computed: number;
while (counter < 100){
    computed = limit * (HIT_COEFICIENT);
    if (computed === HIT_GOAL) {
        console.log(MSG_HIT);
        break;
    }

    if (mode === FAST_MODE) {
        counter += 2;
    } else {
        counter ++;
    }


}

