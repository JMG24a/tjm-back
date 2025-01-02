//dependencies
const { Router } = require('express')
//my dependencies
// const ProductService = require('../../services/products.js')
//middleware
// const validator = require('../../middleware/validator');
// const {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema} = require('../../schemas/products');
// constants
const router = Router()
// const services = new ProductService();

router.get('/', (req, res)=>{
  res.json({
    hello: 'world'
  })
})

router.post('/', (req, res)=>{
  const product = req.body;

  res.json({
    response: product
  })
})

router.put('/', (req, res)=>{
  res.json({
    hello: 'world'
  })
})

router.delete('/', (req, res)=>{
  res.json({
    hello: 'world'
  })
})

// router.get('/',
//   validator(queryProductSchema,'query'),
//   async(req,res,next)=>{
//     try{
//       const products = await services.find(req.query);
//       res.json(products)
//     }catch(err){
//       next(err)
//     }
// });

// router.get('/product/:id',
//   validator(getProductSchema, 'params'),
//   async(req,res,next)=>{
//     try{
//       const {id} = req.params;
//       const product = await services.findOne(id);
//       res.json(product)
//     }
//     catch(err){
//       next(err)
//     }
// });

// router.post('/',
//   validator(createProductSchema, 'body'),
//   async(req,res)=>{
//     const body = req.body
//     const product = await services.create(body);
//     res.json(product)
// });

// router.put('/product/:id',
//   validator(getProductSchema, 'params'),
//   validator(updateProductSchema, 'body'),
//   async(req, res, next)=>{
//     try{
//       const {id} = req.params;
//       const body = req.body
//       const product = await services.update(id,body);
//       res.json(product)
//     }catch(err){
//       next(err)
//     }
// });

// router.delete('/product/:id', async(req,res)=>{
//   const {id} = req.params;
//   const product = await services.delete(id);
//   res.json(product)
// });

module.exports = router;
