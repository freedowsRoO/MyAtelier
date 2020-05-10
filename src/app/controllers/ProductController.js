import * as Yup from 'yup';

import Product from '../models/Products';

class ProductController {
    async store(req, res) {

        const schema = Yup.object().shape({
            description: Yup.string().required(),
            type: Yup.string().required()
            
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' })
        }

        const { description, type } = await Product.create(req.body);

        return res.json({description, type});
    }
}

export default new ProductController();

