// let fs = require('fs');
// let file = process.argv[2];
// let data = process.argv[3];
// function writeFileCallback(x) {
//     if (x) {
//         console.log("Error:", x);
//     }
//     else {
//         console.log("File created.");
//     }
// }
// fs.writeFile(file, data, writeFileCallback);
let fs = require('fs');
let file = process.argv[2];
let data = process.argv[3];
function x(err) {
    if (err) { console.log(err); }
    else { console.log('Complete'); }
}
fs.writeFile(file, data,x)