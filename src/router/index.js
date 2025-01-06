const { Router } = require('express');
const usersRouter = require('./users');
const suggestRouter = require('./suggest.js')
const productsRouter = require('./products.js');

const appRouter = (app) =>{
  const router = Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/suggest', suggestRouter);
  router.use('/products', productsRouter);
}

module.exports = appRouter;
