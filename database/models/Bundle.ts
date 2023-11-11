import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Item } from './Item'

type BundleAssociations = 'item'

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

  // Bundle belongsTo Item
  declare item?: NonAttribute<Item>
  declare getItem: BelongsToGetAssociationMixin<Item>
  declare setItem: BelongsToSetAssociationMixin<Item, number>
  declare createItem: BelongsToCreateAssociationMixin<Item>
  
  declare static associations: {
    item: Association<Bundle, Item>
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
