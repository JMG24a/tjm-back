const {Sequelize} = require('sequelize');
const setupModels = require('../db/model');
const {config} = require("../config")

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true
}

const sequelize = new Sequelize(URI,options);

setupModels(sequelize)

//warning - this rewrite all data base
// sequelize.sync();

module.exports = sequelize;
