import Joi from 'joi';

const shortenUrlSchema = Joi.object({
  originalUrl: Joi.string()
    .pattern(/^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/)
    .required(),
});

export default shortenUrlSchema;
