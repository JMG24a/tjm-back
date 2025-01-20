const { Strategy } = require('passport-local')
const Service = require('../services/users');
const { verifyPassword } = require('../libs/encrypt');
const Boom  = require('@hapi/boom');
const serviceUser = new Service();

const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  async (email, password, done) => {
  try{
    const user = await serviceUser.findByEmail(email);
    if(!user){
      done(Boom.unauthorized(), false);
    }
    console.log("🚀 ~ LocalStrategy ~ user:", user)
    const isAuth = await verifyPassword(password, user.password)
    if(!isAuth){
      done(Boom.unauthorized(), false);
    }
    delete user.dataValues.password;
    done(null, user);
  }catch(error){
    done(error, false);
  }

});

module.exports = LocalStrategy;
