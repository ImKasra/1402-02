let fs = require('fs');
let file = process.argv[2];
let data = process.argv[3];
function appendFileCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log("Append complete.");
    }
}
fs.appendFile(file, data, appendFileCallback);