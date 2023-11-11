const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('codes', {
      fields: ['owner_user_id'],
      type: 'foreign key',
      name: 'codes_owner_user_id_fkey',
      references: {
        table: 'users',
        field: 'user_id'
      }
    })
    
    await queryInterface.addConstraint('codes', {
      fields: ['code_item_id'],
      type: 'foreign key',
      name: 'codes_code_item_id_fkey',
      references: {
        table: 'items',
        field: 'item_id'
      }
    })
    
    await queryInterface.addConstraint('promotions', {
      fields: ['promotion_item_id'],
      type: 'foreign key',
      name: 'promotions_promotion_item_id_fkey',
      references: {
        table: 'items',
        field: 'item_id'
      }
    })
    
    await queryInterface.addConstraint('bundles', {
      fields: ['bundle_item_id'],
      type: 'foreign key',
      name: 'bundles_bundle_item_id_fkey',
      references: {
        table: 'items',
        field: 'item_id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('codes', 'codes_owner_user_id_fkey')
    await queryInterface.removeConstraint('codes', 'codes_code_item_id_fkey')
    await queryInterface.removeConstraint('promotions', 'promotions_promotion_item_id_fkey')
    await queryInterface.removeConstraint('bundles', 'bundles_bundle_item_id_fkey')
  }
};