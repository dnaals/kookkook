// const { MongoClient } = require('mongodb');
// const connectUrl = process.env.MONGO_DB;
// const client = new MongoClient(connectUrl);
// const db = client.db("project_kook");
// db.collection("recipe").find();

import { MongoClient } from 'mongodb';

const url: any = process.env.MONGO_DB;
const options: any = { useNewUrlParser: true }
let connectDB: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
    // 개발 중 재실행을 막음
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}

export { connectDB }
