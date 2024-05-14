const http = require('http');
const fs = require('fs');
const redis = require('redis');
let command = process.argv[2];
let name = process.argv[3];
let argv4 = process.argv[4];
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
// /-------------------------------/ 
    try {
        await client.set(name, argv4);
        console.log("redis create successful.");
    } catch (err) {
        console.log("redis create error:", err);
    }
// /------------------------------/ 
    await client.disconnect();
}
async function redisDeleteController() {
    const client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

    try {
        await client.del(name);
        console.log("redis delete successful.");
    } catch (err) {
        console.log("redis delete error:", err);
    }

    await client.disconnect();
}
let commands = {
    write: function () {
        fs.writeFile(name, argv4, fsCallback)
    },
    append: function () {
        fs.appendFile(name, argv4, fsCallback)
    },
    copy: function () {
        fs.copyFile(name, argv4, fsCallback)
    },
    delete: function () {
        fs.unlink(name, fsCallback)
    },
    redisCreate: redisCreateController,
    redisDelete: redisDeleteController
}

let server = http.createServer(requestHandler);

function requestHandler(request, response) {
    console.log("Request Method:", request.method);
    console.log("Request URL:", request.url);

    command = request.url.split('/')[1];
    name = request.url.split('/')[2];
    argv4 = request.url.split('/')[3]

    let requestParams = {
        command: command,
        name: name,
        argv4: argv4
    }

    try {
        commands[command](requestParams, response)
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.write(messages[command]);
        response.end();
    } catch (error) {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.write("Error:", error);
        response.end();
    }
}

server.listen(port);
console.log("Server is running on port:", port);