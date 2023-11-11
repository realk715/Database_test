import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Item } from './Item'

type BundleAssociations = 'items'

export class Bundle extends Model<
  InferAttributes<Bundle, {omit: BundleAssociations}>,
  InferCreationAttributes<Bundle, {omit: BundleAssociations}>
> {
  declare bundlePrice: number
  declare startDate: string
  declare endDate: string
  declare bundleId: CreationOptional<string>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Bundle hasMany Item
  declare items?: NonAttribute<Item[]>
  declare getItems: HasManyGetAssociationsMixin<Item>
  declare setItems: HasManySetAssociationsMixin<Item, number>
  declare addItem: HasManyAddAssociationMixin<Item, number>
  declare addItems: HasManyAddAssociationsMixin<Item, number>
  declare createItem: HasManyCreateAssociationMixin<Item>
  declare removeItem: HasManyRemoveAssociationMixin<Item, number>
  declare removeItems: HasManyRemoveAssociationsMixin<Item, number>
  declare hasItem: HasManyHasAssociationMixin<Item, number>
  declare hasItems: HasManyHasAssociationsMixin<Item, number>
  declare countItems: HasManyCountAssociationsMixin
  
  declare static associations: {
    items: Association<Bundle, Item>
  }

  static initModel(sequelize: Sequelize): typeof Bundle {
    Bundle.init({
      bundlePrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      bundleId: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return Bundle
  }
}
