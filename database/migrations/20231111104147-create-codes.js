const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('codes', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(255),
        field: 'code',
        allowNull: false
      },
      codeUse: {
        type: DataTypes.BOOLEAN,
        field: 'code_use',
        allowNull: false
      },
      createdDate: {
        type: DataTypes.DATE,
        field: 'created_date',
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      expiredDate: {
        type: DataTypes.DATEONLY,
        field: 'expired_date',
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      ownerUserId: {
        type: DataTypes.INTEGER,
        field: 'owner_user_id'
      },
      codeItemId: {
        type: DataTypes.INTEGER,
        field: 'code_item_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('codes');
  },
};