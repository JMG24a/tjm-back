//dependencies
const { Router } = require('express')
const passport = require('passport');
const { singToken } = require('../libs/jwt');
//middleware
// constants
const router = Router()

router.post('/login',
  passport.authenticate('local', {session: false}),
  async(req,res,next)=>{
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: "admin"
      };
      const token = singToken(payload)
      res.json({
        user,
        auth: token
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
