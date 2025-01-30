const Joi = require('joi');

const id =  Joi.number().required();
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer();
const image = Joi.string();
const size = Joi.string();
const category = Joi.string().min(3).max(255);
const description = Joi.string().min(3).max(255);

const limit = Joi.number().integer().min(1);
const offset = Joi.number().integer().min(1);

const getProductSchema = Joi.object({
  id: id.required(),
})

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image,
  size: size.required(),
  category: category.required(),
  description
})

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  size,
  category,
  description
})

const deleteProductSchema = Joi.object({
  id: id.required(),
})

const queryProductSchema = Joi.object({
  limit,
  offset,
  category
})

module.exports = {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
  queryProductSchema
}
