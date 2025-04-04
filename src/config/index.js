require('dotenv').config();

const config = {
  isProd: process.env.NODE_ENV,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  DB_URL: process.env.DATABASE_URL,
  cloudName: process.env.CLOUDINARY_NAME,
  cloudKey: process.env.CLOUDINARY_API_KEY,
  cloudSecret: process.env.CLOUDINARY_API_SECRET,
  keyJWT: process.env.KEY_JWT,
}

module.exports = {config}
