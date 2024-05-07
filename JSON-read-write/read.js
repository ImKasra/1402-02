const fs=require ('fs');
let file = process.argv[2];

function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(JSON.parse(data));
    }
}

fs.readFile(file, readFileCallback);