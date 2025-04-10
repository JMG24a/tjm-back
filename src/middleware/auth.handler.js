const boom = require("@hapi/boom");
const ProductService = require('../services/products')
const services = new ProductService();

function checkApiKey(req, res, next){
  const apiKey = req.headers['api'];
  if(apiKey === process.env.API_KEY){
    next()
  }else{
    next(boom.unauthorized());
  }
}

function checkApiRol(...rol){
  return (req, res, next) => {
    if(rol.includes(req.user?.role)){
      next()
    }else{
      next(boom.unauthorized());
    }
  }
}

function updateWithOutImage(){
  return (req, res, next) => {
    if(req.body?.image){
      next()
    }else{
      async(req, res, next)=>{
        try{
          const {id} = req.params;
          const body = req.body

          await services.update(id,{
            ...body,
          });

          res.json({
            ...body,
          })
        }catch(err){
          next(err)
        }
      }
    }
  }
}

module.exports = {
  checkApiKey,
  checkApiRol,
  updateWithOutImage
};
