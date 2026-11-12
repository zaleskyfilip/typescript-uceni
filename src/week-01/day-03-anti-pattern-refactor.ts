const operation = process.argv[2];
const val = Number(process.argv[3]);
let result = 0;

const errorLog = "Unknown operation";

switch(operation) {
    case "double":
        result = val * 2;
    case "triple":
        result = val * 3;
        break;
    default:
        console.log(errorLog);
}

for (let i = 1; i <= 3; i++) {
    result = result + i;
    console.log(`Adding ${i}, current result: ${result}`);
}