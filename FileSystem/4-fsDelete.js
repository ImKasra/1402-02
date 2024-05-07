let fs = require('fs');
let file = process.argv[2];
function unlinkCallback(err) {
    if (err){
        if (err.code === 'EPERM') {
            fs.rmdir(file, rmdirCallback)
        }
        else {
            console.log("err:",err);
        }
    }
    else {
        console.log("successful.");
    }
}

function rmdirCallback (err){
    if (err) {
        console.log("err:",err);
    }
    else {console.log("successful.");}
}

fs.unlink(file, unlinkCallback);