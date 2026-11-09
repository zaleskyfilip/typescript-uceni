export {};
const iterationCeilingInput: string | undefined = process.argv[2];

if (iterationCeilingInput === undefined) {
    console.error();
    process.exit();
}

const iterationCeiling: number = Number(iterationCeilingInput);

if (isNaN(iterationCeiling) || iterationCeiling < 0) {
    console.error();
    process.exit();
}

let iterationCounter: number = 0;
do {
    iterationCounter ++
    if (iterationCounter % 2 !== 0) {
        continue
    }
    console.log(iterationCounter);

}while (iterationCounter < iterationCeiling);