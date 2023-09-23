import { createClient } from "redis";
import logger from "./logger";
import config from "../config";


let redisClient =createClient({
    url:config.redis.url
    // url:'redis://localhost:6379'
});

redisClient.on('error',(err)=>logger.error('❗RedisError',err));
redisClient.on('connect',(err)=>logger.info('🪫 Redis Connected',err));

//now make the connection
const connect=async():Promise<void> =>{
    await redisClient.connect();
};

//without call the connect we return it where we need to use connect.
export const RedisClient={
    connect
};