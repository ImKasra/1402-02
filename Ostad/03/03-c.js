let fs = require('fs');
let data = process.argv[3];

function unlinkCallback(err) {
    if (err) {
        console.log('ERR: ', err)
    }
    else {
        console.log("File DELETED.")
    }
}

fs.unlink(process.argv[2], unlinkCallback);