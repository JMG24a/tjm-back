const Joi = require('joi');

const id =  Joi.number().required();
const email = Joi.string().email().min(3).max(30);
const password = Joi.string().min(3).max(30);

const getUserSchema = Joi.object({
  id: id.required(),
})

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

const updateUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
})

const deleteUserSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
}
