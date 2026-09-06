const Joi = require('joi');

const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(5).max(1000).required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  category: Joi.string().min(2).max(50).required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  description: Joi.string().min(5).max(1000),
  price: Joi.number().positive(),
  stock: Joi.number().integer().min(0),
  category: Joi.string().min(2).max(50),
}).min(1);

module.exports = {
  createProductSchema,
  updateProductSchema,
};