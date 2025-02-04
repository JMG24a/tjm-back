const {Sequelize} = require('sequelize');
const pg = require('pg');
const setupModels = require('../db/model');
const {config} = require("../config")

const options = {
  dialectModule: pg,
  dialect: 'postgres',
  logging: false,
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
