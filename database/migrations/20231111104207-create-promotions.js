const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('promotions', {
      discountPrice: {
        type: DataTypes.FLOAT,
        field: 'discount_price',
        allowNull: false
      },
      promotionId: {
        type: DataTypes.INTEGER,
        field: 'promotion_id',
        primaryKey: true
      },
      startDate: {
        type: DataTypes.DATEONLY,
        field: 'start_date'
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      promotionItemId: {
        type: DataTypes.INTEGER,
        field: 'promotion_item_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('promotions');
  },
};