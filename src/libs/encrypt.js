const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function verifyPassword(password, dbPassword) {
  const isMach = await bcrypt.compare(password, dbPassword);
  return isMach;
}


module.exports = {
  hashPassword,
  verifyPassword
}
