import { mongoose, jwt, express } from './globalImports.js';
import { jwtSecret, apiUrl, dbName } from './config.js';
const app = express();

const db = async () => {
    try { 
        const conn = await mongoose.connect(apiUrl, {
            dbName: dbName,
        });
        console.log(`Mongo db connected: ${conn.connection.host} ${dbName}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export { db, jwt, express, app, jwtSecret };