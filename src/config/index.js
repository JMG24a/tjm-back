require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  // port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  AD_001: process.env.ACCESS_DOMAIN_001,
  AD_002: process.env.ACCESS_DOMAIN_002,
  DB_URL: process.env.DATABASE_URL,

  cloudName: process.env.CLOUDINARY_NAME,
  cloudKey: process.env.CLOUDINARY_API_KEY,
  cloudSecret: process.env.CLOUDINARY_API_SECRET,

  keyJWT: process.env.KEY_JWT,
}

module.exports = {config}
