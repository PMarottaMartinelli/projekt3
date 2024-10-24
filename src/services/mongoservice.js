
const { MongoClient } = require('mongodb');

// eslint-disable-next-line no-undef
const url = process.env.MONGO_URL || "mongodb://localhost:27017";
console.log("url",url)
const client = new MongoClient(url);

const dbName = 'RezepteDB';

async function leseRezepte() {
    let db, rezeptCollection;
    try{
        await client.connect();
        console.log('Connected successfully to server');
        db = client.db(dbName);
        rezeptCollection = db.collection('Rezepte');
    
        const findResult = await rezeptCollection.find({}).toArray();
        console.log('Found documents =>', findResult);
        return findResult;
    }catch(err){
        console.error(err.stack)
        throw err
    }finally{
        client.close()
    }
}

async function leseDetails(id) {
    let db, rezeptCollection;
    try{
        await client.connect();
        console.log('Connected successfully to server');
        db = client.db(dbName);
        rezeptCollection = db.collection('Rezepte');
    
        const findResult = await rezeptCollection.find({id: parseInt(id)}).toArray();
        console.log('Found documents =>', findResult);
        return findResult [0];
    }catch(err){
        console.error(err.stack)
        throw err
    }finally{
        client.close()
    }
}

async function insertRezept(Rezept) {
    let db, rezeptCollection;
    try{
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        db = client.db(dbName);
        rezeptCollection = db.collection('Rezepte');
        let maxId = db.rezeptCollection.find().sort({id:-1}).limit(1).pretty()
        console.log("vor dem insertMany",maxId)
        Rezept.id = maxId+1 
        //const insertResult = await rezeptCollection.insertMany([ Rezept ]);
        //console.log('insert documents(kursdatum) =>', findResult);
        return insertResult;
    }catch(err){
        console.error(err.stack)
        throw err
    }finally{
        client.close()
    }
}

module.exports = {
    leseRezepte,
    leseDetails,
}