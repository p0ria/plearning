import dbConnect from '../db/db-connect'

const db = handler => async (req, res) => {
    await dbConnect()
    return handler(req, res)
}

export default db