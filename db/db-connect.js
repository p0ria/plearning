import mongoose from 'mongoose'

const DB_URL = process.env.DB_URL

if (!DB_URL) {
    throw new Error(
        'Please define the DB_URL environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
        }

        cached.promise = mongoose.connect(DB_URL, opts).then((mongoose) => {
            return mongoose
        })
        mongoose.connection
            .once('open', () => console.log('Db connected...'))
            .on('error', error => console.error(error))
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect