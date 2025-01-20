const { Router } = require('express');
const authRouter = require('./auth.js');
const usersRouter = require('./users');
const suggestRouter = require('./suggest.js')
const productsRouter = require('./products.js');
const imagesRouter = require('./image.js');

const appRouter = (app) =>{
  const router = Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/suggest', suggestRouter);
  router.use('/products', productsRouter);
  router.use('/images', imagesRouter);
}

module.exports = appRouter;
