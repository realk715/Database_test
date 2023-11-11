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
import type { User } from './User'

type CodeAssociations = 'user' | 'item'

export class Code extends Model<
  InferAttributes<Code, {omit: CodeAssociations}>,
  InferCreationAttributes<Code, {omit: CodeAssociations}>
> {
  declare id: CreationOptional<number>
  declare code: string
  declare codeUse: boolean
  declare createdDate: Date
  declare expiredDate: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Code belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  // Code belongsTo Item
  declare item?: NonAttribute<Item>
  declare getItem: BelongsToGetAssociationMixin<Item>
  declare setItem: BelongsToSetAssociationMixin<Item, number>
  declare createItem: BelongsToCreateAssociationMixin<Item>
  
  declare static associations: {
    user: Association<Code, User>,
    item: Association<Code, Item>
  }

  static initModel(sequelize: Sequelize): typeof Code {
    Code.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      codeUse: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      expiredDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
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
    
    return Code
  }
}
