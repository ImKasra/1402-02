const redis = require('redis');
let key = process.argv[2];
// let value = process.argv[3];

async function redisDeleteController() {
    const client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();
/* ---------------------- */
    try {
        await client.del(key);
        console.log('redis delete successful');
    }
    catch (err) {
        console.log('redis delete error: ', err);
    }
/* ---------------------- */
    await client.disconnect();
}
redisDeleteController();
