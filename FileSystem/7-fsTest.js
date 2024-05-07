let fs = require('fs');
let command = process.argv[2];
let file = process.argv[3];
let argv4 = process.argv[4];

let commands = {
    write: writeFileController,
    append: appendFileController,
    copy: copyFileController,
    delete: unlinkController
}

commands[command](file, argv4);

function writeFileController(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            console.log("File created.");
        }
    });
}

function appendFileController(fileName, data) {
    fs.appendFile(fileName, data, function (err) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            console.log("Append successful.");
        }
    });
}

function copyFileController(src, dest) {
    fs.copyFile(src, dest, function (err) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            console.log("Copy successful.");
        }
    });
}

function unlinkController(filename) {
    fs.unlink(filename, function (err) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            console.log("File Deleted.");
        }
    });
}

// fs.writeFile("test.txt", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });

// fs.copyFile("hello.txt", "test.txt", (err) => {
//     if (err) throw err;
//     console.log("copy successful.");
// });