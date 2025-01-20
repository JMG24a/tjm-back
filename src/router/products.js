//dependencies
const passport = require('passport');
const { Router } = require('express')
//my dependencies
const ProductService = require('../services/products')
//middleware
const { validatorHandler } = require('../middleware/validator.handler');
const { checkApiKey } = require('../middleware/auth.handler');
const {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema} = require('../schema/product');
// constants
const router = Router()
const services = new ProductService();

router.get('/',
  checkApiKey,
  validatorHandler(queryProductSchema,'query'),
  async(req,res,next)=>{
    try{
      const products = await services.find(req.query);
      res.json(products)
    }catch(err){
      next(err)
    }
});

router.get('/:id',
  checkApiKey,
  validatorHandler(getProductSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const product = await services.findOne(id);
      res.json(product)
    }
    catch(err){
      next(err)
    }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createProductSchema, 'body'),
  async(req,res,next)=>{
    try{
      const body = req.body
      console.log("🚀 ~ async ~ body:", body)
      const product = await services.create(body);
      res.json(product)
    }
    catch(error){
      next(error);
    }
});

router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async(req, res, next)=>{
    try{
      const {id} = req.params;
      const body = req.body
      const product = await services.update(id,body);
      res.json(product)
    }catch(err){
      next(err)
    }
});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const product = await services.delete(id);
      res.json(product)
    }catch(error){
      next(error)
    }
});

module.exports = router;
