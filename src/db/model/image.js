const { Model, DataTypes, Sequelize } = require('sequelize');

const IMAGES_TABLE = 'images';

const ImageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idProduct: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_product',
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}


class Image extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: IMAGES_TABLE,
      modelName: 'Image',
      timestamps: false
    }
  }
}

module.exports = { IMAGES_TABLE, ImageSchema, Image }
