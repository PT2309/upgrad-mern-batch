const { MongoClient } = require('mongodb');

//connection url
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

const dBName = "mongoClientDb";

async function main(){
    await client.connect();
    console.log('Connected to mongodb');
    const db = client.db(dBName);
    const collection = db.collection("testingDocuments");

    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done';
}

main().then(console.log).catch(console.error).finally(()=> client.close());