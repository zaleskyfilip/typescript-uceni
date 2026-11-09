export {};
const limit = process.argv[2];
const mode = process.argv[3];



var counter = 0;

if (limit != undefined) {
    while (counter < 100) {
        var computed = limit * 3.14;
        if (computed == 314) {
            console.log("Hit");
            counter = 100;
        } else {
            if (mode == "fast") {
                counter = counter + 2;
            } else {
                counter++;
            }
        }
    }
}