const redis = require('redis');
let command = process.argv[2];
let key = process.argv[3];
let value = process.argv[4];

async function redisCreateController() {
    let client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

    try {
        await client.set(key, value);
        console.log("redis create successful.");
    } catch (err) {
        console.log("redis create error:", err);
    }

    await client.disconnect();
}

async function redisDeleteController() {
    client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

    try {
        await client.del(key);
        console.log("redis delete successful.");
    } catch (err) {
        console.log("redis delete error:", err);
    }

    await client.disconnect();
}

let commands = {
    redisCreate: redisCreateController,
    redisDelete: redisDeleteController
}
commands[command]();