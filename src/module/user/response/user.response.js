const Joi = require("joi");

const rules = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  email: Joi.string(),
  createdAt: Joi.number(),
  updatedAt: Joi.number(),
});

module.exports = async function (obj) {
  const result = await rules.validateAsync(obj);
  return result;
};
