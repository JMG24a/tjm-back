const { Model, DataTypes, Sequelize } = require('sequelize');

const SUGGESTIONS_TABLE = 'suggestions';

const SuggestSchema = {
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
  idSuggest: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_suggest',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}


class Suggest extends Model {
  static associate(models){
    this.belongsTo(models.Product, {
      as: 'suggest', // Alias de la relación
      foreignKey: 'idSuggest', // Clave foránea en Suggest
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: SUGGESTIONS_TABLE,
      modelName: 'Suggest',
      timestamps: false
    }
  }
}

module.exports = { SUGGESTIONS_TABLE, SuggestSchema, Suggest }
