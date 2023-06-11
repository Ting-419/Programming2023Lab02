import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1';
const client = new MongoClient(url);

const dbName = 'lab02';

let connection;

try {
    connection = await client.connect();
} catch (e){
    console.error(e)
}

const db = connection.db(dbName);

export default db;