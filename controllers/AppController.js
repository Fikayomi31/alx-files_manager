const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
    static async getStatus(request, response) {
        response.status(200).json({
            redis: await redisClient.isAlive(),
            db: await dbClient.isAlive()
        });
    }
    static async getStats(request, response) {
        const userNum = await dbClient.nbUsers();
        const fileNum = await dbClient.nbFiles();
        response.statu(200).json({
            users: userNum,
            files: fileNum
        });
    }
}

module.exports = AppController;
