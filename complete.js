let http = require('http');
let port = 80;


let fs = require('fs');
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

let server = http.createServer((req, res) => {
    console.log('request method:', req.method);
    console.log('url:', req.url);

    command = req.url.split('/')[1];
    file = req.url.split('/')[2];
    argv4 = req.url.split('/')[3];

    commands[command]();

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
})

server.listen(port);
console.log("server running on port:", port);