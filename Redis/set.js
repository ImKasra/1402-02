const redis = require('redis');
let key = process.argv[2];
let value = process.argv[3];

async function redisCreateController() {
    const client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();
/* ---------------------- */
    try {
        await client.set(key, value);
        console.log('redisCreate successful');
    }
    catch (err) {
        console.log('redis Create error: ', err);
    }
/* ---------------------- */
    await client.disconnect();
}

redisCreateController();