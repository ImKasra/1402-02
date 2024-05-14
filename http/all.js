const http = require('http');
const fs = require('fs');
const redis = require('redis');
let port = 80;
let messages = {
    write: 'File created.',
    append: 'Append complete.',
    copy: 'Copy complete.',
    delete: 'File deleted.',
    redisCreate: 'Redis create successful.',
    redisDelete: 'Redis delete successful.'
}
function fsCallback(err) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log(messages[command]);
    }
}
async function redisCreateController() {
    const client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

    try {
        await client.set(file, argv4);
        console.log("redis create successful.");
    } catch (err) {
        console.log("redis create error:", err);
    }

    await client.disconnect();
}
async function redisDeleteController() {
    const client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

    try {
        await client.del(file);
        console.log("redis delete successful.");
    } catch (err) {
        console.log("redis delete error:", err);
    }

    await client.disconnect();
}
let commands = {
    write: function () {
        fs.writeFile(file, argv4, fsCallback)
    },
    append: function () {
        fs.appendFile(file, argv4, fsCallback)
    },
    copy: function () {
        fs.copyFile(file, argv4, fsCallback)
    },
    delete: function () {
        fs.unlink(file, fsCallback)
    },
    redisCreate: redisCreateController,
    redisDelete: redisDeleteController
}
let server = http.createServer((req, res) => {
    console.log("Request method:", req.method);
    console.log("Request URL:", req.url);
    command = req.url.split('/')[1];
    file = req.url.split('/')[2];
    argv4 = req.url.split('/')[3];
    try {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.write(messages[command]);
        res.end();
    } catch (error) { }
    commands[command]();
})
server.listen(port);
console.log("Server is running on port:", port);