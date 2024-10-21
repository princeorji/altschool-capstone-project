import Joi from 'joi';

const signupSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
});

export default signupSchema;
