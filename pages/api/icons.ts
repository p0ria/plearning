import { searchIcons } from './../../db/repositories/icons.repository';
import { createCategory } from '../../db/repositories/category.repository';
import db from '../../middlewares/db.middleware';

const handler = async (req, res) => {
    console.log(req.query)
    let response;
    switch (req.method) {
        case 'GET':
            response = await searchIcons(req.query.q);
            break;
    }
    res.status(200).send((response && JSON.stringify(response)) || 'OK')
}

export default db(handler)