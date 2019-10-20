import * as Joi from '@hapi/joi';

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string()
    .required()
    .length(8),
  email: Joi.string().required(),
});
