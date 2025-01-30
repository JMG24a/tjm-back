const { config } = require('../config')
const URI = config.DB_URL;

module.exports = {
  development:{
    url: URI,
    dialect: 'postgres',
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  production:{
    url: URI,
    dialect: 'postgres',
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
