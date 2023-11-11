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
import type { Code } from './Code'

type UserAssociations = 'codes'

export class User extends Model<
  InferAttributes<User, {omit: UserAssociations}>,
  InferCreationAttributes<User, {omit: UserAssociations}>
> {
  declare userId: CreationOptional<number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // User hasMany Code
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
  
  declare static associations: {
    codes: Association<User, Code>
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    
    return User
  }
}
