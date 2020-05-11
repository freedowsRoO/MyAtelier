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

        const { description, type } = await Product.create(req.body)
        .then(function(product) {
            // you can now access the newly created task via the variable task
            return res.json({product});
        })
        .catch(function(err) {
            // print the error details
            console.log(err);
        });
        
    }

    async update(req, res) {

        const schema = Yup.object().shape({
            description: Yup.string().required(),
            type: Yup.string().required()
        });

        if( !(await schema.isValid(req.body)) ) {
            return res.status(400).json({ error: 'Validations fails'})
        }

        const product = await Product.findByPk(req.params.id);

        if (!(product)) {
            return res.status(400).json({ error: 'Product does not exist.' });
        }

        const { id, description, type } = await product.update(req.body);

        return res.json({
            id,
            description,
            type
        });
    }

    async delete(req, res) {
        const product = await Product.findByPk(req.params.id);

        if (!(product)) {
            return res.status(400).json({ error: 'Product does not exist.' });
        }
        
        await product.destroy();

        return res.json(product);
    }
}

export default new ProductController();

