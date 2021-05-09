import Course from '../../db/schemas/course.schema'
import db from '../../middlewares/db.middleware'

const handler = async (req, res) => {
    await Course.create({ title: 'Hello Mongo' })
    res.status(200).send('OK')
}

export default db(handler)