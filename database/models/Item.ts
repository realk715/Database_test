import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
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
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Bundle } from './Bundle'
import type { Code } from './Code'
import type { Promotion } from './Promotion'

type ItemAssociations = 'promotion' | 'codes' | 'bundle'

export class Item extends Model<
  InferAttributes<Item, {omit: ItemAssociations}>,
  InferCreationAttributes<Item, {omit: ItemAssociations}>
> {
  declare itemName: string
  declare itemDescription: string
  declare itemPrice: number
  declare itemId: CreationOptional<number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Item hasOne Promotion
  declare promotion?: NonAttribute<Promotion>
  declare getPromotion: HasOneGetAssociationMixin<Promotion>
  declare setPromotion: HasOneSetAssociationMixin<Promotion, number>
  declare createPromotion: HasOneCreateAssociationMixin<Promotion>
  
  // Item hasMany Code
  declare codes?: NonAttribute<Code[]>
  declare getCodes: HasManyGetAssociationsMixin<Code>
  declare setCodes: HasManySetAssociationsMixin<Code, number>
  declare addCode: HasManyAddAssociationMixin<Code, number>
  declare addCodes: HasManyAddAssociationsMixin<Code, number>
  declare createCode: HasManyCreateAssociationMixin<Code>
  declare removeCode: HasManyRemoveAssociationMixin<Code, number>
  declare removeCodes: HasManyRemoveAssociationsMixin<Code, number>
  declare hasCode: HasManyHasAssociationMixin<Code, number>
  declare hasCodes: HasManyHasAssociationsMixin<Code, number>
  declare countCodes: HasManyCountAssociationsMixin
  
  // Item belongsTo Bundle
  declare bundle?: NonAttribute<Bundle>
  declare getBundle: BelongsToGetAssociationMixin<Bundle>
  declare setBundle: BelongsToSetAssociationMixin<Bundle, string>
  declare createBundle: BelongsToCreateAssociationMixin<Bundle>
  
  declare static associations: {
    promotion: Association<Item, Promotion>,
    codes: Association<Item, Code>,
    bundle: Association<Item, Bundle>
  }

  static initModel(sequelize: Sequelize): typeof Item {
    Item.init({
      itemName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      itemDescription: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      itemPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      itemId: {
        type: DataTypes.INTEGER,
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
    
    return Item
  }
}
