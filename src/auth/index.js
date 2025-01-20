const passport = require("passport");
const LocalStrategy = require('./local.strategy');
const JWTStrategy = require('./jwt.strategy');

passport.use(LocalStrategy);
passport.use(JWTStrategy);
