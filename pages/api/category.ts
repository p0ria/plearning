import { createCategory } from '../../db/repositories/category.repository';
import db from '../../middlewares/db.middleware';

const handler = async (req, res) => {
    let response;
    switch (req.method) {
        case 'POST':
            response = await createCategory(req.body);
            break;
    }
    res.status(200).send((response && JSON.stringify(response)) || 'OK')
}

export default db(handler)