const { MongoClient } = require('mongodb');

// MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'sportsbook-oddsmaker';
const client = new MongoClient(url);

// Function to insert data into MongoDB
export async function getAllGames() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const collection = db.collection("games");

        const result = await collection.find({}).toArray();

        // console.log('Number of documents inserted:', result.insertedCount);
        return result;
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
    } finally {
        await client.close();
    }
}

export async function getGamesbyIds(ids) {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const collection = db.collection("games");

        const games = await collection.find({ gameId: { $in: ids } }).toArray();

        // console.log('Number of documents inserted:', result.insertedCount);
        return games;
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
    } finally {
        await client.close();
    }
}