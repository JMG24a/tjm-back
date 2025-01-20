const Joi = require('joi');

const id = Joi.number();
const image = Joi.string().uri();
const idProduct = Joi.number();

const getImageSchema = Joi.object({
  id: id.required(),
})

const createImageSchema = Joi.object({
  image: image.required(),
  idProduct: idProduct.required(),
})

const deleteImageSchema = Joi.object({
  id: id.required()
})

module.exports = {
  getImageSchema,
  createImageSchema,
  deleteImageSchema
}
