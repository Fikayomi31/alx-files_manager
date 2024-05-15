const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  async getStatus(req, res) {
    const rstat = await redisClient.isAlive();
    const dstat = await dbClient.isAlive();
    res.json({redis: rstat, db: dstat });
    
  }

  static async getStats(req, res) {
    const userNum = await dbClient.nbUsers();
    const fileNum = await dbClient.nbFiles();
    res.json({ userNum, fileNum });
    res.end()
  }
};

module.exports = AppController;
