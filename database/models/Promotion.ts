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

type PromotionAssociations = 'item'

export class Promotion extends Model<
  InferAttributes<Promotion, {omit: PromotionAssociations}>,
  InferCreationAttributes<Promotion, {omit: PromotionAssociations}>
> {
  declare discountPrice: number
  declare promotionId: CreationOptional<number>
  declare startDate: string | null
  declare endDate: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Promotion belongsTo Item
  declare item?: NonAttribute<Item>
  declare getItem: BelongsToGetAssociationMixin<Item>
  declare setItem: BelongsToSetAssociationMixin<Item, number>
  declare createItem: BelongsToCreateAssociationMixin<Item>
  
  declare static associations: {
    item: Association<Promotion, Item>
  }

  static initModel(sequelize: Sequelize): typeof Promotion {
    Promotion.init({
      discountPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      promotionId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      startDate: {
        type: DataTypes.DATEONLY
      },
      endDate: {
        type: DataTypes.DATEONLY
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
    
    return Promotion
  }
}
