import type { Sequelize, Model } from 'sequelize'
import { User } from './User'
import { Code } from './Code'
import { Item } from './Item'
import { Promotion } from './Promotion'
import { Bundle } from './Bundle'

export {
  User,
  Code,
  Item,
  Promotion,
  Bundle
}

export function initModels(sequelize: Sequelize) {
  User.initModel(sequelize)
  Code.initModel(sequelize)
  Item.initModel(sequelize)
  Promotion.initModel(sequelize)
  Bundle.initModel(sequelize)

  User.hasMany(Code, {
    as: 'codes',
    foreignKey: 'owner_user_id'
  })
  Code.belongsTo(User, {
    as: 'user',
    foreignKey: 'owner_user_id'
  })
  Code.belongsTo(Item, {
    as: 'item',
    foreignKey: 'code_item_id'
  })
  Item.hasOne(Promotion, {
    as: 'promotion',
    foreignKey: 'promotion_item_id'
  })
  Item.hasMany(Code, {
    as: 'codes',
    foreignKey: 'code_item_id'
  })
  Item.hasMany(Bundle, {
    as: 'bundles',
    foreignKey: 'bundle_item_id'
  })
  Promotion.belongsTo(Item, {
    as: 'item',
    foreignKey: 'promotion_item_id'
  })
  Bundle.belongsTo(Item, {
    as: 'item',
    foreignKey: 'bundle_item_id'
  })

  return {
    User,
    Code,
    Item,
    Promotion,
    Bundle
  }
}
