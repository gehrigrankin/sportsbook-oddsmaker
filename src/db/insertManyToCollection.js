const { MongoClient } = require('mongodb');

// MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'sportsbook-oddsmaker';
const client = new MongoClient(url);

// Function to insert data into MongoDB
export async function insertManyToCollection(table, data) {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);
        const collection = db.collection(table);

        // Insert the data into the 'games' collection
        const insertResult = await collection.insertMany(data);
        console.log('Number of documents inserted:', insertResult.insertedCount);
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
    } finally {
        await client.close();
    }
}