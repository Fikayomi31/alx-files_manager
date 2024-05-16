import dbClient from '../utils/db';
import redisClient from '../utils/redis';

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
  }
};

export default AppController;
