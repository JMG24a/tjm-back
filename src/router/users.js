//dependencies
const { Router } = require('express')
//my dependencies
const UserService = require('../services/users')
//middleware
const { validatorHandler } = require('../middleware/validator.handler');
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schema/user');
// constants
const router = Router();
const services = new UserService();

router.get('/',
  async(req,res,next)=>{
    try{
      const users = await services.find(req.query);
      res.json(users)
    }catch(err){
      next(err)
    }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const user = await services.findOne(id);
      res.json(user)
    }
    catch(err){
      next(err)
    }
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async(req,res,next)=>{
    try{
      const body = req.body
      const user = await services.create(body);
      res.json(user)
    }
    catch(error){
      next(error);
    }
});

router.put('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async(req, res, next)=>{
    try{
      const {id} = req.params;
      const body = req.body
      const user = await services.update(id,body);
      res.json(user)
    }catch(err){
      next(err)
    }
});

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const user = await services.delete(id);
      res.json(user)
    }catch(error){
      next(error)
    }
});

module.exports = router;
