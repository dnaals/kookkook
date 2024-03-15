import { initTy3 } from '../../components/datatype/type';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jsg8579:wjdtmd123!@cluster0.opld0gm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri)

export const test3 = async (type?: string, body?: initTy3) => {
    await client.connect();

    let db, collection, data3
    db = client.db('Kook')
    collection = db.collection('comment')


    switch (type) {
        case "post":
            await collection.insertOne(body);
            break;

        case "detail":
            data3 = await collection.find(body).toArray();
            break;

        case "delete":
            data3 = await collection.deleteOne(body);
            break;

        case 'put':
            await collection.updateOne({ seq: body?.seq }, { $set: body });

            break;
    }

    if (type != 'detail') data3 = await collection.find({}).toArray(); //데이터 모두 가져오기
    client.close();


    return data3;
}