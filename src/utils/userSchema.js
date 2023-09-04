const Joi = require('joi');

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
});

const validateNewUser = (newUser) => {
  const { error } = createUserSchema.validate(newUser);
  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  createUserSchema,
  validateNewUser,
};