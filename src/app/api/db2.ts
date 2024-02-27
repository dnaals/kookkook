import { initTy } from '../../components/datatype/type';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jsg8579:wjdtmd123!@cluster0.opld0gm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri)

export const test2 = async (type?: string, body?: initTy) => {
    await client.connect();

    let db, collection, data2
    db = client.db('Kook')
    collection = db.collection('myrecipe')
    console.log(body)

    switch (type) {
        case 'post': await collection.insertOne(body);
            break;

        case 'detail':
            data2 = await collection.find(body).toArray();
            break;

        case 'delete':
            data2 = await collection.deleteOne(body);
            break;

            // case 'put': await collection.updateOne({id:body.id}, {$set:{title:body.name}})
            break;
    }

    if (type != 'detail') data2 = await collection.find({}).toArray(); //데이터 모두 가져오기
    client.close();

    return data2;
}