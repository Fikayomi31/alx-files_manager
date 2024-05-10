import { redis } from 'redis';
import { promisify } from 'util';

class RedisClient {
	constructor() {
		this.client = redis.createClient();
		this.client.on('error', (err) => {
			console.error('Error connecting to Redis:', err);
		});
	}
	isAlive() {
		return this.client.connected;
	}
	async get(key, value, duration) {
		const gt = promisify(this.client.get).bind(this.client);
		return gt(key);
	}
	async set(key, value, duration) {
		const st = promisify(this.client.set).bind(this.client);
		return st(key, value, "EX", duration);
	}
	async del(key) {
		const dlt = promisify(this.client.del).bind(this.client);
		return dlt(key);
	}

}
const redisClient = RedisClient();
export default redisClient;

