const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bundles', {
      bundlePrice: {
        type: DataTypes.FLOAT,
        field: 'bundle_price',
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        field: 'start_date',
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: false
      },
      bundleId: {
        type: DataTypes.STRING,
        field: 'bundle_id',
        primaryKey: true
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      bundleItemId: {
        type: DataTypes.INTEGER,
        field: 'bundle_item_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bundles');
  },
};