const redis = require('redis');

async function redisConnect(){
    /* Start connection */
    const client = await redis.createClient({
        url: 'redis://127.0.0.1:6379'
    })
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

    /* Write your code here */

    await client.disconnect();
    /* End of connection */
}

redisConnect();