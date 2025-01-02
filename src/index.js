
// dependencies
const express = require('express');
// my dependencies
const appRouter = require('./router');
//constants
const app = express();
const port = 3000;

app.listen(port, ()=>{
  console.log('mi port' + port);
})

app.use(express.json());

appRouter(app)

// const { config } = require('../config')
// const express = require('express');
// const morgan = require('morgan');
// const appRouter = require('./router');
// const cors = require('cors')
// const { logErrors, boomErrorHandler, ormErrorHandler ,errorHandler } = require('./middleware/error')
// const { validatorToken } = require('./middleware/tokens')
// const { AD_001, AD_002: yardStore } = config

// const app = express();
// const port = 3002;

// app.use(express.json());
// app.use(morgan('dev'));

// const whitelist = [AD_001];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) !== 1) {
//       callback(null, true);
//     } else {
//       callback(new Error('no access'));
//     }
//   }
// }

// app.use(cors(options));

// app.get('/', validatorToken,
//   (request,response)=>{
//     response.send('Home')
// });

// appRouter(app)


// app.use(logErrors)
// app.use(boomErrorHandler)
// app.use(ormErrorHandler)
// app.use(errorHandler)

// app.listen(port,()=>{
//   console.log('listen in port: ',port)
// });
