const Joi = require("joi");

const rules = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
});

module.exports = async function (obj) {
  const result = await rules.validateAsync(obj, { stripUnknown: true });
  return result;
};
