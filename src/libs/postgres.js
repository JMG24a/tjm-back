const {Sequelize} = require('sequelize');
const setupModels = require('../db/model');
const {config} = require("../config")

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true
}

if(config.isProd){
  options.dialectOptions = {
    ssl : {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.DB_URL, options);

setupModels(sequelize)

//warning - this rewrite all data base
// sequelize.sync();

module.exports = sequelize;
