let fs = require('fs');
let command = process.argv[2];
let file = process.argv[3];
let argv4 = process.argv[4];
let messages = {
    write: 'File created.',
    append: 'Append complete.',
    copy: 'Copy complete.',
    delete: 'File deleted.'
}
function fsCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log(messages[command]);
    }
}
let commands = {
    write: function () {
        fs.writeFile(file, argv4, fsCallback);
    },
    append: function () {
        fs.appendFile(file, argv4, fsCallback);
    },
    copy: function () {
        fs.copyFile(file, argv4, fsCallback);
    },
    delete: function () {
        fs.unlink(file, fsCallback);
    }
}
commands[command]();