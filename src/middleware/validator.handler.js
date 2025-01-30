const boom = require('@hapi/boom');

function validatorHandler (schema, property){
  return (req, res, next) => {
    console.log("req[property]", req[property])
    const { error } = schema.validate(req[property], { abortEarly: false });
    if(error){
      next(boom.badRequest(error));
    }
    next()
  }
}

module.exports = { validatorHandler }
