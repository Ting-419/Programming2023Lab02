import db from '../db/mongodb.mjs';

const collection = db.collection('users');

const getAll = async () => {
    let cursor = collection.find({});
    const result = await cursor.toArray();
    return result;
}

const getOne = async (firstName) => {
   let user = collection.findOne({firstName});
    return user;
}

const save = async (data) => {
    let saved = await collection.insertOne(data);
    return saved;
}

export{
    getAll,
    getOne,
    save
}