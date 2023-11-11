const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        field: 'age',
        allowNull: false
      },
      tel: {
        type: DataTypes.STRING(15),
        field: 'tel',
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        field: 'email',
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(255),
        field: 'address',
        allowNull: false
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
    await queryInterface.dropTable('users');
  },
};