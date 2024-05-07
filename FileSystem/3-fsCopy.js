let fs = require('fs');
let src = process.argv[2];
let dest = process.argv[3];
function copyFileCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log("Copy completed.");
    }
}
fs.copyFile(src, dest, copyFileCallback);