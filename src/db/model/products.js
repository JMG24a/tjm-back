const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCTS_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10,2)
  },
  image:{
    allowNull: true,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.TEXT,
    unique: false
  },
  size: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}


class Product extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { PRODUCTS_TABLE, ProductSchema, Product }
