const Joi = require("joi");

const validateUser = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(3).alphanum(),
    age: Joi.number().min(1).max(99),
  });
  const { error } = await schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "bad request", error: error.details[0].message });
  }
  next();
};

const validateGetUserById = async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });
  const { error } = await schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "bad request", error: error.details[0].message });
  }
  next();
};

module.exports = { validateUser, validateGetUserById };
