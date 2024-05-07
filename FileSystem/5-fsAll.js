let fs = require('fs');
let command = process.argv[2];
let file = process.argv[3];
let argv4 = process.argv[4];
function writeFileCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log("File created.");
    }
}
function appendFileCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log("Append complete.");
    }
}
function copyFileCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log("Copy completed.");
    }
}
function unlinkCallback(err) {
    if (err) {
        if (err.code === 'EPERM') {
            fs.rmdir(file, rmdirCallback);
        }
        else {
            console.log("Error:", err);
        }
    }
    else {
        console.log("File deleted.");
    }
}
function rmdirCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log("rmdir Successful.");
    }
}
let commands = {
    write: function () {
        fs.writeFile(file, argv4, writeFileCallback);
    },
    append: function () {
        fs.appendFile(file, argv4, appendFileCallback);
    },
    copy: function () {
        fs.copyFile(file, argv4, copyFileCallback);
    },
    delete: function () {
        fs.unlink(file, unlinkCallback);
    }
}
commands[command]();