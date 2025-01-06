const Joi = require('joi');

const id =  Joi.number().integer().required();
const idProduct = Joi.number().integer();
const idSuggest = Joi.number().integer();

const getSuggestSchema = Joi.object({
  idProduct: idProduct.required(),
})

const createSuggestSchema = Joi.object({
  idProduct: idProduct.required(),
  idSuggest: idSuggest.required()
})

const updateSuggestSchema = Joi.object({
  id: id.required(),
  idProduct,
  idSuggest
})

const deleteSuggestSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  getSuggestSchema,
  createSuggestSchema,
  updateSuggestSchema,
  deleteSuggestSchema,
}
