import dbConnection from '../db/db-connection'

const db = handler => async (req, res) => {
    await dbConnection()
    return handler(req, res)
}

export default db