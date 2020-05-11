import Sequelize, { Model } from 'sequelize';

class Shopping extends Model {
    static init(sequelize) {
        super.init(
            {
                description: Sequelize.STRING,
                type: Sequelize.STRING,
                meters_stock: Sequelize.FLOAT
            },
            {
                sequelize,
                freezeTableName: true,
                modelName: 'shopping'
            }
        )

        return this;
    }
}

export default Shopping;


