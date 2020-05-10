module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      meters_stock: {
        type: Sequelize.FLOAT
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('products');
  }
};
