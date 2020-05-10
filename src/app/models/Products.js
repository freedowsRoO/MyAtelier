import Sequelize, { Model } from 'sequelize';
import sequelize from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                description: Sequelize.STRING,
                type: Sequelize.STRING,
                meters_stock: Sequelize.FLOAT
            },
            {
                sequelize,
            }
        )

        return this;
    }
}

export default Product;