const jwt = require("jsonwebtoken");
const { config } = require("../config");
const secret = config.keyJWT

function singToken(payload, config = {}){
  return jwt.sign(payload, secret, config);
}

function verifyToken(token){
  return jwt.verify(token, secret);
}

module.exports = {
  singToken,
  verifyToken
}
