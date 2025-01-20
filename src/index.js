
// dependencies
const express = require('express');
const cors = require('cors');
// my dependencies
const { boomErrorHandler, errorHandler, ormErrorHandler } = require('./middleware/error.handler')
const appRouter = require('./router');
//constants
const app = express();
const port = process.env.PORT || 3000;
const whiteList = [`${process.env.ORIGIN}`];
const optionsCors = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('Access Denied'))
    }
  }
}

//middlewares
app.use(express.json());
appRouter(app)
app.use(cors(optionsCors));
require('./auth');
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

//listen
app.listen(port, ()=>{
  console.log('mi port' + port);
})
