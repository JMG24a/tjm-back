const { ValidationError } = require('sequelize');

function errorHandler (err, req, res, next){
  res.status(500).json({
    statusCode: 500,
    error: err.stack,
    message: err.message,
  });
  next(err)
}

function boomErrorHandler (err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err)
  }
}

function ormErrorHandler (err, req, res, next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      error: err.errors,
      message: err.name,
    });
  }
  next(err)
}

module.exports = { errorHandler, boomErrorHandler, ormErrorHandler }
