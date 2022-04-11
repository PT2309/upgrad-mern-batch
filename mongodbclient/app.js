const { MongoClient } = require('mongodb');

//connection url
const url = 'mongodb://localhost:2701'
const client = new MongoClient(url);

const dBName = "moviesdb";

async function main(){
    await client.connect();
    console.log('Connected to mongodb');
    const db = client.db(dBName); 
    const collection = db.collection("songs");

    // const insertResult = await collection.insertMany([{ songName: 'Abc' },{ songName: 'xyz' } ]);
    // console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({songName: 'Abc'}).toArray();
    console.log('Found documents =>', findResult);

    return 'done';
}

main().then(console.log).catch(err => console.error(err)).finally(()=> client.close());