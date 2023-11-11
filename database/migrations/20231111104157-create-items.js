const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      itemName: {
        type: DataTypes.STRING(255),
        field: 'item_name',
        allowNull: false
      },
      itemDescription: {
        type: DataTypes.STRING(255),
        field: 'item_description',
        allowNull: false
      },
      itemPrice: {
        type: DataTypes.FLOAT,
        field: 'item_price',
        allowNull: false
      },
      itemId: {
        type: DataTypes.INTEGER,
        field: 'item_id',
        primaryKey: true
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items');
  },
};