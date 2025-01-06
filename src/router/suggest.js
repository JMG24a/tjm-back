//dependencies
const { Router } = require('express')
//my dependencies
const SuggestService = require('../services/suggestions')
//middleware
const { validatorHandler } = require('../middleware/validator.handler');
const {createSuggestSchema, updateSuggestSchema, getSuggestSchema, deleteSuggestSchema} = require('../schema/suggest');
// constants
const router = Router()
const services = new SuggestService();

router.get('/:idProduct',
  validatorHandler(getSuggestSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {idProduct} = req.params;
      const suggest = await services.find(idProduct);
      res.json(suggest)
    }
    catch(err){
      next(err)
    }
});

router.post('/',
  validatorHandler(createSuggestSchema, 'body'),
  async(req,res,next)=>{
    try{
      const body = req.body
      const suggest = await services.create(body);
      res.json(suggest)
    }
    catch(error){
      next(error);
    }
});

router.put('/:id',
  validatorHandler(getSuggestSchema, 'params'),
  validatorHandler(updateSuggestSchema, 'body'),
  async(req, res, next)=>{
    try{
      const {id} = req.params;
      const body = req.body
      const suggest = await services.update(id,body);
      res.json(suggest)
    }catch(err){
      next(err)
    }
});

router.delete('/:id',
  validatorHandler(deleteSuggestSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const suggest = await services.delete(id);
      res.json(suggest)
    }catch(error){
      next(error)
    }
});

module.exports = router;
