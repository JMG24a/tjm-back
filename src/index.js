
// dependencies
const express = require('express');
const cors = require('cors');
// my dependencies
const { boomErrorHandler, errorHandler, ormErrorHandler } = require('./middleware/error.handler');
const appRouter = require('./router');
//constants
const app = express();
// const whiteList = [`http://localhost:${port}`];
// const optionsCors = {
//   origin: (origin, callback) => {
//     console.log("HELLO")
//     if(whiteList.includes(origin)){
//       console.log("🚀 ~ whiteList:", whiteList)
//       callback(null, true);
//     }else{
//       callback(new Error('Access Denied'))
//     }
//   }
// }

const optionsCors = {
  origin: ['https://tjm-front.vercel.app', 'http://localhost:4000'], // Permite cualquier origen
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true,
};

app.get('/',
  async(req,res,next)=>{
    try {
      res.json({
        hello: "hi",
      });
    } catch (error) {
      next(error);
    }
});

//middlewares
app.use(cors(optionsCors));
app.options('*', cors(optionsCors)); // Manejar preflight requests OPTIONS
app.use(express.json());
appRouter(app);
require('./auth');

app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

module.exports = app;
