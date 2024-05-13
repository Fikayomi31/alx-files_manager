import { MongoClient } from 'mongodb';

const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'file_manager';

const url = `mongodb://${HOST}:${PORT}`;

class DBClient {
  constructor() {
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connected();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const users = this.db.collection('user');
    const count = await users.countDocuments();
    return count;
  }
  
  async nbFiles() {
    const files = this.db.collection(files);
    const count = await files.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
