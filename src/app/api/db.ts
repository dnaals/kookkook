import { initTy } from '../../components/datatype/type';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jsg8579:wjdtmd123!@cluster0.opld0gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri)


export const test = async (type?: string, body?: initTy) => {
    await client.connect();
    

    let db, collection, data
    db = client.db('Kook')
    collection = db.collection('kookrecipe')
    

    switch (type) {
        case 'post': await collection.insertOne(body);
            break;

        case 'detail':
            data = await collection.find(body).toArray();
            break;

        case 'delete':
            data = await collection.deleteOne(body);
            break;

        case 'put':
            await collection.updateOne({seq:body?.seq}, {$set:body});
    }

    if (type != 'detail') data = await collection.find({}).toArray(); //데이터 모두 가져오기
    client.close();

    return data;
}



